# grunt-max-filesize

> A Grunt plugin for enforcing maximum filesizes. Written because of crappy third-party payment systems with silly and low file size limits.

## Documentation
modify your `grunt.js` file by adding the following line:

    grunt.loadNpmTasks('grunt-max-filesize');

Then add some configuration for the plugin like so:

    grunt.initConfig({
        ...
        maxfilesize: {
          options: {
            limit: 2097152 // 2mb
          },
          base: {
            files: [
                {expand: true, cwd: 'build', src: ['*.zip']}
            ]
          }
        },
        ...
    });

If a file specified is bigger than the limit, grunt will error out.
