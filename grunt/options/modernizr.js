module.exports = {
  tmp: {
    cache: true,
    dest: '<%= project.dir.tmp %>/js/modernizr.js',
    files: {
      src: [
        '<%= project.dir.js %>/**/*.js',
        '<%= project.dir.less %>/**/*.{css, less}'
      ]
    },
    options: [ "setClasses" ]
  }
};
