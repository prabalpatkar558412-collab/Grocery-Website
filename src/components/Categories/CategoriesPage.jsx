import React from "react";
import Banner from "../Banner/Banner";
import ProductList from "../../ProductList/ProductList";
import ProductCard from "../../ProductCard/ProductCard";

const Categories = ({ title, bgImage, categories = [] }) => {

  // Filter Logic
  const filteredItems = categories.includes("All")
    ? ProductList
    : ProductList.filter((item) =>
        categories.includes(item.category)
      );

  return (
    <div>
      <Banner title={title} bgImage={bgImage} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {filteredItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Categories;