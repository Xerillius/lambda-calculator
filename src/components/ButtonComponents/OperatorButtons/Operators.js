import React, {useState} from "react";
import OperatorButton from './OperatorButton.js';
import { operators } from '../../../data.js';

//import any components needed

//Import your array data to from the provided data file

export default function Operators(props) {
  // STEP 2 - add the imported data to state
  const [operator] = useState(operators);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operator.map((operator, index) => {
         return (
          <OperatorButton 
            key={index} 
            buttonValue={operator}
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
    </div>
  );
};
