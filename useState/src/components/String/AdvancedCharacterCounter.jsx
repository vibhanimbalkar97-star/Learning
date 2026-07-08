// split(/\s+/) = "Hello   React     World".split(/\s+/) ====> it gives ["Hello", "React", "World"]
// \s means any whitespace:
// Space
// Tab
// New line
// + means one or more.

import { useState } from "react";

//1) Word Counter

// text.trim() === "" ? 0 : text.trim().split(/\s+/).length

// 2)Maximum Character Limit (e.g., 20)

// Characters: 12 / 20

// 3)Remaining Characters

// Remaining: 8

// 4)Convert to Uppercase

// HELLO

// 5)Convert to Lowercase

// hello

// 6)Clear Button

// <button onClick={() => setText("")}>Clear</button>

const AdvancedCharacterCounter = () => {
  const [text, setText] = useState("");

  const maxChar = 30;

  // count word
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // can not count white spaces
  const char = text.trim() === "" ? 0 : text.trim().length;

  return (
    <div>
      <h2>Text Utility App</h2>
      <textarea
        className="input"
        rows="6"
        cols="35"
        maxLength={maxChar}
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h2>Preview</h2>
      <p> {text || "Nothing to preview..."}</p>
      <p>Characters: {char}</p>
      <p>Word count: {wordCount}</p>
      <p>
        Characters: {char}/{maxChar}
      </p>
      <p>Remaining characters: {maxChar - char}</p>

      <button
        style={{
          marginTop: "10px",
          padding: "5px",
          backgroundColor: "grey",
          borderRadius: "10px",
        }}
        onClick={() => setText(text.toUpperCase())}
      >
        Uppercase
      </button>

      <button
        style={{
          marginTop: "10px",
          padding: "5px",
          backgroundColor: "grey",
          borderRadius: "10px",
        }}
        onClick={() => setText(text.toLowerCase())}
      >
        Lowercase
      </button>
      <br />
      <button
        style={{
          marginTop: "10px",
          padding: "5px",
          backgroundColor: "grey",
          borderRadius: "10px",
        }}
        onClick={() => setText("")}
      >
        Clear Text
      </button>
    </div>
  );
};

export default AdvancedCharacterCounter;
