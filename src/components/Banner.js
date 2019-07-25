import React from "react"
import styled from "styled-components"
import backgroundBanner from "../images/banner4.jpg"

const BannerWrapper = styled.div`
  display: flex;
  max-width: 100%;
  height: 500px;
  /* background: url(${backgroundBanner}); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
`

const BannerImage = styled.img`
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

const Banner = props => {
  return (
    <BannerWrapper>
      <BannerImage src={props.background} alt="" />
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

export default Banner
