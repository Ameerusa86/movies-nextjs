import React from "react";
import "./Card.css";
import logo from "../../../public/Asset/logo.png";

const Card = ({ title, poster, overview }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={poster} alt="title" />
    </div>
  );
};

export default Card;
