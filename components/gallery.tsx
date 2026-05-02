import Image from 'next/image'

export function Gallery() {
  const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F5ec9fbb299474ac4ae6fe32ee6c73175?format=webp&width=800&height=1200", alt: "Landscaped Driveway" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F3856a6ff31fc4571a833ba68980c69ae?format=webp&width=800&height=1200", alt: "Patio Design" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F80058f8eadf74042b2d63e5825224fe5?format=webp&width=800&height=1200", alt: "Hardscaping" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fa9894b05f5a24e58bc1f1ceeb4af43bd?format=webp&width=800&height=1200", alt: "Driveway Installation" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F458e65cf670c49f8930b69f928cc35be?format=webp&width=800&height=1200", alt: "Landscaping" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F27b857e705224e57898c4ea02f3a818b?format=webp&width=800&height=1200", alt: "Yard Maintenance" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F5d42cce3cef649569e634c75c898adae?format=webp&width=800&height=1200", alt: "Garden Landscaping" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Ff9725d865ac54972b42441e78f220b92?format=webp&width=800&height=1200", alt: "Exterior Design" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F67390afaf7954e75a35e832a57bb2f3b?format=webp&width=800&height=1200", alt: "Outdoor Landscape" },
    { src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fe4670aff7e34438c89fa7a8aea91f6e4?format=webp&width=800&height=1200", alt: "Property Enhancement" },
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
                src={img.src}
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
