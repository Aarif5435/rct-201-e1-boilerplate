import React from "react";
import "./App.css";
import Clock from "./components/Clock";
import List1 from "./components/List1";
import List2 from "./components/List2";
import useClock from "./hooks/useClock";
import useNumberList from "./hooks/useNumberList";


function App() {
  const {hour,minutes,seconds,lable} = useClock();
  const {Append,Pop,Clear,Rest,initialArray} = useNumberList([1,2,3]);
  const {Append:append,Pop:pop,Clear:clear,Rest:rest,initialArray:init} = useNumberList([4,5])

  return (
    <div className="App">
      
      <Clock hour={hour} minutes={minutes} seconds={seconds} lable={lable} />
      <List1 lable="List1" Append={Append} Pop={Pop} Clear={Clear} Rest={Rest} element={initialArray} />
       <List2 lable="List2" Append={append} Pop={pop} Clear={clear} Rest={rest} element={init}/>
      
    </div>
  );
}

export default App;
