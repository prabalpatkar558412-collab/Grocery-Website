import React, { memo } from "react";
import { Heart, Plus } from "lucide-react";

const ProductCard = ({ product }) => {
  const { name, price, img } = product;

  return (
    <article className="bg-gray-100 relative rounded-lg p-4 flex flex-col items-center gap-4 shadow-sm hover:shadow-md transition">

      {/* Favorite */}
      <button
        aria-label="Add to favorites"
        className="absolute top-2 left-2 text-gray-300 hover:text-red-500"
      >
        <Heart size={20} />
      </button>

      {/* Add */}
      <button
        aria-label={`Add ${name} to cart`}
        className="absolute top-2 right-2 bg-orange-500 p-1 rounded-full hover:bg-orange-600"
      >
        <Plus size={16} color="white" />
      </button>

      {/* Image */}
      <img
        src={img}
        alt={name}
        loading="lazy"
        decoding="async"
        className="w-32 h-32 object-contain"
      />

      {/* Info */}
      <h3 className="font-semibold text-gray-800">{name}</h3>
      <p className="text-gray-600 font-medium">${price.toFixed(2)}</p>

      <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md mt-2">
        Shop Now
      </button>
    </article>
  );
};

export default memo(ProductCard);