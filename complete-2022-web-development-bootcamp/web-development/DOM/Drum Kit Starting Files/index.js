var drumInstrumentCount = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumInstrumentCount; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("mousedown", function()
	{
		PlaySound(this.innerHTML);
		buttonAnimationAdd(this.innerHTML);
	});
	document.querySelectorAll(".drum")[i].addEventListener("mouseup", function()
	{
		buttonAnimationRemove(this.innerHTML);
	});

	document.querySelectorAll(".drum")[i].addEventListener("mouseleave", function()
	{
		buttonAnimationRemove(this.innerHTML);
	});
}


function PlaySound(key)
{
	switch(key)
	{
		case "w":
			var	tom1 = new Audio("sounds/tom-1.mp3"); 
			tom1.play();
			break;
		case "a":
			var	tom1 = new Audio("sounds/tom-2.mp3"); 
			tom1.play();
			break;
		case "s":
			var	tom1 = new Audio("sounds/tom-3.mp3"); 
			tom1.play();
			break;
		case "d":
			var	tom1 = new Audio("sounds/tom-4.mp3"); 
			tom1.play();
			break;
		case "j":
			var	tom1 = new Audio("sounds/snare.mp3"); 
			tom1.play();
			break;
		case "k":
			var	tom1 = new Audio("sounds/crash.mp3"); 
			tom1.play();
			break;
		case "l":
			var	tom1 = new Audio("sounds/kick-bass.mp3"); 
			tom1.play();
			break;
		default:
			break;
	}
}

document.addEventListener("keydown", function(event) {
	PlaySound(event.key);
	buttonAnimationAdd(event.key);
});

document.addEventListener("keyup", function(event) {
	buttonAnimationRemove(event.key);
});

function buttonAnimationAdd(currentKey) 
{
	document.querySelector('.' + currentKey).classList.add('pressed');
}

function buttonAnimationRemove(currentKey) 
{
	document.querySelector('.' + currentKey).classList.remove('pressed');
}