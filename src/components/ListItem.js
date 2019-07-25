import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const ArticleItemCard = styled.div`
  width: 363px;
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
`

const ArticleReadMoreBtn = styled.button`
  color: black;
  border-radius: 6px;
  text-decoration: none;
`

const ExcerptContent = styled.div`
  height: 70px;
`

const ListItem = props => {
  return (

      <ArticleItemCard key={props.data.node.wordpress_id}>
        <ArticleThumbnailImage
          src={props.data.node.featured_media.source_url}
        />
        <ArticleTextExcerpt>
          <h6>
            <strong>{props.data.node.title}</strong>
          </h6>
          <ExcerptContent
            dangerouslySetInnerHTML={{
              __html: !(props.data.node.excerpt > 75)
                ? props.data.node.excerpt.substring(0, 75) + "..."
                : props.data.node.excerpt,
            }}
          />
          <ArticleReadMoreBtn>
          <Link to={`/article/${props.data.node.slug}`}>
            Read
          </Link>
            </ArticleReadMoreBtn>
        </ArticleTextExcerpt>
      </ArticleItemCard>
  )
}

export default ListItem
