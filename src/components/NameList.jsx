import React from "react";

function NameList() {
  const names = ["Shivraj", "Saurabh", "Rajan"];
  const nameList = names.map((name) => <h2>{name}</h2>);
  return (
    <div>
      {/* {names.map((name) => (
        <h2>{name}</h2>
      ))} */}

      {nameList}
    </div>
  );
}

export default NameList;
