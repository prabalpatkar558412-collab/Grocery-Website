import React from "react";
import grocery from "../assets/grocery.png";

const Herosection = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-16 md:py-24 gap-10">

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left">
        <p className="inline-block bg-orange-200 px-3 py-1 rounded-full text-sm font-medium">
          Export Best Quality...
        </p>

        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-4">
          Tasty And Organic <br />
          <span className="text-orange-500">Fruits</span> &{" "}
          <span className="text-orange-500">Veggies</span> <br />
          In Your City
        </h1>

        <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
          Bred for a high content of beneficial substances, our products are fresh and healthy.
        </p>

        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition">
          Shop Now
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={grocery}
          alt="Fresh grocery items"
          loading="lazy"
          className="w-full max-w-sm md:max-w-lg object-contain"
        />
      </div>

    </section>
  );
};

export default React.memo(Herosection);