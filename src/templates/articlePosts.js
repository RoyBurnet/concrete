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

          <ReadMoreWrapper>
            <ReadMoreLink to={"/article"}>
              {" "}
              <ReadMoreBtn>More</ReadMoreBtn>
            </ReadMoreLink>
          </ReadMoreWrapper>
        </Layout>
      </div>
    </>
  )
}

const ReadMoreBtn = styled.button`
  color: white;
  border-radius: 6px;
  text-decoration: none;
  border: none;
  background-color: #d8d8d8;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 150px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`

const ReadMoreWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
`

const ReadMoreLink = styled(Link)`
  display: block;
  justify-content: center;
  text-align: center;
`
