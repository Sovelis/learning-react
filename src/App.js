import Adem from "./components/Adem";
import Deneme from "./components/Deneme";

function App() {
  const deneme = "props";
  const arr = [
    { name: "array1", id: 0 },
    { name: "array2", id: 1 },
    { name: "array3", id: 2 },
  ];
  console.log(arr, "arr");

  const clickFunc = () => {
    console.log("sen butona tıkladın");
  };
  return (
    <div className="App">
      <Adem adem={deneme} />
      <Deneme />
      {arr.map((ar, i) => (
        <div key={ar.id}>{ar.name}</div>
      ))}
      <button onClick={clickFunc}>tıkla</button>
    </div>
  );
}

export default App;
