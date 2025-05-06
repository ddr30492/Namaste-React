import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(

  "h1",
  {
    className: "heading",
    id: "heading",
    style: {
      color: "blue",
      textAlign: "center",
      fontSize: "50px",
    },
    onClick: () => {
      alert("Hello, React!");
    },
  },
  "First, React Program Using CDN!"
);
// Create an h1 element with text it will retrun an object
console.log(heading);

const parent = React.createElement(
  "div",
  {
    className: "parent",
    id: "parent",
  },
  [
    React.createElement("div", { id: "child", key: "div1" }, [
      React.createElement("h1", {key: '1'}, "I am h1 tag fdfdf"),
      React.createElement("h2", {key: '2'}, "I am h2 tag"),
    ]),
    React.createElement("div", { id: "child2", key: "div2" }, [
      React.createElement("h1", {key: '1'}, "I am h1 tag"),
      React.createElement("h2", {key: '2'}, "I am h2 tag"),
    ]),
  ]
); // Create a parent div element and add the heading as a child

console.log(parent);

// Create a root element and render the heading
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);



// for creating econd root and rendering the heading
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading);