import React, { memo } from "react";
import freshFruits from "../assets/fresh-fruits.png";

const DiscountBanner = ({
  discount = 20,
  title = "First Order Discount!",
  description = "Enjoy an exclusive first order discount on our grocery website. Shop fresh essentials and save big on your first purchase.",
  buttonText = "Get a Discount",
  image = freshFruits,
}) => {
  return (
    <section className="bg-gray-100 px-4 py-10">
      <article className="max-w-6xl mx-auto bg-white rounded-2xl shadow-md flex flex-col md:flex-row items-center overflow-hidden">

        {/* LEFT: Discount */}
        <div className="bg-gradient-to-b from-orange-500 to-orange-600 flex items-center justify-center w-full md:w-24 py-4 md:py-0">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-5 flex flex-col items-center text-white shadow-inner">

            <span className="text-3xl md:text-4xl font-extrabold leading-none">
              {discount}
            </span>

            <span className="text-lg md:text-xl leading-none">%</span>

            <span className="text-xs mt-1 uppercase tracking-widest opacity-90">
              OFF
            </span>

          </div>
        </div>

        {/* CENTER: Content */}
        <div className="flex-1 text-center md:text-left px-6 py-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
            {title}
          </h2>

          <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0">
            {description}
          </p>

          <button
            type="button"
            aria-label="Get first order discount"
            className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-md font-medium transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
          >
            {buttonText}
          </button>
        </div>

        {/* RIGHT: Image */}
        <div className="flex-1 flex justify-center md:justify-end p-6">
          <img
            src={image}
            alt="Fresh fruits"
            loading="lazy"
            decoding="async"
            className="w-44 md:w-56 lg:w-72 h-auto object-contain drop-shadow-md"
          />
        </div>

      </article>
    </section>
  );
};

export default memo(DiscountBanner);