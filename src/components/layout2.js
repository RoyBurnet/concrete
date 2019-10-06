import React from "react"

import MainMenu from "./MainMenu"

import styled, { createGlobalStyle } from "styled-components"

const Layout2 = ({ children }) => (
  <>
    <GlobalStyles />
    <LayoutWrapper>
      <MainMenu />
      {children}
      <Footer>
        <FooterContent>
          <p>Concrete Blossom</p>
        </FooterContent>
      </Footer>
    </LayoutWrapper>
  </>
)

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:300,500i,700,700i,900&display=swap');

@font-face {
  font-family: "couture";
  src: url('../couture-bldit.otf');
}

  body, html{
    font-family: 'Roboto', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
  }
`

const LayoutWrapper = styled.div`
  overflow: hidden;
  max-width: 1467px;
  margin: auto;
  min-height: 100%;
`

const Footer = styled.footer`
  height: 80px;
  width: 100%;
  color: white;
  background-color: #ff0099;
  text-align: center;
  position: relative;
`

const FooterContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export default Layout2
