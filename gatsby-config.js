require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `louiscklaw portfolio`,
    description: `This is the portfolio of louiscklaw`,
    author: `@louiscklaw`,
    siteUrl: `https://portfolio.louislabs.com`,
  },
  plugins: [
    `gatsby-plugin-sass`,
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
        background_color: `#2C3E50`,
        theme_color: `#2C3E50`,
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
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [
          `/test-markdown`,
          `/test*`,
          `/project1`,
          `/project2`,
          `/favourite_link`,
          `/self-intro`
        ]
      }
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-plugin-no-sourcemaps",
    }
  ],
}
