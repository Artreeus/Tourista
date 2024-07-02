import React from "react";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    _id,
    image,
    tourists_spot_name,
    country_name,
    location,
    short_description,
    average_cost,
    seasonality,
    travel_time,
    totalVisitorsPerYear,
  } = job;

  return (
    <div className="card bg-white shadow-lg  rounded-lg overflow-hidden hover:shadow-xl transition duration-300 transform hover:-translate-y-1 hover:scale-105 my-8">
      <figure className="relative">
        <img
          className="w-full h-56 object-cover object-center"
          src={image}
          alt={tourists_spot_name}
        />
        <div className="absolute top-0 left-0 bg-black bg-opacity-40 w-full h-full"></div>
      </figure>
      <div className="card-body p-4">
        <div className="text-xl font-semibold text-gray-800 mb-2">
          {tourists_spot_name}
        </div>
        <div className="text-[15px] font-bold text-gray-600 mb-4">
          Country: {country_name}
        </div>
        <hr />
        <div className="text-sm text-gray-600 mb-2">Location: {location}</div>
        <div className="text-sm text-gray-600 mb-2">
          Short Description: {short_description}
        </div>

        <div className="flex justify-center">
          <Link
            to={`/Job/${_id}`}
            className="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
