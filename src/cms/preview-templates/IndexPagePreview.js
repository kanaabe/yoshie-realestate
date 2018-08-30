import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const entryCarousels = entry.getIn(['data', 'carousel'])
  const carousels = entryCarousels ? entryCarousels.toJS() : []

  const entryBlurbs = entry.getIn(['data', 'featured', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryQuotes = entry.getIn(['data', 'testimonials', 'quotes'])
  const quotes = entryQuotes ? entryQuotes.toJS() : []

  return (
    <IndexPageTemplate
      carousel={[...carousels]}
      image={entry.getIn(['data', 'image'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      about={entry.getIn(['data', 'about'])}
      featured={{ blurbs }}
      testimonials={{
        quotes,
        heading: entry.getIn(['data', 'testimonials', 'heading']),
        description: entry.getIn(['data', 'testimonials', 'description'])
      }}
    />
  )
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
