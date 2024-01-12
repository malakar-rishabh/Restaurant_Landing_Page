import React from 'react'
import Navbar from '../components/Navbar'
import HomeMain from '../components/HomeMain'
import SecondSection from '../components/SecondSecton'
import SectionThird from '../components/SectionThird'
import FourthSection from '../components/FourthSection'
import FifthSection from '../components/FifthSection'
import SixthSection from '../components/SixthSection'
import SeventhSection from '../components/SeventhSection'

function Home() {
  return (
    <>
    <Navbar />
    <HomeMain />
    <SecondSection/>
    <SectionThird/>
    <FourthSection/>
    <FifthSection/>
    <SixthSection/>
    <SeventhSection/>
    </>
  )
}

export default Home