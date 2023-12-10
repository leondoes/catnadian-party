import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  align-items: center;
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