import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";

const AddTourist = () => {
  const { user } = useContext(AuthContext);
  const [countryName, setCountryName] = useState(""); // State to store selected country name
  const [formData, setFormData] = useState({
    image: "",
    tourists_spot_name: "",
    location: "",
    short_description: "",
    average_cost: "",
    seasonality: "",
    travel_time: "",
    total_visitors_per_year: "",
    user_name: user.displayName, // Get user name from Firebase Auth
    user_email: user.email, // Get user email from Firebase Auth
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddTouristsSpot = (event) => {
    event.preventDefault();

    fetch("https://server-3qxh.vercel.app/coffee", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tourist Spot Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          // Clear form data after successful submission
          setFormData({
            image: "",
            tourists_spot_name: "",
            location: "",
            short_description: "",
            average_cost: "",
            seasonality: "",
            travel_time: "",
            total_visitors_per_year: "",
            user_name: user.displayName,
            user_email: user.email,
          });
          setCountryName(""); // Reset selected country name
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-6 md:p-12">
      <h2 className="text-3xl font-extrabold mb-6">Add a Tourists Spot</h2>
      <form onSubmit={handleAddTouristsSpot} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </div>
          {/* Tourists Spot Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Tourists Spot Name</span>
            </label>
            <input
              type="text"
              name="tourists_spot_name"
              placeholder="Tourists Spot Name"
              value={formData.tourists_spot_name}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </div>
          {/* Country Name Dropdown */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <select
              name="country_name"
              value={countryName}
              onChange={(e) => setCountryName(e.target.value)}
              className="input input-bordered w-full"
            >
              <option value="">Select Country</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Thailand">Thailand</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Cambodia">Cambodia</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Location */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </div>
          {/* Short Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              name="short_description"
              placeholder="Short Description"
              value={formData.short_description}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </div>
          {/* Average Cost */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Average Cost</span>
            </label>
            <input
              type="text"
              name="average_cost"
              placeholder="Average Cost"
              value={formData.average_cost}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Seasonality */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seasonality</span>
            </label>
            <input
              type="text"
              name="seasonality"
              placeholder="Seasonality"
              value={formData.seasonality}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </div>
          {/* Travel Time */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Travel Time</span>
            </label>
            <input
              type="text"
              name="travel_time"
              placeholder="Travel Time"
              value={formData.travel_time}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </div>
          {/* Total Visitors Per Year */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Total Visitors Per Year</span>
            </label>
            <input
              type="text"
              name="total_visitors_per_year"
              placeholder="Total Visitors Per Year"
              value={formData.total_visitors_per_year}
              onChange={handleInputChange}
              className="input input-bordered w-full"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* User Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="user_name"
              value={user.displayName}
              disabled
              className="input input-bordered w-full"
            />
          </div>
          {/* User Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              name="user_email"
              value={user.email}
              disabled
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Add"
            className="btn btn-block bg-slate-200"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTourist;
