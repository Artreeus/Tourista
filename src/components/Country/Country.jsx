import React, { useState, useEffect } from "react";
import CountryCard from "../CountryCard/CountryCard"; // Import the CountryCard component
import { Fade, Slide } from "react-awesome-reveal";

const Country = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://server-3qxh.vercel.app/user") // Replace with your actual API endpoint
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="feature-books container mx-auto">
      <div className="text-center">
        <Slide triggerOnce>
          <h2 className="">All Country Section</h2>
        </Slide>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 place-items-center">
        {countries.map((country, index) => (
          <CountryCard
            key={index}
            image={country.image}
            country_name={country.country_name}
            short_description={country.short_description}
          />
        ))}
      </div>
    </div>
  );
};

export default Country;
