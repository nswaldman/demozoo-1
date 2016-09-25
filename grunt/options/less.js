module.exports = {

    default: {
        options: {
            cleancss: true,
            compress: true,
            ieCompat: false,
            plugins: [
                require('less-plugin-glob'),
                new (require('less-plugin-autoprefix'))({browsers: ['last 2 versions', 'Explorer 9']})
            ]
        },
        files: {
            '<%= project.dir.static %>/css/layout.css': '<%= project.dir.less %>/layout.less'
        },
        flatten: true
    }
};
