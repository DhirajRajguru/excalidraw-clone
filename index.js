

const canvas = document.getElementById("canvas");

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;


const c = canvas.getContext("2d");
// c is the context object responsible for making any kind of drawings on the canvas.

let drawingColor = "black";

let previousPosition = null ;

function onMouseDown(e) {
    console.log("mouse down");
    previousPosition = [ e.clientX , e.clientY];
    
    c.lineWidth = 2; 
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", onMouseUp); 
}

function onMouseMove(e){ 
    // for the first time inside this  
    let currentPosition = [ e.clientX , e.clientY ];

    console.log(currentPosition);
    // draw line from previous position to current position ;
    c.beginPath();
    c.moveTo(...previousPosition);
    c.lineTo(...currentPosition);
    c.stroke();
    c.closePath();
    previousPosition = currentPosition ;
}

function onMouseUp(e){ 
    canvas.removeEventListener("mousemove", onMouseMove);
}