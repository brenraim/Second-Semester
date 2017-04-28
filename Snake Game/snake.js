$(document).ready(function(){
	
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var width = $("#canvas").width();
	var height = $("#canvas").height();
	
	var alive = true;
	var play;
	var direction = "right";
	var snakeLength = 6;
	var snakeArray = [];
	var gridSize = 15;
	var refreshRate = 50;
	var foodX;
	var foodY;
	var headX;
	var headY;
	var grow = false;
	
	
	createSnake();
	newFood();
	run();
	
	$(document).on("keydown", function(e){
    	if (e.which == 37 && direction != "right")
    		direction = "left";
    	if (e.which == 38 && direction != "down")
    		direction = "up";
    	if (e.which == 39 && direction != "left")
    		direction = "right";
    	if (e.which == 40 && direction != "up")
    		direction = "down";
	});
	
	function createSnake() {
		
		snakeArray = [];
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, width, height);
		
		for (var i = 0; i < snakeLength; i++)  //builds a snake with starting points as the top right of the grid
		{
			snakeArray.push([i, 0]);  //xy coordinates
			paint(i, 0);
		}	
		
		headX = snakeArray[snakeLength-1][0];
		headY = snakeArray[snakeLength-1][1];
	};
	
	function newFood() {
		foodX = Math.floor(Math.random() * (width/gridSize));
		foodY = Math.floor(Math.random() * (height/gridSize));
		paint(foodX, foodY);
	};
	
	function run() {
		if (alive)
		{
			step();
			window.setTimeout(run, refreshRate);
		}
		else
		{
			createSnake();
			newFood();
			alive = true;
			direction = "right";
			
			run();
		}
	};
	
	function step() {
		erase(snakeArray[0][0], snakeArray[0][1]);
		
		if (direction == "left")
		{
			headX -= 1;
			snakeArray.push([headX, headY]);
		}
		else if (direction == "up")
		{
			headY -= 1;
			snakeArray.push([headX, headY]);
		}
		else if (direction == "right")
		{
			headX += 1;
			snakeArray.push([headX, headY]);
		}
		else if (direction == "down")
		{
			headY += 1;
			snakeArray.push([headX, headY]);
		}
		
		if (grow)
			grow = false;
		else
			snakeArray.splice(0, 1);

		paint(headX, headY);
		
		checkStatus();
		
	};
	
	
	function paint(x, y) {
		ctx.fillStyle = "red";
		ctx.fillRect(x*gridSize, y*gridSize, gridSize, gridSize);
		ctx.strokeStyle = "white";
		ctx.strokeRect(x*gridSize, y*gridSize, gridSize, gridSize);
	};
	
	function erase(x, y) {
		ctx.fillStyle = "white";
		ctx.fillRect(x*gridSize, y*gridSize, gridSize, gridSize);
	};
	
	function checkStatus() {
		if (headX < 0 || headY < 0 || headX == width/gridSize || headY == height/gridSize)
		{
			alive = false;
		}
		
		if (alive)
		{
			for (var i = 0; i < snakeArray.length - 1; i++)
			{
				if (headX == snakeArray[i][0] && headY == snakeArray[i][1])
					alive = false;
			}
		}
		
		if (alive)
		{
			if (headX == foodX && headY == foodY)
			{
				grow = true;
				newFood();
			}
		}
		
	}
	
	
	
	
	
	
	
});


