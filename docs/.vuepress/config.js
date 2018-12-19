module.exports = {
    title: 'Numigi Test Docs',
    description: "La documentation Test de Numigi avec VuePress",
    themeConfig:{
        nav: [
            { text: 'PRESENTATION', link: '/presentation/presentation' },
            { text: 'GUIDE', link: '/guide/' },
        ],
        lastUpdated: 'Last Updated', // string | boolean
        sidebar: [
          {
            title: 'Presentation',
            collapsable: false,
            children: [
             '',      /* /bar/ */
                '/presentation/presentation'
            ]
          },
            {
              title: 'Counter',
              collapsable: false,
              children: [
                '/counter/counter-app' ]
            },
            {
              title: 'API Guide',
              collapsable: false,
              children: [
                  '/guide/guide',
                  '/guide/api' ]
            }
          ]
    }
}
