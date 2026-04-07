module.exports = function(grunt){

    //configer grunt
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify : {
            options: {
                    mangle: false
                    },
                    my_target: {
                    files: {
                        './app/main.min.js': ['js/main.js']
                    }
                }
        }, // uglify ends here

        sass : {
            dist: {
                options : {
                    style: 'compressed' 

                },
                files: {
                    
                     './app/style.min.css': './sass/main.sass'
              }

            }
            
        } // sass ends here
    });

    //Loading Plugins
    grunt.loadNpmTasks('grunt-contrib-uglify'); 
    grunt.loadNpmTasks('grunt-contrib-sass'); 

    // Default task(s).
     grunt.registerTask('default', 'sass');
     grunt.registerTask('js', 'uglify');
}