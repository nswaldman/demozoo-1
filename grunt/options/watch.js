module.exports = {

    'default': {
        files: ['<%= project.dir.less %>/**/*.less'],
        tasks: ['less'],
        options: {
            livereload: true
        }
    }
};
