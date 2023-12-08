import React from "react";
import img from "../../assets/logo.png";
import { SplashPicture, PageContainer, EnterButtonLeft,EnterButtonRight, ButtonContainer } from "./styled";


const SplashPage = () => {
  return (
    <PageContainer>
      <SplashPicture>
        <img src={img} alt="Splash" />
      </SplashPicture>
      <ButtonContainer>
        <EnterButtonLeft>Enter</EnterButtonLeft>
        <EnterButtonRight>Entrer</EnterButtonRight>
      </ButtonContainer>
    </PageContainer>
  );
};

export default SplashPage;