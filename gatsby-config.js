/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `<MyPortfolio /> | Ryan Wassom`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Hi! I'm front-end web developer with a passion for creating dynamic and engaging user experiences. Proficient in React, Javascript, HTML, CSS, SASS, and including experience with GraphQL, I leverage my expertise in these various technologies to build responsive and visually appealing web applications.`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Alegreya\:400,700,800`, `Rubik\:400,600,700`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
      },
    },
    `gatsby-plugin-image`,
  ],
}
