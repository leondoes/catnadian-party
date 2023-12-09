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

const SplashPage = () => {
  return (
    <PageContainer>
      <Title>The Catnadian Party of Canada</Title>
      <SplashPicture>
        <img src={img} alt="Splash" />
      </SplashPicture>
      <ButtonContainer>
        <EnglishButton>Enter</EnglishButton>
        <FrenchButton>Entrer</FrenchButton>
      </ButtonContainer>
    </PageContainer>
  );
};

export default SplashPage;

