import { useState } from "react";
import Test from "./test";


function App() {
  let [name,setName] = useState('Pavan');
  console.log('App component called');

  const change = () => {
    console.log('button pressed');
    name = 'Sushobhan';
    setName(name);
  }
  return (
    // <div>
    //   <Welcome/>
    //   <Welcome/>
    //   <Welcome/>
    //   <Welcome/>
    //   <Welcome/>
    //   <Welcome/>
    //   <Welcome/>
    //   <Welcome/>
    // </div>
    <>
      <Test name={name}/>
      <button onClick={change}>click</button>
    </>
  );
}

export default App;
