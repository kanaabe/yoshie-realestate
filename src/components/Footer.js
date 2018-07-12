import React from 'react'
import styled from 'styled-components'

const Footer = () => (
  <StyledFooter className="footer">
    <div className="container">
      <div className="columns">
        <div className="column is-1" />
        <div className="column is-4">
          <FooterHeaders>
            Contact
          </FooterHeaders>
          <SocialIcon href="https://www.facebook.com/YoshieRealEstate"><i className="fab fa-facebook-square fa-2x"/></SocialIcon>
          <SocialIcon href="https://www.instagram.com/YoshieRealEstate"><i className="fab fa-instagram fa-2x"/></SocialIcon>
        </div>
        <div className="column is-6">
          <FooterHeaders>
            Latest From Social Media
          </FooterHeaders>
          <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FYoshieRealEstate&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=670275376425858" width="500" height="500" style={{border:"none",overflow:"hidden"}} scrolling="no" frameBorder="0" allowTransparency="true" allow="encrypted-media"></iframe>
        </div>
        <div className="column is-1" />
      </div>
    </div>
  </StyledFooter>
)

export default Footer

const StyledFooter = styled.footer`
  font-family: 'Roboto';
  background-color: gainsboro;
`

const FooterHeaders = styled.div`
  font-size: 20px;
`

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`