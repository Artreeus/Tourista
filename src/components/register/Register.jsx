import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles
import { updateProfile } from "firebase/auth"; // Import updateProfile method


const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    // Accessing form fields directly using their name attributes
    const name = e.target.elements.name.value;
    const photo = e.target.elements.photo.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    // Password verification
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
      return; // Stop registration if password requirements are not met
    }

    // Create user
    try {
      const result = await createUser(email, password);
      console.log(result.user);
      toast.success("Registration successful!"); 

      // Update user profile with photo URL
      try {
        await updateProfile(result.user, {
          photoURL: photo,
          displayName: name // Set the displayName property to the name value
        });
      } catch (error) {
        console.error("Error updating profile:", error.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Registration failed. Please try again."); // Show toast for registration failure
    }
  };

  return (
    <div
     
    >
     
      <h2 className="text-3xl my-10 text-center">Please Register</h2>
      <form className="md:w-3/4 lg:w-1/2 mx-auto" onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            required
            name="name"
            placeholder="Name"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            required
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="">
            <input
              type={ showPassword ? "text" : "password"}
              required
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />
            <span onClick={()=> setShowPassword(!showPassword)} className="text-xl absolute top-[50px] right-4">
              {
                showPassword ?   <FaEye></FaEye> :
                <FaEyeSlash></FaEyeSlash>
              }
            </span>
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#23BE0A] text-white">Register</button>
        </div>
      </form>
      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link className="text-blue-600 font-bold" to="/login">
          Login
        </Link>
      </p>
      <ToastContainer/>
    </div>
  );
};

export default Register;
