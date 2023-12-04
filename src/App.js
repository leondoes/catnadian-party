import "./styles.css";
import React from "react";
import package_json from "../package.json";
import SplashPage from "../src/pages/SplashPage";

document.body.style.margin = 0;
document.title = "Catnadian Party of Canada";


window.__leonVersion = package_json.version;

const App = () => (
  <SplashPage/>
);

export default App;