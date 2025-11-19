import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/morgane-le-breton-rqIr5yFIaGc-unsplash.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
      </div>

      <div className="container relative z-10 px-4 md:px-6 text-center text-white">
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-4 tracking-tight drop-shadow-lg">
          OUTDOOR <span className="text-secondary">GREATNESS</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light drop-shadow-md">
          Professional Landscaping & Tree Service in Massachusetts
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform">
            <Link href="#contact">
              Get Free Estimate
            </Link>
          </Button>
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-black font-bold text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform">
            <Link href="#gallery">
              View Our Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
