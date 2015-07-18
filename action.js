var S_CIRCLE = 0;
var S_SQUARE = 1;
var S_LINE = 2;

var S_RED = 0;
var S_GREEN = 1;
var S_BLUE = 2;
var S_BLACK = 3;
//var S_YELLOW = 4;

function drawObject(obj) {
	var obyType = obj.instruction.detected_object;
	var clr = getColor(obj.instruction.detected_color);
	var size = obj.instruction.detected_size;
	if( obyType == S_CIRCLE) {
		var position = randomPosition();
		drawCircle(position, clr,sz);
	} else if(obyType == S_SQUARE) {
		var position = randomPosition();
		drawRectangle(position,clr,sz);
	} else if(obyType == S_LINE) {
		var from = randomPosition();
		var to = randomPosition();
		drawLine(from,to,clr);
	}
}

function getColor(index) {
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

/* 
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
*/

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