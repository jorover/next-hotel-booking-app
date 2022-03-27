import Head from 'next/head'
import HomeHero from '../components/HomeHero'
import CalenderBooking from '../components/CalenderBooking'
import OurTeam from '../components/OurTeam'

export default function Home() {
  return (
   <div>
     <HomeHero />
     <CalenderBooking />
     <OurTeam />
   </div>
  )
}
