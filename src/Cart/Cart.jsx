import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { toast } from "react-hot-toast";
import Payment from "../Dashboard/Payment";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeItemFromCart } = useContext(AuthContext);

  const handleRemoveItem = (itemId) => {
    try {
      removeItemFromCart(itemId);
      toast.success("Item removed from cart!");
    } catch (error) {
      toast.error("Failed to remove item from cart.");
    }
  };

  // Calculate the sum total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="flex flex-col min-h-screen">
      {location.pathname === "/cart" && <Navbar />}
      <div className="flex-grow">
        {cartItems.length === 0 ? (
          <p className="my-20 text-5xl text-center">No items found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th className="text-xl">Course Name</th>
                  <th className="text-xl">Price</th>
                  <th className="text-xl">Available Seats</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* rows */}
                {cartItems.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt={item.className} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{item.className}</div>
                          <div className="text-sm opacity-50">
                            {item.instructorName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.price}$</td>
                    <td>{item.availableSeats}</td>
                    <td>
                      <button
                        className="btn bg-gradient-to-r from-red-500 to-indigo-500 text-white px-4 py-2 rounded-md"
                        onClick={() => handleRemoveItem(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Display total price and make payment button */}
      <div className="total-price">
        Total Price: {totalPrice}$
      </div>
      <Link to="payment"  className="payment-button">Make Payment</Link>

      <Footer />
    </div>
  );
};

export default Cart;
