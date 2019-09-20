// JavaScript Document


InstOff= new Image (267, 69); 
InstOff.src = "images/inst.png";

InstOn= new Image (573, 35); 
InstOn.src = "images/Instructions.png";

// Sound

function play(audioName){
var audio = document.getElementById(audioName);
audio.play();
}

//UI
var squareOff= new Image(200, 53);
squareOff.src = "images/PlayGame_Off.png";

var squareOn= new Image(200, 53);
squareOn.src = "images/PlayGame_On.png";

var replayOff= new Image(200, 53);
replayOff.src = "images/Replay_Off.png";

var replayOn= new Image(200, 53);
replayOn.src = "images/Replay_On.png";


// Random
	function chooseNum(theMin, theMax) {
var theRange = (theMax - theMin) + 1;
var randomNum = Math.floor((Math.random() * theRange) + theMin); 
return randomNum;
}


var starCount = 0;
	function changePosition(elem, theMinX, theMaxX, theMinY, theMaxY) {

document.getElementById(elem).style.top = chooseNum(theMinY, theMaxY) + "px";
document.getElementById(elem).style.left = chooseNum(theMinX, theMaxX) + "px";
scoreUpdate();
}


// Score/Counter
function scoreUpdate(){
	starCount = (starCount+1);

document.getElementById('starCounter').innerHTML = "Star Count:" +"" +starCount;
}

var square1Off= new Image(100, 100);
square1Off.src = "images/Instructions.jpg";

var square1On= new Image(400, 200);
square1On.src = "images/Instructions1.jpg";


//Sound


var timer=30;
var sec=0;


function startTimer(){
	min=parseInt(timer/60);
	sec=parseInt(timer%60);
	
	
	if(timer<1 && starCount>=3){
		window.location="Level One.html";
	}
	if(timer<1 && starCount<3){
		window.location="GameOver.html";
	}
	
	document.getElementById("time").innerHTML = "<b>Time Left: </b>"+sec.toString();
	timer--;
	setTimeout(function(){
		startTimer();
		
	}, 1000);
}