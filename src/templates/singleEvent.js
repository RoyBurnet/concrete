import React from "react"
import Layout2 from "../components/layout2"
import styled from "styled-components"
import Banner from "../components/Banner"
import GridContainer from "../components/GridContainer"
import ArticleSubContainer from "../components/ArticleSubContainer"
import Events from "../components/Events"

import { graphql, StaticQuery, Link } from "gatsby"

export default ({ pageContext }) => {
  console.log(pageContext)
  return (
    <>
      <div>
        <Layout2>
          <div>
            <HeroBanner>
              <Title dangerouslySetInnerHTML={{ __html: pageContext.title }} />
              <Banner background={pageContext.featured_media.source_url} />
            </HeroBanner>
            <Content>
              <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
            </Content>
          </div>
          <EventContainer>
            <Events />
          </EventContainer>
        </Layout2>
      </div>
    </>
  )
}

const HeroBanner = styled.div`
  position: relative;
`

const AuthorName = styled.div`
color: rgb(255, 0, 153);
`

const Title = styled.div`
  position: absolute;
  top: 450px;
  font-size: 110px;
  font-weight: bold;
  line-height: 0.8;
  color: rgb(255, 0, 153);
  margin-left: 80px;
`

const EventContainer = styled.div`
  margin-left: 200px;
`

const Content = styled.div`
  margin-left: 100px;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 600px;
  color: #ff0099;
`

const TitleText = styled.h1`
  font-size: 110px;
  font-weight: bold;
  line-height: 0.8;

  max-width: 600px;
`

const textContent = styled.div`
  padding: op 5px;
`

// const ReadMoreBtn = styled.button`
//   color: white;
//   border-radius: 6px;
//   text-decoration: none;
//   border: none;
//   background-color: #d8d8d8;
//   box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.08);
//   margin-bottom: 150px;
//   transition: all 0.2s ease-in-out;

//   &:hover {
//     transform: scale(1.1);
//   }
// `

// const ReadMoreWrapper = styled.div`
//   margin-top: 30px;
//   display: flex;
//   justify-content: center;
//   text-align: center;
// `

// const ReadMoreLink = styled(Link)`
//   display: block;
//   justify-content: center;
//   text-align: center;
// `