/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: " Ajeet Chaulagain",
    author: "Ajeet Chaulagain",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },

    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
              withWebp: true,
              linkImagesToOriginal: false,
              quality: 80,
            },
          },
        ],
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          // include: `${__dirname}/src/`
        },
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-54342929-2",
      },
    },

  ],

  pathPrefix: "/gatsby-portfolio",
}
