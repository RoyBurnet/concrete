import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import backgroundBanner from "../images/banner4.jpg"


const AboutBanner = props => {
  return (
    <div>
    <BannerWrapper style={{ backgroundImage: `url(${props.background})` }} >
    </BannerWrapper>
        {/* <AboutContent></AboutContent> */}
        </div>
  )
}

const BannerWrapper = styled.div`
  display: flex;
  max-width: 100%;
  height: 500px;
  margin-top: 170px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  /* margin-bottom: 100px; */
`

export default AboutBanner
