import React from "react";
import img from "../../assets/logo.png";
import { SplashPicture, PageContainer } from "./styled";

const SplashPage = () => {
  return (
    <PageContainer>
    <SplashPicture>
      <img src={img} alt="Splash" />
    </SplashPicture>
    </PageContainer>
  );
};

export default SplashPage;
