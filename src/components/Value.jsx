import React, { memo } from "react";
import { Heart, ShieldCheck, Leaf, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import basketImg from "../assets/basket-full-vegetables.png";

// -------- DATA --------
const values = [
  { id: 1, title: "Trust", desc: "It is a long established fact that a reader will be distracted.", Icon: Heart },
  { id: 2, title: "Always Fresh", desc: "It is a long established fact that a reader will be distracted.", Icon: Leaf },
  { id: 3, title: "Food Safety", desc: "It is a long established fact that a reader will be distracted.", Icon: ShieldCheck },
  { id: 4, title: "100% Organic", desc: "It is a long established fact that a reader will be distracted.", Icon: Sprout },
];

// -------- SPLIT DATA --------
const leftValues = values.slice(0, 2);
const rightValues = values.slice(2);

// -------- ANIMATION --------
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// -------- ITEM COMPONENT --------
const ValueItem = memo(({ title, desc, Icon }) => (
  <motion.div
    variants={itemVariants}
    aria-label={title}
    className="flex items-center gap-3 p-4 rounded-lg shadow-md bg-white hover:scale-105 transition-transform"
  >
    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white shrink-0">
      <Icon size={18} strokeWidth={2} />
    </div>

    <div>
      <h3 className="font-bold text-lg text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{desc}</p>
    </div>
  </motion.div>
));

ValueItem.displayName = "ValueItem";

// -------- MAIN COMPONENT --------
const Value = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold">
            <span className="text-orange-500">Our</span> Value
          </h2>
          <div className="w-16 h-1 bg-orange-400 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          {/* LEFT */}
          <div className="flex flex-col gap-6 md:items-end items-center">
            {leftValues.map((item) => (
              <ValueItem key={item.id} {...item} />
            ))}
          </div>

          {/* CENTER IMAGE */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <img
              src={basketImg}
              alt="Basket of fresh vegetables"
              loading="lazy"
              decoding="async"
              className="w-64 md:w-80 object-contain"
            />
          </motion.div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6 md:items-start items-center">
            {rightValues.map((item) => (
              <ValueItem key={item.id} {...item} />
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default memo(Value);