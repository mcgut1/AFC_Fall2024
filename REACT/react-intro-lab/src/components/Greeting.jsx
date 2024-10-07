import { useState } from "react";
const Greeting = () => {
  const [name, setName] = useState("Tyler");
  return <h1>Hello, {name} </h1>;
};

export default Greeting;
