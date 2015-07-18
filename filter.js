"use strict";

var Filter = function (words) {
    this.available_objects = words.objects;
    this.available_colors = words.colors;
    this.instruction = '';
    this.detected_object = undefined;
    this.detected_color = undefined;
    this.detected_size = undefined;
};

Filter.prototype.grab_object = function(microphone){
    for(var w in this.available_objects) {
        if (this.available_objects.hasOwnProperty(microphone)) {
            this.detected_object = microphone;
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
    for(var w in this.available_colors) {
        if (this.available_colors.hasOwnProperty(microphone)) {
            this.detected_colors = microphone;
        }
    }
};

Filter.prototype.isReady = function() {
    return this.detected_object != undefined 
    && this.detected_object != undefined
    && this.detected_size != undefined;
}

Filter.prototype.instruction = function(){
    return {"blu" : "bla"};
    // { "object": this.detected_object,
    // "size": this.detected_size,
    // "color": this.detected_color }
};




