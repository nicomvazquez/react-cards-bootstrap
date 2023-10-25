import React from "react";
import PropsTypes from "prop-types";

function Card(props) {
  return (
    <div className="card text-center bg-dark">
      <img src={props.image} alt="" />
      <div className="card-body text-light">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text">
          {props.text
            ? props.text
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aperiam facere vitae fuga sint, illo fugiat, obcaecati ducimus saepe recusandae labore nemo facilis neque dolorum laborum distinctio et nam optio."}
        </p>
        <a href={props.url} className="btn btn-outline-light">
          go to this web site
        </a>
      </div>
    </div>
  );
}

Card.PropsTypes = {
  title: PropsTypes.string.isRequired,
  url: PropsTypes.string,
  image: PropsTypes.string,
};

export default Card;
