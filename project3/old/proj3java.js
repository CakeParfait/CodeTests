// JavaScript Document

// Icons

sunOff= new Image (150, 150); 
sunOff.src = "images/sun_off.png";

sunOn= new Image (150, 150); 
sunOn.src = "images/sun_on.png";

starsOff= new Image (150, 150); 
starsOff.src = "images/stars_off.png";

starsOn= new Image (150, 150); 
starsOn.src = "images/stars_on.png";

galOff= new Image (150, 150); 
galOff.src = "images/gal_off.png";

galOn= new Image (150, 150); 
galOn.src = "images/gal_on.png";

//Sound

function play(audioName){
var audio = document.getElementById(audioName);
audio.play();
}


// Timer

var timer=30;
var sec=0;


function startTimer(){
	min=parseInt(timer/60);
	sec=parseInt(timer%60);
	
	
	if(timer<1 && starCount>=35){
		window.location="Earth.html";
	}
	if(timer<1 && starCount<35){
		window.location="GameOver.html";
	}
	
	document.getElementById("time").innerHTML = "<b>Time Left: </b>"+sec.toString();
	timer--;
	setTimeout(function(){
		startTimer();
		
	}, 1000);
}

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


//Level 4




//Level 3



//Level 2



// Index Page

starOff= new Image (129, 129);
starOff.src ="images/star_off.png";

starOn= new Image (129, 129);
starOn.src ="images/star_on.png";
