import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import PartnersSection from '../components/Partnar'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <PartnersSection />
      <Testimonials />
      <ContactSection/>
      <Footer />
    </main>
  )
}
