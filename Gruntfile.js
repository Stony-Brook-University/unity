'use strict';

module.exports = function (grunt) {

	//GRUNT TASKS
  grunt.initConfig({
	
	//BROWSER SYNC TASK
	browserSync: {
	
		styleguide:
		{
				//Files to search for
			files: {
				src: 'styleguide/**/*'
			},
			//What to do with the files
			options: {
				proxy: "styleguide.localhost:8080",

				injectChanges: false,
				debugInfo: true,
				logConnections: true,
				watchTask: true,
				startPath: '/',
				ports: {
					min: 9000,
					max: 9020
				},

				host : "styleguide.localhost",
				ghostMode: {
					clicks: true,
					scroll: true,
					links: true,
				forms: true
				}
			}
		
		},
		
		classie:
		{
				//Files to search for
			files: {
				src: 'stylesheets/**'
			},
			//What to do with the files
			options: {
				proxy: "classie.localhost:8082",

				injectChanges: false,
				debugInfo: true,
				logConnections: true,
				watchTask: true,
				startPath: '/text.php',
				ports: {
					min: 9000,
					max: 9020
				},

				host : "classie.localhost",
				
				ghostMode: {
					clicks: true,
					scroll: true,
					links: true,
				forms: true
				}
			}
		
		},

		it:
		{
				//Files to search for
			files: {
				src: 'stylesheets/**'
			},
			//What to do with the files
			options: {
				

				injectChanges: false,
				debugInfo: true,
				logConnections: true,
				watchTask: true,
				startPath: '/',
				ports: {
					min: 9000,
					max: 9020
				},

				host : "it.localhost:8080",
				
				ghostMode: {
					clicks: true,
					scroll: true,
					links: true,
				forms: true
				}
			}
		
		},
		
		default: {
		
			//Files to search for
			files: {
				src: '{,**/}*.css'
			},
			//What to do with the files
			options: {
				proxy: "styleguide.localhost:8080",

				injectChanges: false,
				debugInfo: true,
				logConnections: true,
				watchTask: true,
				startPath: '/text.php',
				ports: {
					min: 9000,
					max: 9020
				},

				host : "styleguide.localhost",
				ghostMode: {
					clicks: true,
					scroll: true,
					links: true,
				forms: true
				}
			}
		}
    },
	
  
	//WATCH TASK
    watch: {
	
	  styleguide: {
		  files: ['sass/{,**/}*.scss', 'images/{,**/}/*', 'local-images/{,**/}*', 'javascripts/{,**/}*.js'],
		  tasks: ['compass:dev', 'copy:styleguide']
	 
		},

		 it: {
		  files: ['sass/{,**/}*.scss'],
		  tasks: ['compass:dev', 'copy:stylesheets', 'copy:it']
	 
		},
		
		sbucommons: {
		  files: ['sass/{,**/}*.scss'],
		  tasks: ['compass:dev', 'copy:stylesheets', 'copy:sbucommons']
	 
		},
	
		sass: {
			files: ['sass/{,**/}*.scss'],
			tasks: ['compass:dev', 'copy:stylesheets'], //run compass task for sass files
		  },

		  //javascript to watch
		  js: {
			files: [
			  'javascripts/{,**/}*.js',
			  '!javascripts/{,**/}*.js'
			],
			tasks: ['jshint', 'uglify:dev', 'copy:javascripts'] //run jshint and uglify for javascript
		  }
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
          imagesDir: 'images-min',
          force: true
        }
      }
    },
	
	//JSHINT TASK
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
	  //Javascript to search for and check
      all: [
        'javascripts/{,**/}*.js',
        '!javascripts/{,**/}*.min.js'
      ]
    },
	
	//IMAGEMIN TASK
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3
        },
		//images to search for, compress, and place in the destination
        files: [{
          expand: true,
          cwd: 'images',
          src: ['**/*.png', '**/*.jpg'],
          dest: 'images-min/'
        }]
      }
    },
	
	//SVGMIN TASK
    svgmin: {
	  //DIST SUBTASK
      dist: {
        files: [{
          expand: true,
          cwd: 'images',
          src: '**/*.svg',
          dest: 'images-min'
        }]
      }
    },
	
	//UGLIFY TASK
    uglify: {
	  //DEV SUBTASK
      dev: {
        options: {
          mangle: false,
          compress: false,
          beautify: true
        },
		//javascript to look for, minify, and place in the destination
        files: [{
          expand: true,
          cwd: 'javascripts',
          src: ['**/*.js', '!**/*.min.js'],
          dest: 'javascripts',
          ext: '.min.js'
        }]
      },
	  //DIST SUBTASK
      dist: {
        options: {
          mangle: true,
          compress: true
        },
		//javascript to look for, minify, and place in the destination
        files: [{
          expand: true,
          cwd: 'javascripts',
          src: ['**/*.js', '!**/*.min.js'],
          dest: 'javascripts',
          ext: '.min.js'
        }]
      }
    },
	
	//COPY TASK
    copy: {
	
	
	 stylesheets: {
	  
	   //Files to look for and move to the destination
        files: [  
		   {
		  expand: true,
		  cwd: 'stylesheets',
		  src: ['**'],
		  dest: 'stylesheets'
		  }
        ]
      },
	
	  styleguide: {
	  
	   //Files to look for and move to the destination
        files: [  
		   {
		  expand: true,
		  cwd: 'stylesheets',
		  src: ['**'],
		  dest: 'styleguide/stylesheets'
		  },

		  {
		  expand: true,
		  cwd: 'local-images',
		  src: ['**'],
		  dest: 'styleguide/local-images'
		  },

		  {
		  expand: true,
		  cwd: 'images',
		  src: ['**'],
		  dest: 'styleguide/stylesheets/images'
		  },
		  
		  {
		  expand: true,
		  cwd: 'javascripts',
		  src: ['**'],
		  dest: 'styleguide/javascripts'
		  }
        ]
      },

       it: {
	  
	   //Files to look for and move to the destination
        files: [  
		   {
		  expand: true,
		  cwd: 'stylesheets',
		  src: ['**'],
		  dest: 'e:/git/kerrinpernic/docroot/sites/all/themes/custom/unity/stylesheets'
		  }
        ]
      },
	  
	  sbucommons: {
	  
	   //Files to look for and move to the destination
        files: [  
		   {
		  expand: true,
		  cwd: 'stylesheets',
		  src: ['**'],
		  dest: 'e:/git/sbucommons/docroot/sites/all/themes/custom/unity/stylesheets'
		  }
        ]
      },
	  
	  //DIST SUBTASK
      dist: {
	    //Files to look for and move to the destination
        files: [
          {
            expand: true,
            cwd: 'images',
            src: ['**', '!**/*.svg', '!**/*.png', '!**/*.jpg'],
            dest: 'images-min'
          },
		  
		  {
		  expand: true,
		  cwd: 'stylesheets',
		  src: ['**'],
		  dest: 'drupal/stylesheets'
		  },
		  
		   {
		  expand: true,
		  cwd: 'stylesheets',
		  src: ['**'],
		  dest: 'styleguide/stylesheets'
		  },
		  
		   {
		  expand: true,
		  cwd: 'stylesheets',
		  src: ['**'],
		  dest: 'html/stylesheets'
		  }

        ]
      }
    }
  });
  
  
  grunt.event.on('watch:styleguide', function(action, filepath) {
    grunt.config([
      'compass:dev',
      'jshint'
    ], filepath);
	
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

  grunt.registerTask('build', ['parallel', 'compass:dist', 'jshint']);
  grunt.registerTask('default', ['build', 'browserSync', 'watch']);
  grunt.registerTask('csswatch', ['browserSync', 'watch']);
    
  grunt.registerTask('styleguidewatch', ['compass:dev', 'copy:styleguide', 'browserSync:styleguide', 'watch:styleguide']);
  
  grunt.registerTask('classiewatch', ['browserSync:classie', 'watch:sbucommons']);


  grunt.registerTask('itwatch', ['watch:it']);
};
