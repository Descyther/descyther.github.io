var canvasWidth = window.innerWidth;
var canvasHeight= window.innerHeight;
var canvas = document.querySelector('canvas');

canvas.width = canvasWidth;
canvas.height = canvasHeight;

if(window.innerWidth < 500){
	canvasWidth = 500;
	
}

document.addEventListener("DOMContentLoaded", handleDocumentLoad) /* //you can call the handleDocumentLoad part anything as it is an ID */

function handleDocumentLoad()
{
	
var c = canvas.getContext('2d');
var mouse = {
	x: undefined,
	y: undefined
}


var amtOfSquares = 70;
var amtOfCircles = 70;


var colourArray = [
	'#0066cc', //blue
	'#00ff00', //lime green
	'#ff0000', //red
	'#ffff00', //yellow
	'#1affff', //cyan
	'#cc33ff', //purple
	'#ff4000', //orange
];


var mouseDistance = 100;
window.addEventListener('mousemove', 
	function(event){
		mouse.x = event.x;
		mouse.y = event.y;
	})

function Square(x, y, speedX, speedY, size){
	this.x = x;
	this.y = y;
	this.speedX = speedX;
	this.speedY  = speedY;
	this.radius = radius;
	this.size = size;
	this.colour = colourArray[Math.floor(Math.random() * colourArray.length)];
	
	this.draw = function(){
		c.beginPath();
		c.rect(this.x, this.y, this.size, this.size);
		c.strokeStyle = this.colour;
		c.fillStyle = this.colour;
		c.stroke();
		c.fill();
	}	
	this.update = function(){
		//left right screen collision
		if(this.x + this.size >= canvasWidth || this.x < 0){
			this.speedX = -this.speedX;
		}
		//Up down screen collision
		if(this.y + this.size >= canvasHeight || this.y < 0){
			this.speedY = -this.speedY;
			if(this.y + this.size >= canvasHeight ){
				this.y = this.y - 5;
			}
			else if(this.x < 0){
				this.y = this.y + 5;
			}
		}
		if (mouse.x - this.x < mouseDistance && mouse.x - this.x > -mouseDistance
			&& mouse.y - this.y < mouseDistance && mouse.y - this.y > -mouseDistance){
			if (this.size < maxSize)
			this.size += 1;
		} 
		else if (this.size > minSize){
			this.size -= 1;
		}
		this.x += this.speedX;
		this.y += this.speedY;
		this.draw();
	}	
	
}
function Circle(x, y, speedX, speedY, radius, size){
	
	this.x = x;
	this.y = y;
	this.speedX = speedX;
	this.speedY  = speedY;
	this.radius = radius;
	this.size = size;
	this.colour = colourArray[Math.floor(Math.random() * colourArray.length)];
	
	this.draw = function(){
		c.lineWidth = 10;
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = this.colour;
		c.fillStyle = this.colour;
		c.stroke();
		c.fill();
	}
	this.update = function(){

		//left right screen collision
		if(this.x + this.radius > canvasWidth || this.x - this.radius < 0){
			this.speedX = -this.speedX;
		}
		//Up down screen collision
		if(this.y + this.radius > canvasHeight || this.y - this.radius < 0){
			this.speedY = -this.speedY;
			if(this.y + this.size >= canvasHeight ){
				this.y = this.y - 5;
			}
			else if(this.x < 0){
				this.y = this.y + 5;
			}
		}	

		this.x += this.speedX;
		this.y += this.speedY;
			
		//interact
		if (mouse.x - this.x < mouseDistance && mouse.x - this.x > -mouseDistance
			&& mouse.y - this.y < mouseDistance && mouse.y - this.y > -mouseDistance){
			if (this.radius < maxRadius){
			this.radius += 1;
			}
		}
		else if (this.radius > minRadius){
			this.radius -= 1;
		}

		this.draw();
	}
	
}

var circleArray = [];
var squareArray = [];

//circle
for(var i = 0; i < amtOfCircles; i++){
	var x = Math.random() * (canvasWidth - radius * 2) + radius;
	var y = Math.random() * (canvasHeight - radius * 2) + radius;
	var speedX = Math.random() * 5;
	var speedY = Math.random() * 5;
	var size = 10;
	var radius =  Math.floor(Math.random() * (/*(max - min + 1)) + min*/ 5 - 3 + 1 )) + 3;
	var minRadius =  Math.floor(Math.random() * (/*(max - min + 1)) + min*/ 5 - 3 + 1 )) + 3;
	var maxRadius = Math.floor(Math.random() * (/*(max - min + 1)) + min*/  110 - 60 + 1 )) + 30;

	circleArray.push(new Circle(x, y, speedX, speedY, radius, size));	
}

//square
for(var j = 0; j < amtOfSquares; j++){
	var x = Math.random() * (canvasWidth - size * 2) + size;
	var y = Math.random() * (canvasHeight - size * 2) + size;
	var speedX = Math.random() * 5;
	var speedY = Math.random() * 5;
	var size = Math.floor(Math.random() * (/*(max - min + 1)) + min*/ 10 - 1 + 1 )) + 1;;
	var radius = size/2;
	var minSize = Math.floor(Math.random() * (/*(max - min + 1)) + min*/ 10 - 1 + 1 )) + 1;
	var maxSize = Math.floor(Math.random() * (/*(max - min + 1)) + min*/  140 - 90 + 1 )) + 60;
	squareArray.push(new Square(x, y, speedX, speedY, size));
}

console.log(circleArray);
function Animate(){
	requestAnimationFrame(Animate);
	c.clearRect(0,0, innerWidth, innerHeight);
	
for (var i = 0; i < circleArray.length; i++){
	circleArray[i].update();
}
  for (var j = 0; j < squareArray.length; j++){
	 squareArray[j].update();
 } 

}
//for(i = 0; i < howManyCircles; i++){
//x = Math.random() * window.innerWidth;
	//
//}

Animate();

}