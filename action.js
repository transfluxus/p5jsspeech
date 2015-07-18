var S_CIRCLE = 0;
var S_SQUARE = 1;
var S_LINE = 2;

var S_RED = 5;
var S_GREEN = 6;
var S_BLUE = 7;
var S_RED = 5;

//var position = createVector(-1,-1);

function drawObject(objectIndex) {
	console.log(objectIndex+"  "+S_SQUARE+"  "+(objectIndex == S_SQUARE));
	if( objectIndex == S_CIRCLE) {
		var position = randomPosition();
		var clr = color(255,0,0);
		var sz = random(30,60); 
		drawCircle(position, clr,sz);
	} else if(objectIndex == S_SQUARE) {
		var position = randomPosition();
		var clr = color(255,0,0);
		var sz = random(30,60); 
		drawRectangle(position,clr,sz);
	} else if( objectIndex == S_LINE) {
		var from = randomPosition();
		var to = randomPosition();
		var clr = color(255,0,0);
		drawLine(from,to,clr);
	}
}

function randomPosition() {
	return createVector(random(width), random(height));
}

function drawCircle(position, color, size) {
	noStroke();
	fill(color);
	ellipse(position.x,position.y,size,size);
}

function drawRectangle(position,color,size) {
	noStroke();
	fill(color);
	rect(position.x,position.y,size,size);	
}

function drawLine(from, to, color) {
	stroke(color);
	line(from.x,from.y,to.x,to.y);
}

function getColor(colorIndex) {

}