"use strict";
var Filter = function (words) {
    this.available_objects = words.objects;
    this.available_colors = words.colors;
    this.instruction = '';
    this.detected_object = null;
    this.detected_object = null;
    this.detected_size = null;

    this.grab_object = function grab(microphone){
        for(var w in this.available_objects) {
            if (this.available_objects.hasOwnProperty(microphone)) {
                this.detected_object = microphone;
            }
        }
    };

    this.grab_size = function grab_size(microphone){
        var number = parseInt(microphone);
        if(!isNaN(number)) {
            console.log("number detected "+number);
            this.detected_size = number;
        }
    };

    this.grab_color = function grab_color(microphone){
        for(var w in this.available_colors) {
            if (this.available_colors.hasOwnProperty(microphone)) {
                this.detected_colors = microphone;
            }
        }
    };

    this.instruction = {
        "object": this.detected_object,
        "size": this.detected_size,
        "color": this.detected_color
    };

    return this;
};




