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
  position: fixed; // Changed from sticky to fixed
  top: 0;
  left: 0;
  right: 0;
  bottom: 0; // Ensures the container covers the full viewport
  animation: ${fadeIn} 1s ease-out;
  padding: 20px;
  background-color: #f0f8ff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow-y: auto; // Enables scrolling for overflow content
`;

export const Title = styled.h1`
  color: #333366;
  text-align: center;
  margin-bottom: 20px; // Added margin for spacing
`;

export const Paragraph = styled.p`
  color: #666666;
  line-height: 1.6; // Slightly increased line height for better readability
  margin-bottom: 20px; // Added margin for spacing
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
  padding: 20px;
  background-color: #e6e6fa;
  font-size: 1.25rem; // Adjusted font size for modern readability
  color: #333;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.5);
    z-index: 1;
  }

  & > * {
    position: relative;
    z-index: 2;
  }

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StrongText = styled.strong`
  color: #ff4500;
  font-weight: bold;
  margin-right: 0.5em;
`;
