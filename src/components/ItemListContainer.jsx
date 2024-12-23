import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";
import ProductCard from "./ProductCard";
import "../styles/ProductDetail.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      if (categoryId) {
        setFilteredProducts(products.filter((p) => p.category === categoryId));
      } else {
        setFilteredProducts(products);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h1 className="text-center">
        {categoryId ? `Category: ${categoryId}` : "All Products"}
      </h1>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
