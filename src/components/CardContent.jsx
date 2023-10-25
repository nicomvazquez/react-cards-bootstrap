import React from "react";
import Card from "./Card";
import db from "../database/data";

const data = db;

function CardContent() {
  console.log(data);
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        {data.map((cards) => (
          <div className="col-md-4" key={cards.id}>
            <Card title={cards.title} image={cards.image} text={cards.text}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardContent;
