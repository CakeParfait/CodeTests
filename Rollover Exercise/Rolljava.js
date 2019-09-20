// JavaScript Document

radOff= new Image(100, 100); 
radOff.src = "images/rad2.png";


radOn= new Image(100, 100); 
radOn.src = "images/rad1.png";

radBreak= new Image(100, 100); 
radBreak.src = "images/rad4.png";



var theImage = 1;
	image1 = new Image();
	image1.src = "images/rad1.png";

	image2 = new Image();
	image2.src = "images/rad2.png";

	image3 = new Image();
	image3.src = "images/rad3.png";

	image4 = new Image();
	image4.src = "images/rad4.png";

	image5 = new Image();
	image5.src = "images/rad5.png";


function nextImage() {
	if (theImage == 1 ) {
		document.rad.src = image2.src
		theImage = 2;
	} else if (theImage == 2 ) {
		document.rad.src = image3.src;
		theImage = 3;
	} else if (theImage == 3 ) {
		document.rad.src = image4.src;
		theImage = 4;
	} else if (theImage == 4 ) {
		document.rad.src = image5.src;
		theImage = 5
	} else if (theImage == 5 ) {
		document.rad.src = image1.src;
		theImage = 1;
	}
}