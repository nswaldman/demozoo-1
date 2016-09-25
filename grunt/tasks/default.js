module.exports = function(grunt) {

  grunt.registerTask('dev', [
    'less',
    'svgmin',
    'svgstore',
      'watch'
  ]);
};
