import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import eventImg from "../images/event.jpg"

const EventSection = () => {
  return (
    <>
        <SectionTitle>notable Events</SectionTitle>
    <EventsWrapper>
      <div>
        <Event1Cover></Event1Cover>
        <Event1 />
      </div>
      <div>
        <Event3Wrapper>
          <Event3Cover></Event3Cover>
          <Event3 />
        </Event3Wrapper>

        <div>
        <Event2Wrapper>
        <Event2Cover></Event2Cover>
          <Event2 />
          </Event2Wrapper>
      </div>
      </div>

      {/* style={{marginLeft: '200px', marginTop: '70px'}} */}
      {/* 
      <div>
        <Link to="/events/">
          <OrderBtn>NOTABLE EVENTS</OrderBtn>
        </Link>
      </div> */}
    </EventsWrapper>
    </>
  )
}

const SectionTitle = styled.div`
  font-family: couture;
  color: #ff0099;
  margin: 0;
  font-size: 40px;
  margin-top: 50px;
  margin-bottom: 50px;
`

const Event2Wrapper = styled.div`
  width: 300px;
  height: 300px;
  /* background-color: #d8d8d8; */
  margin-bottom: 20px;
  margin-top: 80px;
  margin-left: -250px;
`

const Event2Cover = styled.div`
  background-color: rgba(255, 255, 255, 0.72);
  opacity: 0.5;
  width: 300px;
  height: 300px;
  position: absolute;
  z-index: 10;
  clip-path: polygon(0 0, 0 100%, 100% 0);
`

const Event2 = styled.div`
  max-width: 300px;
  height: 300px;
  background-color: #d8d8d8;
  margin-bottom: 20px;
`

const Event3Wrapper = styled.div`
  width: 300px;
  height: 300px;
  /* background-color: #d8d8d8; */
  margin-bottom: 20px;
  margin-top: 80px;
  margin-left: 100px;
`
const Event3Cover = styled.div`
  background-color: rgba(255, 255, 255, 0.72);
  opacity: 0.5;
  width: 300px;
  height: 300px;
  position: absolute;
  z-index: 10;
  clip-path: polygon(0 0, 0 100%, 100% 0);
`

const Event3 = styled.div`
  max-width: 300px;
  height: 300px;
  background-color: #d8d8d8;
  margin-bottom: 20px;
`

const Event1Cover = styled.div`
  background-color: rgba(255, 255, 255, 0.72);
  opacity: 0.5;
  width: 465px;
  height: 339px;
  position: absolute;
  z-index: 10;
  clip-path: polygon(0 0, 0 100%, 100% 0);
`
const EventsWrapper = styled.div`
  padding: 0px 20px;
  margin-top: 150;
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  text-align: center;
`

const Event1 = styled.div`
  width: 465px;
  height: 339px;
  background-color: #d8d8d8;
  margin-bottom: 20px;
`


// const OrderBtn = styled.button`
//   color: white;
//   border-radius: 6px;
//   text-decoration: none;
//   border: none;
//   background-color: #d8d8d8;
//   box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.08);
//   margin-bottom: 150px;
//   /* max-width: 300px; */
//   align-self: center;

//   &:hover {
//     transform: scale(1.1);
//   }
// `

export default EventSection
