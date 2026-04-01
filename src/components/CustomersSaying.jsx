import React, { useRef, memo } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// ---------------- DATA ----------------
const testimonials = [
  {
    id: 1,
    name: "Emily Johnson",
    role: "Food Blogger",
    review:
      "FreshBasket is my go-to store for all grocery needs. Their produce is always fresh and delivery is super fast.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "David Smith",
    role: "Chef",
    review:
      "As a chef, quality ingredients are everything. FreshBasket consistently delivers the best vegetables.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Alya Zahra",
    role: "Model",
    review:
      "Shopping online has saved me so much time. Always fresh, affordable, and reliable.",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "Michael Lee",
    role: "Nutritionist",
    review:
      "FreshBasket helps me maintain a healthy lifestyle. Their organic fruits are top-notch!",
    image: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    name: "Sophia Brown",
    role: "Homemaker",
    review:
      "Affordable prices and great quality. Weekly grocery shopping is now effortless!",
    image: "https://i.pravatar.cc/100?img=5",
  },
];

// ---------------- CONSTANTS ----------------
const stars = Array.from({ length: 5 });

// ---------------- CARD COMPONENT ----------------
const TestimonialCard = memo(({ item }) => (
  <div className="bg-gray-50 rounded-xl shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full">

    {/* Profile */}
    <div className="flex items-center gap-4 mb-4">
      <img
        src={item.image}
        alt={`${item.name} profile`}
        loading="lazy"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3 className="font-semibold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.role}</p>
      </div>
    </div>

    {/* Stars */}
    <div className="flex gap-1 mb-3">
      {stars.map((_, i) => (
        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
      ))}
    </div>

    {/* Review */}
    <p className="text-gray-600 text-sm leading-relaxed">
      {item.review}
    </p>
  </div>
));

TestimonialCard.displayName = "TestimonialCard";

// ---------------- MAIN COMPONENT ----------------
const CustomersSaying = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const swiperConfig = {
    modules: [Navigation, Autoplay],
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  };

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto relative">

        {/* Header */}
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          
          <div className="text-center w-full md:w-auto md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-orange-500">Customers </span>
              <span className="text-gray-800">Saying</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mt-3 mx-auto md:mx-0 rounded-full"></div>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 justify-center md:justify-end w-full md:w-auto">
            <button
              ref={prevRef}
              aria-label="Previous testimonials"
              className="w-11 h-11 flex items-center justify-center bg-white/80 border border-gray-200 rounded-full shadow-sm hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-300"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              ref={nextRef}
              aria-label="Next testimonials"
              className="w-11 h-11 flex items-center justify-center bg-white/80 border border-gray-200 rounded-full shadow-sm hover:bg-orange-500 hover:text-white hover:scale-105 transition-all duration-300"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <Swiper
          {...swiperConfig}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <TestimonialCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default memo(CustomersSaying);