import React from "react"

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => <div>{edges.map(JSON.stringify)}</div>

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
