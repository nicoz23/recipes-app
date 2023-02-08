import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Searched from './Searched'
import Recipe from './Recipe'
import { Route, Routes } from 'react-router-dom'

function Pages() {
  return (
    <Routes>
      <Route path='/vite-react-example/' element={<Home />} />
      <Route path='/vite-react-example/cuisine/:type' element={<Cuisine />} />
      <Route path='/vite-react-example/searched/:search' element={<Searched />} />
      <Route path='/vite-react-example/recipe/:name' element={<Recipe />} />
    </Routes>
  )
}
export default Pages
