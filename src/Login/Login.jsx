import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // New state for error message
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setIsLoading(true);
    setError(null); // Reset error state

    loginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setIsSuccessAlertVisible(true);
        form.reset();

        // Show the loading spinner for 2 seconds
        setTimeout(() => {
          setIsLoading(false);
          navigate(from);
        }, 2000);
      })
      .catch((error) => {
        setError("Failed to log in. Please check your credentials."); // Set error message
        setIsLoading(false);
      });
  };

  return (
    <>
    <Helmet>
    <title>Music School - Login</title>
    </Helmet>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-indigo-500">
      <form
        className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100"
        onSubmit={handleLogIn}
      >
        <div className="card-body">
          {isLoading ? (
            <span className="loading loading-spinner loading-lg"></span>
          ) : null}
          {isSuccessAlertVisible && (
            <div className="alert alert-success flex items-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Login successfully!</span>
            </div>
          )}

          {error && (
            <div className="alert alert-error">{error}</div>
          )}

          <h1 className="text-3xl font-bold mb-8">Login to Music School</h1>
          <div className="form-control mb-8">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered h-12"
              name="email"
              required
            />
          </div>
          <div className="form-control mb-8">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered h-12"
              name="password"
              required
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="form-control">
              <button
                type="submit"
                className="btn bg-gradient-to-r from-red-500 to-indigo-500 text-white w-full sm:w-auto"
              >
                Login
              </button>
            </div>
            <div className="form-control">
              <Link to="/signup">
                <button className="btn bg-gradient-to-r from-red-500 to-indigo-500 text-white w-full sm:w-auto h-12">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div></>
  );
};

export default Login;
