import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import Slider from 'react-slick'
import styled from 'styled-components'
import yoshieImg from '../img/yoshie.jpg'

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
  image,
  title,
  heading,
  description,
  intro,
  main,
  testimonials,
  fullImage,
  pricing,
}) => (
  <div>
    <SliderContainer>
      <Slider {...sliderSettings}>
        <SlideWrapper><SlideImage src={main.image1.image} /></SlideWrapper>
        <SlideWrapper><SlideImage src={main.image2.image} /></SlideWrapper>
        <SlideWrapper><SlideImage src={main.image3.image} /></SlideWrapper>
      </Slider>
      <Overlay>
        BEST REAL ESTATE SERVING NORTH NJ
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
                    <p style={{fontFamily: 'Roboto', fontSize: '16px', lineHeight: '1.75'}}>{description}</p>
                  </div>
                  <div className="column is-1"/>
                  <div className="column is-4">
                    <img src={yoshieImg}/>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-7">
                    <h3 className="has-text-weight-semibold is-size-3">
                      {main.heading}
                    </h3>
                    <p>{main.description}</p>
                  </div>
                </div>
                <Testimonials testimonials={testimonials} />
                <div
                  className="full-width-image-container"
                  style={{ backgroundImage: `url(${fullImage})` }}
                />
                <h2 className="has-text-weight-semibold is-size-2">
                  {pricing.heading}
                </h2>
                <p className="is-size-5">{pricing.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object,
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate
      image={frontmatter.image}
      title={frontmatter.title}
      heading={frontmatter.heading}
      description={frontmatter.description}
      intro={frontmatter.intro}
      main={frontmatter.main}
      testimonials={frontmatter.testimonials}
      fullImage={frontmatter.full_image}
      pricing={frontmatter.pricing}
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
        title
        image
        heading
        description
        intro {
          blurbs {
            image
            text
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image
          }
          image2 {
            alt
            image
          }
          image3 {
            alt
            image
          }
        }
        testimonials {
          author
          quote
        }
        full_image
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
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
`
