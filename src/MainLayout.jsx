import React from 'react'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollTop'

export default function MainLayout() {
  return (
    <div>
      <main className='flex-grow'>
        <ScrollToTop />
        <Outlet/>
      </main>
      {/* <Footer/> */}
    </div>
  )
}