'use strict';

module.exports = function (grunt) {

	//GRUNT TASKS
  grunt.initConfig({
	
	
	
  
//WATCH TASK
    watch: {
	
	  scss: {
		  files: ['scss/{,**/}*.scss'],
		  tasks: ['compass:dev', 'copy:css']
		},
  
	  
	  js: {
	     files: ['js/{,**/}/*.js'],
		 tasks: ['copy:js']
	  },

	  images: {
	     files: ['images/{,**/}/*'],
		 tasks: ['copy:images']
	  },

	  fonts: {
	     files: ['fonts/{,**/}/*'],
		 tasks: ['copy:fonts']
	  },

	
	 },




	//COMPASS TASK
    compass: {
      options: {
        config: 'config.rb',
        bundleExec: true
      },
	  //DEV SUBTASK
      dev: {
        options: {
          environment: 'development'
        }
      },
	  //DIST SUBTASK
      dist: {
        options: {
          environment: 'production',
        }
      }
    },

 	
	
	//COPY TASK
    copy: {
	
	  css: {
	  
	   //Files to look for and move to the destination
        files: [  
		  {
		  expand: true,
		  cwd: 'css',
		  src: ['**'],
		  dest: 'release/stylesheets'
		  } ]
		},

		images: {

			files: [
		  {
		  expand: true,
		  cwd: 'images',
		  src: ['**'],
		  dest: 'release/stylesheets/images'
		  }
		  ]
		},

			
		js: {
			files: [
		  {
		  expand: true,
		  cwd: 'js',
		  src: ['**'],
		  dest: 'release/javascripts'
		  } ]
		 },

		 fonts: {
		 	files: [
		  {
		  expand: true,
		  cwd: 'fonts',
		  src: ['**'],
		  dest: 'release/stylesheets/fonts'
		  },
        ]
      },

       

    }
  });
  
  
  //LOAD PLUGINS
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-parallel');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-bower-concat');

  //grunt.registerTask('build', ['parallel', 'compass:dist', 'jshint']);
  //grunt.registerTask('default', ['build', 'browserSync', 'watch']);

  grunt.registerTask('default', ['compass:dev', 'copy', 'watch']);

  grunt.registerTask('drupal', ['compass:dev', 'copy:drupal', 'watch']);
    
};
