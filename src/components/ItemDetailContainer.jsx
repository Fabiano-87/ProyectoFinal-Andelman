import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import Carousel from "./Carousel";
import { useCart } from "../context/CartContext";
import "../styles/ProductDetail.css";
import { toast } from "react-toastify";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart(); // Use CartContext to handle cart actions

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "products", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("No such product!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <h1>Loading...</h1>;
  if (!product) return <h1>Product not found</h1>;

  const { title, description, price, imageid } = product;

  return (
    <div className="product-page">
      <h1 className="product-title">{title}</h1>
      {imageid && imageid.length > 1 ? (
        <Carousel images={imageid} />
      ) : (
        <div className="single-image-container">
          <img
            src={imageid?.[0] || "/assets/img/no-image.png"}
            alt={title}
            className="single-image"
          />
        </div>
      )}
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
      <button
        className="add-to-cart-btn"
        onClick={() => {
          addToCart(product);
          toast.success(`${title} has been added to your cart!`, {
            position: "top-center",
          });
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ItemDetailContainer;
