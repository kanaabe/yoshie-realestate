import React from 'react'
import Link from 'gatsby-link'
import logo from '../img/group26.png'
import styled from 'styled-components'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <Name>YOSHIE ABE</Name>
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <StyledNavLink className="navbar-item" to="/about">
          About
        </StyledNavLink>
        <StyledNavLink className="navbar-item" to="/blog">
          Blog
        </StyledNavLink>
        <StyledNavA className="navbar-item" href="mailto:yoshabe926@gmail.com">Email Me</StyledNavA>
        <StyledNavA className="navbar-item" href="tel:1-201-826-8721">(201)-826-8721</StyledNavA>
      </div>
      <a className="navbar-end" href="http://www.grouptwentysix.com/">
        <img src={logo} alt="Group 26" style={{ width: '175px', height: '72px' }} />
      </a>
    </div>
  </nav>
)

export default Navbar

const Name = styled.div`
  font-family: 'Josefin Sans';
  font-size: 30px;
  font-weight: 300;
  color: black;
`

const StyledNavA = styled.a`
  font-family: 'Josefin Sans';
  font-size: 20px;
  font-weight: 200;
`

const StyledNavLink = styled(Link)`
  font-family: 'Josefin Sans';
  font-size: 20px;
  font-weight: 200;
`
