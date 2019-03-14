import React, { createRef } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Slider from "react-slick"
import styled from "styled-components"

const sliderSettings = {
  autoplay: false,
  arrows: true,
  lazyLoad: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
}

export class ListingTemplate extends React.Component {
  state = {
    isActive: false
  }

  slider = React.createRef()

  handleClick = i => {
    this.setState({
      isActive: true
    })

    this.slider.current.slickGoTo(i)
  }

  render() {
    const {
      helmet,
      title,
      subtitle,
      callout,
      description,
      specifications,
      additionalImages,
      mainImage
    } = this.props

    console.log(
      ...Object.assign({}, sliderSettings, {
        initialSlide: this.state.initialSlide
      })
    )

    return (
      <section className="section">
        {helmet || ""}
        <div className="container content">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <img src={mainImage} />
            </div>
          </div>
          <div className="columns">
            <div className="column is-5 is-offset-1">
              <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
                {title}
              </h1>
              <h2 className="is-size-3">{subtitle}</h2>
              <p>{callout}</p>
              {specifications.map(spec => (
                <div key={spec.label}>
                  <span>{spec.label}: </span>
                  <span>{spec.value}</span>
                </div>
              ))}
              <p>{description}</p>
            </div>
            <div className="column is-5 columns">
              {additionalImages.map((image, i) => {
                return (
                  <ImageThumbnail
                    className="column"
                    key={image.image}
                    src={image.image}
                    onClick={this.handleClick.bind(this, i)}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <div className={`modal ${this.state.isActive ? "is-active" : ""}`}>
          <div
            className="modal-background"
            onClick={() => {
              this.setState({ isActive: false })
            }}
          />
          <div className="modal-content">
            <Slider ref={this.slider} {...sliderSettings}>
              {additionalImages.map(item => (
                <SlideWrapper key={item.image}>
                  <SlideImage src={item.image} />
                </SlideWrapper>
              ))}
            </Slider>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => {
              this.setState({ isActive: false })
            }}
          />
        </div>
      </section>
    )
  }
}

const Listing = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <ListingTemplate
      helmet={<Helmet title={`${post.frontmatter.title} | Listing`} />}
      title={post.frontmatter.title}
      subtitle={post.frontmatter.subtitle}
      callout={post.frontmatter.callout}
      mainImage={post.frontmatter.mainImage}
      description={post.frontmatter.description}
      specifications={post.frontmatter.specifications}
      additionalImages={post.frontmatter.additionalImages}
      mainImage={post.frontmatter.mainImage}
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
      frontmatter {
        title
        subtitle
        callout
        mainImage
        description
        specifications {
          label
          value
        }
        additionalImages {
          image
        }
        mainImage
      }
    }
  }
`

const SlideImage = styled.div`
  background-image: url("${props => props.src}");
  background-size: cover;
  height: 100%;
  background-position: 50% 50%;
`

const SlideWrapper = styled.div`
  width: 100%;
  height: 500px;
`

const ImageThumbnail = styled.div`
  height: 200px;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-position: 50% 50%;
  margin: 15px;
  cursor: pointer;
`
