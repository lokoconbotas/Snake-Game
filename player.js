function SoundPlayer(){

this.eat = new Audio('audio/stop1.mp3');
this.die = new Audio('audio/win.mp3');


	this.eatSound = function(){
		this.eat.play();
	}

	this.dieSound = function(){
		this.die.play();
	}
}