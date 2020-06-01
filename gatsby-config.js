module.exports = {
  siteMetadata: {
    title: `louiscklaw portfolio`,
    description: `This will be my great portfolio website`,
    author: `@louiscklaw`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `louiscklaw portfolio`,
        short_name: `louis_portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/project-details`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`
  ],
}
