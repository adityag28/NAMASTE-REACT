import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="title"> Namaste react using JSX</h1>;

const number = 28;

const HeadingComponent = () => (
  <div className="div">
    {Title()}
    <Title />
    <Title></Title>
    <h1>This is composite component</h1>
    <h2>{number}</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
