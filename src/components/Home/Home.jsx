import React from "react";

import Herosection from "../Herosection";
import Categories from "../Categories";
import Value from "../Value";
import OurProduct from "../OurFolder";
import DiscountBanner from "../DiscountBanner";
import OurProcess from "../OurProcess";
import Customer from "../CustomersSaying";

const Home = () => {
  return (
    <div>
      <Herosection />
      <Categories />
      <Value />
      <OurProduct />
      <DiscountBanner />
      <OurProcess />
      <Customer />
    </div>
  );
};

export default Home;
