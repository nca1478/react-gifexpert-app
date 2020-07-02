import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    // Helper que hace petición a la api
    getGifs(category).then((imgs) => {
      // Se actualiza el estado con los imagenes (imgs) de la api
      setState({
        data: imgs,
        loading: false
      })
    })
  }, [category])

  return state
}
