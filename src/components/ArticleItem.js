import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"

import styled from "styled-components"

const ArticleItemCard = styled.div`
  width: 300px;
  height: 321px;
  border: 1px solid #efefef;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: background 300ms ease-in 5s;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.08);

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.08);
  }
`

const ArticleThumbnailImage = styled.img`
  width: 100%;
  max-height: 180px;
  flex: 1;
`

const ArticleTextExcerpt = styled.div`
  max-width: 100%;
  padding: 6px;
  flex: 2;
  color: black;
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

const ArticleItem = () => {
  return (
    <StaticQuery
      query={graphql`
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
                <ArticleThumbnailImage
                  src={articleItem.node.featured_media.source_url}
                />
                <ArticleTextExcerpt>
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

                </ArticleTextExcerpt>
              </ArticleItemCard>
            </LinkTag>
          ))}
        </>
      )}
    />
  )
}

export default ArticleItem
