

import Footer from './components/Footer'
import NavBar from './components/NavBar'
import './globals.css'




export const metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
