function Snake() {
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];
	this.p = new SoundPlayer();
	this.sc = new ScreenController();

	this.eat = function(pos) {
		//Distance between the snake and the pos passed by parameter
		var d = dist(this.x, this.y, pos.x, pos.y);

		//If the two objects touching add 1 to total and return true value
		if (d < 1) {
			this.total++;
			return true;
		} else {
			return false;
		}
	}

	this.dir = function(x, y) {
		//Only sets the speed
		this.xspeed = x;
		this.yspeed = y;
	}

	this.death = function() {
		//Delete all the snake "squares" minus the first
		for (var i = 0; i < this.tail.length; i++) {
			var pos = this.tail[i];
			//Check the distance between the "head" of the snake and other parts of it
			var d = dist(this.x, this.y, pos.x, pos.y);
			if (d < 1) {
				this.total = 0;
				this.tail = [];
				this.p.dieSound();
				this.sc.gameOver();


			}
		}
	}

	this.update = function() {
		//Create and additional square for every total number
		for (var i = 0; i < this.tail.length - 1; i++) {
			this.tail[i] = this.tail[i + 1];
		}
		if (this.total >= 1) {
			this.tail[this.total - 1] = createVector(this.x, this.y);
		}

		this.x = this.x + this.xspeed * scl;
		this.y = this.y + this.yspeed * scl;

		this.x = constrain(this.x, 0, width - scl);
		this.y = constrain(this.y, 0, height - scl);
	}

	this.show = function() {
		//Paint the snake
		fill(255, 153, 51);
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		rect(this.x, this.y, scl, scl);

	}
}