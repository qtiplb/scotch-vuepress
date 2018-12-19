module.exports = {
    title: 'Numigi Test Docs',
    description: "La documentation Test de Numigi avec VuePress",
    themeConfig:{
        nav: [
            { text: 'PRESENTATION', link: '/presentation/presentation' },
            { text: 'GUIDE', link: '/guide/' },
        ],
        lastUpdated: 'Last Updated', // string | boolean
        displayAllHeaders: true,
        sidebar: [
          {
            title: 'Presentation',
            collapsable: false,
            children: [
                '/presentation/presentation'
                '/presentation/presentation2'
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
          ],
        repo: 'qtiplb/scotch-vuepress',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'demo',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Améliorer cette page :pencil:!'
    }
}
