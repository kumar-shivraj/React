import React from "react";

function FragmentDemo() {


  // below will give error
  // return <h1>Fragment Demo</h1>
  // <p>This describes react Fragment Demo component</p>

  return (
    // <div>
    //   <h1>Fragment Demo</h1>
    //   <p>This describes react Fragment Demo component</p>
    // </div>

    // this will not add extra div node in the document
    <React.Fragment>
      <h1>Fragment Demo</h1>
      <p>This describes react Fragment Demo component</p>
    </React.Fragment>

   
  );
}

export default FragmentDemo;
