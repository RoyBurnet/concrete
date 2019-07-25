import React from "react"
import styled from "styled-components"
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

const ArticleContainer = () => {
  return (
    <>
      <ArticleItemsWrapperTitle>Articles</ArticleItemsWrapperTitle>
      <ArticleItemsWrapper>
        <ArticleItem />
        {/* <ArticleItemsWrapperMoreBtn>Read More</ArticleItemsWrapperMoreBtn> */}
      </ArticleItemsWrapper>
    </>
  )
}

export default ArticleContainer
