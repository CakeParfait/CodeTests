// JavaScript Document

function moveX(item) {
		var moveX = (item*-1);
		document.getElementById("allScenes").style.left = moveX +'px';
	}
	
function moveY(item) {
		var moveY = (item*-1);
		document.getElementById("allScenes").style.top = moveY +'px';
	}
	
// page reload to reset CSS or GIF animations, use on final move
function refresh() {
setInterval("location.reload()",2000);
}


function preload(images) {
if (document.images) {
var i = 0;
var imageArray = new Array();
imageArray = images.split(',');
var imageObj = new Image();
for(i=0; i<=imageArray.length-1; i++) {
//document.write('<img src="' + imageArray[i] + '" />');// Write to page (uncomment to check images)
imageObj.src=imageArray[i];
}
}
}
// JavaScript Document