import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import CheckoutModal from "./CheckoutModal";

const CartWidget = () => {
  const { cart, updateQuantity, clearCart } = useCart();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isCheckoutOpen, setCheckoutOpen] = useState(false);

  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  return (
    <div style={{ position: "relative" }}>
      <button
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setModalOpen(!isModalOpen)}
      >
        🛒 {totalItems}
      </button>

      {isModalOpen && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            right: "0",
            backgroundColor: "black",
            color: "white",
            padding: "20px",
            borderRadius: "8px",
            width: "300px",
            zIndex: 10,
          }}
        >
          <h3>Your Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} style={{ marginBottom: "10px" }}>
                  <p>{item.title}</p>
                  <p>Qty: {item.quantity || 0}</p>
                  <p>
                    ${((item.price || 0) * (item.quantity || 0)).toFixed(2)}
                  </p>
                  <button
                    style={{
                      marginRight: "5px",
                      backgroundColor: "red",
                      color: "white",
                      padding: "5px",
                      border: "none",
                      borderRadius: "5px",
                    }}
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>
                  <button
                    style={{
                      backgroundColor: "red",
                      color: "white",
                      padding: "5px",
                      border: "none",
                      borderRadius: "5px",
                    }}
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              ))}
              <button
                style={{
                  marginTop: "10px",
                  width: "100%",
                  backgroundColor: "gray",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={clearCart}
              >
                Clear Cart
              </button>
              <button
                style={{
                  marginTop: "10px",
                  width: "100%",
                  backgroundColor: "red",
                  color: "white",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setModalOpen(false);
                  setCheckoutOpen(true);
                }}
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      )}

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </div>
  );
};

export default CartWidget;
