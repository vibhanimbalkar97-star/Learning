import { useState } from "react";

const advance = () => {
  // with object
  const [user, setUser] = useState({ name: "Karan", age: 35 });
  const [num, setNum] = useState([10, 20, 30, 40]);
  const [number, setNumber] = useState(10);

  // update object
  const updateObject = () => {
    const newValue = { ...user };
    console.log(newValue);
    newValue.name = "Kareena";
    newValue.age = 40;
    setUser(newValue);
    console.log(newValue);
  };

  // update array
  const updateArray = () => {
    // setNum((prev) => ([...prev, 90])) //add 90 at last
    // setNum((prev) => ([...prev.slice((0, 1))])) // remove element at index 0 given
    setNum((prev) => prev.map((item) => (item == 40 ? 90 : item))); // update an element
  };

  // Batch update
  const batchUpdate = () => {
    setNumber((prev) => prev + 1);
    setNumber((prev) => prev + 1);
    setNumber((prev) => prev + 1);
  };
  return (
    <div className="main">
      <h1>
        {user.name}, {user.age}
      </h1>
      <button className="btn" onClick={() => updateObject()}>
        Update Object
      </button>
      <h1>{num}</h1>
      <button className="btn" onClick={() => updateArray()}>
        Update Array
      </button>
      <h1>{number}</h1>
      <button className="btn" onClick={() => batchUpdate()}>
        Batch Update
      </button>
    </div>
  );
};

export default advance;
