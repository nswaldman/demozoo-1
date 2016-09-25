module.exports = {
    options: {
        coast: true,
        tileBlackWhite: false
    },

    'default': {
        src: '<%= project.dir.src %>/favicons/favicon.png',
        dest: '<%= project.dir.static %>/images/favicons/'
    }
};
