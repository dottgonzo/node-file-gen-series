"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fileExists = require("file-exists");
var fileGen = require("file-gen-series");
function genFileSequence(path, options) {
    if (options) {
        if (!options.numberLenght)
            options.numberLenght = 5;
    }
    else {
        var settings = {
            numberLenght: 3
        };
        options = settings;
    }
    if (!fileExists.sync(fileGen.nextPath(path, options.numberLenght))) {
        return fileGen.nextPath(path, options.numberLenght);
    }
    else {
        while (fileExists.sync(fileGen.nextPath(path, options.numberLenght))) {
            path = fileGen.nextPath(fileGen.nextPath(path, options.numberLenght));
            console.log('ssssssss', path);
        }
        return path;
    }
}
exports.genFileSequence = genFileSequence;
