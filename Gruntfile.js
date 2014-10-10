/*
 * grunt-max-filesize
 * https://github.com/jak/grunt-max-filesize
 *
 * Copyright (c) 2014 Jak Spalding
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    maxfilesize: {
      options: {
        limit: 906
      },
      test: {
        src: "tasks/maxfilesize.js"
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadTasks('tasks');

};
