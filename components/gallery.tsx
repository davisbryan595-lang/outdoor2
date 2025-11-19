import Image from 'next/image'

export function Gallery() {
  // Placeholder images for now
  const images = [
    { src: "/beautiful-landscaped-backyard.jpg", alt: "Backyard Landscape" },
    { src: "/tree-pruning-service.jpg", alt: "Tree Service" },
    { src: "/manicured-lawn-mowing.jpg", alt: "Lawn Care" },
    { src: "/garden-flower-bed.jpg", alt: "Garden Design" },
    { src: "/patio-installation.jpg", alt: "Hardscaping" },
    { src: "/stump-grinding-machine.jpg", alt: "Stump Grinding" },
  ]

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Work</h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the difference Outdoor Greatness can make for your property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-md aspect-square md:aspect-auto md:h-64 lg:h-80">
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
