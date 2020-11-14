"use strict";

function changeLight(e) {
   document.getElementById("light").src = "lights_green.png"; }
  
function myMove() {
  var elem = document.getElementById("animate");
  var elem2 = document.getElementById("animate2");
  var elem3 = document.getElementById("animate3");
  var elem4 = document.getElementById("animate4");
  var elem5 = document.getElementById("animate5");

  var pos = 0;
  var pos2 = 0;
  var pos3 = 0;
  var pos4 = 0;
  var pos5 = 0;
  
  var id = setInterval(frame, 5);
  var id2 = setInterval(frame2, 10);
  var id3 = setInterval(frame3, 10);
  var id4 = setInterval(frame4, 10);
  var id5 = setInterval(frame5, 10);
  
  var end = (window.innerWidth - 100);
  
  do {
  
  function frame() {
    if (pos == end) {
      clearInterval(id);
      document.getElementById("winner").src = "sailormoonwins.png"; 
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }     
}
function frame2() {
    if (pos == end) {
      clearInterval(id);
      document.getElementById("winner").src = "sailorjupiter.png";
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
}

function frame3() {
    if (pos == end) {
      clearInterval(id);
      document.getElementById("winner").src = "sailormars.png";
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
}
function frame4() {
    if (pos == end) {
      clearInterval(id);
      document.getElementById("winner").src = "sailormercury.png";
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
}
function frame5() {
    if (pos == end) {
      clearInterval(id);
      document.getElementById("winner").src = "sailorvenus.png";
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}
while (pos != end && pos2 != end && pos3 != end && pos4 != end && pos5 != end);
