import React, { useState } from "react";
import "./App.css";

import MyButton from "./components/my-button/my-button.compontent";
import MyList from "./components/my-list/mylist.component";
import MyPie from "./components/my-pie/myPie.component";

function App(): JSX.Element {
  const [name, setName] = useState("");
  return (
    <div className="App">
      <div className="btn">
        {"MyButton: > "}
        <MyButton onClick={() => setName(name + "A")} hello={name}>
          按钮
        </MyButton>
        <hr />
      </div>

      <div className="list">
        <MyList></MyList>
      </div>

      <hr />
      <div>
        饼图{":>"}
        <MyPie />
      </div>
    </div>
  );
}

export default App;
