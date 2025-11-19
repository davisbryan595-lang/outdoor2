import { Trees, Shovel, Scissors, Sprout, CloudLightning, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: "Tree Removal & Pruning",
    icon: Trees,
    description: "Safe removal of hazardous trees and expert pruning to keep your trees healthy and beautiful.",
    features: ["Hazardous Tree Removal", "Crown Reduction", "Deadwooding"]
  },
  {
    title: "Landscaping & Design",
    icon: Shovel,
    description: "Transform your outdoor space with our custom landscape design and installation services.",
    features: ["Garden Bed Installation", "Hardscaping", "Planting Schemes"]
  },
  {
    title: "Lawn Care & Maintenance",
    icon: Scissors,
    description: "Keep your lawn lush and green with our regular maintenance and care programs.",
    features: ["Weekly Mowing", "Fertilization", "Aeration & Overseeding"]
  },
  {
    title: "Stump Grinding",
    icon: Sprout,
    description: "Complete removal of unsightly stumps to reclaim your yard space.",
    features: ["Deep Grinding", "Root Removal", "Site Cleanup"]
  },
  {
    title: "Storm Damage Cleanup",
    icon: CloudLightning,
    description: "Fast and reliable emergency cleanup services after severe weather events.",
    features: ["24/7 Emergency Service", "Debris Removal", "Safety Assessment"]
  },
  {
    title: "Seasonal Services",
    icon: Calendar,
    description: "Year-round care including spring/fall cleanups and winter preparation.",
    features: ["Spring Cleanup", "Fall Leaf Removal", "Snow Management"]
  }
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive outdoor solutions tailored to your property's needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm font-medium text-gray-700">
                      <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
