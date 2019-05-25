const {
  pluck,
  pipe,
  map,
  path,
  filter,
  propEq,
  flatten,
  reject,
  pathEq,
  evolve,
} = require("ramda")

/**
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: "Torus",
  },
  plugins: [
    //    `gatsby-transformer-sharp`,
    //    `gatsby-plugin-sharp`,
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
        plugins: [
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              // `ignoreFileExtensions` defaults to [`png`, `jpg`, `jpeg`, `bmp`, `tiff`]
              // as we assume you'll use gatsby-remark-images to handle
              // images in markdown as it automatically creates responsive
              // versions of images.
              //
              // If you'd like to not use gatsby-remark-images and just copy your
              // original images to the public directory, set
              // `ignoreFileExtensions` to an empty array.
              ignoreFileExtensions: [],
            },
          },
          {
            resolve: "gatsby-remark-audio",
            options: {
              preload: "auto",
              loop: false,
              controls: true,
              muted: false,
              autoplay: false,
            },
          },
        ],
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
        frontmatter {
          sourcePath
        }
        htmlAst
      }
    }
  }
}        `,
        serializeFeed: results => {
          const nodes = results.data.allMarkdownRemark.edges

          const children = pipe(
            pluck("node"),
            reject(pathEq(["frontmatter", "sourcePath"], null)),
            map(node => ({
              link: node.frontmatter.sourcePath,
              htmlAst: node.htmlAst,
            })),
            map(({ link, htmlAst }) => ({
              link,
              images: imagesFromAst(htmlAst),
            })),
            map(
              evolve({
                images: map(path(["properties", "src"])),
              })
            )
          )(nodes)

          console.log("ast", { children })

          return children
        },
        nodesPerFeedFile: 1000,
      },
    },
  ],
}

const imagesFromAst = htmlAst => {
  const findImageTags = node => {
    if (node.children) {
      const myTags = node.children.filter(propEq("tagName", "img"))
      const childrensTags = node.children.map(findImageTags)

      return [...myTags, ...flatten(childrensTags)]
    } else {
      return []
    }
  }

  try {
    const imageElements = findImageTags(htmlAst)
    return imageElements
  } catch (error) {
    console.log(error)
    return []
  }
}
