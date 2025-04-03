import Community from '@/sections/community'
import Features from '@/sections/features'
import Header from '@/sections/header'
import Faq from '@/sections/faq'
import Pricing from '@/sections/pricing'
import Footer from '@/components/footer'
import Contact from '@/sections/contact'
// import Navbar from '@/components/navbar'
import LogoAlgotter from '@/components/logo-tmp'
import Roadmap from '@/sections/roadmap'

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <LogoAlgotter />
      <Header />
      <Features />
      <Community />
      <Faq />
      
      <Roadmap></Roadmap>
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}
