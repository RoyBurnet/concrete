import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import backgroundBanner from "../images/banner4.jpg"

const Banner = props => {

  return (
    <BannerWrapper style={{backgroundImage: `url(${props.background})`}}>
      <BannerCTAContainer>
        <Title>
          {" "}
          <strong>
            <h3>{props.title}</h3>
          </strong>
        </Title>
        {/* <h3>Online Street Magazine</h3>
        <p>accelerating urban culture</p> */}
      </BannerCTAContainer>
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  display: flex;
  max-width: 100%;
  height: 500px;
  margin-top: 170px;
  /* background: url(${backgroundBanner}); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-bottom: 100px;
`

const BannerImage = styled.img`
  background-position: center;
  background-size: cover;
  width: 100%;
`

const BannerCTAContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
const Title = styled.div`
  font-size: -webkit-xxx-large;
  font-style: italic;
  color: white;
`

export default Banner
