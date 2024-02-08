import React, { useEffect } from "react";
import img from "../../assets/logo.png";
import { SplashPicture, PageContainer, Title } from "./styled";

const SplashPage = () => {
  useEffect(() => {
    // Function to dynamically insert the meta tag
    const insertMetaTag = () => {
      const metaTag = document.createElement("meta");
      metaTag.name = "apple-itunes-app";
      metaTag.content = "app-id=6456223179";
      document.head.appendChild(metaTag);
    };
    const timer = setTimeout(insertMetaTag, 5000);
    return () => clearTimeout(timer);
  }, []);

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
