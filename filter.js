"use strict";

var Filter = function (grammar) {
    this.available_objects = grammar.objects;
    this.available_colors = grammar.colors;
    this.clear_command = grammar.clear_words;
    this.detected_object = undefined;
    this.detected_color = undefined;
    this.detected_size = undefined;
};

Filter.prototype.grab_object = function(microphone){
    for(var o in this.available_objects) {
        if (this.available_objects.hasOwnProperty(microphone)) {
            this.detected_object = o;
        }
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
    for(var c in this.available_colors) {
        if (this.available_colors.hasOwnProperty(microphone)) {
            this.detected_colors = c;
        }
    }
};

Filter.prototype.maybe_clear = function(microphone){
    for(var c in this.clear_words) {
        if (this.clear_words.hasOwnProperty(microphone)) {
            this.detected_object = undefined;
            this.detected_color = undefined;
            this.detected_size = undefined;
        }
    }
};

Filter.prototype.instruction = function(){
    return {
        "object": this.detected_object,
        "size": this.detected_size,
        "color": this.detected_color
    };
};




