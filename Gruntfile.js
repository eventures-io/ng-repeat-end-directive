'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-karma');

   function init() {

        grunt.initConfig({

            jshint: {
                options: {
                    //force:          true,
                    globalstrict: true,
                    //sub:            true,
                    node: true,
                    loopfunc: true,
                    browser: true,
                    devel: true,
                    globals: {
                        angular: false,
                        $: false,
                        moment: false,
                        Pikaday: false,
                        module: false,
                        forge: false
                    }
                },
                beforeconcat: {
                    options: {
                        force: false,
                        ignores: ['**.min.js']
                    },
                    files: {
                        src: []
                    }
                }
            },
            uglify: {
                options: {
                    mangle: false
                },
                build: {
                    files: {},
                    src: 'src/js/repeat-end-directive.js',
                    dest: 'dist/repeat-end-directive.min.js'
                }
            },
            copy: {
                main: {
                    src: 'src/js/repeat-end-directive.js',
                    dest: 'dist/repeat-end-directive.js'
                }
            },
            karma: {
                unit: {
                    configFile: 'karma.conf.js'
                }
            }
        });

        grunt.registerTask('default', ['jshint:beforeconcat', 'uglify:build', 'copy']);

    }

    init();


};
