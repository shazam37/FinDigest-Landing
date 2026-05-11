import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import NewsTicker from "../components/NewsTicker"
import Features from "../components/Features"
import HowItWorks from "../components/HowItWorks"
import OpenSource from "../components/OpenSource"
import Extension from "../components/Extension"
import Contribute from "../components/Contribute"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <NewsTicker />
      <Features />
      <HowItWorks />
      <OpenSource />
      <Extension />
      <Contribute />
      <Footer />
    </main>
  )
}