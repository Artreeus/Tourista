import { useLoaderData, useParams } from "react-router-dom";

const JObDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  // Find the job with the specified _id
  const job = jobs.find((job) => job._id === id);

  // Check if job exists
  if (!job) {
    // If job doesn't exist, return a message indicating that the job was not found
    return <div>Job not found!</div>;
  }

  // Access job properties
  const {
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
    <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto detail lg:h-[650px] place-items-center my-8 p-5 bg-white rounded-lg shadow-lg">
      {/* First Detailed Section */}
      <div className="left lg:col-span-1 col-span-1 lg:order-1 order-2 relative">
        <img
          className="lg:h-full w-full object-cover rounded-lg"
          src={image}
          alt={tourists_spot_name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50 rounded-lg"></div>
      </div>

      {/* Second Detailed Section */}
      <div className="right lg:col-span-1 col-span-1 lg:order-2 order-1 flex flex-col justify-between lg:px-10">
        {/* Property Details */}
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
            {tourists_spot_name}
          </h1>
          <p className="text-lg text-gray-600 mb-4">Country: {country_name}</p>
          <p className="text-lg text-gray-600 mb-6">Location: {location}</p>
          <p className="text-lg text-gray-600 mb-6">
            Short Description: {short_description}
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Average Cost: {average_cost}
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Seasonality: {seasonality}
          </p>
          <p className="text-lg text-gray-600 mb-6">Travel Time: {travel_time}</p>
          <p className="text-lg text-gray-600 mb-6">
            Total Visitors Per Year: {totalVisitorsPerYear}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JObDetails;
