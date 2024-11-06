import React from 'react'
import Header from './hero'
import FeatureSection from './features'
import Landlord from './landlord'
import Testimonials from './testimonials'
import Footer from './footer'
import PropertyListings from './PropertyListings'

const page = () => {
  return (
    <>
    <Header />
    <FeatureSection />
    <PropertyListings/>
    <Testimonials />
    <Landlord />
    <Footer />
    </>
  )
}

export default page