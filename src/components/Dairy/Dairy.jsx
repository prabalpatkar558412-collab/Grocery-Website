import React from 'react'
import CategoryPage from '../../components/Categories/CategoriesPage'
import bgDairy from '../../assets/dairy-banner.jpg'
const Dairy = () => {
  return (
    <div>
      <CategoryPage title="Dairy Product" bgImage={bgDairy} categories={['dairy']}/>
    </div>
  )
}

export default Dairy                      