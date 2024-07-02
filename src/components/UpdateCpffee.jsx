import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCpffee = () => {
  const coffee = useLoaderData();
  console.log(coffee);
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
    total_visitors_per_year,
  } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const image = form.image.value;
    const tourists_spot_name = form.tourists_spot_name.value;
    const country_name = form.country_name.value;
    const location = form.location.value;
    const short_description = form.short_description.value;
    const average_cost = form.average_cost.value;
    const seasonality = form.seasonality.value;
    const travel_time = form.travel_time.value;
    const total_visitors_per_year = form.total_visitors_per_year.value;

    const updatedCoffee = {
      image,
      tourists_spot_name,
      country_name,
      location,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      total_visitors_per_year,
    };

    console.log(updatedCoffee);

    // send data to the server
    fetch(`https://server-3qxh.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Tourist Spot Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-6 md:p-12">
      <h2 className="text-3xl font-extrabold mb-6 text-center">
        Update a Tourists Spot
      </h2>
      <form onSubmit={handleUpdateCoffee} className="space-y-4">
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
              className="input input-bordered w-full"
            />
          </div>
          {/* Country Name Dropdown */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <select name="country_name" className="input input-bordered w-full">
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
              className="input input-bordered w-full"
            />
          </div>
        </div>
        {/* Submit Button */}
        <div className="form-control mt-6">
          <input
            type="submit"
            value="Update "
            className="btn btn-block bg-slate-200"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateCpffee;
