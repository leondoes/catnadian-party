import React from 'react';
import {Nav, StyledLink, HomeLogo} from "../NavBar/styled";
import logo from "../../assets/logo.png";

const NavBar = () => {
    return (
      <Nav>
        <StyledLink to ="/"><HomeLogo src={logo} alt="home"/></StyledLink>
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