import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Gallery } from '@/components/gallery'
import { Pricing } from '@/components/pricing'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { Preloader } from '@/components/preloader'
import { Phone } from 'lucide-react'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LandscapingAndTreeService',
    name: 'Outdoor Greatness',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/outdoor-removebg-preview-Vl4bbf2w4mraaKAG0FxXzIa1XKdkYs.png',
    telephone: '781-732-8301',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'MA',
      addressCountry: 'US'
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '07:00',
      closes: '18:00'
    }
  }

  return (
    <main className="min-h-screen bg-background relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Preloader />
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Pricing />
      <Contact />
      <Footer />
      
      {/* Mobile Floating Call Button */}
      <a 
        href="tel:7817328301"
        className="md:hidden fixed bottom-6 right-6 z-40 bg-primary text-white p-4 rounded-full shadow-xl hover:bg-primary/90 transition-transform hover:scale-110"
        aria-label="Call Now"
      >
        <Phone className="h-6 w-6" />
      </a>
    </main>
  )
}
