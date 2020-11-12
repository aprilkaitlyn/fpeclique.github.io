"use strict";

var clicky = document.getElementById("light");
clicky.addEventListener('click',changeLight);
windows.onload = function changeLight(e) {
   if (document.getElementById("light").src == "lights_red.png") 
        {
            document.getElementById("light").src = "lights_green.png";
        }
        else 
        {
            document.getElementById("light").src = "lights_red.png";
        }
}
