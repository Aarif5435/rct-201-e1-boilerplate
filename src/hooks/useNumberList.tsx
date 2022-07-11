const useNumberList = (initialArray : number[]) => {
  // TODO
  // refer readme.md for what to return

  const Append = (value : number)=>{
    initialArray.push(value);
    return initialArray;
  };
  

  const Pop = ()=>{
    initialArray.pop();
    return initialArray;
  };
   


  const Clear = ()=>{
    initialArray = [];
    return initialArray;
  }

  const Rest = () =>{
    initialArray = initialArray;
  };
 

  return {Append,Pop,Clear,Rest,initialArray}
};

export default useNumberList;
