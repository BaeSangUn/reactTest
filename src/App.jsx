import React, { useState } from "react";
import Counter from "./components/Counter";
import NameChange from "./components/NameChange";
import Plusarticle from "./components/Plusarticle";
import Converter from "./components/Converter";
import Mybutton from "./components/Mybutton";

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Converter counter={counter} />
      <NameChange />
      <Plusarticle />
      <br />
      <Mybutton
        text={"1번"}
        fontSize={"10px"}
        isChecked={true}
        alertMsg={"1번 버튼 클릭됨"}
      />
      <Mybutton
        text={"2번"}
        fontSize={"12px"}
        isChecked={false}
        alertMsg={"2번 버튼 클릭됨"}
      />
      <Mybutton
        text={"3번"}
        fontSize={"15px"}
        isChecked={false}
        alertMsg={"3번 버튼 클릭됨"}
      />
    </>
  );
}

export default App;
