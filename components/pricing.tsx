import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-primary text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-4" />
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Competitive rates for top-quality service. Get a free quote within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-bold text-primary mb-2">Tree Removal</h3>
            <div className="text-3xl font-bold mb-6">Starting at $350</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Safe Removal</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Debris Cleanup</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Licensed & Insured</li>
            </ul>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
              <Link href="#contact">Get Quote</Link>
            </Button>
          </div>

          {/* Card 2 - Featured */}
          <div className="bg-white text-gray-800 rounded-xl p-8 shadow-xl transform scale-105 border-4 border-secondary relative z-10">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-black font-bold px-4 py-1 rounded-full text-sm uppercase">
              Most Popular
            </div>
            <h3 className="text-xl font-bold text-primary mb-2">Weekly Lawn Care</h3>
            <div className="text-3xl font-bold mb-6">$55 <span className="text-base font-normal text-muted-foreground">/ visit</span></div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Mowing & Edging</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> String Trimming</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Blowing Debris</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Weekly or Bi-weekly</li>
            </ul>
            <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-black font-bold">
              <Link href="#contact">Schedule Now</Link>
            </Button>
          </div>

          {/* Card 3 */}
          <div className="bg-white text-gray-800 rounded-xl p-8 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-xl font-bold text-primary mb-2">Landscaping Projects</h3>
            <div className="text-3xl font-bold mb-6">$2,500 - $25k+</div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Custom Design</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Plant Installation</li>
              <li className="flex items-center"><Check className="h-5 w-5 text-secondary mr-2" /> Hardscaping</li>
            </ul>
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
              <Link href="#contact">Start Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
