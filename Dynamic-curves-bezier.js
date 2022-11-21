// Lydia Delgado Uriarte A01740532


function setup() {
  createCanvas(400, 400);
}

// Drag (click and hold) your mouse across the
// image to change the value of the rectangle

value = 2000;
lineDr = false;
firstDot = false;
secondDot = false;
let x1 = 0;
let y1 = 0;
let x2 = 0;
let y2 = 0;

let diameter = 10;
let pointy = 0;
let pointx = 0;
let pointy2 = 0;
let pointx2 = 0;
let bezi= false;
let cases = 0;

let dragging = false;
let dragging2 = false;

function draw() {
  background(255, 255, 255);
  fill (value);
  switch(cases){
    case 1:
      if (lineDr == false){
        line(x1, y1, mouseX, mouseY);     
      }
      
       if (bezi == true){
        bezier(x1, y1,
               pointx, pointy,
               pointx2, pointy2,
               x2, y2);
      
       }
      if(dragging){
        pointx = mouseX;
        pointy = mouseY;
      }
      if(dragging2){
        pointx2 = mouseX;
        pointy2 = mouseY;
      }
      break;
    case 2:
      line(x1, y1, x2, y2)
      point(pointx, pointy)
      circle(pointx, pointy, diameter);
      circle(pointx2, pointy2, diameter);

       if (bezi == true){
        bezier(x1, y1,
               pointx, pointy,
               pointx2, pointy2,
               x2, y2);
      
      }
  } 
}


function mouseReleased(){
  cases = 2;
  if (lineDr == false){
    x2 = mouseX;
    y2 = mouseY; 
    lineDr=true
  } 
  dragging = false;
  dragging2= false;
  
  
}

function mousePressed(){
  cases = 1;
  if (lineDr == false){
    x1 = mouseX;
    y1 = mouseY;
  }

  if (lineDr == true){ 
    pointX1 = mouseX;
    pointY2= mouseY;
  }

  if (secondDot == false && firstDot == true && lineDr == true) {
    pointx2= mouseX;
    pointy2= mouseY;
    secondDot = true;
    bezi = true;
  } 
  if (firstDot == false && lineDr == true) {
    pointx=(mouseX);
    pointy=(mouseY)
    firstDot= true;
    
  } 
  
  if(dist(pointx, pointy, mouseX, mouseY) < diameter/2){
    dragging = true;
  }
  
  if(dist(pointx2, pointy2, mouseX, mouseY) < diameter/2){
    dragging2 = true;
  }
  
  
  
}
