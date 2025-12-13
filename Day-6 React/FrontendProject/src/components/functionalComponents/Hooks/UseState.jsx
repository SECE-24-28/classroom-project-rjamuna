import { useState } from "react";

const Usestate = () => {
  const [number, updateNumber] = useState(0);
  const [text, updateText] = useState("");

  const subb = () => {
    updateNumber(number - 1);
  };

  const Addd = () => {
    updateNumber(number + 1);
  };

  const resett = () => {
    updateNumber(0);
    updateText("");
  };

  return (
    <div>
      <h1>Usestate Hook Example</h1>

      {/* SUB */}
      <button onClick={subb}>-</button>

      {/* FIXED: added onChange to avoid React warning */}
      <input
        type="number"
        value={number}
        onChange={(event) => updateNumber(Number(event.target.value))}
      />

      <button onClick={Addd}>+</button>

      
      <button onDoubleClick={resett}>Reset</button>

      <br />
      <h2> Text typing</h2>

      <input
        type="text"
        value={text}
        onChange={(event) => updateText(event.target.value)}
      />


      <button onDoubleClick={resett}>Resett</button>
    </div>
  );
};

export default Usestate;
