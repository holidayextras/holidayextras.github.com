module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      inline:{
        files: {
          '_includes/js/preloadCSS.min.js': ['js/preloadCSS.js']
        }
      }
    },
    less: {
      minified: {
        options: {
          paths: ["css"],
          cleancss: true
        },
        files: {
          "_includes/css/critical.min.css": "less/critical.less",
          "css/styles.min.css": "less/hungrygeek.less"
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/*.js'],
        tasks: ['uglify'],
        options: {
          spawn: false,
        },
      },
      less: {
        files: ['less/*.less'],
        tasks: ['less'],
        options: {
          spawn: false,
        }
      },
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'less', 'watch']);

};
