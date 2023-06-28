import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";


const Instructors = () => {
  const [instructorsData, setInstructorsData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const delay = 1000;

    const timer = setTimeout(() => {
      fetch("https://music-school-server-sahariarsupto.vercel.app/instructors")
        .then((response) => response.json())
        .then((data) => {
          setInstructorsData(data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
  

      {location.pathname === "/instructors" && <Navbar></Navbar>}
      <div>
        <p className="my-5 mb-5 text-3xl font-bold text-black text-center">
          Meet our Top Rated Instructors
        </p>
      </div>
      <div className="flex justify-center my-5">
        {isLoading ? (
          <span className="loading loading-ball loading-lg"></span>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {instructorsData.map((instructor) => (
              <div
                className="card w-96 bg-base-100 shadow-xl transition-shadow duration-300 hover:shadow-3xl"
                key={instructor._id}
              >
                <figure>
                  <img src={instructor.imageLink} alt={instructor.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{instructor.name}</h2>
                  <p>Subject: {instructor.subject}</p>
                  <p>Ratings: {instructor.ratings}</p>
                  <div className="card-actions justify-end">
                    <Link
                      to={`/instructors/${instructor._id}`}
                      className="btn bg-gradient-to-r from-red-500 to-indigo-500 text-white"
                    >
                      View Profile
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {location.pathname === "/instructors" && <Footer></Footer>}
    </>
  );
};

export default Instructors;
