import React from 'react';
import { Nav, StyledLink, HomeLogo } from "../NavBar/styled";
import logo from "../../assets/logo.png";
import CatArmSwipe from "../CatArmSwipe";

const NavBar = () => {
  return (
    <Nav>
      <CatArmSwipe path="/">
        <HomeLogo src={logo} alt="home" />
      </CatArmSwipe>
      <CatArmSwipe path="/candidates">Candidates</CatArmSwipe>
      <CatArmSwipe path="/donations">Donations</CatArmSwipe>
      <CatArmSwipe path="/merchandise">Merchandise</CatArmSwipe>
    </Nav>
  );
};

export default NavBar;
