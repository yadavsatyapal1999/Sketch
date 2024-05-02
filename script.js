document.addEventListener('DOMContentLoaded', () => {
  let id = document.getElementById('test');  // for canvas
  let color = document.getElementById("color");  // for color selection
  let del = document.getElementById("btn"); // to erase
  let draw = false;  // Check to draw
  let erase = false;  // Check to erase
  let mousedown = false; // to know mouse down
  let cordx = 0;
  let cordy = 0;
  let drawcolor = "red";
  let contex = id.getContext('2d');

  id.addEventListener('mousedown', (e) => {
    cordx = e.offsetX;
    cordy = e.offsetY;
    mousedown = true;
    if(!erase){
      draw = true;
    }
   // console.log("down")
  })


  id.addEventListener("mousemove", (e) => {
    if (draw && !erase) {
      drawing(contex, cordx, cordy, e.offsetX, e.offsetY);
      cordx = e.offsetX;
      cordy = e.offsetY;
    }
    if (erase && mousedown) {
      draw = false;
      deleted(contex, e.offsetX, e.offsetY);

    }
  })


  id.addEventListener("mouseup", (e) => {
    mousedown=false;
    if (draw) {
      drawing(contex, cordx, cordy, e.offsetX, e.offsetY);
      cordx = 0;
      cordy = 0;
      draw = false;
    }
  // console.log("up")
   // console.log("mousedown =" , mousedown)
  })

  
  let drawing = (contex, startX, startY, endX, endY) => {
    contex.beginPath();
    contex.lineWidth = 2;
    contex.strokeStyle = drawcolor;
    contex.moveTo(startX, startY);
    contex.lineTo(endX, endY);
    contex.stroke();
    contex.closePath();
  }

  let deleted = (contex, locationX, locationY,) => {
    contex.clearRect(locationX, locationY, 35, 35)
  }

  color.addEventListener('change', (e) => {
    drawcolor = e.target.value;
  })

  del.addEventListener('change', (e) => {
    erase = e.target.checked
    //console.log(erase)
  })

})