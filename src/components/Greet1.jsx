//  destructuring in function paramenter
// const Greet1 = ({ name, heroName }) => {
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
//     </div>
//   );
// };

//  destructuring in function body
const Greet1 = (props) => {
  const { name, heroName } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greet1;
