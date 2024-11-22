import React from "react";
import climateimage from "../../Assets/img/climate-image.png"; // Replace with your image path
import leave from "../../Assets/img/leave.png";

const Climate = () => {
  return (
    <section className="bg-[#f3fdf5] py-12 px-6 sm:px-10 lg:px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={climateimage}
            alt="Green Revolution"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
        <p>About Us</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-green-800 mb-4">
            Leading the Charge in Africa’s Green Revolution
          </h2>
          <p className="text-gray-700 mb-6">
             <img src={leave} alt="" /><strong>Our Mission:</strong> To drive innovation in clean and green
            technologies across Africa.
          </p>
          <p className="text-gray-700 mb-6">
            <strong>Our Vision:</strong> To be the leading force in the green
            economy, driving sustainability through comprehensive environmental
            protection solutions and renewable energy initiatives.
          </p>

          
          <a
            href="#"
            className="px-6 py-3 bg-green-700 text-white font-medium rounded-md shadow hover:bg-green-800 transition "
          >
            Explore More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Climate;
