import { Link, useLocation, useNavigate, Navigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      await signIn(email, password);
      navigate(location?.state ? location.state : "/");
      toast.success("Login successful!");
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password.");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate(location?.state ? location.state : "/");
      toast.success("Google login successful!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to login with Google.");
    }
  };

  const handleGithubLogin = async () => {
    try {
      await signInWithGithub();
      navigate(location?.state ? location.state : "/");
      toast.success("GitHub login successful!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to login with GitHub.");
    }
  };

  return (
    <>
    <div>
          
      <h2 className="text-3xl my-10 text-center">Please Login</h2>
      <form className="md:w-3/4 lg:w-1/2 mx-auto" onSubmit={handleLogin}>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            required
            name="password"
            placeholder="Password"
            className="input input-bordered"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-[#fff] bg-[#59c6d2]">Login</button>
        </div>
      </form>
      <div className="divider w-[80%] mx-auto">or</div>
      <div className="p-4 space-y-3 mb-6 text-center px-3">
        <h2 className="text-3xl text-center">Login With</h2>
        <button className="btn btn-outline w-1/3" onClick={handleGoogleLogin}>
          <FaGoogle></FaGoogle>
          Google
        </button>
        <div className="divider w-1/3 mx-auto">or</div>
        <button className="btn btn-outline w-1/3" onClick={handleGithubLogin}>
          <FaGithub></FaGithub>
          Github
        </button>
      </div>
      <p className="text-center mt-4">
        Do not have an account{" "}
        <Link className="text-blue-600 font-bold" to="/register">
          Register
        </Link>
      </p>
    </div>
    <ToastContainer />
    </>
  );
};

export default Login;
