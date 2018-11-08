import React from "react";
import styled from "styled-components";

const Footer = () => (
  <StyledFooter className="footer">
    <div className="container">
      <div className="columns">
        <div className="column is-1" />
        <div className="column is-4">
          <FooterHeaders>Contact</FooterHeaders>
          <p>
            <Name>Yoshie Abe</Name>
            <br />
            <i className="fa fa-map-marker" /> 234 Franklin Ave., Suite 26,
            Nutley, NJ 07110 <br />
            <i className="fa fa-map-marker" /> 115 River Rd., Suite 103
            Edgewater, NJ 07020 <br />
            <a href="tel:1-201-826-8721">
              <i className="fa fa-phone" /> Phone: (201)-826-8721
            </a>{" "}
            <br />
            <a href="tel:1-201-969-2626">
              <i className="fa fa-phone" /> Office: (201)-969-2626
            </a>{" "}
            <br />
            <a href="mailto:yoshabe926@gmail.com">
              <i className="fa fa-envelope" /> Email: yoshabe926@gmail.com
            </a>
          </p>
        </div>
        <div className="column is-6">
          <FooterHeaders>Follow Me</FooterHeaders>
          <iframe
            src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fyoshierealestate&tabs&width=340&height=154&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=670275376425858"
            width="340"
            height="154"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          />
          <div>
            <SocialIcon href="https://www.facebook.com/YoshieRealEstate">
              <i className="fab fa-facebook-square fa-2x" />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/YoshieRealEstate">
              <i className="fab fa-instagram fa-2x" />
            </SocialIcon>
          </div>
        </div>
        <div className="column is-1" />
      </div>
    </div>
  </StyledFooter>
);

export default Footer;

const StyledFooter = styled.footer`
  font-family: "Roboto";
  background-color: gainsboro;
  a,
  i {
    margin-bottom: 15px;
  }
`;

const FooterHeaders = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  margin-right: 15px;
`;
const Name = styled.span`
  display: inline-block;
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 15px;
`;
