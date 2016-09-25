module.exports = {
    options: {
        prefix: 'icon-',
        includedemo: false,
        cleanupdefs: true,
        formatting: {
            indent_size: 4
        },
        svg: {
            xmlns: 'http://www.w3.org/2000/svg'
        }
    },

    default: {
        files: {
            '<%= project.dir.static %>/images/icons.svg' : '<%= project.dir.tmp %>/svg/icons/*.svg',
            '<%= project.dir.static %>/images/flags.svg' : '<%= project.dir.tmp %>/svg/flags/*.svg'
        }
    }
};
