import React from "react"
import Layout from "../components/layout"
import ArticleContainer from "../components/ArticleContainer"
import Banner from "../components/Banner"
import StoreSection from "../components/StoreSection"
// import backgroundBanner from "../images/banner4.jpg"

export default ({ pageContext }) => (
  <>
    <Banner background={pageContext.featured_media.source_url} />
    <Layout>
      <br />
      <ArticleContainer />
      <hr />
      <br />
      <StoreSection />
      <br />
    </Layout>
  </>
)
