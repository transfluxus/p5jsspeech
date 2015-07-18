"use strict";

var Display = function () {
    this.padding = 0;
};

Display.prototype.draw = function(instructions){
    textSize(15);
    textAlign(RIGHT);
    for (var key in instructions) {
        if(instructions[key] !== undefined){
            fill(0, 102, 153, 51);
            text(key , this.padding, 30);
            fill(0, 102, 153);
            text(instructions[key] , 50+this.padding, 30);
            this.padding += 30;
        }
    }
};
