var CIRCLE = 0;
var SQUARE = 1;
var LINE = 2;

//var position = createVector(-1,-1);

function drawObject(objectIndex) {
	if( objectIndex == CIRCLE) {
		var position = randomPosition();
		var clr = color(255,0,0);
		var sz = random(30,60); 
		drawCircle(position, clr,sz);
	} else if( objectIndex == SQUARE) {

	} else if( objectIndex == LINE) {

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