#! /usr/bin/env node

/*
 * jsdiff-cli
 * https://github.com/kelsadita/jsdiff-cli
 *
 * Copyright (c) 2013 Kalpesh Adhatrao
 * Licensed under the MIT license.
 */

'use strict';

(function(){

    // importing required modules
    var jsdiff = require("diff");
    var color  = require("color");

    // Getting names of file to compare through commandline
    var cliArgs = process.argv.slice(2);
    var file1 = cliArgs[0],
        file2 = cliArgs[1];

    
    var oldString = 'beep boop';
    var newString = 'beep boob blah';

    var diff = jsdiff.diffChars(oldString, newString);

    console.log(diff);
        

})();
