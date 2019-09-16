import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import ArticleItem from "./ArticleItem"


const ArticleContainer = () => {
  return (
    <Container>
      <ArticleItemsWrapper>
        <ArticleItem />
      </ArticleItemsWrapper>
    </Container>
  )

}

// <div><ReadMoreLink to={"/article"}> <ArticleBtn>ALL ARTICLES</ArticleBtn></ReadMoreLink></div>

export default ArticleContainer


const Container = styled.div`
padding-left: 200px;
padding-right: 200px;


`
const ArticleItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #d8d8d8;
  max-width: 100%;
  justify-content: space-between;

`
