// Rover Object Goes Here

var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

// ======================
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch(rover.direction) {
    case "N":
      rover.direction = "W";
      console.log("The direction of the rover is now:", rover.direction);
      break;
    case "E":
      rover.direction = "N";
      console.log("The direction of the rover is now:", rover.direction);
      break;
    case "S":
      rover.direction = "E";
      console.log("The direction of the rover is now:", rover.direction);
      break;
    case "W":
      rover.direction = "S";
      console.log("The direction of the rover is now:", rover.direction);
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
    switch(rover.direction) {
    case "N":
      rover.direction = "E";
      console.log("The direction of the rover is now:", rover.direction);
      break;
    case "E":
      rover.direction = "S";
      console.log("The direction of the rover is now:", rover.direction);
      break;
    case "S":
      rover.direction = "W";
      console.log("The direction of the rover is now:", rover.direction);
      break;
    case "W":
      rover.direction = "N";
      console.log("The direction of the rover is now:", rover.direction);
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called!")
  switch(rover.direction) {
    case "N":
      rover.y -= 1;
      console.log("The coordinates of the rover are now:", rover.x, rover.y);
      break;
    case "E":
      rover.x += 1;
      console.log("The coordinates of the rover are now:", rover.x, rover.y);
      break;
    case "S":
      rover.y += 1;
      console.log("The coordinates of the rover are now:", rover.x, rover.y);
      break;
    case "W":
      rover.x -= 1;
      console.log("The coordinates of the rover are now:", rover.x, rover.y);
      break;    
  }
}

var commands = [];

function roverControl(commands){
  commands = commands.toUpperCase();
  commands = commands.split("");
  console.log(commands);
  for (var i = 0; i < commands.length; i++) {
    switch(commands[i]) {
      case "F":
        rover.travelLog.push([rover.x, rover.y]);
        moveForward(rover);
        break;
      case "L":
        rover.travelLog.push([rover.x, rover.y]);
        turnLeft(rover);
        break;
      case "R":
        rover.travelLog.push([rover.x, rover.y]);
        turnRight(rover);
        break;
    }
  }
    console.log("The rover's travellog is:", rover.travelLog);
}

roverControl("fflffr");