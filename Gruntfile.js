module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            dist: {
                src: ['js/src/*.js'],
                dest: 'js/script.min.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    'js/script.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'js/src/*.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint'],
            styles: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            },
            options: {
                livereload: true
            }
        },
        sass: {
            dist: {
                files: {
                    "css/style.css": ["scss/main.scss"]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'sass', 'watch']);
};