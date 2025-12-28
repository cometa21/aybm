import { useState } from 'react';
import { X } from 'lucide-react';
import packPlasticCrate from '@/assets/pack-plastic-crate.jpg';
import packMeshBag from '@/assets/pack-mesh-bag.jpg';
import packPallet from '@/assets/pack-pallet.jpg';
import packSorting from '@/assets/pack-sorting.jpg';

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      image: packPlasticCrate,
      title: 'Caja Plástica',
      description: 'Presentación de 18-20 kg para exportación',
    },
    {
      image: packMeshBag,
      title: 'Arpilla',
      description: 'Malla de 10-18 kg para mercado nacional',
    },
    {
      image: packPallet,
      title: 'Paletizado',
      description: '56 cajas por pallet, listo para contenedor',
    },
    {
      image: packSorting,
      title: 'Control de Calidad',
      description: 'Selección y clasificación por tamaño',
    },
  ];

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-lime-100 text-lime-700 text-sm font-medium mb-6">
            Galería
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nuestros Empaques y{' '}
            <span className="text-lime-600">Presentaciones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Diferentes opciones de empaque adaptadas a las necesidades de cada mercado y cliente.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3 className="font-display text-xl font-bold text-background mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-background/80">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-lime-400 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Galería JBM"
            className="max-w-full max-h-[90vh] object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
