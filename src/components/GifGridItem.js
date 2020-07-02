import React from 'react'

export const GifGridItem = ({ url, title }) => {
  return (
    <>
      <img src={url} alt={title} />
      <p>{title}</p>
    </>
  )
}
