import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1 className="title">Namaste React using JSX</h1>;

const HeadingComponet = () => (
  <div className="root">
    <Title />
    <h2>Namaste React Functional Component</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponet />);
