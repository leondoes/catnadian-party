import "./styles.css";
import React from "react";
import package_json from "../package.json";

document.body.style.margin = 0;
document.title = "Catnadian Party of Canada";


window.__leonVersion = package_json.version;

const App = () => (
  <div>Hello, World!.....</div>
);

export default App;