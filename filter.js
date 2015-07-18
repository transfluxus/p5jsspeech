"use strict";
var Filter = function (words) {
    this.available_objects = words;
    this.available_colors = {};
    this.available_sizes = {};

    this.grab_object = function grab(microphone){
        for(var w in this.available_objects) {
            if (words.hasOwnProperty(microphone)) {
                console.log("fsafdfad");
                console.log(w);
            }
        }
    };

    this.grab_size = function grab_size(microphone){
    };

    this.grab_color = function grab_color(microphone){
    };

    this.instruction = { "object":0, "size":1, "color":2 };
};




