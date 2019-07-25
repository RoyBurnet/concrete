import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"

import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import logo from "../images/logo.png"

import "bootstrap/dist/css/bootstrap.css"

const MenuWrapper = styled(Navbar)`
    box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.08);
`

const MenuLogo = styled.img`
  height: 30px;
  width: auto;
  margin-bottom: 10px;
`

const MenuItemWrapper = styled(Nav)`
  text-align: center;
  max-width: 1046px;
  margin: 0 auto;
  display: flex;
  width: 100%;
`

const MenuItem = styled(Link)`
  color: black;
  justify-content: center;
  padding: 8px 16px;
  text-decoration: none;

  &:hover {
    color: black;
    text-decoration: none;
  }
`

// import SiteInfo from "./SiteInfo"

const MainMenu = () => (
  <>
    <StaticQuery
      query={graphql`
        {
          allWordpressWpApiMenusMenusItems {
            edges {
              node {
                items {
                  title
                  object_slug
                  url
                }
              }
            }
          }
        }
      `}
      render={props => (
        <div>
          <MenuWrapper bg="white" expand="lg"  fixed="top">
            <Navbar.Brand href="/">
              {" "}
              <MenuLogo src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <MenuItemWrapper className="mr-auto">
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                  item => (
                    <MenuItem to={item.object_slug} key={item.title}>
                      {item.title}
                    </MenuItem>
                  )
                )}
              </MenuItemWrapper>
            </Navbar.Collapse>
          </MenuWrapper>
        </div>
      )}
    />
  </>
)

export default MainMenu
