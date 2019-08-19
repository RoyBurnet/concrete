import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import eventImg from "../images/event.jpg"

const EventSection = () => {
  return (
    <StoreWrapper>
      <h2> LA HAINE ART FESTIVAL  !</h2>
        <EventBanner src={eventImg} />
        <StoreText>
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse.
          </p>
        </StoreText>
      <div>
        <Link to="/events/">
          <OrderBtn>NOTABLE EVENTS</OrderBtn>
        </Link>
      </div>
    </StoreWrapper>
  )
}

const StoreWrapper = styled.div`
  padding: 0px 20px;
  margin-top: 150;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
`

const EventBanner= styled.img`
  padding: 0px 0px;
  height: 500px;
  align-self: center;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.08);
`

const StoreBtn = styled.button`
  background-color: #d8d8d8;
  width: 140px;
  height: 40px;
  border-radius: 16px;
  color: white;
  margin-bottom: 40px;
  margin-top: 20px;
  align-self: center;
`
const OrderBtn = styled.button`
  color: white;
  border-radius: 6px;
  text-decoration: none;
  border: none;
  background-color: #d8d8d8;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 150px;
  /* max-width: 300px; */
  align-self: center;

  &:hover {
    transform: scale(1.1);
  }
`

const StoreText = styled.div``

export default EventSection
