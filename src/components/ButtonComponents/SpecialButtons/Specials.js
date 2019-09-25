import React, { useState } from "react";
import SpecialButton from "./SpecialButton.js";
import { specials } from "../../../data.js";

//import any components needed

//Import your array data to from the provided data file

export default function Specials(props) {
  // STEP 2 - add the imported data to state
  const [special] = useState(specials);
  return (
    <>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {special.map((special, index) => {
        return (
          <SpecialButton 
            key={index}
            buttonValue={special}
            numString={props.numString}
            setNumString={props.setNumString}
            temp={props.temp}
            setTemp={props.setTemp}
            op={props.op}
            setOp={props.setOp}
            done={props.done}
            setDone={props.setDone}
          />
        );
      })}
    </>
  );
};
