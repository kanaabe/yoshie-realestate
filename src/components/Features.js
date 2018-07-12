import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Paragraph } from './Common'

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.image} className="column is-6">
        <ImageWrapper>
          <Image src={item.image}/>
        </ImageWrapper>
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
`

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      text: PropTypes.string,
    })
  ),
}

export default FeatureGrid
