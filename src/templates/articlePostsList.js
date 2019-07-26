import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner"
import ListContainer from "../components/ListContainer"
import ListItem from "../components/ListItem"
import { Link } from "gatsby"
import styled from "styled-components"
import Logo from "../images/logo.png"

const Pagination = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
`

const PagenumberWrapper = styled.div`
  border: 1px solid #eee;
  background: ${props => (props.isCurrentPage ? "#eee" : "white")};
`

const Pagenumber = styled(Link)`
  color: black;
  display: block;
  padding: 8px 16px;

  &:hover{
    color: black
  }
`

export default ({ pageContext }) => {
  return (
    <Layout>
      <br />
      <br />
      <br />
      <ListContainer>
        {pageContext.articles.map(article => {
          return <ListItem data={article} />
        })}
      </ListContainer>
      <Pagination>
        {Array.from({ length: pageContext.numberOfPages }).map(
          (page, index) => (
            <PagenumberWrapper
              key={index}
              isCurrentPage={index + 1 === pageContext.currentPage}
            >
              <Pagenumber
                to={index === 0 ? "/article" : `/article/${index + 1}`}
              >
                {index + 1}
              </Pagenumber>
            </PagenumberWrapper>
          )
        )}
      </Pagination>
      <br />
      <br />
      <br />
      <br />
      <br />
    </Layout>
  )
}
