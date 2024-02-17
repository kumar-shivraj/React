import React from "react";
import "./myStyles.css";

function Stylesheet(props) {
  const className = props.primary ? "primary" : "";
  return (
    <div>
      {/* <h1 className="primary">Stylesheet</h1> */}

      {/* taking className from props passed by parent component */}
      {/* <h1 className={className}>Stylesheet</h1> */}

      {/* adding multiple className having best option as template literals */}
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  );
}

export default Stylesheet;
