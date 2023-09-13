import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

import Button from "./components/button";
import button from "./components/button";

function App() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("olive");

  console.log(button);

  // let myobj = {
  //   username: "developer",
  //   age: "31",
  // };

  return (
    <>
      {/* <h1 className="bg-green-400  text-black p-4 rounded-2xl mb-3">
        Tailwind test
      </h1> */}
      {/* <Card username="shivam" myArry={myobj} /> */}
      <br />

      <div
        className="w-full h-screen duration-300"
        style={{ backgroundColor: color }}
      >
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-5 ">
          <div className="flex flex-wrap gap-4 shadow-lg  bg-white rounded-2xl px-5 py-2">
            {/* onClick need function that way we add call back  */}
            <button
              onClick={() => setColor("red")}
              className="px-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("green")}
              className="px-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

            <button
              onClick={() => setColor("skyblue")}
              className="px-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "skyblue" }}
            >
              skyblue
            </button>

            <button
              onClick={() => setColor("maroon")}
              className="px-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "maroon" }}
            >
              maroon
            </button>

            <button
              onClick={() => setColor("lawngreen")}
              className="px-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "lawngreen" }}
            >
              lawngreen
            </button>

            <button
              onClick={() => setColor("pink")}
              className="px-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>

            <button
              onClick={() => setColor("lavender")}
              className="px-4 rounded-lg text-white font-semibold"
              style={{ backgroundColor: "lavender" }}
            >
              lavender
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
