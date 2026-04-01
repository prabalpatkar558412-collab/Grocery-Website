import React from 'react'
import CategoryPage from '../Categories/CategoriesPage'
import BgAll from '../../assets/all-banner.jpg'

const AllProduct = () => {
  return (
     <CategoryPage title="All Product" bgImage={BgAll} categories={['All']}/>
  )
}

export default AllProduct