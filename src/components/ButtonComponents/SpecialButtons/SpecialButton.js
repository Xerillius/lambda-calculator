import React from "react";

export default function SpecialButton(props) {
  function special() {
    if(props.buttonValue === 'C') {
      props.setNumString("0");
      props.setTemp(0);
      props.setOp();
      props.setDone(false);
    }
    if(props.buttonValue === '+/-') {
      let temp = props.numString.split('');
      if(temp[0] === '-') {
        temp.shift();
        props.setNumString(temp.join(''));
      } else {
        props.setNumString('-' + props.numString);
      }
    }
  }
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button
        className="button special"
        onClick={special}
      >
        <p>{props.buttonValue}</p>
      </button>
    </>
  );
};
