import React from "react";
import ProductCard from "../ProductCard/ProductCard"; // ✅ import
import { Link } from "react-router-dom";

// images
import banana from "../assets/banana.png";
import lettuce from "../assets/lettuce.png";
import eggs from "../assets/eggs.png";
import capsicum from "../assets/capsicum.png";
import beef from "../assets/beef.png";
import cheese from "../assets/cheese.png";
import kiwi from "../assets/kiwi.png";
import eggplant from "../assets/eggplant.png";

 
const products = [
  { id: 1, name: "Banana", price: 3.0, img: banana },
  { id: 2, name: "Lettuce", price: 3.5, img: lettuce },
  { id: 3, name: "Eggs", price: 2.05, img: eggs },
  { id: 4, name: "Capsicum", price: 3.0, img: capsicum },
  { id: 5, name: "Beef", price: 6.0, img: beef },
  { id: 6, name: "Cheese", price: 4.5, img: cheese },
  { id: 7, name: "Kiwi", price: 2.5, img: kiwi },
  { id: 8, name: "Eggplant", price: 3.2, img: eggplant },
];

const ProductGrid = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      <h2 className="text-3xl font-bold text-center mb-6">
        <span className="text-orange-500">Our</span> Products
      </h2>

      {/* Categories */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {["All", "Fruits", "Vegetables", "Dairy", "SeaFood"].map((cat) => (
          <button
            key={cat}
            className="px-4 py-1 rounded-full border border-gray-300 hover:bg-orange-500 hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All */}
      <div className="flex justify-center mt-5">
        <Link
          to="/allproduct"
          className="bg-orange-500 px-6 py-2 text-white rounded-lg hover:bg-orange-600"
        >
          View All
        </Link>
      </div>

    </div>
  );
};

export default ProductGrid;