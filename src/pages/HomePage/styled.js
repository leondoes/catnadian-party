import styled, { keyframes } from "styled-components";

export const SplashPicture = styled.div`
  width: 50vw;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const PageContainer = styled.div`
  background-color: #e2d8ce;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  transition: transform 0.5s ease;
  transform: translateY(0);
  padding: 20px;

  &.hidden {
    transform: translateY(-100vh);
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledManifesto = styled.div`
  width: 100%;
  opacity: 0;
  animation: ${slideInFromBottom} 0.5s ease-out forwards;
  &.visible {
    opacity: 1;
  }
`;

export const StyledContactForm = styled.div`
  width: 100%;
  opacity: 0;
  animation: ${slideInFromBottom} 0.5s ease-out forwards;
  &.visible {
    opacity: 1;
  }
`;

export const StyledCatnadianEventsList = styled.div`
  width: 100%;
  opacity: 0;
  animation: ${slideInFromBottom} 0.5s ease-out forwards;
  &.visible {
    opacity: 1;
  }
`;

export const Title = styled.div`
  font-family: 'Noto Sans', sans-serif;
  font-variant: small-caps;
  font-weight: 900;
  font-size: 4rem;
  color: #d35400;
  text-align: center;
  margin: 20px 0;
  text-shadow: 1px 1px 2px grey;
`;
