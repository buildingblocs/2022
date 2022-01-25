const sass = require('node-sass');

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
	      implementation: sass,
	      sourceMap: true
      },
      dist: {
        options:{
          outputStyle: 'compressed'
        },
        files: {
          'assets/css/style.css': 'assets/sass/style.scss'
        }
      }
    },
    postcss:{
      options: {
        map: true,
      },
      dist:{
        src: 'assets/css/style.css'
      }
    },
    watch: {
      css: {
        files: 'assets/sass/**/*',
        tasks: ['sass', 'postcss']
      }
    }
  });
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.registerTask('default', ['sass', 'postcss']);
}
