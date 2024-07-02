import React from "react";
import { Fade } from "react-awesome-reveal";


const Services = () => {
  return (
    <div className=" feature-books container mx-auto py-5 my-7">
      <div className="text-center mb-8">

      <Fade cascade damping={0.1}>
           <h2 className="text-3xl font-bold"> Services</h2>
        </Fade>
        
       

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-8 text-center shadow-md transition duration-300 transform hover:shadow-lg">
          <i className="fas fa-route text-3xl text-primary mb-4"></i>
          <h5 className="text-lg font-semibold mb-2">Travel Guide</h5>
          <p className="text-sm">Explore new destinations with our expert travel guides.</p>
        </div>
        <div className="bg-white rounded-lg p-8 text-center shadow-md transition duration-300 transform hover:shadow-lg">
          <i className="fas fa-ticket-alt text-3xl text-primary mb-4"></i>
          <h5 className="text-lg font-semibold mb-2">Ticket Booking</h5>
          <p className="text-sm">Book your tickets hassle-free with our convenient booking system.</p>
        </div>
        <div className="bg-white rounded-lg p-8 text-center shadow-md transition duration-300 transform hover:shadow-lg">
          <i className="fas fa-hotel text-3xl text-primary mb-4"></i>
          <h5 className="text-lg font-semibold mb-2">Hotel Booking</h5>
          <p className="text-sm">Find the perfect accommodation for your trip with our hotel booking service.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
