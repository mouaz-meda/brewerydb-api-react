import React from "react";
import { Link } from "react-router-dom";

const BeerListItem = props => {
  return (
    <Link to={"/beer/" + props.beer.id} className="card shadow">
      <img
        className="card-img-top"
        src={
          props.beer.labels
            ? props.beer.labels.medium
            : "/assets/images/No-beer-2-404.jpg"
        }
        alt={props.beer.name ? props.beer.name : "No Name available"}
      />
      <div className="card-body">
        <h5 className="card-title">
          {props.beer.name ? props.beer.name : "No Name available"}
        </h5>
        <p className="card-text">
          ABV : {props.beer.abv ? props.beer.abv + "%" : "No ABV available"}
        </p>

        <p className="card-text">
          IBU : {props.beer.ibu ? props.beer.ibu : "No IBU available"}
        </p>
      </div>
    </Link>
  );
};

export default BeerListItem;
