import React from 'react';
import {Nav, StyledLink} from "../NavBar/styled";

const NavBar = () => {
    return (
      <Nav>
        <StyledLink to="/candidates">Candidates</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <StyledLink to="/events">Events</StyledLink>
        <StyledLink to="/gallery">Gallery</StyledLink>
        <StyledLink to="/manifesto">Manifesto</StyledLink>
        <StyledLink to="/merchandise">Merchandise</StyledLink>
      </Nav>
    );
  };
  
  export default NavBar;