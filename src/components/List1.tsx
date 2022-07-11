import React, { useState } from "react";

type List1Props = {
  // TODO
  Append : Function;
  Pop : Function;
  Clear : Function;
  Rest : Function;
  lable : string;
  element : number[];
};
const List1 = (props: List1Props) => {
  const [text, setText] = useState("")
  return (
    <div data-testid="list1">
      <h3 data-testid="list1-label">{props.lable}</h3>
      {props.element.map((e)=>`${e} `)}
      <div data-testid="list1-element">{}</div>
      

      {props.Append(text)}
      <input data-testid="list1-input" onChange={(e)=> setText(e.target.value)} />
      <button data-testid="list1-btn-append-start" onClick={props.Append(text)}> 
        {/* Append to start of list btn */} 
        append
      </button>
      <button data-testid="list1-btn-pop-end" onClick={props.Pop()}>
        {/* po last element btn */}
        Pop
      </button>
      <button data-testid="list1-btn-clear" onClick={props.Clear()}>
        {/* clear list and set empty button */}
        Clear
      </button>
      <button data-testid="list1-btn-reset" onClick={props.Rest()}>
        {/* Reset list to default value btn */}
        reset
      </button>
    </div>
  );
};

export default List1;
