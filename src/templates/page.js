import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner"
import StoreSection from "../components/StoreSection"
import styled from "styled-components"
import backgroundBanner from "../images/banner4.jpg"
import EmailForm from "../components/EmailForm"

const Image = styled.img`
  padding: 0px 0px;
  height: 500px;
  max-width: 350px;
  /* align-self: center; */
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.08);
`

export default ({ pageContext }) => (
  <>
    {console.log(pageContext)}
    <Banner background={backgroundBanner} />
    <Layout>
      <h1
        style={{ textAlign: "center", paddingTop: "50px" }}
        dangerouslySetInnerHTML={{ __html: pageContext.title }}
      />
      <div
        style={{ padding: "50px 20px" }}
        dangerouslySetInnerHTML={{
          __html: pageContext.content,
        }}
      ></div>
    </Layout>
  </>
)
