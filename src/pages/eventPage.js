import React from "react"
import Layout2 from "../components/layout2"
import styled from "styled-components"
import Banner from "../components/Banner"
import Events from "../components/Events"

import Footer from "../components/Footer"

export default ({ pageContext }) => {
  return (
    <Layout2>
      <HeroBanner>
        <Title dangerouslySetInnerHTML={{ __html: pageContext.title }} />
        <Banner background={pageContext.featured_media.source_url} />
      </HeroBanner>
      <Content>
        <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
      </Content>

      <Events />

      <Footer />
    </Layout2>
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
