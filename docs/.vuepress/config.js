module.exports = {
    title: "supe-ui",
    description: "vue component and demo",
    base: "/supe-ui/",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "Github", link: "https://github.com/supermaryer/supe-ui" },
            { text: "VuePress", link: "https://vuepress.vuejs.org/" },
        ],
        sidebar: [
            "/", 
            "/componentDocs/card",
            "/componentDocs/time-period-list",
            "/componentDocs/content-section",
        ],
    },
    // plugins: [
    //     // require('./my-plugin.js'),
    //     // ['dynamic-title', {
    //     //     showIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
    //     //     showText: '客官欢迎回来~',
    //     //     hideIcon: 'https://www.typescriptlang.org/favicon-32x32.png?v=8944a05a8b601855de116c8a56d3b3ae',
    //     //     hideText: '客官不要走嘛~',
    //     //     recoverTime: 2000,
    //     //    }],
    //     // 'lodash'
    // ]
}