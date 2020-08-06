//Written by April Tsai, 08/05/2020

//Generate random number/img for dice1
	var randomNumber1 = Math.floor(Math.random()*6)+1; //1-6
	document.querySelector("img.img1").setAttribute("src", "images/dice"+randomNumber1+".png");

//Generate random number/img for dice1
	var randomNumber2 = Math.floor(Math.random()*6)+1; //1-6
	document.querySelector("img.img2").setAttribute("src", "images/dice"+randomNumber2+".png");

//Check who is the winnder of dice game, and annouce the winner.

	if (randomNumber1> randomNumber2){
		document.querySelector("h1").innerHTML = "🏆Player1 Win!";
		}
	else if (randomNumber1 === randomNumber2){
		document.querySelector("h1").innerHTML = "Draw!";
	}else{
		document.querySelector("h1").innerHTML = "Player2 Win!🏆";
	}
