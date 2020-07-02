import React, { useState, useEffect } from 'react'

export const GifGrid = ({ category }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    getGifs()
  }, [])

  const getGifs = async () => {
    const url =
      'https://api.giphy.com/v1/gifs/search?api_key=DxAqAcshu6yvRMH0XKZy6mHWNkrtYQyh&q=cheeseburgers&limit=10'
    const resp = await fetch(url)
    const { data } = await resp.json()
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

    console.log(gifs)
  }

  return (
    <>
      <h3>{category}</h3>
      <h4>{count}</h4>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </>
  )
}
