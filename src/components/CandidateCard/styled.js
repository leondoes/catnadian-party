import styled from 'styled-components';

export const Card = styled.div`
  max-width: 600px; // Increased max-width
  width: 100%; // Use up all available space
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 10px;
  overflow: hidden;
  margin: 20px;
  padding: 20px;
`;

export const Image = styled.img`
  width: 100%; // Make image take full width of the card
  height: auto; // Maintain aspect ratio
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const Name = styled.h3`
  margin-top: 10px;
  color: #333;
  font-size: 24px; // Larger font size for the name
  font-weight: bold; // Bold for better visibility
`;

export const Bio = styled.p`
  color: #666;
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;