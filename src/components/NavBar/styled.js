import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

// Animation for link hover effect
const linkFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Nav = styled.nav`
font-family: 'Noto Sans';
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  align-items: center;
  height: 60px; // Increased height for a more modern look

  padding-left: calc(100vw - 100%);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); // Adds shadow for depth

  grid-template-columns: 1fr min(150ch, 100%) 1fr;
  > * {
    grid-column: 2;
  }

  /* Enhanced with a subtle gradient and shadow for depth */
  background: linear-gradient(to right, #4f4f4f, #333, #4f4f4f);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 4rem;
  transition: color 0.3s ease, transform 0.2s ease-out;
  animation: ${linkFadeIn} 0.5s ease-out;

  &:hover {
    color: #f0e68c;
    transform: scale(1.05); // Slightly enlarges the link on hover
  }

  &.active {
    color: #f0e68c;
    font-weight: bold; // Makes the active link more prominent
  }
`;

export const HomeLogo = styled.img`
  width: 50px;
  height: 50px; // Corrected height for consistency
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(360deg); // Rotates logo on hover for a playful effect
  }
`;
