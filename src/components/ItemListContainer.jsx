import React from "react";

const ItemListContainer = ({ message }) => {
  return (
    <section className="container">
      <h1 className="text-center">{message}</h1>
    </section>
  );
};

export default ItemListContainer;
