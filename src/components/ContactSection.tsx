import { useState } from 'react';
import { Send, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    setFormData({ name: '', email: '', company: '', country: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+52 (452) 123-4567',
      href: 'tel:+524521234567',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'ventas@jbm.com.mx',
      href: 'mailto:ventas@jbm.com.mx',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Michoacán, México',
      href: '#',
    },
  ];

  return (
    <section id="contacto" className="py-24 lg:py-32 bg-lime-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-primary-foreground/10 text-citrus-300 text-sm font-medium mb-6 backdrop-blur-sm">
            Contacto
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Solicita tu Cotización
          </h2>
          <p className="text-lg text-lime-100/80 max-w-2xl mx-auto">
            Cuéntanos sobre tus necesidades y nuestro equipo te proporcionará 
            una cotización personalizada en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 lg:p-10 shadow-elevated">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                    placeholder="Nombre de la empresa"
                  />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-foreground mb-2">
                    País de Destino
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all"
                  >
                    <option value="">Seleccionar país</option>
                    <option value="usa">Estados Unidos</option>
                    <option value="canada">Canadá</option>
                    <option value="europe">Europa</option>
                    <option value="asia">Asia</option>
                    <option value="latam">Latinoamérica</option>
                    <option value="other">Otro</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntanos sobre tus necesidades de limón (volumen, frecuencia, clasificación preferida...)"
                />
              </div>

              <Button type="submit" variant="premium" size="xl" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Enviar Solicitud
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="space-y-6 mb-10">
              {contactInfo.map((info) => (
                <a
                  key={info.title}
                  href={info.href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-citrus-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-6 h-6 text-lime-900" />
                  </div>
                  <div>
                    <span className="text-sm text-lime-200/60">{info.title}</span>
                    <span className="block font-medium text-primary-foreground">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <Button variant="whatsapp" size="xl" className="w-full" asChild>
              <a
                href="https://wa.me/524521234567?text=Hola,%20me%20interesa%20solicitar%20información%20sobre%20limón%20mexicano"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Cotizar por WhatsApp
              </a>
            </Button>

            <p className="text-center text-sm text-lime-200/60 mt-4">
              Respuesta inmediata en horario laboral
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
