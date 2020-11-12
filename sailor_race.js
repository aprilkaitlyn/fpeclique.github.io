"use strict";

  var canvas = document.getElementById("canvas");

  var cx = canvas.getContext('2d');
  var square = {x:0,y:0, width:100, height:100}
  function draw() {
    cx.clearRect(0,0,canvas.width,canvas.height);
    square.x += 1;
    cx.fillRect(square.x, square.y, square.width, square.height)
    window.requestAnimationFrame(draw);
  }
  draw();
