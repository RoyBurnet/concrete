import React, { Component } from "react"

import styled from "styled-components"

class EmailCTA extends Component {
  render() {
    return (
      <>
        <EmailWrapper>
          <Content>
            <h2
              style={{ margin: "20px", color: "#ff0099", fontWeight: "bold" }}
            >
              MELD JE NU AAN VOOR DE NIEUWSBRIEF
            </h2>
          </Content>
        </EmailWrapper>
      </>
    )
  }
}

const Content = styled.div`
  height: 400px;
  width: 700px;
  background-color: #f9f9fa;
`

const EmailWrapper = styled.div`
  display: flex;
  height: 600px;
  justify-content: space-around;
  align-items: center;
  /* margin-bottom: 50px; */
  margin-top: 50px;
  background-color: #f3f3f4;
`

export default EmailCTA