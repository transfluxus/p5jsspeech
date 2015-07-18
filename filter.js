"use strict";
var Filter = function (words) {
    this.available_objects = words.objects;
    this.available_colors = words.colors;
    this.available_sizes = {};
    this.detected_object = null;
    this.detected_color = null;

    this.grab_object = function grab(microphone){
        for(var w in this.available_objects) {
            if (this.available_objects.hasOwnProperty(microphone)) {
                this.detected_object = w;
            }
        }
    };

    this.grab_size = function grab_size(microphone){
    };

    this.grab_color = function grab_color(microphone){
    };

    this.instruction = { "object":0, "size":1, "color":2 };
};




