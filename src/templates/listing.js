import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { HTMLContent } from "../components/Content"

export const ListingTemplate = ({ description, title, helmet }) => {
  return (
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

ListingTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet)
}

const Listing = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ListingTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Listing`} />}
      title={post.frontmatter.title}
    />
  )
}

Listing.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
}

export default Listing

export const pageQuery = graphql`
  query ListingByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`
