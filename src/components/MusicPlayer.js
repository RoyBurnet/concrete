import React, { Component } from "react"
import {Link} from 'gatsby'

import MixCloudPlayer from "react-player/lib/players/Mixcloud"

import styled from "styled-components"


class MusicPlayer extends Component {
  render() {
    return (
      <PlayerWrapper>
        <h2>Curated Sounds: Mix of the Week !</h2>
        <MixCloudPlayer
          url="https://www.mixcloud.com/whosampled/notorious-big-ready-to-die-20th-anniversary-mixtape-mixed-by-chris-read/"
          playing
        />
        <div>
          <Link to="/curated-sounds/">
            <Btn>CURATED SOUNDS</Btn>
          </Link>
        </div>
      </PlayerWrapper>
    )
  }
}

export default MusicPlayer


const PlayerWrapper = styled.div`
  display: flex;
  margin-bottom: 150px;
  flex-direction: column;
  align-items: center;
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