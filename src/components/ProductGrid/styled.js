import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-content: center;
  align-items: stretch;
  background-color: #f0f0f0; /* Light grey background for contrast */
`;

export const Product = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`;

export const Name = styled.h3`
  color: #222;
  margin: 10px 0;
  text-align: center;
  font-weight: 600;
  font-size: 1.2em;
`;

export const Price = styled.p`
  color: #007bff;
  margin-bottom: 15px;
  font-size: 1.1em;
  font-weight: bold;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 10px;
  font-size: 1em;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Description = styled.p`
  color: #666;
  font-size: 0.9em;
  text-align: center;
  margin: 10px 0;
`;

export const FeatureItem = styled.div`
  color: #555;
  font-size: 0.9em;
  text-align: left;
  margin: 5px 0;
`;

export const FeatureList = styled.div`
  color: #555;
  font-size: 0.9em;
  text-align: left;
  margin: 10px 0;
`;

export const Reviews = styled.div`
  margin-top: 20px;
`;

export const Review = styled.div`
  background-color: #f1f1f1;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const Rating = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: #ff9900;
`;
