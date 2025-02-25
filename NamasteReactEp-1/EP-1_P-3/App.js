/* 
How to create nested html structure in react as given below :
<div id ="parent">
 <div id ="child">
  <h1>Im h1 tag</h1>
  <h2>I'm h2 tag</h2>
 </div>
 <div id ="child2">
  <h1>Im h1 tag</h1>
  <h2>I'm h2 tag</h2>
 </div>

</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
