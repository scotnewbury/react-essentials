import React, {useReducer} from "react";
import './App.css';

function App() {
  const [checked, toggle] = useReducer(
    (checked => !checked),
    false);

  return (
    <>
      <input 
        type="checkbox" 
        value={checked} 
        onChange={toggle}
      />
      <p>{checked ? "The box is checked" : "The box is not checked"}</p>
    </>
  );
}

export default App;
