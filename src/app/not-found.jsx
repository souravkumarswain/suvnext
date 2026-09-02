import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h3>Opps page is not-found</h3>
        <Link href="/"> Return to Homepage</Link>
    </div>
  )
}

export default NotFound