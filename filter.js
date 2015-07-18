"use strict";

var Filter = function (words) {
    this.available_objects = words.objects;
    this.available_colors = words.colors;
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

Filter.prototype.isReady = function() {
    return this.detected_object != undefined 
    && this.detected_object != undefined
    && this.detected_size != undefined;
}

Filter.prototype.instruction = function(){
    return {
        "object": this.detected_object,
        "size": this.detected_size,
        "color": this.detected_color
    };
};




