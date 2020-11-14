"use strict";

function changeLight(e) {
   document.getElementById("light").src = "lights_green.png"; 
}
  
  function myMove(event) {
  var elem = document.getElementById("animate");
  var pos = 0;
  var id = setInterval(frame, 5);
  var end = (window.innerWidth - 100);
  function frame() {
    if (pos == end) {
      clearInterval(id);
      event.stopPropagation();
      document.getElementById("winner").src = "sailormoonwins.png"; 
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }     
}
  function myMove2() {
  var elem = document.getElementById("animate2");
  var pos = 0;
  var id = setInterval(frame, 10);
  var end = (window.innerWidth - 100);
  function frame() {
    if (pos == end) {
      clearInterval(id);
      document.getElementById("winner").src = "sailorjupiter.png";
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}
    function myMove3() {
  var elem = document.getElementById("animate3");
  var pos = 0;
  var id = setInterval(frame, 10);
  var end = (window.innerWidth - 100);
  function frame() {
    if (pos == end) {
      clearInterval(id);
      document.getElementById("winner").src = "sailormars.png";
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}
    function myMove4() {
  var elem = document.getElementById("animate4");
  var pos = 0;
  var id = setInterval(frame, 10);
  var end = (window.innerWidth - 100);
  function frame() {
    if (pos == end) {
      clearInterval(id);
      document.getElementById("winner").src = "sailormercury.png";
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}
    function myMove5() {
  var elem = document.getElementById("animate5");
  var pos = 0;
  var id = setInterval(frame, 10);
  var end = (window.innerWidth - 100);
  function frame() {
    if (pos == end) {
      clearInterval(id);
      document.getElementById("winner").src = "sailorvenus.png";
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}
