// CountryCard.js
import React from "react";
import { Link } from "react-router-dom";

const CountryCard = ({ id, country_name, image, short_description }) => {
 

  return (
    <Link to={''} className="card w-70 bg-base-100 shadow-xl my-7" >
        <figure>
          <img className="w-[200px] h-[90px]" src={image} alt={country_name} />
        </figure>
        <div className="card-body">
          <h3 className="card-title">{country_name}</h3>
          <p className="font-bold">{short_description}</p>
        </div>
    </Link>
  );
};

export default CountryCard;
