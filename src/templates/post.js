import React from "react"

const styles = {
  container: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 600,
  },
  navLinks: {
    width: "100%",
    position: "relative",
    height: 15,
  },
  leftButton: {
    position: "absolute",
    left: 0,
  },
  rightButton: {
    position: "absolute",
    right: 0,
  },
}

export default function Template({ data, pathContext: { prev, next } }) {
  const { markdownRemark: post } = data

  return (
    <div style={styles.container}>
      <div style={styles.navLinks}>
        {prev && (
          <span style={styles.leftButton}>
            <a href={prev.frontmatter.path}>prev</a>
          </span>
        )}
        {next && (
          <span style={styles.rightButton}>
            <a href={next.frontmatter.path}>next</a>
          </span>
        )}
      </div>

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
