import React from "react"

import MainMenu from "./MainMenu"

import styled, { createGlobalStyle } from "styled-components"

const Layout2 = ({ children }) => (
  <>
    <GlobalStyles />
    <LayoutWrapper>
      <MainMenu />
      {children}
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

export default Layout2
