import React from "react";


type Props = {
  //   TODO
  hour : number;
  minutes : number;
  seconds : number;
  lable : string;
};

const Clock = (props: Props)  => {
  
  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {props.lable}
      </h4>
      <span data-testid="clock-hours">
        {props.hour}
        </span>
        :
      <span data-testid="clock-minutes">
        {props.minutes}
      </span>
       :
      <span data-testid="clock-seconds">
       {props.seconds}
        </span>
    </div>
  );
};

export default Clock;
