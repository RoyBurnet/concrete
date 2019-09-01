import React from "react"
import Layout from "../components/layout"
import ArticleContainer from "../components/ArticleContainer"
import Banner from "../components/Banner"
import StoreSection from "../components/StoreSection"
import MusicPlayer from "../components/MusicPlayer"
import EventSection from "../components/Events"
import ShopContainer from '../components/ShopContainer'

// import backgroundBanner from "../images/banner4.jpg"

export default ({ pageContext }) => (
  <>
    <Layout>
    <Banner background={pageContext.featured_media.source_url} />
      <ArticleContainer />
      <MusicPlayer />
      <EventSection />

      <ShopContainer />
    </Layout>
  </>
)
