"use strict";

var Display = function () {
};

Display.prototype.draw = function(instructions){
    var padding = 50;
    textSize(18);
    textAlign(RIGHT);
    for (var key in instructions) {
        if(instructions[key] !== undefined){
            text(key , padding, 30);
            text(instructions[key] , 100+padding, 30);
            padding += 50;
        }
    }
};
