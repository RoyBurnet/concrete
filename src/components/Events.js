import React from "react"
import styled from "styled-components"
import eventImg from "../images/event.jpg"

import { graphql, StaticQuery, Link } from "gatsby"

const EventSection = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allWordpressWpEvent {
            nodes {
              title
              link
              slug
              featured_media {
                source_url
              }
            }
          }
        }
      `}
      render={props => (
        <>
        {console.log(props)}
          <SectionTitle>notable Events</SectionTitle>
          <EventsWrapper>
            <div>
              <Link to={`/event/${props.allWordpressWpEvent.nodes[0].slug}`}>
              <Event1Cover>{props.allWordpressWpEvent.nodes[0].title}</Event1Cover>
              <Event1 src={props.allWordpressWpEvent.nodes[0].featured_media.source_url} />
              </Link>
            </div>
            <div>
              <Event3Wrapper>
              <Link to={`/event/${props.allWordpressWpEvent.nodes[1].slug}`}>
                <Event3Cover>{props.allWordpressWpEvent.nodes[1].title}</Event3Cover>
                <Event3 src={props.allWordpressWpEvent.nodes[1].featured_media.source_url} />
                </Link>
              </Event3Wrapper>

              <div>
                <Event2Wrapper>
                <Link to={`/event/${props.allWordpressWpEvent.nodes[2].slug}`}>
                  <Event2Cover>{props.allWordpressWpEvent.nodes[2].title}</Event2Cover>
                  <Event2 src={props.allWordpressWpEvent.nodes[2].featured_media.source_url} />
                  </Link>
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
      )}
    />
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
  background-color: rgba(255, 255, 255, 0.90);
  opacity: 0.5;
  width: 300px;
  height: 300px;
  position: absolute;
  z-index: 10;
  clip-path: polygon(0 0, 0 100%, 100% 0);
`

const Event2 = styled.img`
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

const Event3 = styled.img`
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

const Event1 = styled.img`
  width: 465px;
  height: 339px;
  background-color: #d8d8d8;
  margin-bottom: 20px;

`

export default EventSection
