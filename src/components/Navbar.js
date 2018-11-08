import React from "react";
import Link from "gatsby-link";
import logo from "../img/group26.png";
import styled from "styled-components";

export default class Navbar extends React.Component {
  state = {
    hamburgerIsOpen: false
  };

  toggleHamburger = () => {
    const { hamburgerIsOpen } = this.state;
    this.setState({
      hamburgerIsOpen: !hamburgerIsOpen
    });
  };

  render() {
    const { hamburgerIsOpen } = this.state;
    return (
      <nav className="navbar is-transparent is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <figure className="image">
                <Name>YOSHIE ABE</Name>
              </figure>
            </Link>
            <MobileLogo href="http://www.grouptwentysix.com/">
              <img src={logo} alt="Group 26" style={{ width: "140px" }} />
            </MobileLogo>
            <span
              className={`navbar-burger burger ${
                hamburgerIsOpen ? "is-active" : ""
              }`}
              dataTarget="navMenu"
              onClick={this.toggleHamburger}
            >
              <span />
              <span />
              <span />
            </span>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${hamburgerIsOpen ? "is-active" : ""}`}
          >
            <div className="navbar-start">
              <StyledNavLink className="navbar-item" to="/blog">
                Blog
              </StyledNavLink>
              <StyledNavA
                className="navbar-item"
                href="mailto:yoshabe926@gmail.com"
              >
                Email Me
              </StyledNavA>
              <StyledNavA
                small
                className="navbar-item"
                href="tel:1-201-826-8721"
              >
                Cell: (201)-826-8721
              </StyledNavA>
              <StyledNavA
                small
                className="navbar-item"
                href="tel:1-201-969-2626"
              >
                Office: (201)-969-2626
              </StyledNavA>
            </div>
            {!hamburgerIsOpen && (
              <a className="navbar-end" href="http://www.grouptwentysix.com/">
                <img
                  src={logo}
                  alt="Group 26"
                  style={{ width: "250px", height: "72px" }}
                />
              </a>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

const MobileLogo = styled.a`
  display: none;
  @media only screen and (max-width: 600px) {
    display: block;
    margin-top: 5px;
  }
`;

const Name = styled.div`
  font-family: "Josefin Sans";
  font-size: 30px;
  font-weight: 300;
  color: black;
  @media only screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

const StyledNavA = styled.a`
  font-family: "Josefin Sans";
  font-size: 20px;
  font-weight: 200;
`;

const StyledNavLink = styled(Link)`
  font-family: "Josefin Sans";
  font-size: 20px;
  font-weight: 200;
`;
