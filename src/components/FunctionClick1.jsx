import React from "react";

const FunctionClick1 = () => {
  const clickHandler = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      {/* below won't work as it's a function call */}
      {/* it will already clicked and logged as "Button Clicked" in this case when you open the web browser console and if we click then it won't work */}
      {/* in class component, it's even worse when click handler changes the state
      of the component, the component constantly re-renders and a infinite no of message we see in console */}
      {/* <button onClick={clickHandler()}>Click</button>  */}


      {/* Below will work fine */}
      <button onClick={clickHandler}>Click</button>
    </div>
  );
};

export default FunctionClick1;
