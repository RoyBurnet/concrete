import React from "react"
import { Link } from "gatsby"

import styled from "styled-components"

const GridContainerItemCard = styled.div`
  height: 191px;
  margin-bottom: 50px;
`

const ArticleThumbnailCover = styled.div`
  background-color: #ff0099;
  opacity: 0.5;
  height: 191px;
  width: 276px;
  position: absolute;
  z-index: 10;
  clip-path: polygon(0 0, 0 100%, 100% 0);
`

const GridContainerThumbnailImage = styled.img`
  width: 100%;
`

const LinkTag = styled(Link)`
  color: white;
  &:hover {
    text-decoration: none;
    color: white;
  }
`
const Title = styled.div`
font-family: couture;
    color: #ff0099;
    margin: 0;
    font-size: 40px;
    margin-top: 50px;
    margin-bottom: 50px;
`

const ListItem = props => {
  return (
    <LinkTag to={`/article/${props.data.node.slug}`}>
      {console.log(props)}
      <GridContainerItemCard>
        <ArticleThumbnailCover>
          <div
            style={{
              marginLeft: "5px",
              fontSize: "20px",
              zIndex: "100",
            }}
          >
            {" "}
            {props.data.node.title}
          </div>
        </ArticleThumbnailCover>
        <GridContainerThumbnailImage
          src={props.data.node.featured_media.source_url}
        />
      </GridContainerItemCard>
    </LinkTag>
  )
}

export default ListItem
