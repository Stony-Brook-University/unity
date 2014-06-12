'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
	
	browserSync: {
		files: {
			src: '{,**/}*.css'
		},
		options: {
			proxy: "localhost/html",
			startPath: "/index.htm",
			injectChanges: false,
			debugInfo: true,
			logConnections: true,
			watchTask: true,
			ports: {
				min: 9000,
				max: 9020
			},
			host : "129.49.20.61",
			ghostMode: {
				clicks: true,
				scroll: true,
				links: true,
			forms: true
			}
		}
    },
  
    watch: {
      options: {
        //livereload: 9001
      },
      sass: {
        files: ['sass/{,**/}*.scss'],
        tasks: ['compass:dev'],
        options: {
          livereload: false
        }
      },
      css: {
        files: ['stylesheets/{,**/}*.css']
      },
      images: {
        files: ['images/**']
      },
      js: {
        files: [
          'javascripts/{,**/}*.js',
          '!javascripts/{,**/}*.js'
        ],
        tasks: ['jshint', 'uglify:dev']
      },
	  
	  copy: {
		files: ['stylesheets/{,**/}*.css', 'images/**', 'javascripts/{,**/}*.js'],
		tasks: ['copy']
	  }
	  
    },

    compass: {
	  
      options: {
        config: 'config.rb',
        bundleExec: true,
		
      },
      dev: {
		
        options: {
          environment: 'development'
        }
		
      },
      dist: {
        options: {
          environment: 'production',
          imagesDir: 'images-min',
          force: true
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'javascripts/{,**/}*.js',
        '!javascripts/{,**/}*.min.js'
      ]
    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          cwd: 'images',
          src: ['**/*.png', '**/*.jpg'],
          dest: 'images-min/'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'images',
          src: '**/*.svg',
          dest: 'images-min'
        }]
      }
    },

    uglify: {
      dev: {
        options: {
          mangle: false,
          compress: false,
          beautify: true
        },
        files: [{
          expand: true,
          cwd: 'javascripts',
          src: ['**/*.js', '!**/*.min.js'],
          dest: 'javascripts',
          ext: '.min.js'
        }]
      },
      dist: {
        options: {
          mangle: true,
          compress: true
        },
        files: [{
          expand: true,
          cwd: 'javascripts',
          src: ['**/*.js', '!**/*.min.js'],
          dest: 'javascripts',
          ext: '.min.js'
        }]
      }
    },

    copy: {
      dist: {
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
		  }
		  
		   {
		  expand: true,
		  cwd: 'stylesheets',
		  src: ['**'],
		  dest: 'html/stylesheets'
		  }
        ]
      }
    },

    parallel: {
      assets: {
        grunt: true,
        tasks: ['imagemin', 'svgmin', 'uglify:dist', 'copy:dist']
      }
    }
  });


  grunt.event.on('watch', function(action, filepath) {
    grunt.config([
      'compass:dev',
      'jshint'
    ], filepath);
  });

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
  grunt.registerTask('csswatch', ['browserSync', 'watch', 'copy']);
};