module.exports = function (grunt) {

    grunt.registerTask('default', [
        'less',
        'svgmin',
        'svgstore',
        'watch'
    ]);
};
