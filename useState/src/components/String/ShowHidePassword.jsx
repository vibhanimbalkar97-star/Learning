import { useState } from "react";

const ShowHidePassword = () => {
  const [num, setNum] = useState([10, 15, 20, 25]);

  const handleAdd = () => {
    setNum((prev) => prev.map((n) => n === 20) ? "Found" : "Not Found");
  };

  return (
    <div>
      <h1>{num}</h1>
      <button type="button" onClick={handleAdd}>
        Search Number
      </button>
    </div>
  );
};

export default ShowHidePassword;
