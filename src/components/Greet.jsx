// function Greet() {
//   return <h1>Hello Shivraj!</h1>;
// }

// const Greet = () => <h1>Hello Shivraj!</h1>;

// export default Greet;

// ==========  understanding props ==========

const Greet = (props) => {
  const { name, heroName } = props;
  // const Greet = ({name, heroName}) => {
  // console.log(props);
  //  props.name="Shivraj"; //  it will give error as props are immutable
  //   return <h1>Hello Shivraj!</h1>;
  //   return <h1>Hello props.name</h1>;
  //   return <h1>Hello {props.name}</h1>;
  //   return (
  //     <h1>
  //       Hello {props.name} a.k.a {props.heroName}
  //     </h1>
  //   );

  //   return <h1>Hello {props.name}</h1>;

  //   return (
  //     <h1>
  //       Hello {props.name} a.k.a {props.heroName}
  //     </h1>
  //   );

  //    below will throw error as we're not returning in single wrapper element
  //   return (
  //     <h1>
  //       Hello {props.name} a.k.a {props.heroName}
  //     </h1>
  //     {props.children}
  //   );

  return (
    <div>
      {/* <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1> */}
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greet;

// ==========  understanding props ends ==========
