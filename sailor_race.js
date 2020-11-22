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
  
  //set random speed between 3 & 10 for each guardian
// var speed = (Math.random() * 10) + 3;
 // var speed2 = (Math.random() * 10) + 3;
 // var speed3 = (Math.random() * 10) + 3;
//  var speed4 = (Math.random() * 10) + 3;
//  var speed5 = (Math.random() * 10) + 3;

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var arr = [2, 5, 7, 8, 10];
shuffle(arr);   
 
var speed = arr[0];
 var speed2 = arr[1];
 var speed3 = arr[2];
   var speed4 = arr[3];
   var speed5 = arr[4];
  
  //start movement function for each guardian, depending on their random speed
  var id = setInterval(frame, speed);
  var id2 = setInterval(frame2, speed2);
  var id3 = setInterval(frame3, speed3);
  var id4 = setInterval(frame4, speed4);
  var id5 = setInterval(frame5, speed5);
  
  var end = (window.innerWidth - 100); //image is 100px -> end race at end of screen - 100px
   
function frame() { //sailor moon
    if (pos == end) {
       clearInterval(id);
       clearInterval(id2);
       clearInterval(id3); //when someone reaches the end, stop the race
       clearInterval(id4);
       clearInterval(id5);
       document.getElementById("winner").src = "sailormoon.jpg"; } //display winner's picture by setting image source
    else {
      pos++; //continue race
      elem.style.left = pos + 'px'; } //move guardian icon to the right
}
function frame2() { //sailor jupiter
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
function frame3() { //sailor mars
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
function frame4() { //sailor mercury
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
function frame5() { //sailor venus
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
