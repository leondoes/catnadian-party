import React from "react";
import img from "../../assets/logo.png";
import {
  SplashPicture,
  PageContainer,
  EnglishButton,
  FrenchButton,
  ButtonContainer,
  Title,
} from "./styled";

const SplashPage = ({ onEnter, entered }) => {
  return (
    <div className={`SplashPage ${entered ? 'hide' : ''}`}>
    <PageContainer>
      <Title>The Catnadian Party of Canada</Title>
      <SplashPicture>
        <img src={img} alt="Splash" />
      </SplashPicture>
      <ButtonContainer>
        <EnglishButton onClick={onEnter}>Enter</EnglishButton>
        <FrenchButton onClick={onEnter}>Entrer</FrenchButton>
      </ButtonContainer>
    </PageContainer>
    </div>
  );
};

export default SplashPage;

