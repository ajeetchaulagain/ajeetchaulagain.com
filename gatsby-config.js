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
              maxWidth: 800,
              withWebp: true,
              linkImagesToOriginal: false,
              quality:40,
            },
          },
        ],
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],

  pathPrefix: "/gatsby-portfolio",
}
