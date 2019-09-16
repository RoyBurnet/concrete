import React from "react"

import MainMenu from "./MainMenu"

import Footer from '../components/Footer'

import styled, { createGlobalStyle } from "styled-components"

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <LayoutWrapper>
    <MainMenu />
    {children}
    <Footer/>
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
  max-width: 930px;
  margin: auto;
  min-height: 100%;
`

// const Footer = styled.footer`
//   width: 100%;
//   height: 50px;
//   background-color: white;
//   bottom: 100%;
//   display: flex;
//   margin-top: auto;
//   background-color: #FF0099;
// `

export default Layout
