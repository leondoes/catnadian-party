import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  align-items: center;
  height: 30px;

  padding-left: calc(100vw - 100%);

  grid-template-columns:
    1fr
    min(150ch, 100%)
    1fr;
  > * {
    grid-column: 2;
  }
  /* Colouring of LEFT side of navbar */
  &:before {
    content: "";
    position: sticky;
    grid-row: 1;
    grid-column: 1;
    top: 0;
  }
  /* Colouring of RIGHT side of navbar */
  &:after {
    content: "";
    position: sticky;
    grid-row: 1;
    grid-column: 3;
    z-index: 2;
    top: 0;
  }
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #f0e68c;
  }

  &.active {
    color: #f0e68c;
  }
`;

export const HomeLogo = styled.img`
width: 50px;
height: 45x;
`