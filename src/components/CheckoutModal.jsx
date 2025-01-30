import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutModal = ({ isOpen, onClose }) => {
  const { cart, clearCart } = useCart();
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userDetails.name || !userDetails.email || !userDetails.address) {
      toast.error("Please fill out all fields", { position: "top-center" });
      return;
    }

    try {
      await addDoc(collection(db, "orders"), {
        buyer: userDetails,
        items: cart,
        date: new Date().toISOString(),
      });

      toast.success("Thanks for your purchase!", { position: "top-center" });

      clearCart();
      onClose();
    } catch (error) {
      console.error("Error saving order: ", error);
      toast.error("Failed to process your order. Please try again.", {
        position: "top-center",
      });
    }
  };

  // 🔴 Move this return statement **outside** of handleSubmit function
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#111",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "400px",
          maxHeight: "90vh",
          overflowY: "auto",
          textAlign: "center",
        }}
      >
        <h2>Checkout</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={userDetails.name}
            onChange={(e) =>
              setUserDetails({ ...userDetails, name: e.target.value })
            }
            required
            style={{
              width: "90%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #444",
              backgroundColor: "#222",
              color: "white",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={userDetails.email}
            onChange={(e) =>
              setUserDetails({ ...userDetails, email: e.target.value })
            }
            required
            style={{
              width: "90%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #444",
              backgroundColor: "#222",
              color: "white",
            }}
          />
          <input
            type="text"
            placeholder="Address"
            value={userDetails.address}
            onChange={(e) =>
              setUserDetails({ ...userDetails, address: e.target.value })
            }
            required
            style={{
              width: "90%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "5px",
              border: "1px solid #444",
              backgroundColor: "#222",
              color: "white",
            }}
          />
          <h3>Cart Items:</h3>
          {cart.map((item) => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              <p>
                {item.title} - {item.quantity} x ${item.price}
              </p>
            </div>
          ))}
          <button
            type="submit"
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Confirm Order
          </button>
        </form>
        <button
          onClick={onClose}
          style={{
            marginTop: "10px",
            backgroundColor: "#444",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

// 🔴 FIXED: Removed the **extra** `export default` inside the function
export default CheckoutModal;
