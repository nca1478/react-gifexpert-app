import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
import 'animate.css'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Dragon Ball'])

  return (
    <>
      <h2>GitExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}
