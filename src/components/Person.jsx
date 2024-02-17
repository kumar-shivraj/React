import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old. I know {person.skill}
      </h2>
    </div>
  );
}

// // key props are not accessible in child component. React will throw warning here that key is not accessible. It says key is not a prop
// function Person({ person, key }) {
//   return (
//     <div>
//       <h2>
//         {key} I am {person.name}. I am {person.age} years old. I know {person.skill}
//       </h2>
//     </div>
//   );
// }
export default Person;
