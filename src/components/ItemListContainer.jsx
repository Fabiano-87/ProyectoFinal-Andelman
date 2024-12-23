import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../products";
import ProductCard from "./ProductCard";
import "../styles/ProductDetail.css";

const ItemListContainer = () => {
  const { categoryId } = useParams(); // Obtener categoría desde la URL
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate(); // Para cambiar de ruta
  const categories = ["relax", "optimization", "others"]; // Categorías disponibles

  useEffect(() => {
    if (categoryId) {
      setFilteredProducts(
        products.filter((product) => product.category === categoryId)
      );
    } else {
      setFilteredProducts(products);
    }
  }, [categoryId]);

  // Función para manejar el cambio de categoría
  const handleCategoryChange = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <div className="item-list-container">
      <h1 className="text-center">Our Products</h1>

      {/* Menú desplegable para categorías */}
      <div className="dropdown-container">
        <button className="dropdown-btn">Select Category</button>
        <div className="dropdown-content">
          <button onClick={() => navigate("/")}>All Products</button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Lista de productos */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
