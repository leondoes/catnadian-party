import React from "react";
import img from "../../assets/logo.svg";
import { SplashPicture } from "./styled";

const SplashPage = () => {
  return (
    <SplashPicture>
      <img src={img} alt="Splash" />
    </SplashPicture>
  );
};

export default SplashPage;
