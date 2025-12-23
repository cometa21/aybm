import { Package, Thermometer, Truck, Layers } from 'lucide-react';

const LogisticsSection = () => {
  const packaging = [
    {
      type: 'Caja Plástica 18kg',
      description: 'Caja reutilizable de plástico de grado alimenticio',
      specs: ['Peso neto: 18kg', 'Ventilación óptima', 'Apilable'],
      icon: Package,
    },
    {
      type: 'Caja Plástica 20kg',
      description: 'Formato extendido para mercados de alto volumen',
      specs: ['Peso neto: 20kg', 'Trazabilidad QR', 'Resistente'],
      icon: Package,
    },
    {
      type: 'Arpilla 10-18kg',
      description: 'Empaque tradicional de malla transpirable',
      specs: ['Pesos: 10, 12, 15, 18kg', 'Económico', 'Biodegradable'],
      icon: Layers,
    },
  ];

  const logistics = [
    {
      icon: Thermometer,
      title: 'Temperatura Ideal',
      value: '8°C - 15°C',
      description: 'Cadena de frío controlada',
    },
    {
      icon: Package,
      title: 'Paletizado',
      value: '56 cajas',
      description: 'Por pallet estándar',
    },
    {
      icon: Truck,
      title: 'Vida de Anaquel',
      value: '21-28 días',
      description: 'En condiciones óptimas',
    },
  ];

  return (
    <section id="logistica" className="py-24 lg:py-32 bg-gradient-fresh relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-1/2 h-1/2 bg-lime-100/60 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-lime-100 text-lime-700 text-sm font-medium mb-6">
            Logística y Empaque
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Preparados para la
            <br />
            <span className="text-lime-600">Exportación Global</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Infraestructura logística de primer nivel para garantizar que nuestros 
            limones lleguen frescos a cualquier destino del mundo.
          </p>
        </div>

        {/* Packaging Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {packaging.map((pkg, index) => (
            <div
              key={pkg.type}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-lime-300 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-lime-100 flex items-center justify-center mb-6 group-hover:bg-lime-500 transition-colors duration-300">
                <pkg.icon className="w-7 h-7 text-lime-600 group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{pkg.type}</h3>
              <p className="text-muted-foreground mb-4">{pkg.description}</p>
              <ul className="space-y-2">
                {pkg.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-lime-500" />
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Technical Specs */}
        <div className="bg-lime-700 rounded-3xl p-8 lg:p-12">
          <h3 className="font-display text-2xl font-bold text-primary-foreground text-center mb-10">
            Especificaciones Técnicas de Exportación
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {logistics.map((item, index) => (
              <div
                key={item.title}
                className="text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-4">
                  <item.icon className="w-8 h-8 text-citrus-400" />
                </div>
                <h4 className="text-sm uppercase tracking-wider text-lime-200/60 mb-2">{item.title}</h4>
                <span className="block text-3xl lg:text-4xl font-display font-bold text-primary-foreground mb-1">
                  {item.value}
                </span>
                <span className="text-sm text-lime-200/80">{item.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogisticsSection;
