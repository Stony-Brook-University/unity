'use strict';

module.exports = function (grunt) {

	//GRUNT TASKS
  grunt.initConfig({
	
	
	
  
//WATCH TASK
watch: {
	
  scss: {
	  files: ['scss/{,**/}*.scss'],
	  tasks: ['clean:css', 'compass:dev', 'compass:dist', 'copy:cssdev', 'copy:cssdist', 'notify:css']
	},

  js_headers:
  {
    files: ['js/header/{,**/}/*.js'],
    tasks: ['clean:js_header', 'concat:header', 'uglify:header', 'copy:js', 'notify:js']
  },

  js_footers:
  {
    files: ['js/footer/{,**/}/*.js'],
    tasks: ['clean:js_footer', 'concat:footer', 'uglify:footer', 'copy:js', 'notify:js']
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

notify: {
  css: {
    options: {
      title: 'Unity CSS',  // optional
      message: 'SASS and Uglify finished running', //required
    }
  },
  js: {
    options: {
      title: 'Unity JS',  // optional
      message: 'JS concatenated and minified', //required
    }
  },
},


clean: {
 
  css: {
    src: [".working/css", ".release/css"],
    options: {
      force:true
    }
  },

  js_header: {
    src: [".working/js/header", ".release/js/header"],
    options: {
      force:true
    }
  },

  js_footer: {
    src: [".working/js/footer", ".release/js/footer"],
    options: {
      force:true
    }
  },

  images: {
    src: [".release/assets/unity-images"],
    options: {
      force:true
    }
  },

  fonts: {
    src: [".release/assets/unity-fonts"],
    options: {
      force:true
    }
  },

  working: {
    src: [".working"],
    options: {
      force:true
    }
  },

  release: {
    src: [".release"],
    options: {
      force:true
    }
  },

},


concat: {
  
  options: {
    separator: ';',
  },
    
  header: {
    src: ['js/header/{,**/}/*.js'],
    dest: '.working/js/header/header.dev.js',
  },

  footer: {
    src: ['js/footer/{,**/}/*.js'],
    dest: '.working/js/footer/footer.dev.js',
  },

},



uglify: {
  
  header: {
    files: {
      '.working/js/header/header.min.js': ['.working/js/header/header.dev.js']
    }
  },

  footer: {
    files: {
        '.working/js/footer/footer.min.js': ['.working/js/footer/footer.dev.js']
    }
  }

},


compass: {
  
  options: {
    config: 'config.rb',
    bundleExec: true
  },

  dev: {
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

browserSync: {
   
  css: {
    bsFiles: {
      src : ['.release/css/*.css','styleguide/*.html']
    },
      
    options: {
        watchTask: true,         
    }
  },
},

copy: {
		  
  cssdist: {
	
   files: [{
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
  
    files: [{
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

		files: [{
		  expand: true,
		  cwd: 'images',
		  src: ['**'],
		  dest: '.release/assets/images'
		}]
	},

			
	js: {
			
    files: [{
		  expand: true,
		  cwd: '.working/js',
		  src: ['**'],
		  dest: '.release/js'
		}]
	},

  
	fonts: {
	 files: [{
	   expand: true,
	   cwd: 'fonts',
	   src: ['**'],
	   dest: '.release/assets/fonts'
		}]
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
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-notify');
  //grunt.registerTask('build', ['parallel', 'compass:dist', 'jshint']);
  //grunt.registerTask('default', ['build', 'browserSync', 'watch']);

  grunt.registerTask('default', ['clean:working', 'clean:release', 'compass:dev', 'compass:dist', 'concat', 'uglify', 'copy', 'browserSync', 'watch']);

//  grunt.registerTask('drupal', ['compass:dev', 'copy:drupal', 'watch']);
    
};
