import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./Cards";

function App() {
  const [listOfUSer, setlistOfUSer] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setlistOfUSer(res.data);
        console.log(res.data);
      })
      .catch((Error) => console.log(Error));
  }, []);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {listOfUSer.map((listOfUSer) => (
        <Cards {...listOfUSer} />
      ))}
    </div>
  );
}

export default App;