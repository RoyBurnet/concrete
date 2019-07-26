import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import ArticleItem from "./ArticleItem"

const ArticleItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #d8d8d8;
`
const ArticleItemsWrapperTitle = styled.div`
  background-color: #d8d8d8;
  width: 80px;
  margin-left: 30px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  color: white;
`

const ArticleItemsWrapperMoreBtn = styled.button`
  background-color: #d8d8d8;
  width: 140px;
  height: 40px;

  border-radius: 16px;
  color: white;
  margin-bottom: 40px;
  margin-top: 20px;
`

const ArticleBtn = styled.button`
  color: white;
  border-radius: 6px;
  text-decoration: none;
  border: none;
  background-color: #d8d8d8;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.08);
  margin: 30px 0px;
  max-width: 300px;
  align-self: center;

  &:hover {
    transform: scale(1.1);
  }
`

const ReadMoreLink = styled(Link)`
  display: block;
  justify-content: center;
  text-align: center;
`

const ArticleContainer = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ArticleItemsWrapperTitle>Articles</ArticleItemsWrapperTitle>
      <ArticleItemsWrapper>
        <ArticleItem />
      </ArticleItemsWrapper>
      <ReadMoreLink to={"/article"}> <ArticleBtn>ALL ARTICLES</ArticleBtn></ReadMoreLink>
    </div>
  )
}

export default ArticleContainer
