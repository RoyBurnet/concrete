import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import imgA from "../images/shirt.jpg"

import ArticleSubItem from "../components/ArticleSubItem"

class ArticleSubContainer extends Component {
  render() {
    return (
      <>
        <PlayerWrapper>
          {/* <Link to="/curated-sounds/">
            <Btn>CURATED SOUNDS</Btn>
          </Link>
           */}
        <ArticleSubItem />
        </PlayerWrapper>
      </>
    )
  }
}

const AudioContent = styled.div`
 height: 250px;
 width: 250px;
 background-color: orange;
`

const AudioImage = styled.img`
width: 100%;
`

const SectionTitle = styled.div`
  font-family: couture;
  color: #ff0099;
  margin: 0;
  font-size: 40px;
  margin-top: 50px;
`

const PlayerWrapper = styled.div`
  display: flex;
  height: 400px;
justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
  background-color: #F3F3F4;
`

const Btn = styled.button`
  color: white;
  border-radius: 6px;
  text-decoration: none;
  border: none;
  background-color: #d8d8d8;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.08);
  margin-top: 10px;
  /* max-width: 300px; */
  align-self: center;

  &:hover {
    transform: scale(1.1);
  }
`

export default ArticleSubContainer