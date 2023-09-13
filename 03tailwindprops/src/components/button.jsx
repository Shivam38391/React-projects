import React from "react";

import { useState } from "react";



function button(props) {
  const [colors, setColor] = useState("olive");

 let  c = props.clr;




  return (

          <button
            onClick={() => setColor(`${c}`)}
            className="px-4 rounded-lg text-white font-semibold"
            style={{ backgroundColor: props.clr }}>
            {props.clr}
          </button>

          

  );
}

export default button  ;
