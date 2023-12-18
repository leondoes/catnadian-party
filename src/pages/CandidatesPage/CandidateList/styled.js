import styled from 'styled-components';

export const CandidatesContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  height: 100vh; // Adjust the height as necessary
`;

export const CandidatesSidebar = styled.div`
  flex: 1;
  max-width: 200px;
  overflow-y: auto;
  background-color: #f7f7f7;
  border-right: 1px solid #ddd;
`;

export const CandidateProfile = styled.div`
  flex: 3;
  padding: 20px;
`;

export const CandidateNameButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  border: none;
  background-color: #f0f0f0;
  cursor: pointer;
  text-align: left;
  border-bottom: 1px solid #ddd;

  &:hover {
    background-color: #e8e8e8;
  }

  &.selected {
    background-color: #e0e0e0;
  }
`;
