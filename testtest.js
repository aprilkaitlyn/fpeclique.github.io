"use strict";

function changeLight(e) {
   document.getElementById("light").src = "lights_green.png"; }
  
function myMove(event) {
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
   
  if (pos != end) {
  function frame() {
    if (pos == end) {
      clearInterval(id);
      document.getElementById("winner").src = "sailormoonwins.png"; 
    } else {
      pos++;
      elem.style.left = pos + 'px';
  }     
}
function frame2() {
    if (pos2 == end) {
      clearInterval(id2);
      document.getElementById("winner").src = "sailorjupiter.png";
    } else {
      pos2++;
      elem2.style.left = pos2 + 'px';
    }
}

function frame3() {
    if (pos3 == end) {
      clearInterval(id3);
      document.getElementById("winner").src = "sailormars.png";
    } else {
      pos3++;
      elem3.style.left = pos3 + 'px';
    }
}
function frame4() {
    if (pos4 == end) {
      clearInterval(id4);
      document.getElementById("winner").src = "sailormercury.png";
    } else {
      pos4++;
      elem4.style.left = pos4 + 'px';
    }
}
function frame5() {
    if (pos5 == end) {
      clearInterval(id5);
      document.getElementById("winner").src = "sailorvenus.png";
    } else {
      pos5++;
      elem5.style.left = pos5 + 'px';
    }
  }
}
else {event.stopImmediatePropagation();
}
}
