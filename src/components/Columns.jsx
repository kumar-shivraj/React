import React from "react";

function Columns() {
  const items = [];

  return (
    // //  this will give warning as td can't be child of div
    // <div>
    //   <td>Name</td>
    //   <td>Shivraj</td>
    // </div>

    // <React.Fragment>
    //   <td>Name</td>
    //   <td>Shivraj</td>
    // </React.Fragment>

    // react fragment accepts the key as prop while rendering lists with the javascript map function.
    // key attribute is the only attribute that can be passed to react fragment
    <React.Fragment>
      {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))}
    </React.Fragment>

    // // shorthand of writing the react fragment :
    // // limitation :if we use shorthand for react fragmentation then we can't pass the key attribute
    // <>
    // <h1>Shivraj Kumar</h1>
    // <p>Learning React</p>
    // </>
  );
}

export default Columns;
