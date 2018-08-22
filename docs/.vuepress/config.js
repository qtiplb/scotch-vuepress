module.exports = {
    title: 'Scotch VuePress',
    description: "A demo documentation using VuePress",
    themeConfig:{
        nav: [
            { text: 'COUNTER', link: '/counter/' },
            { text: 'GUIDE', link: '/guide/' },
        ],
        sidebar: [
            {
              title: 'Counter',
              collapsable: false,
              children: [
                '/counter/counter-app'
              ]
            },
            {
              title: 'API Guide',
              collapsable: false,
              children: [
                  '/guide/guide',
                  '/guide/api'
              ]
            }
          ],
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'qtiplb/scotch-vuepress',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',

    // Optional options for generating "Edit this page" link
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'dev',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!'
    }
}
