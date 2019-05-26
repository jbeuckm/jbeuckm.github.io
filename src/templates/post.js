import React from "react"
import { Helmet } from "react-helmet"
import "./post.css"

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
      <Helmet>
        <title>"{post.frontmatter.title}" - from Joe Beuckman</title>
        <meta name="keywords" content={post.frontmatter.tags.join(", ")} />
      </Helmet>

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
      <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
      <dl>
        {post.frontmatter.tags.map(tag => (
          <dt key={tag}>{tag}</dt>
        ))}
      </dl>

      <article dangerouslySetInnerHTML={{ __html: post.html }} />
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
