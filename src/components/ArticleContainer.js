import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import ArticleItem from "./ArticleItem"


const ArticleContainer = () => {
  return (
      <ArticleItemsWrapper>
        <ArticleItem />
      </ArticleItemsWrapper>
  )

}

// <div><ReadMoreLink to={"/article"}> <ArticleBtn>ALL ARTICLES</ArticleBtn></ReadMoreLink></div>

export default ArticleContainer


const ArticleItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #d8d8d8;
  max-width: 100%;
  justify-content: space-between;

`
