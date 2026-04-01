import React from 'react'
import CategoryPage from "../../components/Categories/CategoriesPage"
import BgFruits from "../../assets/fruits-banner.jpg"

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Veggies" bgImage={BgFruits} categories={['fruits','vegetables']}/>
    </div>
  )
}

export default Fruits