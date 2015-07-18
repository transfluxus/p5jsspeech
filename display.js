"use strict";

var Display = function () {
};

Display.prototype.draw = function(instructions){
    var padding = 50;
    textSize(18);
    textAlign(RIGHT);
    for (var key in instructions) {
        if(instructions[key] !== undefined){
            fill(0, 102, 153, 51);
            text(key , padding, 30);
            fill(0, 102, 153);
            text(instructions[key] , 100+padding, 30);
            padding += 30;
        }
    }
};
