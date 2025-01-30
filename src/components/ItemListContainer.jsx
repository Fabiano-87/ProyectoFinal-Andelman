import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ProductCard from "./ProductCard";
import "../styles/ItemListContainer.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const categories = ["relax", "optimization", "others"];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const productsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (categoryId) {
          setProducts(
            productsArray.filter((product) => product.categoryid === categoryId)
          );
        } else {
          setProducts(productsArray);
        }
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [categoryId]);

  if (loading) return <h1>Loading...</h1>;
  if (products.length === 0) return <h2>No products available</h2>;

  return (
    <div className="item-list-container">
      <h1 className="text-center">Our Products</h1>

      {/* Category Selection */}
      <div className="dropdown-container">
        <button className="dropdown-btn">Select Category</button>
        <div className="dropdown-content">
          <button onClick={() => navigate("/")}>All Products</button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => navigate(`/category/${category}`)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
