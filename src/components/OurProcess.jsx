import React, { memo } from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaIndustry, FaShieldAlt, FaTruck } from "react-icons/fa";

// -------- DATA --------
const steps = [
  {
    id: 1,
    title: "Sourcing",
    description: "It is a long established fact that a reader",
    icon: FaLeaf,
  },
  {
    id: 2,
    title: "Manufacturing",
    description: "It is a long established fact that a reader",
    icon: FaIndustry,
  },
  {
    id: 3,
    title: "Quality Control",
    description: "It is a long established fact that a reader",
    icon: FaShieldAlt,
  },
  {
    id: 4,
    title: "Logistics",
    description: "It is a long established fact that a reader",
    icon: FaTruck,
  },
];

// -------- ANIMATION VARIANTS --------
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.2,
      duration: 0.4,
    },
  }),
};

// -------- CARD COMPONENT --------
const ProcessCard = memo(({ step, index }) => {
  const Icon = step.icon;

  return (
    <motion.article
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover={{ y: -10, scale: 1.05 }}
      viewport={{ once: true }}
      aria-label={step.title}
      className="relative z-10 flex flex-col items-center text-center"
    >
      {/* Number */}
      <div className="w-16 h-16 rounded-full border-2 border-dashed border-orange-400 flex items-center justify-center text-lg font-bold text-orange-500 bg-white shadow-md">
        {step.id}
      </div>

      {/* Icon */}
      <div className="w-14 h-14 flex items-center justify-center bg-orange-500 text-white rounded-full mt-5 text-xl shadow-lg">
        <Icon />
      </div>

      {/* Title */}
      <h3 className="mt-5 text-lg font-semibold text-gray-800">
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-gray-500 text-sm mt-2 max-w-xs">
        {step.description}
      </p>
    </motion.article>
  );
});

ProcessCard.displayName = "ProcessCard";

// -------- MAIN COMPONENT --------
const OurProcess = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold">
            <span className="text-orange-500">Our </span>
            <span className="text-gray-800">Process</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mt-3 rounded-full"></div>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 border-t-2 border-dashed border-gray-300 z-0"></div>

          {steps.map((step, index) => (
            <ProcessCard key={step.id} step={step} index={index} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default memo(OurProcess);