import React from "react";

function ChildComponent(props) {
  return (
    <div>
      {/* this will only call the parent's function but can't pass the data */}
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      {/* this can pass the data from child component to parent component */}
      <button onClick={() => props.greetHandler("Child")}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
