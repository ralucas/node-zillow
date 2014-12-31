'use strict';

module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    bump: {
      options: {
        createTag: true,
        push: true,
        pushTo: 'origin'
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: 'coverage/blanket',
          grep: grunt.option('grep')
        },
        src: ['test/*.js']
      },
      coverage: {
        options: {
          reporter: 'html-cov',
          captureFile: 'coverage.html'
        }
      }
    },
    jsdoc: {
      dist: {
        src: ['lib/*.js'], 
        options: {
          destination: 'docs',
          configure: 'docs/conf.json'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        force: true,
        reporter: require('jshint-stylish')
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        src: ['lib/**/*.js']
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'mochaTest']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'mochaTest']
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'mochaTest', 'jsdoc']);

  grunt.registerTask('test', 'mochaTest');

  grunt.registerTask('docs', 'jsdoc');

};
