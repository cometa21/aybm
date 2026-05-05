import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Cookies = () => {
  return (
    <>
      <Helmet>
        <title>Política de Cookies | JBM Cítricos Premium</title>
        <meta name="description" content="Política de cookies y tecnologías de seguimiento utilizadas en el sitio web de JBM Cítricos Premium." />
        <link rel="canonical" href="https://www.jbm.com.mx/cookies" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Política de Cookies
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. ¿Qué son las cookies?</h2>
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando
                visita un sitio web. Permiten al sitio recordar sus acciones y preferencias durante un
                período de tiempo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Tipos de cookies que utilizamos</h2>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Cookies estrictamente necesarias</h3>
              <p>
                Son esenciales para el funcionamiento del sitio. Permiten la navegación y el uso de
                funciones básicas. Sin estas cookies el sitio no puede operar correctamente.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Cookies de rendimiento</h3>
              <p>
                Recopilan información anónima sobre cómo los visitantes utilizan el sitio, como las
                páginas más visitadas o los mensajes de error. Nos ayudan a mejorar la experiencia.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Cookies de funcionalidad</h3>
              <p>
                Permiten al sitio recordar las elecciones que usted realiza (como su idioma o región)
                para ofrecer una experiencia más personalizada.
              </p>

              <h3 className="text-xl font-semibold text-foreground mt-4 mb-2">Cookies de terceros</h3>
              <p>
                Pueden establecerse por servicios de terceros como Google Analytics, redes sociales o
                proveedores de contenido embebido (por ejemplo, modelos 3D o videos).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Cómo gestionar las cookies</h2>
              <p>
                Usted puede aceptar, rechazar o eliminar las cookies desde la configuración de su
                navegador. Tenga en cuenta que deshabilitar ciertas cookies puede afectar el
                funcionamiento del sitio.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/es-mx/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/es-es/microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Cambios a esta política</h2>
              <p>
                Podemos actualizar esta política de cookies periódicamente. Le recomendamos revisarla
                con frecuencia para estar informado sobre cómo utilizamos las cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Contacto</h2>
              <p>
                Si tiene preguntas sobre nuestra política de cookies, contáctenos en{' '}
                <a href="mailto:ventas@jbm.com.mx" className="text-primary hover:underline">
                  ventas@jbm.com.mx
                </a>.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Cookies;
