'use strict';

module.exports = function (grunt) {

	//GRUNT TASKS
  grunt.initConfig({
	
	
	
  
//WATCH TASK
    watch: {
	
	  scss: {
		  files: ['scss/{,**/}*.scss'],
		  tasks: ['clean:css', 'compass:dev', 'compass:dist', 'copy:cssdev', 'copy:cssdist']
		},
  
	  
	  js: {
	     files: ['js/{,**/}/*.js'],
		 tasks: ['clean:js', 'copy:js']
	  },

	  images: {
	     files: ['images/{,**/}/*'],
		 tasks: ['clean:images', 'copy:images']
	  },

	  fonts: {
	     files: ['fonts/{,**/}/*'],
		 tasks: ['clean:fonts', 'copy:fonts']
	  },

	
	 },


clean: {
 
   css: {
    src: [".working/css", ".release/css"],
    options: {
      force:true
    }
  },

  js: {
    src: [".working/js", ".release/js"],
    options: {
      force:true
    }
  },

  images: {
    src: [".release/images"],
    options: {
      force:true
    }
  },

  fonts: {
    src: [".release/fonts"],
    options: {
      force:true
    }
  },

  working:
  {
  	 src: [".working"],
    options: {
      force:true
    }
  },

  release:
  {
  	 src: [".release"],
    options: {
      force:true
    }
},

  
},





	//COMPASS TASK
    compass: {
      options: {
        config: 'config.rb',
        bundleExec: true
      },

      dev:
      {
      	environment: 'development',
        cssDir: '.working/css/dev',
        debugInfo: true,
      },

      dist: {
      options: {
        environment: 'production',
        cssDir: '.working/css/dist',
        debugInfo: false,

      },
    },
    },

 	
	
	//COPY TASK
    copy: {
	
	  cssdist: {
	  
	   //Files to look for and move to the destination
        files: [  
		  {
		  expand: true,
		  cwd: '.working/css/dist/',
		  src: ['**'],
		  dest: '.release/css/',
      rename: function(dest, src)
      {
        return dest + src.replace('.css', '.dist.css');
      } 
    }]
		},

    cssdev: {
    
     //Files to look for and move to the destination
        files: [  
      {
      expand: true,
      cwd: '.working/css/dev/',
      src: ['**'],
      dest: '.release/css/',
      rename: function(dest, src)
      {
        return dest + src.replace('.css', '.dev.css');
      }
    }]
    },

		images: {

			files: [
		  {
		  expand: true,
		  cwd: 'images',
		  src: ['**'],
		  dest: '.release/images'
		  }
		  ]
		},

			
		js: {
			files: [
		  {
		  expand: true,
		  cwd: 'js',
		  src: ['**'],
		  dest: '.release/js'
		  } ]
		 },

		 fonts: {
		 	files: [
		  {
		  expand: true,
		  cwd: 'fonts',
		  src: ['**'],
		  dest: '.release/fonts'
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
  grunt.loadNpmTasks('grunt-contrib-clean');

  //grunt.registerTask('build', ['parallel', 'compass:dist', 'jshint']);
  //grunt.registerTask('default', ['build', 'browserSync', 'watch']);

  grunt.registerTask('default', ['clean:working', 'clean:release', 'compass:dev', 'compass:dist', 'copy', 'watch']);

//  grunt.registerTask('drupal', ['compass:dev', 'copy:drupal', 'watch']);
    
};
