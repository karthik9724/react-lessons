import React from "react";
import { useRef, useState } from "react";
export default function App15() {
  const nameRef = useRef();
  const handleSubmit = () => {
    alert(nameRef.current.value);
    nameRef.current.style.color = "blue"
  };
  const [num,setnum]=useState();
  return (
    <div>
      <h1>App15</h1>
      <h2>useRef hook - to create uncontrolled component</h2>
      <p>
        <input type="text" ref={nameRef} />
      </p>
      <button onClick={handleSubmit}>Submit</button>
      <hr />
      <input type="Number" />
      <input type="Number" />
      <button onClick={setnum}>submit</button>
      <div>{num}</div>
      <hr />
      <input type="text" />
      <button>submit</button>
      
    </div>
  );
}