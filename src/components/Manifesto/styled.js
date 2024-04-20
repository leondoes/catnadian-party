import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ManifestoContainer = styled.div`
  animation: ${fadeIn} 1s ease-out;
  padding: 20px;
  background-color: #f0f8ff; // Light blue background
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  color: #333366; // Dark blue color
  text-align: center;
`;

export const Paragraph = styled.p`
  color: #666666; // Dark grey text
  line-height: 1.5;
`;

export const ManifestoList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  margin: 10px 0;
  padding: 10px;
  background-color: #e6e6fa; // Lavender background
  font-size: 16px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StrongText = styled.strong`
  color: #ff4500; // Orange color for emphasis
`;
