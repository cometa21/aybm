import { Shield, Award, CheckCircle } from 'lucide-react';
import certPrimusGFS from '@/assets/cert-primusgfs.png';
import certGlobalGAP from '@/assets/cert-globalgap.png';

const certifications = [
  {
    logo: certPrimusGFS,
    name: 'PrimusGFS',
    description: 'Certificación líder en seguridad alimentaria para productos agrícolas frescos, garantizando los más altos estándares de calidad e inocuidad.',
  },
  {
    logo: certGlobalGAP,
    name: 'GlobalG.A.P.',
    description: 'Estándar internacional de Buenas Prácticas Agrícolas que asegura una producción segura y sostenible.',
  },
];

const benefits = [
  {
    icon: Shield,
    title: 'Inocuidad Garantizada',
    description: 'Procesos auditados que aseguran productos libres de contaminantes.',
  },
  {
    icon: Award,
    title: 'Calidad Certificada',
    description: 'Cumplimos con los estándares más exigentes del mercado internacional.',
  },
  {
    icon: CheckCircle,
    title: 'Trazabilidad Total',
    description: 'Seguimiento completo desde el huerto hasta el destino final.',
  },
];

const CertificationsSection = () => {
  return (
    <section id="certificaciones" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-lime-100 text-lime-700 rounded-full text-sm font-medium mb-4">
            Calidad Certificada
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nuestras <span className="text-lime-600">Certificaciones</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contamos con las certificaciones internacionales más reconocidas que avalan 
            la calidad, seguridad e inocuidad de nuestros productos.
          </p>
        </div>

        {/* Certification Logos */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-glow transition-all duration-300 border border-border/50 flex flex-col items-center text-center group"
            >
              <div className="bg-white rounded-xl p-6 mb-6 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={cert.logo}
                  alt={`Certificación ${cert.name}`}
                  className="h-20 md:h-24 w-auto object-contain"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {cert.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-card/50 rounded-xl border border-border/30"
            >
              <div className="w-12 h-12 rounded-full bg-lime-100 flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-6 h-6 text-lime-600" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
