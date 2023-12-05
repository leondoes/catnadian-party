import React from "react";
import img from "../../assets/cp_splash.png";
import { SplashPicture } from "./styled";

const SplashPage = () => {
  return (
    <SplashPicture>
      <img src={img} alt="Splash" />
    </SplashPicture>
  );
};

export default SplashPage;
