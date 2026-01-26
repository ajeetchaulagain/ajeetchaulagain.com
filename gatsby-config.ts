import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Ajeet Chaulagain`,
    author: `Ajeet Chaulagain`,
    description: `Personal site of Ajeet Chaulagain sharing articles related 
    to all things modern software development`,
    siteUrl: `https://ajeetchaulagain.com/`,
    image: '/ajeet.jpg',
    twitterUsername: '@ajeetsweb',
  },
  plugins: [
    // --------------------------------------------------------------------
    // Meta, Sitemap and Analytics
    // --------------------------------------------------------------------

    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-sitemap',
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-54342929-2',
      },
    },

    // --------------------------------------------------------------------
    // Images, Stylings and Static
    // --------------------------------------------------------------------

    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          // include: `${__dirname}/src/`
        },
      },
    },

    // --------------------------------------------------------------------
    // Linting
    // --------------------------------------------------------------------

    // Disabled due to CLIEngine deprecation in Gatsby v5
    // {
    //   resolve: 'gatsby-plugin-prettier-eslint',
    //   options: {
    //     cwd: process.cwd(),
    //     watch: true,
    //     initialScan: true,
    //     onChangeFullScanLint: false,
    //     onChangeFullScanFormat: false,
    //     prettierLast: false,
    //     ignorePatterns: [
    //       '**/node_modules/**/*',
    //       '**/.git/**/*',
    //       '**/dist/**/*',
    //       '.cache/**/*',
    //       'public/**/*',
    //     ],
    //     prettier: {
    //       patterns: [],
    //       ignorePatterns: [],
    //       customOptions: {},
    //     },
    //     eslint: {
    //       patterns: [],
    //       ignorePatterns: [],
    //       formatter: 'stylish',
    //       maxWarnings: undefined,
    //       emitWarning: true,
    //       failOnError: false,
    //       failOnWarning: false,
    //       plugins: [],
    //       customOptions: {},
    //     },
    //   },
    // },

    // --------------------------------------------------------------------
    // Markdown
    // --------------------------------------------------------------------
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 735,
              withWebp: true,
              linkImagesToOriginal: false,
              quality: 80,
              loading: 'lazy',
              tracedSVG: true,
            },
          },

          {
            resolve: 'gatsby-remark-code-titles',
            options: {
              className: 'gatsby-remark-code-title-wrapper',
            },
          },

          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'superscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      },
    },
  ],

  pathPrefix: '/gatsby-portfolio',
};

export default config;
