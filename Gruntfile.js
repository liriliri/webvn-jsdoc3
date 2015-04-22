/**
 * http://gruntjs.com/configuring-tasks
 */
module.exports = function (grunt) {
    var path = require('path');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true
            },
            less: {
                files: ['less/**/*.less'],
                tasks: ['less']
            }
        },
        less: {
            dist: {
                src: 'less/**/webvn.less',
                dest: 'static/styles/webvn.css'
            }
        },
        copy: {
            js: {
                files: [
                    {
                        src: 'bower_components/underscore/underscore-min.js',
                        dest: 'static/scripts/underscore-min.js'
                    },
                    {
                        src: 'bower_components/jquery/dist/jquery.min.js',
                        dest: 'static/scripts/jquery.min.js'
                    },
                    {
                        src: 'bower_components/bootstrap/dist/js/bootstrap.min.js',
                        dest: 'static/scripts/bootstrap.min.js'
                    }
                ]
            },
            css: {
                files: [
                    {
                        src: 'bower_components/bootstrap/dist/css/bootstrap.min.css',
                        dest: 'static/styles/bootstrap.min.css'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/fonts/',
                        src: ['**'],
                        dest: 'static/fonts/'
                    }
                ]
            },
        }
    });

    // Load task libraries
    [
        'grunt-contrib-watch',
        'grunt-contrib-less',
        'grunt-contrib-copy'
    ].forEach(function (taskName) {
        grunt.loadNpmTasks(taskName);
    });

    // Definitions of tasks
    grunt.registerTask('default', 'Watch project files', [
        'watch'
    ]);
    grunt.registerTask('init', ['copy']);

};
