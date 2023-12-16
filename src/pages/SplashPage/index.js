import React from "react";
import img from "../../assets/logo.png";
import { SplashPicture, PageContainer, Title } from "./styled";

const SplashPage = () => {
  return (
    <div>
      <PageContainer>
        <Title>The Catnadian Party of Canada</Title>
        <SplashPicture>
          <img src={img} alt="Splash" />
        </SplashPicture>
      </PageContainer>
    </div>
  );
};

export default SplashPage;
