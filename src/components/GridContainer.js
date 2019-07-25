import React from "react"
import styled from "styled-components"
import GridContainerItem from "./GridContainerItem"
import {Link} from 'gatsby';

const GridContainerItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: #d8d8d8;
  margin-bottom: 100px;
`
const GridContainerItemsWrapperTitle = styled.div`
  background-color: #d8d8d8;
  width: 80px;
  margin-left: 30px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  color: white;
`

const GridContainerItemsWrapperMoreBtn = styled.button`
  color: black;
  border-radius: 6px;
  text-decoration: none;
  
  margin-bottom: 140px;
  margin-top: 20px;

`

const GridContainerContainer = props => {
  return (
    <>
      <hr />
      <GridContainerItemsWrapperTitle></GridContainerItemsWrapperTitle>
      <GridContainerItemsWrapper>
          {props.data.map((data) => {
            return (
              <GridContainerItem data={data} />
            )
          })}
 
          <GridContainerItemsWrapperMoreBtn><Link to='/article'>SEE MORE</Link></GridContainerItemsWrapperMoreBtn>

      </GridContainerItemsWrapper>
    </>
  )
}

export default GridContainerContainer
