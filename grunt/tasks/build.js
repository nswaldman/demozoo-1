module.exports = function (grunt) {

    grunt.registerTask('build', [
        'less',
        'svgmin',
        'svgstore'
    ]);
};
