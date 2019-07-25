import React from "react"

import MainMenu from "./MainMenu"

import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto:300,500i,700,700i,900&display=swap');

  body, html{
    font-family: 'Roboto', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
    min-height: 100%;

  }
`

const LayoutWrapper = styled.div`
overflow: hidden;
  max-width: 1200px;
  margin: auto;
  min-height: 100%;
`

const Footer = styled.footer`
  width: 100%;
  height: 50px;
  background-color: white;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.08);
  bottom: 0;
  display: flex;
  margin-top: auto;
  position: fixed
;
`

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
    <Footer></Footer>
  </>
)

export default Layout
