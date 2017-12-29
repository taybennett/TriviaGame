
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

$(function() {    
  $("#results").hide().show(1000);
  $("#results").css({color:'red'});
});

$(function() {
  $("#results").click(function() { 
    if (!$("input[@name=q1]:checked").val() || !$("input[@name=q2]:checked").val() || !$("input[@name=q3]:checked").val()) {            
      alert("You Didn't Answer All the Questions, Get Back to the Quiz!"); 
        } else {            
        var cat1name = "1";            
        var cat2name = "2";                                  
        var cat3name = "3";            
                    

        var cat1 = ($("input[@name=q1]:checked").val() != "b"); 

        var cat2 = ($("input[@name=q2]:checked").val() != "d"); 

        var cat3 = ($("input[@name=q3]:checked").val() != "d"); 

        var cat4 = (!cat1 && !cat2 && !cat3); var categories = [];                              

        if (cat1) { $("#category1").show("slow"); };            
        if (cat2) { $("#category2").show("slow"); };                                   
        if (cat3) { $("#category3").show("slow"); };

        if (cat4) { $("#results").click(function() {
          $("#popupBoxOnePosition").css({"display": "block"}); }); };
        };
      });
    });

  



