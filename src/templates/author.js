import React from "react"
import Img from "../images/Image21.png"
import styled from "styled-components"
import Layout2 from "../components/layout2"
import ArticleSubContainer from "../components/ArticleSubContainer"
import Events from "../components/Events"
import EmailCTA from "../components/EmailCTA"

export default ({ pageContext }) => {
  return (
    <Layout2>
      <ContentHolder>
        <AuthorName>
          <h1>{pageContext.author.name.toUpperCase()}</h1>
        </AuthorName>
        <BackgroundImage />
        <Content>
          <AuthorDescription>
            <p
              dangerouslySetInnerHTML={{
                __html: pageContext.author.description,
              }}
            />
          </AuthorDescription>
        </Content>
      </ContentHolder>
      <ArticleSubContainer />
      <EventContainer>
        <Events />
      </EventContainer>
      <EmailCTA />
    </Layout2>
  )
}

const ContentHolder = styled.div`
  margin-top: 175px;
  background-color: #f3f3f4;
  height: 1300px;
  color: rgb(255, 0, 153);
`

const AuthorName = styled.div``

const EventContainer = styled.div`
  margin-left: 200px;
`

const BackgroundImage = styled.div`
  position: absolute;
  width: 670px;
  height: 464px;
  background-image: url(${Img});
  background-size: cover;
`

const Content = styled.div`
  position: relative;
  top: 200px;
  left: 200px;
  width: 911px;
  height: 848px;
  background-color: white;
  opacity: 0.5;
`

const AuthorDescription = styled.div`
  position: absolute;
  padding: 200px;
`