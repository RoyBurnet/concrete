import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const GridContainerItemCard = styled.div`
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

const GridContainerThumbnailImage = styled.img`
  width: 100%;
  max-height: 180px;
  flex: 1;
`

const GridContainerTextExcerpt = styled.div`
  color: black;
  width: 100%;
  padding: 6px;
  flex: 2;
`

const ExcerptContent = styled.div`
  height: 70px;
`

const CardItemReadMoreBtn = styled.button`
  color: black;
  border-radius: 6px;
  text-decoration: none;
  text-decoration: none;
  border: none;
  background-color: #d8d8d8;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.08);
`

const LinkTag = styled(Link)`
  color: white;
  &:hover {
    text-decoration: none;
    color: white;
  }
`

const GridContainerItem = props => {
  return (
    <LinkTag to={`/article/${props.data.node.slug}`}>
      <GridContainerItemCard>
        <GridContainerThumbnailImage
          src={props.data.node.featured_media.source_url}
        />
        <GridContainerTextExcerpt>
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
        </GridContainerTextExcerpt>
      </GridContainerItemCard>
    </LinkTag>
  )
}

export default GridContainerItem
