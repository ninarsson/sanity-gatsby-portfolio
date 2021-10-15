export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6168dffb812de627fbc5804e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6yibaj5s',
                  apiId: 'ace712dc-4b96-4d19-913b-3a94d3aab9d7'
                },
                {
                  buildHookId: '6168dffb48fee4244d3a2b59',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-68phj43z',
                  apiId: '0e7dad6e-1959-4d28-8c4b-a5fa7619ac32'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ninarsson/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-68phj43z.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
