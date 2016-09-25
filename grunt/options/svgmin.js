module.exports = {

    flags: {
        expand: true,
        cwd: '<%= project.dir.svg %>/flags',
        src: ['*.svg'],
        dest: '<%= project.dir.tmp %>/svg/flags'
    },

    icons: {
        expand: true,
        cwd: '<%= project.dir.svg %>/icons',
        src: ['*.svg'],
        dest: '<%= project.dir.tmp %>/svg/icons'
    }
};
