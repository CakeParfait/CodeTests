// JavaScript Document

function startTransform() {
	document.getElementById('rotateCombo').style.width = 200 + 'px';
	document.getElementById('rotateCombo').style.height = 100 + 'px';
	document.getElementById('rotateCombo').style.transform = 'rotate(180deg)';
	document.getElementById('rotateCombo').style.backgroundColor = 'red';
	document.getElementById('rotateCombo').style.opacity = '0.2';
}

function endTransform() {
	document.getElementById('rotateCombo').style.width = 100 + 'px';
	document.getElementById('rotateCombo').style.height = 100 + 'px';
	document.getElementById('rotateCombo').style.transform = 'rotate(0deg)';
	document.getElementById('rotateCombo').style.backgroundColor = 'blueviolet';
	document.getElementById('rotateCombo').style.opacity = '1';
}

function colorTransform() {
	document.getElementById('colorTransition').style.width = 200 + 'px';
	document.getElementById('colorTransition').style.height = 100 + 'px';
	document.getElementById('colorTransition').style.backgroundColor = 'violet';
	
}