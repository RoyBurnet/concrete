import React from "react"
import Layout2 from "../components/layout2"
import AboutBanner from "../components/AboutBanner"
import styled from "styled-components"
import EventSection from "../components/Events"
import Footer from "../components/Footer"

export default ({ pageContext }) => (
  <Layout2>
    <AboutBanner background={pageContext.featured_media.source_url} />
    <AboutContent>
      <Title dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <TextContent
        dangerouslySetInnerHTML={{ __html: pageContext.content }}
      ></TextContent>
    </AboutContent>
    <div style={{ marginTop: "450px" }}></div>
    <EventSection />
    <Footer />
  </Layout2>
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
