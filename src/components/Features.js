import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Paragraph } from './Common'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image} className="column is-6">
        <a href={item.link}>
          <ImageWrapper>
            <Image src={item.image}/>
          </ImageWrapper>
        </a>
        <Paragraph>{item.text}</Paragraph>
      </div>
    ))}
  </div>
)

const Image = styled.div`
  background-image: url("${props => props.src}");
  background-size: cover;
  height: 100%;
  background-position: 50% 50%;
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  &:hover {
    opacity: 0.5;
    background-color: black;
  }
`

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
      link: PropTypes.string
    })
  ),
}

export default FeatureGrid
