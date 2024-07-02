import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

const AllTouristSpot = () => {
  const spots = useLoaderData();
  const [sortDirection, setSortDirection] = useState("ascending");

  // Function to sort spots based on average_cost
  const sortSpots = () => {
    const sortedSpots = [...spots].sort((a, b) => {
      // Extract numerical values from average_cost (remove $ sign)
      const costA = parseFloat(a.average_cost.replace("$", ""));
      const costB = parseFloat(b.average_cost.replace("$", ""));

      if (sortDirection === "ascending") {
        return costA - costB;
      } else {
        return costB - costA;
      }
    });
    return sortedSpots;
  };

  // Handle sort direction toggle
  const toggleSortDirection = () => {
    setSortDirection((prevDirection) =>
      prevDirection === "ascending" ? "descending" : "ascending"
    );
  };

  const sortedSpots = sortSpots();

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={toggleSortDirection}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Sort Data By Average Cost
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-7">
        {sortedSpots.map((spot, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
          >
            <img
              src={spot.image}
              alt={spot.tourists_spot_name}
              className="w-full h-64 object-cover object-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {spot.tourists_spot_name}
              </h2>
              <p className="text-sm text-gray-600 mb-4 font-bold">
                {spot.short_description}
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600">
                    Average Cost: {spot.average_cost}
                  </p>
                  <p className="text-sm text-gray-600">
                    Total Visitors Per Year: {spot.total_visitors_per_year}
                  </p>
                  <p className="text-sm text-gray-600">
                    Travel Time: {spot.travel_time}
                  </p>
                  <p className="text-sm text-gray-600">
                    Seasonality: {spot.seasonality}
                  </p>
                </div>
                <div>
                  <Link
                    to={`/Job/${spot._id}`}
                    className="text-sm text-white bg-blue-500 hover:bg-blue-600 rounded-2xl px-4 py-2 rounded-md transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllTouristSpot;
