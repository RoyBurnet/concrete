import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import logo from "../images/cblogo.svg"
import "bootstrap/dist/css/bootstrap.css"

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
          <MenuWrapper bg="white" expand="lg" fixed="top">
            <Navbar.Brand href="/">
              {" "}
              <MenuLogo src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <MenuItemWrapper className="mr-auto">
                {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                  item => (
                    <MenuItem
                      to={item.object_slug}
                      key={item.title}
                      activeStyle={{ color: "#FF0099" }}
                    >
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

const MenuWrapper = styled(Navbar)`
  height: 155px;
  opacity: 0.99;
  flex-direction: column;
`

const MenuLogo = styled.img`
  height: 50px;
  width: auto;
  margin: 10px;
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
  padding: 8px 40px;
  text-decoration: none;
  font-family: couture;

  &:hover {
    color: gray;
    text-decoration: none;
  }
`

export default MainMenu
