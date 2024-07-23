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
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease-out;
  overflow-y: auto;
`;

export const Title = styled.h1`
  color: #333366;
  text-align: center;
  margin-bottom: 20px;
`;

export const Paragraph = styled.p`
  color: #333333;
  line-height: 1.6;
  margin-bottom: 20px;
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
  font-size: 1.25rem;
  color: #ffffff;
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
    background: rgba(0, 0, 0, 0.7); /* Increase opacity for better text visibility */
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

export const OverlayText = styled.div`
  position: relative;
  padding: 20px;
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 1.6;
  z-index: 2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;
