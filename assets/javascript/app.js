var canvas;
var h1;
var h1x = 100;
var y = 50;
var speed = 3;
var counter = 0;
var timeleft = 45;
var currentTime = 0;
var startTime = 0;

function convertSeconds(s) {
  var min = floor(s / 60);
  var sec = s % 60;
  return nf(min, 2) + ':' + nf(sec, 2);
}

function setup() {
  startTime = millis();
  var params = getURLParams();
  console.log(params);
  if (params.minute) {
    var min = params.minute;
    timeleft = min * 60;
  }

  var timer = select('#timer');
  timer.html(convertSeconds(timeleft - currentTime));
  var interval = setInterval(timeIt, 1000);
  function timeIt() {
    currentTime = floor((millis() - startTime) / 1000);
    timer.html(convertSeconds(timeleft - currentTime));
    if (currentTime == timeleft) {
      clearInterval(interval);
      //counter = 0;
    }
  }

}

// function draw() {
  
//   background(250, 250, 255);
//   h1.position(h1x, 0);
  
  
//   if (h1x > 900) {
//     h1.position(900, 0);
//   } 
  
//    h1x = h1x + speed;
  
// }



// function mousePressed() {
//   createP("Answer The Question!");
// }