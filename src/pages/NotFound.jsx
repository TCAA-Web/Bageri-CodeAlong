import { useEffect } from 'react'

export function NotFoundPage() {
  useEffect(() => {
    document.title = `Not found`
  }, [])

  return <h2>Not Found Page</h2>
}
