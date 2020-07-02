import React from 'react'

export const GifGridItem = ({ url, title }) => {
  return (
    <div className="card animate__animated animate__bounceIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
