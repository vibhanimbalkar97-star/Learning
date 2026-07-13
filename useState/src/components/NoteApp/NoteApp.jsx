import { useState } from "react";

const NoteApp = () => {
  const [text, setText] = useState("");
  const [details, setDetails] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDetails = [...result];
    newDetails.push({ text, details });
    setResult(newDetails);
    setText("");
    setDetails("");
  };

  const handleDelete = (index) => {
    const updatedItems = result.filter((_, i) => i !== index);
    setResult(updatedItems);
  };

  return (
    <div className="min-h-screen bg-black text-white lg:flex">
      <form
        className="flex flex-col w-1/2 gap-5 items-start p-10"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          type="text"
          placeholder="Enter notes heading"
          className="px-5 py-2 border-2 rounded outline-none w-full font-medium"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <textarea
          type="text"
          placeholder="Write Details here"
          className="px-5 py-2 h-30 border-2 rounded outline-none w-full font-medium"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
        <button className="px-5 py-2 bg-white text-black font-medium w-full rounded-lg outline-none">
          Add Note
        </button>
      </form>

      <div className="p-8 lg:w-1/2 lg:border-l-2">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex items-start justify-start gap-5 flex-wrap mt-5 overflow-auto">
          {result.length > 0 &&
            result.map((res, i) => (
              <div
                key={i}
                className="flex justify-between flex-col items-start min-h-40 w-40 px-4 py-6 rounded-xl text-black bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] "
              >
                <h1 className="text-xl font-bold leading-tight whitespace-pre-wrap break-all">
                  {res.text}
                </h1>
                <p className="font-medium text-gray-600 leading-tight whitespace-pre-wrap break-all mt-2">
                  {res.details}
                </p>
                <button
                  className="bg-red-500 w-full rounded font-bold text-white"
                  onClick={() => handleDelete(i)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NoteApp;
