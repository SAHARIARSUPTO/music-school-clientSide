
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { Helmet } from "react-helmet-async";

const DashboardHome = () => {

  const location = useLocation();
  

  const isAdmin=true;

 
  
  

  return (
    <div>
      <Helmet>
    <title>Music School - Dashboard</title>
    </Helmet>
{isAdmin && (location.pathname === "/dashboard" || location.pathname === "/dashboard/paymenthistory" || location.pathname==="/dashboard/allusers" || location.pathname==="/dashboard/userprofile" || location.pathname==="/dashboard/addclasses") && (
  <Navbar />
)}

{!isAdmin && (
  location.pathname === "/dashboard" ||
  location.pathname === "/dashboard/paymenthistory" ||
  location.pathname === "/dashboard/cart" ||
  location.pathname === "/dashboard/userprofile"
) && (
  <Navbar />
)}


      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
            <Outlet></Outlet>
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-gradient-to-r from-red-500 to-indigo-500 text-white px-4">
              {/* Sidebar content here */}
              {!isAdmin ? (
                <>
                  <li>
                    <Link to="/dashboard/cart">My Cart</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/paymenthistory">Payment History</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/userprofile">User Profile</Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/dashboard/cart">My Cart</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/paymenthistory">Payment History</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/userprofile">User Profile</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/addclasses">Add Classes</Link>
                  </li>
                  <li>
                    <Link to="/dashboard/allusers">All Users</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardHome;
