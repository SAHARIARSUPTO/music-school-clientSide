import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/Firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { createUser, setUser } = useContext(AuthContext);
  const [isSuccessAlertVisible, setIsSuccessAlertVisible] = useState(false);
  const [googleError, setGoogleError] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const handleSignIn = async (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.displayName.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const gender = form.gender.value;
    const number = form.number.value;
    const address = form.address.value;

    createUser(email, password);

    const userObj = {
      displayName,
      email,
      photoURL,
      gender,
      number,
      address,
      password,
    };
    setUser(userObj);

    setIsLoading(true); // Set loading state to true

    // Your fetch request to create a new user
    fetch("https://music-school-server-sahariarsupto.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("User created:", data);
        setIsLoading(false); // Set loading state to false when the request is finished
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        setIsLoading(false); // Set loading state to false if an error occurs
      });

    setIsSuccessAlertVisible(true);
    navigate("/");

    setTimeout(() => {
      setIsSuccessAlertVisible(false);
    }, 3000); // Hide the success alert after 3 seconds
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true); // Set loading state to true

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        setIsSuccessAlertVisible(true);
        navigate("/");
        setIsLoading(false); // Set loading state to false when the sign-in process is finished
      })
      .catch((error) => {
        setGoogleError(true);
        console.error(error.message);
        setIsLoading(false); // Set loading state to false if an error occurs
      });
  };

  return (
    <>
    <Helmet>
    <title>Music School - SignUp</title>
    </Helmet>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-500 to-indigo-500">
      <form
        onSubmit={handleSignIn}
        className="card flex-shrink-0 w-full max-w-3xl shadow-2xl bg-base-100"
      >
        <div className="card-body">
          {googleError && (
            <div className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error!</span>
            </div>
          )}
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
              <span>
                Your account has been created successfully!{" "}
                <a href="/login">Click here to Login & Continue.</a>
              </span>
            </div>
          )}

          <h1 className="text-3xl font-bold mb-8">Sign In to Music School</h1>
          <div className="grid grid-cols-3 gap-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered h-12"
                name="displayName"
                required
              />
            </div>
            <div className="form-control">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="password"
                  className="input input-bordered h-12 w-48"
                  name="password"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute  top-2/4 transform -translate-y-2/4 cursor-pointer"
                >
                  {isPasswordVisible ? (
                    <div className="ms-2 swap-on">Hide</div>
                  ) : (
                    <div className="ms-2 swap-off">View</div>
                  )}
                </button>
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="photoURL"
                className="input input-bordered h-12"
                name="photoURL"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Gender</span>
              </label>
              <select
                className="select select-bordered h-12"
                name="gender"
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="number"
                className="input input-bordered h-12"
                name="number"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Address</span>
              </label>
              <input
                type="text"
                placeholder="address"
                className="input input-bordered h-12"
                name="address"
                required
              />
            </div>
          </div>
          <div className="form-control mt-8">
            <button
              type="submit"
              className={`btn btn-primary w-full h-12 ${
                isLoading ? "loading" : ""
              }`}
            >
              {isLoading ? "Loading..." : "Sign Up"}
            </button>
          </div>
          <div className="form-control mt-8">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className={`btn btn-secondary w-full h-12 ${
                isLoading ? "loading" : ""
              }`}
            >
              {isLoading ? "Loading..." : "Sign Up with Google"}
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default Signup;
