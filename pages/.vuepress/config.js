module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/projects/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: ['/','projects/']
    }
};