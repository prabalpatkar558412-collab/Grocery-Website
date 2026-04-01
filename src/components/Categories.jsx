import React from "react";
import dairy from "../assets/dairy-and-eggs.png";
import meat from "../assets/meat-and-seafood.png";
import fruits from "../assets/banana.png";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Fruits & Veggies",
    img: fruits,
    desc: "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    path: "/fruits",
  },
  {
    title: "Dairy & Eggs",
    img: dairy,
    desc: "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses.",
    path: "/dairy",
  },
  {
    title: "Meat & Seafood",
    img: meat,
    desc: "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    path: "/seafood",
  },
];

const Categories = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-16">
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          <span className="text-orange-500">Shop</span> by Category
        </h1>
        <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {categories.map((item) => (
          <div
            key={item.title}
            className="relative bg-white rounded-3xl pt-28 pb-10 px-6 text-center border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full bg-white p-2 border border-gray-200 flex items-center justify-center">
              <img
                src={item.img}
                alt={`${item.title} category`}
                loading="lazy"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Content */}
            <h2 className="font-extrabold text-2xl text-gray-800">
              {item.title}
            </h2>

            <p className="text-sm md:text-base text-gray-600 mt-3 leading-relaxed">
              {item.desc}
            </p>

            <Link
              to={item.path}
              aria-label={`View ${item.title} category`}
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-600 focus-visible:outline-none"
            >
              View All
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Categories);