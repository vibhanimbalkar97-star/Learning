// 5. Input Box
// const [name, setName] = useState("");

// Display

// Hello Vibha

import { useState } from "react";

const DisplayName = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        className="input"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h1>Hello {name}</h1>
    </div>
  );
};

export default DisplayName;


