import { Droplets, Sparkles, CircleDot } from 'lucide-react';
import limeSingle from '@/assets/lime-single.png';

const ProductSection = () => {
  const features = [
    {
      icon: Droplets,
      title: 'Jugo Intensamente Ácido',
      description: 'pH entre 2.0 y 2.35, ideal para la industria gastronómica y de bebidas.',
    },
    {
      icon: Sparkles,
      title: 'Cáscara Delgada',
      description: 'Textura fina que maximiza el contenido de jugo por fruto.',
    },
    {
      icon: CircleDot,
      title: 'Con Semilla Natural',
      description: 'Característica distintiva del auténtico limón mexicano tradicional.',
    },
  ];

  return (
    <section id="producto" className="py-24 lg:py-32 bg-gradient-fresh relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-lime-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-citrus-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-lime-400/30 rounded-full blur-3xl scale-75" />
              
              {/* Main Image */}
              <img
                src={limeSingle}
                alt="Limón Mexicano Premium - JBM Cítricos"
                className="relative z-10 w-full h-auto drop-shadow-2xl animate-float"
              />

              {/* Floating Labels */}
              <div className="absolute top-1/4 -left-4 lg:-left-12 bg-card rounded-xl px-4 py-3 shadow-card animate-fade-in z-20">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Color</span>
                <span className="block font-semibold text-lime-600">Verde Intenso</span>
              </div>

              <div className="absolute bottom-1/4 -right-4 lg:-right-12 bg-card rounded-xl px-4 py-3 shadow-card animate-fade-in z-20" style={{ animationDelay: '0.2s' }}>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Origen</span>
                <span className="block font-semibold text-lime-600">Michoacán, MX</span>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1 rounded-full bg-lime-100 text-lime-700 text-sm font-medium mb-6">
              Nuestro Producto
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Limón Mexicano
              <br />
              <span className="text-lime-600">de Primera Calidad</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              El auténtico <strong>limón mexicano</strong> (Citrus aurantifolia) cultivado en las 
              tierras fértiles de Michoacán. Reconocido mundialmente por su aroma distintivo 
              y su jugo perfectamente ácido.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex gap-4 p-4 rounded-xl bg-card hover:shadow-card transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-lime-100 flex items-center justify-center group-hover:bg-lime-500 group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-lime-600 group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
