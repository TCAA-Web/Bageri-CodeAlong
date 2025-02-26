import { useEffect } from 'react'

export function ContactPage() {
  useEffect(() => {
    document.title = 'Kontakt'
  }, [])

  return <h2>Contact page</h2>
}
