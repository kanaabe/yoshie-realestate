import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Paragraph } from "./Common"
import { HTMLContent } from "./Content"
import remark from "remark"
import remarkHtml from "remark-html"

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => {
      const textHTML = remark()
        .use(remarkHtml)
        .processSync(item.text)
        .toString()

      return (
        <div key={item.image} className="column is-6">
          {item.status !== "Selling" ? (
            <ImageWrapper hover={false}>
              <Image src={item.image} />
              <StatusOverlay>{item.status}</StatusOverlay>
            </ImageWrapper>
          ) : (
            <ImageWrapper hover={item.link}>
              <Image src={item.image} />
            </ImageWrapper>
          )}
          <Paragraph>
            <HTMLContent content={textHTML} />
          </Paragraph>
        </div>
      )
    })}
  </div>
)

const StatusOverlay = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  font-size: 50px;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 100px;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
`

const Image = styled.div`
  background-image: url("${props => props.src}");
  background-size: cover;
  height: 100%;
  background-position: 50% 50%;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  ${props =>
    props.hover &&
    `&:hover {
    opacity: 0.5;
    background-color: black;
  }`};
`

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
      link: PropTypes.string,
      status: PropTypes.string
    })
  )
}

export default FeatureGrid
