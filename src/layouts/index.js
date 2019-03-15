import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "styled-components"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "./all.sass"

const TemplateWrapper = ({ children }) => (
  <MainDiv>
    <Helmet>
      <title>Yoshie Abe | Real Estate</title>
      <meta property="og:title" content="Yoshie Abe | Real Estate" />
      <meta
        name="description"
        content="Yoshie Abe is a top real estate agent in New Jersey specializing in residential and commercial real estate for buyers, sellers and investors. Yoshie is an agent with Group26 Realty."
      />
      <meta
        property="og:description"
        content="Yoshie Abe is a top real estate agent in New Jersey specializing in residential and commercial real estate for buyers, sellers and investors. Yoshie is an agent with Group26 Realty."
      />
      <meta
        name="keywords"
        content="new jersey real estate, real estate, nj homes, nj, yoshie abe, real estate agent, north new jersey"
      />
      <meta name="author" content="Yoshie Abe" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
        integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
        crossorigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans|Roboto"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-125006873-1"
      />
      <script>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-125006873-1');
          `}
      </script>
    </Helmet>
    <Navbar />
    <MainContent>{children()}</MainContent>
    <Footer />
  </MainDiv>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

const MainDiv = styled.div`
  font-family: "Josefin Sans";
`

const MainContent = styled.div`
  margin-top: 72px;
  @media only screen and (max-width: 600px) {
    margin-top: 52px;
  }
`
