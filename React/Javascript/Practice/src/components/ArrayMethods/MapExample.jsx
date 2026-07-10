const MapExample = () => {
  const a = [
    { name: "John", age: 30 },
    { name: "Ram", age: 20 },
    { name: "Amit", age: 25 },
  ];

    const res = a.map((item) => (item.name)).join("-")

  console.log(res);

  return <div>
    
  </div>;
};

export default MapExample;
