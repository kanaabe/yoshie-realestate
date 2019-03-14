import React from "react"
import PropTypes from "prop-types"
import { ListingTemplate } from "../../templates/listing"

const ListingPreview = ({ entry, widgetFor }) => (
  <ListingTemplate
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    title={entry.getIn(["data", "title"])}
  />
)

ListingPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
}

export default ListingPreview
