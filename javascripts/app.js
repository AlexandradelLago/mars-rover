// Rover Object Goes Here
// ======================
alert();
var roverObj = {
  direction : "N",
  x : 0,
  y : 0,
  travelLog:[]
};
var commandListObj = "rffrfffff";
var gridObj =[
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','X','X','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','',''],
  ['','','','','','','','','','']
];
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
    rover.direction = "W";
    break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
    rover.direction = "N";
    break;
    case "W":
    rover.direction = "S";
      break;
    default:
    console.log("The direction is wrong");
  }
  console.log("direction:" + rover.direction);
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
    rover.direction = "E";
    break;
    case "S":
    rover.direction = "W";
    break;
    case "E":
    rover.direction = "S";
    break;
    case "W":
    rover.direction = "N";
      break;
    default:
      console.log("The direction is wrong");
  }
  console.log("direction:" + rover.direction);
}

function moveForward(rover,grid){
  console.log("moveForward was called");
/*  var obstacle={x: rover.x, y: rover.y};*/
  if (rover.direction ==="N" && rover.y > 0 ) {
    if (grid[rover.x][rover.y-1]!="X"){
    rover.y -= 1;
    }else {
      console.log("Obstacle found");
    }

  } else if (rover.direction==="S" && rover.y < 9) {

    if (grid[rover.x][rover.y+1]!="X"){
    rover.y +=1;
    }else {
      console.log("Obstacle found");
    }

  } else if (rover.direction==="E" && rover.x < 9) {
    if (grid[rover.x-1][rover.y]!="X"){
    rover.x += 1;
    } else {
      console.log("Obstacle found");
    }

  } else if (rover.direction==="W" && rover.x > 0) {
    if (grid[rover.x-1][rover.y]!="X") {
    rover.x -= 1;
    } else {
      console.log("Obstacle found");
    }
  } else if (rover) {
    console.log (" Rover is in the border. Turn it!");
  }
  console.log("x = " + rover.x + " y = " + rover.y);
}

function moveBackwards(rover,grid){
  console.log("moveBackwards was called");

  if (rover.direction ==="N" && rover.y < 9 ) {
    rover.y += 1;
  } else if (rover.direction==="S" && rover.y > 0) {
    rover.y -=1;

  } else if (rover.direction==="E" && rover.x > 0) {
    rover.x -= 1;

  } else if (rover.direction==="W" && rover.x < 9) {
    rover.x += 1;

  } else if (rover) {
    console.log (" Rover is in the border. Turn it or move forward!");
  }
  console.log("x = " + rover.x + " y = " + rover.y);
}


function commandList(commandroute,rover,grid){
  var validcommand = true;
  for (var i = 0; i < (commandroute.length-1); i++) {
    switch (commandroute[i]) {
      case "f":
         moveForward(rover,grid);
        break;
      case "r":
         turnRight(rover);
      break;
      case "l":
         turnLeft(rover);
      break;
      case "b":
         moveBackwards(rover,grid);
      break;
      default:
      validcommand= false;
      console.log ("Wrong Command");
    }
   console.log("x = " + rover.x + " y = " + rover.y);

     if (validcommand) {
      var coord = { x: rover.x, y: rover.y };
      rover.travelLog.push(coord);
    }
  }
  console.log(rover.travelLog);
}
