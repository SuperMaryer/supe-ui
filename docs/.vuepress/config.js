module.exports = {
    title: "supe-ui",
    description: "vue component and demo",
    base: "/supe-ui/",
    themeConfig: {
        nav: [~
            { text: "Home", link: "/" },
            { text: "Github", link: "https://github.com/Supermaryer/supe-ui" },
            { text: "VuePress", link: "https://vuepress.vuejs.org/" },
        ],
        sidebar: [
            "/", 
            "/componentDocs/card"
        ],
    }
}