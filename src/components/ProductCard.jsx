import React from "react";
import { Link } from "react-router-dom";
import "../styles/ItemListContainer.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="image-container">
        <img
          src={product.images[0]}
          alt={product.nombre}
          className="carousel img"
        />
      </div>
      <h2>{product.nombre}</h2>
      <p className="product-description">
        {product.descripcion.slice(0, 50)}...
      </p>
      <Link to={`/product/${product.id}`} className="details-link">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
