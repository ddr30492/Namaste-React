import React from "react";
import ReactDOM from "react-dom/client";

const Heading =  function () {
  return (
    <>
      <h1 id="heading" className="header">Welcome to React Heading Element!</h1>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <img src="https://reactjs.org/logo-og.png" alt="React Logo" style={{ height: "100px", width: "auto" }}/>
      </a>
    </>
  )
};


//React Component
// Class Component : OLD WAY

// function Component : NEW WAY : Normal jas function and It retrun some JSX
//componenet composition: it is a way to combine multiple components into a single component please check the below example

const numberArry  = [0,10,20,50,15,25];
const max = Math.max(...numberArry);
const HeadingComponent = () => {
  return (
    <>
      {/* first type */}
      <Heading />
      {/* Second type */}
      <Heading></Heading>
      {/* third type */}
      {Heading()}
      <h2>{max}</h2>
      <h1 id="heading" className="header">
        Welcome to React!
      </h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
