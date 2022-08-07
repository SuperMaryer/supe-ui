module.exports = {
    title: "supe-ui",
    description: "vue component and demo",
    base: "/supe-ui/",
    themeConfig: {
        siteTitle: "Supe",
        logo: "/logo.png",
        nav: [
            { text: "Home", link: "/" },
            { text: "Github", link: "https://github.com/supermaryer/supe-ui" },
            { text: "VuePress", link: "https://vuepress.vuejs.org/" },
            // 下拉
            // {
            //     text: "Drop Menu",
            //     items: [
            //       { text: 'Item A', link: '/item-1' },
            //       { text: 'Item B', link: '/item-2' },
            //       { text: 'Item C', link: '/item-3' }
            //     ]
            // }
            {
                text: "Drop Menu",
                items: [
                  {
                    items: [
                      { text: "Item A1", link: "/item-A1" },
                      { text: "Item A2", link: "/item-A2" },
                    ],
                  },
                  {
                    items: [
                      { text: "Item B1", link: "/item-B1" },
                      { text: "Item B2", link: "/item-B2" },
                    ],
                  },
                ],
              },
        ],
        sidebar: [
            "/", 
            "/componentDocs/card",
            "/componentDocs/time-period-list",
            "/componentDocs/content-section",
        ],
    },
    plugins: [
        // require('./my-plugin.js'),
        ['dynamic-title', {
            showIcon: '/logo.png',
            showText: '客官欢迎回来~',
            hideIcon: '/logo.png',
            hideText: '客官不要走嘛~',
            recoverTime: 2000,
        }]
    ]
}