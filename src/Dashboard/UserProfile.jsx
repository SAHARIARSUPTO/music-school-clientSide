import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { Helmet } from 'react-helmet-async';

const Profile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, auth, userData } = useContext(AuthContext);
  

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.log('Error signing out:', error);
      });
  };



  return (
    <>
    <Helmet>
    <title>Music School - Profile</title>
    </Helmet>
      {/* {location.pathname === "/dashboard/userprofile" && <Navbar></Navbar>} */}
      <div className="max-w-md mx-auto my-20 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex items-center justify-center bg-gradient-to-r from-red-500 to-indigo-500 p-4">
          <img
            className="w-32 h-32 rounded-full object-cover"
            src={userData?.photoURL || user.photoURL}
            alt="User Avatar"
          />
        </div>

        <div className="px-6 py-4">
          <h2 className="text-xl font-bold">
            {userData?.displayName || user.displayName || ''}
          </h2>
          <p className="text-gray-500">Gender: {userData?.gender || ''}</p>
          <p className="text-gray-500">Contact: {userData?.number || ''}</p>
          <p className="text-gray-500">
            Email: <span>{userData?.email || user.email || ''}</span>
          </p>
          <p className="text-gray-500">Address: {userData?.address || ''}</p>
          <p className="text-gray-500">Role: {userData?.role || ''}</p>

          <div className="mt-4">
            <Link
              to=""
              onClick={logOut}
              className="bg-gradient-to-r from-red-500 to-indigo-500 text-white px-4 py-2 text-center rounded-md mr-2"
            >
              Log Out
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
