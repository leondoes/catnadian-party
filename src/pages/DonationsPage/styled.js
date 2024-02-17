import styled from 'styled-components';

export const DonationsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #f0f0f0;
`;

export const DonationsItem = styled.div`
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const ImageTitle = styled.h2`
  font-size: 18px;
  color: #333;
  padding: 10px 15px;
  margin: 0;
  background-color: #fff;
`;

export const CatImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
