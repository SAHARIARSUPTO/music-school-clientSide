import { useEffect, useState, useContext } from "react";
import Navbar from "../Home/Navbar";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Footer from "../Home/Footer";

const Classes = () => {
  const [classesData, setClassesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { handleEnroll } = useContext(AuthContext);

  useEffect(() => {
    const delay = 100;

    const timer = setTimeout(() => {
      fetch("https://music-school-server-sahariarsupto.vercel.app/classes")
        .then((response) => response.json())
        .then((data) => {
          setClassesData(data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const sortedClasses = classesData.sort((a, b) => b.studentsNumber - a.studentsNumber);

  return (
    <>

      {location.pathname === "/classes" && <Navbar />}
      <div>
        <p className="my-5 mb-5 text-3xl font-bold text-black text-center">Our Classes</p>
      </div>
      <div className="flex justify-center my-5">
        {isLoading ? (
          <progress className="progress w-56"></progress>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {sortedClasses.map((classItem) => (
              <div
                className={`card w-96 bg-base-100 shadow-xl transition-shadow duration-300 hover:shadow-2xl ${
                  classItem.availableSeats === 0 ? "bg-red-500" : ""
                }`}
                key={classItem._id}
              >
                <figure>
                  <img src={classItem.image} alt={classItem.className} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{classItem.className}</h2>
                  <p>Students: {classItem.studentsNumber}</p>
                  <p>Available Seats: {classItem.availableSeats}</p>
                  <p>Price: ${classItem.price}</p>
                  <p>Instructor: {classItem.instructorName}</p>
                  <p>Instructor Email: {classItem.instructorEmail}</p>
                  <div className="card-actions justify-end">
                    <button
                      className="btn bg-red-500 font-dark"
                      onClick={() => handleEnroll(classItem)}
                    >
                      Enroll now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      {location.pathname === "/classes" && <Footer></Footer>}
    </>
  );
};

export default Classes;
