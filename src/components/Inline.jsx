import React from "react";

// Inline styles are not specified as string.
// instead it specified as object whose key as camel case version of the style name and values is usually a string

const heading = {
  fontSize: "72px",
  color: "blue",
};

function Inline() {
  return (
    <div>
      <h2 style={heading}>Inline</h2>
    </div>
  );
}

export default Inline;
