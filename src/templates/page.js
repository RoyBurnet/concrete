import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner"
import StoreSection from "../components/StoreSection"
import styled from "styled-components"
import backgroundBanner from "../images/banner4.jpg"

export default ({ pageContext }) => (
  <>
  {console.log(pageContext)}
  <Banner background={backgroundBanner} />
    <Layout>
      <h1 style={{"marginTop": "20px"}}
        dangerouslySetInnerHTML={{__html: pageContext.title}}
      />

      <div style={{"marginBottom": "20px"}}
        dangerouslySetInnerHTML={{
          __html: pageContext.content
        }}
      ></div>
    </Layout>
  </>
)
