import React from "react"

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <ul>
    {edges.map(({ node }) => (
      <li>
        <h3>
          <a href={node.frontmatter.path}>{node.frontmatter.title}</a>
        </h3>
      </li>
    ))}
  </ul>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date
            tags
          }
        }
      }
    }
  }
`
