import React from 'react'
import '@/assets/styles/global.css'

export const metadata = {
    title: 'Real Estate App',
    description: 'A real estate app built with Nextjs and Strapi',
    keywords: 'rental, find rental, find properties',
}

const MainLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
        <div>{children}</div>
    </body>
    </html>
  )
}

export default MainLayout