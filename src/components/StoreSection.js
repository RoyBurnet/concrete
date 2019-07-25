import React from 'react';
import styled from 'styled-components'
import bookImg from '../images/book.png';

const StoreWrapper = styled.div`
margin-top: 50px;
margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  text-align: center;
`

const StoreImage = styled.img`
 height: 600px;
 max-width: 400px;
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

const StoreSection = () => {
  return(
    <StoreWrapper>
      <h2>FOR THE CULURE MAGAZINE OUT NOW !</h2>
      <br/>
      <StoreImage  src={bookImg}/>
      <br />
      <p>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
      <StoreBtn>ORDER HERE</StoreBtn>
    </StoreWrapper>
  )
}

export default StoreSection