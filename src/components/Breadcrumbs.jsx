import React from "react";

const Breadcrumbs = ({ category, productName }) => {
  return (
    <nav aria-label="breadcrumb">
      <ul className="breadcrumb">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href={`/category/${category}`}>{category}</a>
        </li>
        <li>{productName}</li>
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
