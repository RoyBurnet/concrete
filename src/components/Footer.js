import React, { Component } from "react"
import { Link } from "gatsby"
import SpotifyPlayer from "react-spotify-player"

import styled from "styled-components"

import imgA from "../images/Image 79.png"

class Footer extends Component {
  render() {
    return (
      <>
        <PlayerWrapper>
          {/* <Link to="/curated-sounds/">
            <Btn>CURATED SOUNDS</Btn>
          </Link>
           */}
          {/* <SpotifyPlayer
            uri="https://open.spotify.com/artist/3sqcegx4uDKLAD4tIEPg6v"
            theme="black"
            view="coverart"d
          /> */}

          <AudioContent><h2 style={{margin: "20px", color: "#ff0099", fontWeight: "bold"}}>MELD JE NU AAN VOOR DE NIEUWSBRIEF</h2></AudioContent> 
        </PlayerWrapper>
      </>
    )
  }
}

const AudioContent = styled.div`
 height: 400px;
 width: 700px;
 background-color: #F9F9FA;
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
  height: 600px;
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

export default Footer;