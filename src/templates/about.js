import React from "react"
import Layout from "../components/layout"
import AboutBanner from "../components/AboutBanner"
import StoreSection from "../components/StoreSection"
import styled from "styled-components"
import backgroundBanner from "../images/banner4.jpg"
import EmailForm from "../components/EmailForm"
import { Link } from "gatsby"
import EventSection from "../components/Events"
import ArticleSubContainer from "../components/ArticleSubContainer"
import Footer from "../components/Footer"

export default ({ pageContext }) => (
  <>
    {console.log(pageContext)}
    <AboutBanner background={pageContext.featured_media.source_url} />
    <AboutContent>
      <Title dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <TextContent
        dangerouslySetInnerHTML={{ __html: pageContext.content }}
      ></TextContent>
    </AboutContent>
    <Layout>
      <div style={{ marginTop: "450px" }}></div>
      <EventSection />
    </Layout>
    <Footer />
  </>
)

const AboutContent = styled.div`
  padding: 100px;
  width: 700px;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 10;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-bottom: 300px;
`
const TextContent = styled.div`
  color: #ff0099;
`

const Title = styled.h2`
  color: #ff0099;
`
