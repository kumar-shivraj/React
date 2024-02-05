import React from "react";
import Person from "./Person";

function NameList2() {
  const persons = [
    {
      id: 1,
      name: "Shivarj",
      age: 24,
      skill: "React",
    },
    {
      id: 2,
      name: "Saurabh",
      age: 25,
      skill: "Java",
    },
    {
      id: 1,
      name: "Rajan",
      age: 26,
      skill: "Javascript",
    },
  ];

  //   const personList = persons.map((person) => (
  //     <h2>
  //       I am {person.name}. I am {person.age} years old. I know {person.skill}
  //     </h2>
  //   ));

  const personList = persons.map((person) => <Person person={person} />);

  return <div>{personList}</div>;
}

export default NameList2;
