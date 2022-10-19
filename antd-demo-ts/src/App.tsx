import React, { useState } from "react";
import "./App.css";

import MyButton from "./components/my-button/my-button.compontent";

function App() {
  const [name, setName] = useState("")
  return (
    <div className="App">
      <MyButton onClick={() => setName(name + 'A')} hello={name}>按钮</MyButton>
    </div>
  );
}

export default App;
