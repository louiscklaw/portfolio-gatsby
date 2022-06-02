module.exports = {
  plugins: [
    "gatsby-plugin-top-layout",
    "gatsby-plugin-react-helmet",
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    "gatsby-plugin-mui-emotion",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Nunito"],
        },
      },
    },
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-react-svg/
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
  ],
  siteMetadata: {
    title: "My page",
  },
};
