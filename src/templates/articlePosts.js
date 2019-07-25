import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import Banner from "../components/Banner"
import GridContainer from "../components/GridContainer"

import { graphql, StaticQuery, Link } from "gatsby"

export default ({ pageContext }) => {
  return (
    <>
      <div>
        <Layout>
          <br />
          <br />
          <br />
          <Banner background={pageContext.featured_media.source_url} />
          <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
          <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
          <StaticQuery
            query={graphql`
              {
                allWordpressWpArticle(limit: 3) {
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
            `}
            render={props => (
              <div>
                <GridContainer data={props.allWordpressWpArticle.edges} />
              </div>
            )}
          />
        </Layout>
      </div>
    </>
  )
}
