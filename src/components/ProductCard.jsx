import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  if (!product) {
    console.error("Product data is missing:", product);
    return null; // Skip rendering if product data is invalid
  }

  const imageUrl =
    Array.isArray(product.imageid) && product.imageid.length > 0
      ? product.imageid[0] // Use the first image if available
      : product.imageid || "/assets/img/no-image.png"; // Use a single image or fallback

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "15px",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div>
        <img
          src={imageUrl}
          alt={product.title || "Product Image"}
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            margin: "10px auto",
            borderRadius: "8px",
          }}
          onError={(e) => {
            e.target.src = "/assets/img/no-image.png"; // Fallback to placeholder
          }}
        />
      </div>
      <h2 style={{ fontSize: "18px", margin: "10px 0" }}>{product.title}</h2>
      <p style={{ fontSize: "14px", color: "#ccc" }}>
        {product.description ? product.description.slice(0, 50) + "..." : ""}
      </p>
      <p style={{ fontSize: "16px", fontWeight: "bold", margin: "10px 0" }}>
        ${product.price}
      </p>
      <Link
        to={`/product/${product.id}`}
        style={{
          display: "inline-block",
          backgroundColor: "red",
          color: "white",
          textDecoration: "none",
          padding: "10px 20px",
          borderRadius: "5px",
          marginTop: "10px",
        }}
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
