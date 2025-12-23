import { ArrowDown, Award, Globe, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-limes.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Limones mexicanos frescos de alta calidad"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-lime-900/95 via-lime-800/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-lime-900/60 via-transparent to-lime-900/30" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-citrus-400/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-lime-400/20 rounded-full blur-2xl animate-float" />

      {/* Content */}
      <div className="container mx-auto px-4 pt-24 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-citrus-400/20 backdrop-blur-sm border border-citrus-400/30 mb-8 animate-fade-in">
            <Award className="w-4 h-4 text-citrus-400" />
            <span className="text-sm font-medium text-citrus-100">Exportación Premium desde México</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Calidad Premium
            <br />
            <span className="text-citrus-400">Todo el Año</span>
            <br />
            desde Michoacán
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-lime-100/90 max-w-xl mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Limón mexicano de exportación con cáscara delgada, jugo intensamente ácido y frescura garantizada. 
            Abastecimiento continuo los 365 días del año.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="hero" size="xl" asChild>
              <a href="#contacto">
                Solicitar Cotización
              </a>
            </Button>
            <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <a href="#producto">
                Conocer Producto
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                <Leaf className="w-6 h-6 text-citrus-400" />
              </div>
              <span className="block text-2xl font-bold text-primary-foreground">365</span>
              <span className="text-xs text-lime-200/80">Días de Producción</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                <Globe className="w-6 h-6 text-citrus-400" />
              </div>
              <span className="block text-2xl font-bold text-primary-foreground">20+</span>
              <span className="text-xs text-lime-200/80">Países de Exportación</span>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm">
                <Award className="w-6 h-6 text-citrus-400" />
              </div>
              <span className="block text-2xl font-bold text-primary-foreground">100%</span>
              <span className="text-xs text-lime-200/80">Calidad Premium</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#producto" className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-citrus-400 transition-colors">
          <span className="text-xs uppercase tracking-widest">Descubre más</span>
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
