import { Calendar, MapPin, Award, Shield, Truck, Users } from 'lucide-react';
import orchardsImage from '@/assets/orchards-michoacan.jpg';

const WhyJBMSection = () => {
  const advantages = [
    {
      icon: Calendar,
      title: 'Producción Todo el Año',
      description: 'Suministro garantizado los 365 días. Sin interrupciones, sin escasez.',
    },
    {
      icon: MapPin,
      title: 'Origen Michoacán',
      description: 'Corazón de la producción citrícola mexicana con clima ideal.',
    },
    {
      icon: Award,
      title: 'Calidad Premium',
      description: 'Estrictos controles de calidad en cada etapa del proceso.',
    },
    {
      icon: Shield,
      title: 'Certificaciones',
      description: 'Cumplimos con estándares internacionales de exportación.',
    },
    {
      icon: Truck,
      title: 'Logística Eficiente',
      description: 'Red de distribución optimizada para entregas puntuales.',
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Equipo dedicado para cada cliente y mercado.',
    },
  ];

  return (
    <section id="nosotros" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src={orchardsImage}
                alt="Huertos de limón en Michoacán, México"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lime-900/60 to-transparent" />
              
              {/* Overlay Text */}
              <div className="absolute bottom-8 left-8 right-8">
                <span className="inline-block px-3 py-1 rounded-full bg-citrus-400 text-lime-900 text-xs font-semibold mb-3">
                  Michoacán, México
                </span>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-primary-foreground">
                  Tierra de Cítricos Premium
                </h3>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-card rounded-2xl p-6 shadow-elevated">
              <div className="text-center">
                <span className="block text-4xl font-display font-bold text-lime-600">15+</span>
                <span className="text-sm text-muted-foreground">Años de Experiencia</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-lime-100 text-lime-700 text-sm font-medium mb-6">
              ¿Por qué JBM?
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Tu Socio Confiable en
              <br />
              <span className="text-lime-600">Exportación de Cítricos</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              En <strong>JBM Cítricos Premium</strong> combinamos la tradición agrícola de Michoacán 
              con infraestructura moderna de exportación. Somos tu conexión directa con el mejor 
              limón mexicano, disponible todo el año.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-lime-600" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-foreground">365</span>
                  <span className="text-sm text-muted-foreground">Días de Producción</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-lime-600" />
                </div>
                <div>
                  <span className="block text-2xl font-bold text-foreground">100%</span>
                  <span className="text-sm text-muted-foreground">Entregas a Tiempo</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((adv, index) => (
            <div
              key={adv.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-lime-300 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-lime-100 flex items-center justify-center group-hover:bg-lime-500 transition-colors duration-300">
                  <adv.icon className="w-6 h-6 text-lime-600 group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{adv.title}</h4>
                  <p className="text-sm text-muted-foreground">{adv.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJBMSection;
