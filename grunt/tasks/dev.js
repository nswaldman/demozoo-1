module.exports = function(grunt) {

    grunt.registerTask('build', [
        'less',
        'svgmin',
        'svgstore'
    ]);
    
//   grunt.registerTask('build-html', [
//     'clean:tmp',
//     'clean:dist',
//     'swig:html',
//     'sync:html',
//     'less:html',
//     'modernizr:tmp',
//     'svgmin:tmp',
//     'uglify:html',
//     'svgstore:html',
//     //'favicons:html-amolf',
//     //'favicons:html-arcnl'
//   ]);
//
//   grunt.registerTask('build-dev', [
//     'clean:tmp',
//     'clean:dev',
//     'mkdir:dev',
//     'shell:composer',
//     'symlink:dev',
// //  'sync:config-dev',
//     'sync:dev',
//     'less:dev',
//     'modernizr:tmp',
//     'svgmin:tmp',
//     'uglify:dev',
//     'svgstore:dev',
//     'favicons:dev-amolf',
//     'favicons:dev-arcnl'
//   ]);
//
//   grunt.registerTask('build-amolf', [
//     'clean:tmp',
//     'clean:dist',
//     'mkdir:dist',
//     'shell:composer',
//     'shell:dist-touch',
//     'sync:dist',
//     'less:dist',
//     'modernizr:tmp',
//     'svgmin:tmp',
//     'uglify:dist',
//     'svgstore:dist',
//     'imagemin:dist',
//     'favicons:dist-amolf',
//     'favicons:dist-arcnl'
//   ]);
//
//   grunt.registerTask('build-arcnl', [
//     'clean:tmp',
//     'clean:dist',
//     'mkdir:dist',
//     'shell:composer',
//     'shell:dist-touch',
//     'sync:dist',
//     'less:dist',
//     'modernizr:tmp',
//     'svgmin:tmp',
//     'uglify:dist',
//     'svgstore:dist',
//     'imagemin:dist',
//     'favicons:dist-amolf',
//     'favicons:dist-arcnl'
//   ]);
//
//   grunt.registerTask('build-amolf-staging', [
//     'build-amolf',
//     'sync:config-amolf-stage'
//   ]);
//
//   grunt.registerTask('build-amolf-live', [
//     'build-amolf',
//     'sync:config-amolf-live'
//   ]);
//
//   grunt.registerTask('build-arcnl-staging', [
//     'build-amolf',
//     'sync:config-arcnl-stage'
//   ]);
//
//   grunt.registerTask('build-arcnl-live', [
//     'build-amolf',
//     'sync:config-arcnl-live'
//   ]);
};
