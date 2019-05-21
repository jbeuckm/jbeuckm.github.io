/**
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: "Torus",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: ["gatsby-remark-copy-linked-files"],
      },
    },
    {
      resolve: `gatsby-plugin-json-output`,
      options: {
        siteUrl: `https://example.com`,
        graphQLQuery: `
        {
          allMarkdownRemark(sort:{fields:[frontmatter___date] order:DESC}) {
            edges {
              node {
                id
                frontmatter {
                  path
                  title
                  date
                  tags
                  hexagonImages
                }
              }
            }
          }
        }        `,
        serializeFeed: results =>
          results.data.allMarkdownRemark.edges.map(({ node }) => ({
            id: node.id,
            url: node.frontmatter.path,
            title: node.frontmatter.title,
            date: new Date(node.frontmatter.date).toISOString(),
            tags: node.frontmatter.tags,
            hexagonImages: node.frontmatter.hexagonImages,
          })),
        nodesPerFeedFile: 1000,
      },
    },
  ],
}
