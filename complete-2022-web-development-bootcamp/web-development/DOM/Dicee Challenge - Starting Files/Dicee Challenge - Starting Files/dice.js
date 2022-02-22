var d1 = Math.floor(Math.random() * 6) + 1;
var d2 = Math.floor(Math.random() * 6) + 1;
var img1 = 'images/dice' + d1 + '.png';
var img2 = 'images/dice' + d2 + '.png';

var winner = 'Player 1 Wins!';

//set winner
if (d1 > d2) {
	winner = 'Playeer 1 Wins!';
} else if (d2 > d1) {
	winner = 'Player 2 Wins!';
} else {
	winner = 'Draw!';
}

document.querySelector('.container h1').innerHTML = winner;

//set image
document.querySelector('.img1').setAttribute('src', img1);
document.querySelector('.img2').setAttribute('src', img2);
