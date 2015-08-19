'use strict';
module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var appConfig = {
    name: require('./package.json').name,
    temp: 'temp',
    src: 'app',
    target: 'local',
    dist: 'dist',
    version: require('./package.json').version
  };

  // Project configuration.
  grunt.initConfig({
    app: appConfig,
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      build: ['<%= app.target %>/*']
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          '**.js',
          '<%= app.name %>/<%= app.src %>/javascripts/**/*.js'
        ]
      }
    },

    ngtemplates:  {
      xxApp: {
        cwd: '<%= app.src %>',
        src: 'partials/**/*.html',
        dest: '<%= app.temp %>/template.js'
      }
    },

    // html2js: {
    //   options: {
    //     // custom options, see below
    //   },
    //   xxApp: {
    //     src: ['<%= app.src %>/partials/**/*.html'],
    //     dest: '<%= app.temp %>/templates.js'
    //   }
    // },

    less: {
      production: {
        cleancss: false,
        compress: false
      },
      compile: {
        files: {
          '<%= app.temp %>/global.css': '<%= app.src %>/stylesheets/global.less',
          '<%= app.temp %>/<% app.name %>.main.css': '<%= app.src %>/stylesheets/<%= app.name %>.main.less',
          '<%= app.temp %>/user/user.css': '<%= app.src %>/stylesheets/user/user.less',
          '<%= app.temp %>/note/note.css': '<%= app.src %>/stylesheets/note/note.less'
        }
      }
    },

    bower_concat: {
      js: {
        options: {separator: ';\n'},
        dest: '<%= app.temp %>/bower_concat.js',
        mainFiles: {
          'bootstrap': ['dist/js/bootstrap.min.js']
        }
      },
      css: {
        cssDest: '<%= app.temp %>/bower_concat.css',
        include: ['bootstrap'],
        mainFiles: {
          'bootstrap': ['dist/css/bootstrap.min.css', 'js/popover.js']
        }
      }
    },

    concat: {
      dist: {
        files: {
          '<%= app.target %>/<%= app.dist %>/<%= app.name %>.min.js': [
            '<%= app.src %>/javascripts/*.js',
            '<%= app.temp %>/template.js',
            '<%= app.src %>/javascripts/**/*.js'
          ],
          '<%= app.target %>/<%= app.dist %>/<%= app.name %>.vendor.min.js': [
            '<%= app.temp %>/bower_concat.js'
          ],
          '<%= app.temp %>/<%= app.name %>.concat.css': [
            '<%= app.temp %>/bower_concat.css',
            '<%= app.src %>/stylesheets/*.css',
            '<%= app.temp %>/global.css',
            '<%= app.temp %>/<% app.name %>.main.css',
            '<%= app.temp %>/user/*.css',
            '<%= app.temp %>/note/*.css'
          ]
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
          files: {
            // '<%= app.target %>/<%= app.dist %>/<%= app.name %>.min.js': '<%= app.target %>/<%= app.dist %>/<%= app.name %>.min.js',
            '<%= app.target %>/<%= app.dist %>/<%= app.name %>.vendor.min.js': '<%= app.target %>/<%= app.dist %>/<%= app.name %>.vendor.min.js'
          }
      }
    },

    cssmin: {
      all: {
        options: {
          keepBreaks: false
        },
        files: {
          '<%= app.target %>/<%= app.dist %>/<%= app.name %>.min.css': '<%= app.temp %>/<%= app.name %>.concat.css'
        }
      }
    },

    watch: {
      options: {
        livereload: 35729
      },
      less: {
        files: ['<%= app.src %>/stylesheets/*.less', '<%= app.src %>/stylesheets/**/*.less'],
        tasks: ['less']
      },
      css: {
        files: ['<%= app.temp %>/*.css', '<%= app.src %>/stylesheets/*.css'],
        tasks: ['concat', 'cssmin', 'sync:dev']
      },
      js: {
        files: ['<%= app.src %>/javascripts/*.js', '<%= app.src %>/javascripts/**/*.js'],
        tasks: ['concat', 'uglify', 'sync:dev']
      },
      html: {
        files: ['<%= app.src %>/htmls/*.html', '<%= app.src %>/htmls/**/*.html', '<%= app.src %>/partials/**/*.html'],
        tasks: ['ngtemplates', 'concat', 'sync:dev']
      }
    },

    sync: {
      dev: {
        files: [
          {cwd: '<%= app.src %>', src: ['fonts/**', 'images/**'], dest: '<%= app.target %>'},
          {cwd: '<%= app.src %>/htmls', src: ['**/*'], dest: '<%= app.target %>'}
        ]
      }
    },

    connect: {
      server: {
        options: {
          port: 8599,
          base: '.',
          livereload: 35729
        }
      }
    }
  });

  // 默认被执行的任务列表。
  grunt.registerTask('build', ['clean:build', 'ngtemplates', 'jshint', 'less', 'bower_concat', 'concat', 'cssmin']);

  grunt.registerTask('default', ['build', 'uglify', 'sync:dev', 'connect', 'watch']);

};