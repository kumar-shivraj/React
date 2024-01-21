import React from "react";

const Hello = () => {
  //   return (
  // <div>
  //   <h1>Hello Shivraj</h1>
  // </div>
  //   );

  // return React.createElement("div", null, "Shivraj Kumar");
  // return React.createElement("div", null, "<h1>Shivraj Kumar</h1>");
  // return React.createElement("div", null, "h1", "Shivraj Kumar");

  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "Shivraj Kumar")
  // );

  // return React.createElement(
  //   "div",
  //   { id: "hello" },
  //   React.createElement("h1", null, "Shivraj Kumar")
  // );

  // return React.createElement(
  //   "div",
  //   { id: "hello", class: "demoClass" },
  //   React.createElement("h1", null, "Shivraj Kumar")
  // );

  // return React.createElement(
  //   "div",
  //   { id: "hello", className: "demoClass" },
  //   React.createElement("h1", null, "Shivraj Kumar")
  // );

  return (
    <div className="demoClass">
      <h1>Shivraj Kumar</h1>
    </div>
  );
};

export default Hello;
