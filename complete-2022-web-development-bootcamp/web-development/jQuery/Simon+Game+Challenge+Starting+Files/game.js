var buttonColors = ["red", "green", "yellow", "blue"];
var gamePattern = [];
var userPressedColors = [];
var level = 0;
var isStarted = false;


$(document).on('keypress', function()
{
	if(!isStarted){
		isStarted = true;
		nextSequence();
	}
});

$('.btn').click(function(){
	var color = $(this).attr('id');
	userPressedColors.push(color);

	playSound(color);
	animatePress(this);
	checkAnswer(userPressedColors.length-1);
});

function checkAnswer(answer)
{
	if(userPressedColors[answer] === gamePattern[answer])
	{
		if(userPressedColors.length === gamePattern.length)
		{
			setTimeout(nextSequence, 500);
		}
	}
	else
	{
		playSound("wrong");
		wrongAnswer();
		console.log("Wrong!");
	}
}

function nextSequence()
{
	//add level
	level ++;

	//reset user pressed colors
	userPressedColors.length = 0;

	//display level
	$('#level-title').text('Level ' + level);
	
	var randomNumber = Math.floor(Math.random() * 4);
	var randomColor = buttonColors[randomNumber];
	playSound(randomColor);
	$("."+randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
	gamePattern.push(randomColor);
}

function animatePress(elem)
{
	$(elem).addClass('pressed');
	setTimeout(function(){
		$(elem).removeClass('pressed');
	}, 100);
}

function playSound(name)
{
	var sound = new Audio("sounds/" + name + ".mp3");
	sound.play();
}

function wrongAnswer()
{
	isStarted = false;
	level = 0;
	gamePattern.length = 0;
	userPressedColors.length = 0;

	$(document.body).addClass("game-over");
	setTimeout(function(){
		$(document.body).removeClass("game-over");
	}, 100);

	$('#level-title').text('Game Over! Press any key to restart!');
}