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
      id: 3,
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

  // create a seperate component for a list item. It will be having better code readablity.
  // here Person component is created a seperate list item for every person
  // const personList = persons.map((person) => (
  //   <Person key={person.name} person={person} />
  // ));

  // key props are not accessible in child component
  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));

  return <div>{personList}</div>;
}

export default NameList2;
