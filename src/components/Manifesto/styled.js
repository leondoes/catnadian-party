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
  transition: opacity 0.5s, transform 0.5s;
  margin: 20px 0;
  padding: 40px;
  background-color: #e6e6fa; // Lavender background
  background-size: cover;
  background-position: center;
  font-size: 3em; // Adjust font size to fit the design
  color: #333; // Text color, adjusted for better contrast
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative; // Needed for absolutely positioned elements inside
  overflow: hidden; // Ensures the content does not bleed outside the border radius

  &:before { // Creates an overlay if needed
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.5); // Semi-transparent overlay for better text readability
    z-index: 1;
  }

  & > * {
    position: relative; // Ensures the content sits above the :before pseudo-element
    z-index: 2;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StrongText = styled.strong`
  color: #ff4500; // Orange color for emphasis
  font-weight: bold;
  margin-right: 0.5em; // Add some space after strong text
`;
