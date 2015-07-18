"use strict";

var Filter = function (grammar) {
    this.available_objects = grammar.objects;
    this.available_colors = grammar.colors;
    this.available_positions = grammar.positions;
    this.clear_command = grammar.clear_words;
    this.detected_object = undefined;
    this.detected_color = undefined;
    this.detected_size = undefined;
    this.detected_position = undefined;
};

Filter.prototype.grab_object = function(microphone){
    if (this.available_objects.hasOwnProperty(microphone)) {
        this.detected_object = this.available_objects[microphone];
    }
};

Filter.prototype.grab_size = function(microphone){
    var number = parseInt(microphone);
    if(!isNaN(number)) {
        console.log("number detected "+number);
        this.detected_size = number;
    }
};

Filter.prototype.grab_color = function(microphone){
    if (this.available_colors.hasOwnProperty(microphone)) {
        this.detected_color = this.available_colors[microphone]; 
    }
};

Filter.prototype.maybe_clear = function(microphone){
    for(var c in this.clear_words) {
        if (this.clear_words.hasOwnProperty(microphone)) {
            clear();
        }
    }
};

Filter.prototype.clear = function() {
    this.detected_object = undefined;
    this.detected_color = undefined;
    this.detected_size = undefined;
};

Filter.prototype.isReady = function() {
    return this.detected_object !== undefined
    && this.detected_object !== undefined
    && this.detected_size !== undefined;
};

Filter.prototype.instruction = function(){
    return {
        "object": this.detected_object,
        "size": this.detected_size,
        "color": this.detected_color,
        "position": this.detected_color
    };
};

Filter.prototype.grab_position = function(microphone){
    if (this.available_positions.hasOwnProperty(microphone)) {
        this.detected_position = this.available_positions[microphone];
    }
}
