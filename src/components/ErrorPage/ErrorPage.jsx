import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="error-page h-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#d44040] to-[#ff7e7e] text-white">
      <div className="text-center">
        <h2 className="text-6xl mb-4">Error 404</h2>
        <p className="text-3xl mb-8">Oops! Page Not Found</p>
        <Link to="/" className="btn bg-white text-[#d44040] px-8 py-3 rounded-full text-xl font-semibold transition duration-300 hover:bg-[#d44040] hover:text-white">Go back to home</Link>
      </div>
    </div>
    );
};

export default ErrorPage;