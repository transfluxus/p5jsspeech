var S_CIRCLE = 0;
var S_SQUARE = 1;
var S_LINE = 2;

var S_RED = 0;
var S_GREEN = 1;
var S_BLUE = 2;
var S_BLACK = 3;
//var S_YELLOW = 4;

function drawObject(obj) {
	var obyType = obj.object;
	var clr = getClr(obj.color);
	var size = obj.size;
	if(obyType == S_CIRCLE) {
		var position = randomPosition();
		drawCircle(position, clr,size);
	} else if(obyType == S_SQUARE) {
		var position = randomPosition();
		drawRectangle(position,clr,size);
	} else if(obyType == S_LINE) {
		var from = randomPosition();
		var to = randomPosition();
		drawLine(from,to,clr);
	}
}

function getClr(index) {
	switch(index) {
		case S_RED:
			return color(255,0,0);
		case S_GREEN:
			return color(0,255,0);
		case S_BLUE:
			return color(0,0,255);
		case S_BLACK:
		default:
			return color(0);
	}
}

function randomPosition() {
	return createVector(random(width), random(height));
}

function drawCircle(position, color, size) {
	noStroke();
	fill(color);
	console.log(position.x+" "+color+" "+size);
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
