import React from "react";

export default function NumberButton(props) {
  let classN = "button number";
  if(parseInt(props.buttonValue) === 0){ 
    classN = "button number zero";
  }
  function appendNumber(val) {
    if(parseInt(props.numString) === 0) {
      props.setNumString(val)
    } else {
      if(val === '.') {
        let temp = props.numString.split('');
        if(temp.includes('.')){
          temp = temp;
        } else {
          props.setNumString(props.numString + "" + val);
        }
      } else {
        props.setNumString(props.numString + "" + val);
      }
    }
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        className={classN}
        onClick={() => {appendNumber(props.buttonValue)}}
      >
        <p>{props.buttonValue}</p>
      </button>
    </>
  );
};
