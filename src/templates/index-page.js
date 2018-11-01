import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Slider from 'react-slick'
import styled from 'styled-components'
import { Paragraph } from '../components/Common'
import { HTMLContent } from '../components/Content'
import remark from 'remark'
import remarkHtml from 'remark-html'

const sliderSettings = {
  autoplay: true,
  dots: true,
  lazyLoad: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const IndexPageTemplate = ({
  carousel,
  image,
  heading,
  description,
  about,
  featured,
  testimonials,
}) => {

  const aboutHTML = remark()
    .use(remarkHtml)
    .processSync(about).toString()

  return (
    <div>
      <SliderContainer>
        <Slider {...sliderSettings}>
          {
            carousel.map(item => (
              <SlideWrapper><SlideImage src={item.image} /></SlideWrapper>
            ))
          }
        </Slider>
        <Overlay>
          REAL ESTATE SERVING NORTH NJ
        </Overlay>
      </SliderContainer>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-7">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p style={{ fontFamily: 'Roboto', fontSize: '16px', lineHeight: '1.75' }}>{description}</p>
                    </div>
                    <div className="column is-2" />
                    <div className="column is-3">
                      <img src={image} />
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <h3 style={{ marginTop: '60px' }} className="has-text-weight-semibold is-size-3">
                        About Me
                      </h3>
                      <About>
                        <HTMLContent content={aboutHTML} />
                      </About>
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column">
                      <h3 style={{ marginTop: '60px' }} className="has-text-weight-semibold is-size-3">
                        {testimonials.heading}
                      </h3>
                      <Paragraph>{testimonials.description}</Paragraph>
                    </div>
                  </div>
                  <Testimonials testimonials={testimonials.quotes} />
                  <h3 style={{ marginTop: '60px' }} className="has-text-weight-semibold is-size-3">
                    Featured Listings
                  </h3>
                  <Features gridItems={featured.blurbs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

IndexPageTemplate.propTypes = {
  carousel: PropTypes.array,
  image: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  about: PropTypes.string,
  featured: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    quotes: PropTypes.array
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      carousel={frontmatter.carousel}
      image={frontmatter.image}
      heading={frontmatter.heading}
      description={frontmatter.description}
      about={frontmatter.about}
      featured={frontmatter.featured}
      testimonials={frontmatter.testimonials}
    />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const indexPageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        image
        heading
        description
        about
        carousel {
          image
        }
        featured {
          blurbs {
            image
            text
            link
            status
          }
        }
        testimonials {
          heading
          description
          quotes {
            author
            quote
          }
        }
      }
    }
  }
`

const About = styled.div`
  font-family: Roboto;
  font-size: 16px;
  line-height: 1.75;
`

const SlideImage = styled.div`
  background-image: url("${props => props.src}");
  background-size: cover;
  height: 100%;
  background-position: 50% 50%;
`

const SlideWrapper = styled.div`
  width: 100vw;
  height: 400px;
`

const SliderContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 400px;
`

const Overlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100%;
  font-family: 'Josefin Sans';
  font-size: 50px;
  color: white;
  text-shadow: 0px 0px 10px rgba(150, 150, 150, 1);
  padding: 30px;
`
