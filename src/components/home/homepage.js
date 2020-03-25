import React, { useState } from "react";
import "./homepage.css";
import dog from "./dog.png";
import App from "../../App";

const Home = () => {
  const [load, setLoad] = useState(false);
  const onload = () => {
    setLoad(!load);
  };

  return (
    <div className="home">
      <img className="dog-icon-img" src={dog} alt="dog-icon"></img>

      <h2 className="dog-breed-title">Dog Breed Finder</h2>
      <button onClick={onload} className="start">
        Start
      </button>

      <div>{load ? <App /> : null}</div>
    </div>
  );
};
export default Home;
