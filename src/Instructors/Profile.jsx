import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
  const [instructor, setInstructor] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://music-school-server-sahariarsupto.vercel.app/instructors/${id}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch instructor');
        }
      })
      .then(data => {
        setInstructor(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error:', error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <span className="loading loading-spinner loading-lg text-center justify-center"></span>;
  }

  if (!instructor) {
    return <div>Instructor not found</div>;
  }

  return (
    <div>
      <Helmet>
    <title>Music School - Instructors Profile</title>
    </Helmet>
      <Navbar />
      <div className="flex justify-center items-center flex-col">
        <img className="mt-8 rounded-xl w-150 h-75" src={instructor.imageLink} alt={instructor.name} />
        <h2 className="text-2xl mt-4">{instructor.name}</h2>
        <table className="mt-4 border border-collapse">
          <tbody>
            <tr>
              <td className="px-4 py-2 font-semibold">Subject:</td>
              <td className="px-4 py-2">{instructor.subject}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold">Experience:</td>
              <td className="px-4 py-2">{instructor.experience}</td>
            </tr>
            <tr>
              <td className="px-4 py-2 font-semibold">Email:</td>
              <td className="px-4 py-2">{instructor.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
};

Profile.propTypes = {
  match: PropTypes.object.isRequired
};

export default Profile;
