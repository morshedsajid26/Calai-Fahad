import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import Banner from '@/pages/landindPage/Banner'
import CustomerCalls from '@/pages/landindPage/CustomerCalls'
import FAQ from '@/pages/landindPage/FAQ'
import React from 'react'
import { Outlet } from 'react-router-dom'

const LandingPageLayout = () => {
  return (
    <div className='bg-[#000000]'>
        <Navbar/>
        <Banner/>
        <FAQ/>
        <CustomerCalls/>
        <Footer/>
    </div>
  )
}

export default LandingPageLayout