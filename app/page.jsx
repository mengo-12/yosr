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
      <section id="hero"><Hero /></section>
      <section id="aboutUs"><About /></section>
      <section id="services"><Services /></section>
      <section id="projects"><Projects /></section>
      <section id="partners"><PartnersSection /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="contact"><ContactSection /></section>
      <Footer />
    </main>
  )
}
