// Character Counter
// Input: Hello
// Characters: 5

import { useState } from "react";

const CharacterCounter = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <h1>Character Counter</h1>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="input"
      />
      <h1>text: {text}</h1>
      <h1>characters: {text.length}</h1>
    </div>
  );
};

export default CharacterCounter;
