/**
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: "Torus",
  },
  plugins: [
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
            allMarkdownRemark(limit: 1000) {
              edges {
                node {
                  html
                  id
                  frontmatter {
                    path
                    title
                    date
                    tags
                  }
                }
              }
            }
          }
        `,
        // feedMeta: {
        //   author: {
        //     name: author,
        //   },
        //   description: siteDescription,
        //   favicon: `${siteUrl}/icons/icon-48x48.png`,
        //   title: siteTitle,
        // },
        serializeFeed: results =>
          results.data.allMarkdownRemark.edges.map(({ node }) => ({
            id: node.id,
            url: node.frontmatter.path,
            title: node.frontmatter.title,
            date: new Date(node.frontmatter.date).toISOString(),
            tags: node.frontmatter.tags,
            //            hexagonImages: node.frontmatter.hexagonImages,
          })),
        nodesPerFeedFile: 1000,
      },
    },
  ],
}
