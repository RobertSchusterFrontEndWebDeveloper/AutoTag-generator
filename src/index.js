import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag.js";
import { plate } from "./data.js";
import "./styles.css";

const renderNameTag = (name) => <NameTag key={name.id} name={name.license} />;

const App = () => {
  const NameTagElements = plate.map(renderNameTag);
  return (
    <div className="App">
      <h1>License Plate Generator</h1>
      {NameTagElements}
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
