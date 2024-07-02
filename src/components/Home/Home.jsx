import React, { useState, useEffect } from 'react';
import Banner from "../Banner/Banner";
import Country from '../Country/Country';
import NewsletterSection from "../NewsLetter/NewsletterSection";
import Services from "../Services/Services";
import TouristSpot from "../TouristSpot/TouristSpot";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = () => {
            setTimeout(() => {
                setIsLoading(false); // Set loading to false after data is loaded
            }, 2000); // Simulated loading time: 2 seconds
        };

        loadData();

        // Cleanup function
        return () => {
            // If necessary, perform cleanup here
        };
    }, []);

    return (
        <div>
            {isLoading ? (
                // Show loader while data is loading
                <span className="loading loading-spinner loading-lg text-center"></span>
            ) : (
                // Render components when data is loaded
                <>
                    <Banner />
                    <Country />
                    <TouristSpot />
                    <Services />
                    <NewsletterSection />
                </>
            )}
        </div>
    );
};

export default Home;
