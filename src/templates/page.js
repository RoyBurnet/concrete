import React from "react"
import Layout from "../components/layout"
import Banner from "../components/Banner"
import styled from "styled-components"
import backgroundBanner from "../images/banner4.jpg"
import {Link} from "gatsby"


export default ({ pageContext }) => (
  <>
    {console.log(pageContext)}
    <Banner background={backgroundBanner} />
    <Layout>
      <h1
        style={{ textAlign: "center", paddingTop: "50px" }}
        dangerouslySetInnerHTML={{ __html: pageContext.title }}
      />
      <div
        style={{ padding: "50px 20px" }}
        dangerouslySetInnerHTML={{
          __html: pageContext.content,
        }}
      ></div>
              <div>
          <Link to="/">
            <Btn>Back</Btn>
          </Link>
        </div>
    </Layout>
  </>
)

const Btn = styled.button`
  color: white;
  border-radius: 6px;
  text-decoration: none;
  border: none;
  background-color: #d8d8d8;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.12), 0 0 1px 0 rgba(0, 0, 0, 0.08);
  margin-bottom: 150px;
  align-self: center;

  &:hover {
    transform: scale(1.1);
  }
`