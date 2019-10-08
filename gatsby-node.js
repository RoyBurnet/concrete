/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions
  createRedirect({
    fromPath: "/",
    toPath: "/home",
    redirectInBrowser: true,
    isPermanent: true,
  })
  return new Promise((resolve, reject) => {
    // The “graphql” function allows us to run arbitrary
    // queries against the local WordPress graphql schema. Think of
    // it like the site has a built-in database constructed
    // from the fetched data that you can run queries against.

    // ==== PAGES (WORDPRESS NATIVE) ====
    graphql(
      `
        {
          allWordpressPage {
            edges {
              node {
                id
                slug
                status
                template
                title
                content
                featured_media {
                  source_url
                }
                author {
                  name
                  link
                }
              }
            }
          }
        }
      `
    )
      .then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create Page pages templates

        const renderComponentFromTemplate = {
          "": path.resolve("./src/templates/page.js"),
          "index_components.php": path.resolve("./src/pages/index.js"),
          "about_components.php": path.resolve("./src/pages/about.js"),
          "author_components.php": path.resolve("./src/pages/author.js"),
        }

        // Create Page pages.

        // We want to create a detailed page for each
        // page node. We'll just use the WordPress Slug for the slug.
        // The Page ID is prefixed with 'PAGE_'
        _.each(result.data.allWordpressPage.edges, edge => {
          // Gatsby uses Redux to manage its internal state.
          // Plugins and sites can use functions like "createPage"
          // to interact with Gatsby.

          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/${edge.node.slug}/`,
            component: slash(renderComponentFromTemplate[edge.node.template]),
            context: edge.node,
          })
        })
      })
      // ==== END PAGES ====

      // ==== ARTICLE POSTS====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpArticle {
                edges {
                  node {
                    id
                    content
                    title
                    excerpt
                    slug
                    featured_media {
                      source_url
                    }
                    author {
                      name
                      link
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const articlePostsTemplate = path.resolve(
            "./src/templates/articlePosts.js"
          )

          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpArticle.edges, edge => {
            createPage({
              path: `/article/${edge.node.slug}/`,
              component: slash(articlePostsTemplate),
              context: edge.node,
            })
          })
        })
        // resolve()
      })
      // ==== END ARTICLE  POSTS ====

      // === Authors pagese =====

      .then(() => {
        graphql(
          `
            {
              allWordpressWpArticle {
                edges {
                  node {
                    featured_media {
                      source_url
                    }
                    author {
                      name
                      link
                      description
                    }
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          const authorPostsTemplate = path.resolve("./src/pages/author.js")

          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpArticle.edges, edge => {
            createPage({
              path: `/author/${edge.node.author.name}/`,
              component: slash(authorPostsTemplate),
              context: edge.node,
            })
          })
        })
        // resolve()
      })

      // ==== ARTICLE COLLECTION ====
      .then(() => {
        graphql(`
          {
            allWordpressWpArticle {
              edges {
                node {
                  excerpt
                  wordpress_id
                  date(formatString: "Do MMM YYYY HH:mm")
                  title
                  slug
                  featured_media {
                    source_url
                  }
                }
              }
            }
          }
        `).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }
          const articles = result.data.allWordpressWpArticle.edges
          const articlesPerPage = 6
          const numberOfPages = Math.ceil(articles.length / articlesPerPage)
          const articlePostListTemplate = path.resolve(
            "./src/templates/articlePostsList.js"
          )

          Array.from({ length: numberOfPages }).forEach((page, index) => {
            createPage({
              component: slash(articlePostListTemplate),
              path: index === 0 ? "/article" : `/article/${index + 1}`,
              context: {
                articles: articles.slice(
                  index * articlesPerPage,
                  index * articlesPerPage + articlesPerPage
                ),
                numberOfPages,
                currentPage: index + 1,
              },
            })
          })

          // resolve()
        })
      })
      // ==== EVENTS COLLECTION ====
      .then(() => {
        graphql(
          `
            {
              allWordpressWpEvent {
                nodes {
                  title
                  slug
                  link
                  content
                  featured_media {
                    source_url
                  }
                }
              }
            }
          `
        ).then(result => {
          if (result.errors) {
            console.log(result.errors)
            reject(result.errors)
          }

          const singleEventTemplate = path.resolve("./src/pages/event.js")

          // We want to create a detailed page for each
          // post node. We'll just use the WordPress Slug for the slug.
          // The Post ID is prefixed with 'POST_'
          _.each(result.data.allWordpressWpEvent.nodes, node => {
            createPage({
              path: `/event/${node.slug}/`,
              component: slash(singleEventTemplate),
              context: node,
            })
          })
        })
        resolve()
      })
  })
}
