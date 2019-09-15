import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import styled from "styled-components"

const ArticleItem = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpArticle(limit: 6) {
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
              }
            }
          }
        }
      `}
      render={props => (
        <>
          {props.allWordpressWpArticle.edges.map(articleItem => (
            <LinkTag to={`/article/${articleItem.node.slug}`}>
              <ArticleItemCard key={articleItem.node.id}>
                <ArticleThumbnailCover>
                  <div
                    style={{
                      marginLeft: "5px",
                      fontSize: "20px",
                      zIndex: "100",
                    }}
                  >
                    {" "}
                    {articleItem.node.title}
                  </div>
                </ArticleThumbnailCover>
                <ArticleThumbnailImage
                  src={articleItem.node.featured_media.source_url}
                />
                {/* <ArticleTextExcerpt>
                  <h6>
                    <strong>{articleItem.node.title}</strong>
                  </h6>
                  <ExcerptContent
                    dangerouslySetInnerHTML={{
                      __html: !(articleItem.node.excerpt > 75)
                        ? articleItem.node.excerpt.substring(0, 75) + "..."
                        : articleItem.node.excerpt,
                    }}
                  />

                </ArticleTextExcerpt> */}
              </ArticleItemCard>
            </LinkTag>
          ))}
        </>
      )}
    />
  )
}

const ArticleThumbnailCover = styled.div`
  background-color: #ff0099;
  opacity: 0.5;
  height: 191px;
  width: 276px;
  position: absolute;
  z-index: 10;
  clip-path: polygon(0 0, 0 100%, 100% 0);
`

const ArticleItemCard = styled.div`
  height: 191px;
  margin-bottom: 50px;
`

const ArticleThumbnailImage = styled.img`
  width: 100%;
`

const ArticleReadMoreBtn = styled.div`
  color: black;
  border-radius: 6px;
  text-decoration: none;
  border: none;
  background-color: #d8d8d8;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.08);
  height: 10px;
`

const ExcerptContent = styled.div`
  height: 70px;
`

const LinkTag = styled(Link)`
  color: white;
  &:hover {
    text-decoration: none;
    color: white;
  }
`



export default ArticleItem
