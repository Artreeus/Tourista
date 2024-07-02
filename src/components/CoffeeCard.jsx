import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, country_name, location, average_cost } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://server-3qxh.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Tourist Spot has been deleted.",
                "success"
              );
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  console.log(coffee)

  return (
    <div className="grid grid-cols-1">
      <div className="overflow-x-auto">
        <table className="table table-auto min-w-full my-7 bg-gray-400">
          <thead>
            <tr>
              <th className="px-4 py-2">Country Name</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Average Cost</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {coffees.map((item, index) => (
              <tr key={item._id}>
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{item.country_name}</td>
                <td className="px-4 py-2">{item.location}</td>
                <td className="px-4 py-2">{item.average_cost}</td>
                <td className="px-4 py-2">
                  <div className="btn-group btn-group-vertical space-y-2">
                    <Link to={`/updateCpffee/${item._id}`}>
                      <button className="btn">Edit</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn bg-orange-500"
                    >
                      X
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table> 
      </div>
    </div>
  );
};

export default CoffeeCard;
