import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lime-900 text-lime-100 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-lime-500 to-lime-600 flex items-center justify-center">
                <img 
                            src={logoJBM} 
                            alt="JBM Cítricos Premium" 
                            className="h-14 sm:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                          />
              </div>
              <div>
                <span className="font-display text-lg font-semibold text-primary-foreground">Cítricos</span>
                <span className="block text-xs text-citrus-400 font-medium tracking-wider uppercase">Premium</span>
              </div>
            </div>
            <p className="text-lime-200/80 mb-6 max-w-md leading-relaxed">
              Exportadores de limón mexicano de alta calidad desde Michoacán. 
              Producción garantizada todo el año con los más altos estándares de calidad.
            </p>
            <div className="flex items-center gap-2 text-sm text-lime-200/60">
              <Globe className="w-4 h-4" />
              <span>www.jbm.com.mx</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Enlaces</h4>
            <ul className="space-y-3">
              <li>
                <a href="#producto" className="text-lime-200/80 hover:text-citrus-400 transition-colors">
                  Nuestro Producto
                </a>
              </li>
              <li>
                <a href="#clasificaciones" className="text-lime-200/80 hover:text-citrus-400 transition-colors">
                  Clasificaciones
                </a>
              </li>
              <li>
                <a href="#logistica" className="text-lime-200/80 hover:text-citrus-400 transition-colors">
                  Logística
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-lime-200/80 hover:text-citrus-400 transition-colors">
                  ¿Por qué JBM?
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-lime-200/80 hover:text-citrus-400 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-citrus-400 flex-shrink-0 mt-0.5" />
                <span className="text-lime-200/80">Michoacán, México</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-citrus-400 flex-shrink-0" />
                <a href="tel:+524521234567" className="text-lime-200/80 hover:text-citrus-400 transition-colors">
                  +52 (452) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-citrus-400 flex-shrink-0" />
                <a href="mailto:ventas@jbm.com.mx" className="text-lime-200/80 hover:text-citrus-400 transition-colors">
                  ventas@jbm.com.mx
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-lime-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-lime-200/60">
            © {currentYear} JBM Cítricos Premium. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6 text-sm text-lime-200/60">
            <a href="#" className="hover:text-citrus-400 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-citrus-400 transition-colors">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
