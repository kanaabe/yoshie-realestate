import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <MainDiv>
    <Helmet title="Yoshie Abe | Real Estate">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous" />
      <link href="https://fonts.googleapis.com/css?family=Josefin+Sans|Roboto" rel="stylesheet"/>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Helmet>
    <Navbar />
    <div style={{marginTop: "72px"}}>{children()}</div>
    <Footer/>
  </MainDiv>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper


const MainDiv = styled.div`
  font-family: 'Josefin Sans';
`
