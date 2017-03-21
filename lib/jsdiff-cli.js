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
    require("colors");
    var jsdiff = require("diff");
    var fs     = require("fs");

    // Getting names of file to compare through commandline
    var cliArgs = process.argv.slice(2);
    var file1 = cliArgs[0],
        file2 = cliArgs[1];

    var data1 = fs.readFileSync(file1, 'utf-8');
    var data2 = fs.readFileSync(file2, 'utf-8');

    var diff = jsdiff.diffChars(data1, data2);

    diff.forEach(function(part){
        var color = part.added ? 'green' : 
                    part.removed ? 'red' : 'grey';

        process.stderr.write(part.value[color]);
    });
        
    console.log();
    if (diff.length > 1) {
        process.exit(1);
    }
})();
