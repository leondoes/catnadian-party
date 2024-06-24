import styled from "styled-components";

export const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const EventsTitle = styled.h2`
  font-size: 1.5rem;
  color: #d35400;
`;

export const EventList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const EventItem = styled.li`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 10px;
  margin: 10px 0;
  width: 100%;
`;

export const EventTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

export const EventDescription = styled.p`
  margin: 5px 0;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #d35400;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e67e22;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 4px;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  padding: 5px 10px;
  background-color: #d35400;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: auto;
  display: block;

  &:hover {
    background-color: #e67e22;
  }
`;
