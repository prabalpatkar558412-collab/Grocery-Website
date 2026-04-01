import React from 'react'
 
import CategoryPage from '../Categories/CategoriesPage'
import bgseafood from '../../assets/seafood-banner.jpg'

const SeaFood = () => {
  return (
    <div>
      <CategoryPage title="SeaFood Product" bgImage={bgseafood} categories={['seafood']}/>
    </div>
  )
}

export default SeaFood