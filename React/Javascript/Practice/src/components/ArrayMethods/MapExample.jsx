const MapExample = () => {
  const n =  [
    { name: "John", age: 30 },
    { name: "Ram", age: 20 },
    { name: "Amit", age: 25 },
  ];;

 const res = n.splice(1,1)

  console.log(res);

  return <div>
  </div>;
};

export default MapExample;
