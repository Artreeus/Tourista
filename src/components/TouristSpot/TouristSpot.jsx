import React, { useEffect, useState } from "react";
import Job from "../Job/Job";
import { Fade } from "react-awesome-reveal";

const TouristSpot = () => {
  const [jobs, setJobs] = useState([]);
  // this is not the best way to load show all data

  useEffect(() => {
    fetch("https://server-3qxh.vercel.app/coffee") // Replace with your actual API endpoint
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="feature-books container mx-auto">
      <div className="text-center">
        <Fade cascade>
          <h2 className="">Tourists Spots Section</h2>
        </Fade>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center ">
        {jobs.map((job) => (
          <Job key={jobs._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default TouristSpot;
