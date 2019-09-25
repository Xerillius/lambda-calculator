import React from "react";

// Operator Functions
function helpOperate(props, val){
  if(val === '/') {
    return props.temp / Number(props.numString);
  } else if (val === '*') {
    return props.temp * Number(props.numString);
  } else if (val === '+') {
    return props.temp + Number(props.numString);
  } else {
    return props.temp - Number(props.numString);
  }
}

export default function OperatorButton(props) {
  function operate(val) {
    console.log("Op: " + val);
    // Check if temp has value
    if(props.temp > 0) {
      console.log(props.temp);
      // if operator is '='
      if(props.op === '=') {
        console.log("Entering op = '-'");
        // perform computation and set numString to answer
        props.setNumString(helpOperate(props, props.op));
        // set temp to 0
        props.setTemp(0);
        // set bool val to true so if user inputs more numbers it first sets all values to 0
        props.setDone(true);
      }
      // if operator is any other value
      else {
        // perform computation based on prior operator and set temp to answer
        props.setTemp(helpOperate(props, val));
        // set numString to 0
        props.setNumString("0");
        // set new operator
        props.setOp(val);
        // set bool val to false so if user inputs more numbers it will accept input for computation chain
        props.setDone(false);
      }
    }
    // else if temp has no value
    else {
      console.log("No value, assigning numString to temp");
      // assign numString to temp
      props.setTemp(Number(props.numString), () => {
        console.log("Temp: " + props.temp);
      });
      // set numString to 0
      props.setNumString("0");
      // set operator
      props.setOp(val);
      // set bool val to false so if user inputs more numbers it will accept input for computation chain
      props.setDone(false);
    }
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button 
        className="button operator"
        onClick={() => {operate(props.buttonValue.char)}}
      >
        <p>{props.buttonValue.value}</p>
      </button>
    </>
  );
};
