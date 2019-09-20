// JavaScript Document

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

//Images




var myPix = new Array( "images/stars_off.png" , "images/mini_gal.png" , "images/gal_Off.png" , "images/sun_Off.png");

function choosePic() {
	var randomNum = Math.floor( Math.random() * myPix.length); 
	document.getElementById('theStar').src = myPix[randomNum];
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

var square2Off= new Image(100, 100);
square2Off.src = "images/blank_image.png";

var square2On= new Image(100, 100);
square2On.src = "images/Instructions2.jpg";

//Sound

function play(audioName){
var audio = document.getElementById(audioName);
audio.play();
}


var timer=30;
var sec=0;


function startTimer(){
	min=parseInt(timer/60);
	sec=parseInt(timer%60);
	
	
	if(timer<1 && starCount>=3){
		window.location="Level Three.html";
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