import React, { useState } from 'react'

export const GifExpertApp = () => {
  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']
  const [categories, setCategories] = useState([
    'One Punch',
    'Samurai X',
    'Dragon Ball'
  ])

  const handleAdd = () => {
    // Solución #1
    // setCategories(['HunterXhunter', ...categories])

    // Solución #2
    setCategories((category) => ['HunterXhunter', ...categories])
  }

  return (
    <>
      <h2>GitExpertApp</h2>
      <hr />
      <button onClick={handleAdd}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>
        })}
      </ol>
    </>
  )
}
