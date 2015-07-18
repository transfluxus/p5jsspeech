"use strict";

var Display = function (instructions) {
    this.instructions = instructions;
};

Display.prototype.draw = function(){
    for (var key in this.instructions) {

        console.log("merda"+key);
        if(this.instructions[key] !== undefined){
            textSize(18);
            textAlign(RIGHT);
            text(key , 50, 30);
            text(instructions[key] , 100, 30);
        }
    }
};
