import React from "react";
import { Typewriter } from "react-simple-typewriter";

const NewsletterSection = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <section className="bg-gray-100 py-12 my-7">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {/* <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-4">Subscribe to Our Newsletter</h2> */}

          <div className="App">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 text-center mb-4">
              Subscribe to Our Newsletter To{" "}
              <span style={{ color: "red", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Get Our Updates", "Get Free Vouchers"]}
                  loop={Infinity}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  onLoopDone={handleDone}
                />
              </span>
            </h2>
          </div>

          <p className="text-lg text-gray-600 text-center mb-8">
            Get updates on the latest tourist spots, travel tips, and exclusive
            offers!
          </p>
          <form className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full sm:w-auto rounded-md py-3 px-4 mb-2 sm:mb-0 sm:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md py-3 px-6 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
