import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0); //0 is iinitial value it could be anything
  let [message, setmessage] = useState(" ");





  const addValue = function () {
    console.log("clicked", count);
    //here we use setCount to update the counter
    // setCount(count+1)
    if (count < 20) {
      // count = count + 1;
      // setCount(count);

          // setCount(count+1)
          // setCount(count+1)
          // setCount(count+1)
          setCount(count+1)
          setCount((prev) => prev+1) //prev is last existing state  ,and setCount also accepts a callback
          setCount((prev) => prev+1)
          setCount((prev) => prev+1)



    } else {
      console.log("you cant go above 20");
      setmessage((message = "you cant go above 20"));
    }
  };







  const subtValue = function () {
    if (count > 0) {
      count = count - 1;
      setCount(count);
    } else {
      setmessage((message = "you cant go below 0"));
    }
  };





  return (
    <>
      <h1>chai aur React</h1>
      <h2>Counter value: {count} </h2>

      <button onClick={addValue}>add value : {count}</button>
      <br />
      <button onClick={subtValue}>subtract value</button>

      <h1>Warning message : {message}</h1>
    </>
  );
}

export default App;
