module.exports = {
  siteMetadata: {
    title: 'gatsby-example-using-remark-rehype-images',
    author: '@oorestisime',
    description: 'Join the Remark rehype wagon',
    homepage: 'https://www.gatsbyjs.org',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-rehype-images',
            // resolve: require.resolve('..'),
            options: {
              tag: 'rehype-image',
              sharpFunction: 'fixed',
              width: 300,
              height: 200,
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
  ],
};
