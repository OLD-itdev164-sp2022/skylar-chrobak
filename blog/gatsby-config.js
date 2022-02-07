module.exports = {
  siteMetadata: {
    title: `Skylar's Gatsby Blog`,
    description: `The blog of Skylar for ITDEV-164.`,
    author: `@skytheITgal`,
    //siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
    contact: {
      name: 'Skylar C.',
      company: 'Blogging LTD',
      address: 'Milwaukee, Wi'
    }
  },
  plugins: [
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `dgitkyr5sjv9`,
      accessToken: `hOd771HiMbJb8AhxoVyOgePF4vQaUB3_U8Q1HkD-BCA`
    }
  },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
