var database,ball;
var position;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  ball=createSprite(100,50,20,20)
  var loc=database.ref("ball/position");
  loc.on("value",readop);

 
}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}

function writePosition(x,y){
  database.ref("ball/position").set({
    x:ball.x+x,
    y:ball.y+y
  })
  
}
function readop(data)
{
  position=data.val();
  ball.x=position.x;
  ball.y=position.y;
}



