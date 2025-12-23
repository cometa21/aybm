import { useState } from 'react';
import { Check } from 'lucide-react';

interface SizeData {
  name: string;
  unitsPerKg: string;
  diameter: string;
  recommended: string[];
}

const ClassificationsSection = () => {
  const [selectedSize, setSelectedSize] = useState<string>('400');

  const sizes: SizeData[] = [
    {
      name: '600',
      unitsPerKg: '~60 limones/kg',
      diameter: '28-32mm',
      recommended: ['Cocteles', 'Decoración'],
    },
    {
      name: '500',
      unitsPerKg: '~50 limones/kg',
      diameter: '32-36mm',
      recommended: ['Bebidas', 'Restaurantes'],
    },
    {
      name: '400',
      unitsPerKg: '~40 limones/kg',
      diameter: '36-40mm',
      recommended: ['Exportación', 'Retail Premium'],
    },
    {
      name: '300',
      unitsPerKg: '~30 limones/kg',
      diameter: '40-45mm',
      recommended: ['Supermercados', 'Mayoreo'],
    },
    {
      name: 'Extra',
      unitsPerKg: '~25 limones/kg',
      diameter: '45mm+',
      recommended: ['Premium', 'Gourmet'],
    },
  ];

  const selectedData = sizes.find((s) => s.name === selectedSize);

  return (
    <section id="clasificaciones" className="py-24 lg:py-32 bg-lime-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-foreground/10 text-citrus-300 text-sm font-medium mb-6 backdrop-blur-sm">
            Clasificaciones
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Tamaños Disponibles
          </h2>
          <p className="text-lg text-lime-100/80 max-w-2xl mx-auto">
            Ofrecemos diversas clasificaciones para satisfacer las necesidades específicas 
            de cada mercado y aplicación.
          </p>
        </div>

        {/* Interactive Size Selector */}
        <div className="max-w-5xl mx-auto">
          {/* Size Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {sizes.map((size) => (
              <button
                key={size.name}
                onClick={() => setSelectedSize(size.name)}
                className={`relative px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 ${
                  selectedSize === size.name
                    ? 'bg-citrus-400 text-lime-900 shadow-glow scale-110'
                    : 'bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 backdrop-blur-sm'
                }`}
              >
                {size.name}
                {selectedSize === size.name && (
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-lime-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Selected Size Details */}
          {selectedData && (
            <div className="bg-primary-foreground/10 backdrop-blur-md rounded-3xl p-8 lg:p-12 border border-primary-foreground/10">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Visual Representation */}
                <div className="flex flex-col items-center justify-center">
                  <div
                    className="rounded-full bg-gradient-to-br from-lime-400 to-lime-500 shadow-glow transition-all duration-500"
                    style={{
                      width: `${80 + sizes.findIndex((s) => s.name === selectedSize) * 25}px`,
                      height: `${80 + sizes.findIndex((s) => s.name === selectedSize) * 25}px`,
                    }}
                  />
                  <span className="mt-4 text-2xl font-display font-bold text-primary-foreground">
                    Calibre {selectedData.name}
                  </span>
                </div>

                {/* Specs */}
                <div className="space-y-4">
                  <h4 className="text-sm uppercase tracking-wider text-lime-200/60 mb-2">Especificaciones</h4>
                  <div className="bg-primary-foreground/5 rounded-xl p-4">
                    <span className="text-sm text-lime-200/80">Unidades por Kg</span>
                    <span className="block text-xl font-semibold text-primary-foreground">{selectedData.unitsPerKg}</span>
                  </div>
                  <div className="bg-primary-foreground/5 rounded-xl p-4">
                    <span className="text-sm text-lime-200/80">Diámetro</span>
                    <span className="block text-xl font-semibold text-primary-foreground">{selectedData.diameter}</span>
                  </div>
                </div>

                {/* Recommendations */}
                <div>
                  <h4 className="text-sm uppercase tracking-wider text-lime-200/60 mb-4">Recomendado Para</h4>
                  <div className="space-y-3">
                    {selectedData.recommended.map((rec) => (
                      <div
                        key={rec}
                        className="flex items-center gap-3 bg-primary-foreground/5 rounded-xl px-4 py-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-citrus-400" />
                        <span className="text-primary-foreground font-medium">{rec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClassificationsSection;
