import styled from 'styled-components';

export const EventsContainer = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  font-family: 'Arial', sans-serif;
`;

export const EventsTitle = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 20px;
`;

export const EventList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const EventItem = styled.li`
  background: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }
`;

export const EventTitle = styled.h3`
  color: #007bff;
  margin-bottom: 10px;
`;

export const EventDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 5px 0;
`;