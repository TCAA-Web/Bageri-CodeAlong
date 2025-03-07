import { useState } from 'react'

export const usePost = () => {
  // State management
  const [data, setData] = useState([])

  // Function
  const post = (url, options) => {
    fetch(url, { ...options })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err))
  }

  return { data, post }
}
