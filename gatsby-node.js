// gatsby-node.js
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query data of all Contentful pages
  const result = await graphql(`
    query {
      allContentfulPage {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  // Dynamically create a page for each Contentful entry, passing the slug for URL generation
  result.data.allContentfulPage.edges.forEach(({ node }) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/contentful-page-template.js`),
      context: {
        slug: node.slug,
      },
    })
  })
}
