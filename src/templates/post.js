import React from "react"

const styles = {
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 600,
  },
}

export default function Template({ data }) {
  const { markdownRemark: post } = data

  return (
    <div style={styles.container}>
      <h1>{post.frontmatter.title}</h1>
      <h3>{post.frontmatter.date}</h3>
      <div>{post.frontmatter.tags.join(", ")}</div>

      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        date
        tags
      }
    }
  }
`
