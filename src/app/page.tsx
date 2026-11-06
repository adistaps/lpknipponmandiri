import Navbar from "@/components/sections/Navbar"
import Hero from "@/components/sections/Hero"
import Sectors from "@/components/sections/Sectors"
import Program from "@/components/sections/Program"
import Founder from "@/components/sections/Founder"
import WhyUs from "@/components/sections/WhyUs"
import TripFlow from "@/components/sections/TripFlow"
import StartHere from "@/components/sections/StartHere"
import FAQ from "@/components/sections/FAQ"
import ContactSection from "@/components/sections/ContactSection"
import Footer from "@/components/sections/Footer"
import FloatingWhatsApp from "@/components/sections/FloatingWhatsApp"
import PricingSection from "@/components/sections/PricingSection"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Sectors />
        <Founder />
        <Program />
        <PricingSection />
        <WhyUs />
        <TripFlow />
        <StartHere />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
