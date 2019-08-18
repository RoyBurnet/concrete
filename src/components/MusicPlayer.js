import React, { Component } from "react"
import { Link } from "gatsby"
import SpotifyPlayer from "react-spotify-player"

import styled from "styled-components"

class MusicPlayer extends Component {
  render() {
    return (
      <>
        <SectionTitle>CURRATED SOUNDS</SectionTitle>
        <PlayerWrapper>
          {/* <Link to="/curated-sounds/">
            <Btn>CURATED SOUNDS</Btn>
          </Link>
           */}
          <SpotifyPlayer
            uri="https://open.spotify.com/artist/3sqcegx4uDKLAD4tIEPg6v"
            theme="black"
            view="coverart"
          />
        </PlayerWrapper>
      </>
    )
  }
}

const SectionTitle = styled.span`
  font-family: couture;
  color: #ff0099;
  margin: 0;
  font-size: 40px;
`

export default MusicPlayer

const PlayerWrapper = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  /* background-color: #F3F3F4; */
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
