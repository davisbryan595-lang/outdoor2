import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-10 w-10 bg-white rounded-full p-1">
                <Image 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/outdoor-removebg-preview-Vl4bbf2w4mraaKAG0FxXzIa1XKdkYs.png" 
                  alt="Outdoor Greatness Logo" 
                  fill
                  className="object-contain p-1"
                />
              </div>
              <span className="font-heading font-bold text-xl">OUTDOOR GREATNESS</span>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              Professional landscaping and tree services dedicated to making your outdoor space great.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-black transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-black transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="bg-white/10 p-2 rounded-full hover:bg-secondary hover:text-black transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#home" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link href="#gallery" className="hover:text-secondary transition-colors">Gallery</Link></li>
              <li><Link href="#pricing" className="hover:text-secondary transition-colors">Pricing</Link></li>
              <li><Link href="#contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Services</h3>
            <ul className="space-y-2">
              <li><Link href="#services" className="hover:text-secondary transition-colors">Tree Removal</Link></li>
              <li><Link href="#services" className="hover:text-secondary transition-colors">Landscaping</Link></li>
              <li><Link href="#services" className="hover:text-secondary transition-colors">Lawn Maintenance</Link></li>
              <li><Link href="#services" className="hover:text-secondary transition-colors">Stump Grinding</Link></li>
              <li><Link href="#services" className="hover:text-secondary transition-colors">Storm Cleanup</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-secondary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex flex-col">
                <span className="font-medium text-secondary">Phone</span>
                <span>781-732-8301</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-secondary">Email</span>
                <span>info@outdoorgreatness.com</span>
              </li>
              <li className="flex flex-col">
                <span className="font-medium text-secondary">Location</span>
                <span>Massachusetts, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Outdoor Greatness Landscaping & Tree Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
