import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./index.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer message="Welcome to Biohacking Store!" />
    </div>
  );
};

export default App;
