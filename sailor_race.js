"use strict";

function changeLight(e) {
   document.getElementById("light").src = "lights_green.png"; } //make light green, onclick event
  
//no # -> sailor moon, 2 -> jupiter, 3 -> mars, 4 -> mercury, 5 -> venus

function myMove(event) { //start the race, onclick event
  
  //create variable for each guardian's icon
  var elem = document.getElementById("animate");
  var elem2 = document.getElementById("animate2");
  var elem3 = document.getElementById("animate3");
  var elem4 = document.getElementById("animate4");
  var elem5 = document.getElementById("animate5");

  //create variable for each guardian's horizontal position
  var pos = 0;
  var pos2 = 0;
  var pos3 = 0;
  var pos4 = 0;
  var pos5 = 0;

//function to shuffle the array of speeds   
function shuffle(array) {
  var currentIndex = array.length, temp, randomIndex;
   
  while (0 !== currentIndex) {
    //pick a remaining speed (see speedArray below)
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; 

    //swap it with the current element
    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
return array;
}

//give each guardian a speed between 4 (first place) and 8 (last place)
var speedArray = [4, 5, 6, 7, 8];

//shuffle the speeds for a different result each race 
shuffle(speedArray);   
 
//assign an index of the array to each speed
var speed = speedArray[0];
var speed2 = speedArray[1];
var speed3 = speedArray[2];
var speed4 = speedArray[3];
var speed5 = speedArray[4];
  
//start movement function for each guardian, depending on their random speed
var id = setInterval(race, speed);
var id2 = setInterval(race2, speed2);
var id3 = setInterval(race3, speed3);
var id4 = setInterval(race4, speed4);
var id5 = setInterval(race5, speed5);
  
var end = (window.innerWidth - 100); //image is 100px -> end race at end of screen - 100px
   
function race() { //sailor moon
    if (pos == end) {
       //when someone reaches the end, stop every guardian!
       clearInterval(id);
       clearInterval(id2);
       clearInterval(id3); 
       clearInterval(id4);
       clearInterval(id5);
       document.getElementById("winner").src = "sailormoon.jpg"; } //display winner's picture by setting image source
    else {
      pos++; //continue race
      elem.style.left = pos + 'px'; } //move guardian icon to the right
}
function race2() { //sailor jupiter
    if (pos2 == end) {
       clearInterval(id);
       clearInterval(id2);
       clearInterval(id3);
       clearInterval(id4);
       clearInterval(id5);
       document.getElementById("winner").src = "sailorjupiter.jpg"; } 
   else {
      pos2++;
      elem2.style.left = pos2 + 'px'; }
}
function race3() { //sailor mars
    if (pos3 == end) {
      clearInterval(id);
       clearInterval(id2);
       clearInterval(id3);
       clearInterval(id4);
       clearInterval(id5);
       document.getElementById("winner").src = "sailormars.jpg"; }
    else {
      pos3++;
      elem3.style.left = pos3 + 'px'; }
}
function race4() { //sailor mercury
    if (pos4 == end) {
      clearInterval(id);
       clearInterval(id2);
       clearInterval(id3);
       clearInterval(id4);
       clearInterval(id5);
       document.getElementById("winner").src = "sailormercury.jpg"; }
    else {
      pos4++;
      elem4.style.left = pos4 + 'px'; }
}
function race5() { //sailor venus
    if (pos5 == end) {
      clearInterval(id);
       clearInterval(id2);
       clearInterval(id3);
       clearInterval(id4);
       clearInterval(id5);
       document.getElementById("winner").src = "sailorvenus.jpg"; }
    else {
      pos5++;
      elem5.style.left = pos5 + 'px'; }
 }
}
