import React from "react";

function NameList3() {
  //   const names = ["Shivarj", "Saurabh", "Rajan"];

  //   adding duplicate name
  // it will give warning if we give name as key as two child of list can't be same
  const names = ["Shivarj", "Saurabh", "Rajan", "Shivarj"];

  //   it will throw warning as it doesn't have key
  //   const nameList = names.map((name) => <h2>{name}</h2>);

  // it will give warning for duplicate key if we're having two same names
  //   const nameList = names.map((name) => <h2 key={name}>{name}</h2>);

  // giving index as key, but it is having some disadvantages
  const nameList = names.map((name, key) => <h2 key={key}>{name}</h2>);

  // we can add index as a key in a list only if satisfies a certain conditions :
  // if all below conditions satisfies then only we'll use index as a key in the list
  //      1.    the item in your list do not have a unique id
  //      2.  the list is static list and it won't change
  //      3.  the list is never re-ordered or filtered

  return <div>{nameList}</div>;
}

export default NameList3;
