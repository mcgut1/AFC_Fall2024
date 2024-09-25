import Child from "./components/Child"
const App = () => {
  let children = ["Stefan", "Anthony", "Zach"]
  let newArray = children.map(kid => {
    return <Child fname={kid}/>
  })
  return (
   <>
<h1>My kids are:</h1>
{newArray}
</> 
  );
};
export default App;

// let newArray = children.map((kid, index)) => {
//   return <Child key={new Date().getTime()} fname={kid}
// });
// return (
//   <h1>My kids are: </h1>
//   {newArray}
//   </>
// };