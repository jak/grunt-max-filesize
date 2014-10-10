/*
 * grunt-max-filesize
 * https://github.com/jak/grunt-max-filesize
 *
 * Copyright (c) 2014 Jak Spalding
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var fs = require('fs');

  grunt.registerMultiTask('maxfilesize', 'A Grunt plugin for enforcing maximum filesizes.', function() {
    var options = this.options({
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      var path = f.src.join('');

      if (!fs.existsSync(path)){
        grunt.log.writeln(path + ": not found.");
      } else {
        var stat = fs.statSync(path);

        grunt.log.writeln(path + ": " + String(stat.size) + " bytes");
        if (stat.size > options.limit) {
          grunt.fatal(path + ': Filesize too large (Limit: ' + String(options.limit) + ', Actual: ' + String(stat.size) + ')');
        }
      }

    });
  });

};
