import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import { Route, Routes } from 'react-router-dom'

function Pages() {
  return (
    <Routes>
      <Route path='/recipes-app/' element={<Home />} />
      <Route path='/recipes-app/cuisine/:type' element={<Cuisine />} />
      <Route path='/recipes-app/searched/:search' element={<Searched />} />
      <Route path='/recipes-app/recipe/:name' element={<Recipe />} />
    </Routes>
  )
}
export default Pages
