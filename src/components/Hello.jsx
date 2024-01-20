import React from "react";

const Hello = () => {
  //   return (
  // <div>
  //   <h1>Hello Shivraj</h1>
  // </div>
  //   );

  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Shivraj Kumar")
  );
};

export default Hello;
