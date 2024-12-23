import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";
import Carousel from "./Carousel";
import "../styles/ProductDetail.css";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = () => {
      const foundProduct = products.find((p) => p.id === parseInt(productId));
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [productId]);

  if (!product) return <h1>Loading...</h1>;

  return (
    <main className="container-3">
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Products</a>
          </li>
          <li>{product.nombre}</li>
        </ul>
      </nav>
      <div className="row">
        <div className="left-column">
          <Carousel images={product.images} />
        </div>
        <div className="right-column">
          <div className="product-description">
            <h1>{product.nombre}</h1>
            <p>{product.descripcion}</p>
          </div>
          <div className="product-price">
            <span>${product.precio}</span>
            <button className="cart-btn">Add to cart</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItemDetailContainer;
