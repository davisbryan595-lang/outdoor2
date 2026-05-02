'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const carouselImages = [
    "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F5ec9fbb299474ac4ae6fe32ee6c73175?format=webp&width=1200&height=800",
    "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F3856a6ff31fc4571a833ba68980c69ae?format=webp&width=1200&height=800",
    "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F80058f8eadf74042b2d63e5825224fe5?format=webp&width=1200&height=800",
    "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fa9894b05f5a24e58bc1f1ceeb4af43bd?format=webp&width=1200&height=800",
    "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F458e65cf670c49f8930b69f928cc35be?format=webp&width=1200&height=800",
    "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F27b857e705224e57898c4ea02f3a818b?format=webp&width=1200&height=800",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [carouselImages.length])

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Auto-moving Carousel Background */}
      <div className="absolute inset-0 z-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url('${image}')`,
              opacity: index === currentImageIndex ? 1 : 0,
            }}
          />
        ))}
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
