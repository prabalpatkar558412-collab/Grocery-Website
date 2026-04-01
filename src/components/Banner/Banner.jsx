import React from "react";

const Banner = ({ title, bgImage }) => {
  return (
    <section
      className="relative h-[40vh] md:h-[50vh] w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-wide drop-shadow-lg">
          {title}
        </h2>

        {/* Optional underline */}
        <div className="w-16 h-1 bg-orange-500 mx-auto mt-3 rounded-full"></div>
      </div>
    </section>
  );
};

export default Banner;