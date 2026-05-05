import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terminos = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones | JBM Cítricos Premium</title>
        <meta name="description" content="Términos y condiciones de uso del sitio web de JBM Cítricos Premium." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Términos y Condiciones | JBM Cítricos Premium" />
        <meta property="og:description" content="Términos y condiciones de uso del sitio web de JBM Cítricos Premium." />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.jbm.com.mx/terminos" />
        <meta name="twitter:card" content="summary" />
        <link rel="canonical" href="https://www.jbm.com.mx/terminos" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Términos y Condiciones
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Aceptación de los Términos</h2>
              <p>
                Al acceder y utilizar el sitio web de JBM Cítricos Premium ("nosotros", "nuestro" o "JBM"),
                usted acepta cumplir y estar sujeto a los siguientes términos y condiciones de uso.
                Si no está de acuerdo con alguno de estos términos, le pedimos que no utilice este sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Información de la Empresa</h2>
              <p>
                JBM Cítricos Premium es una empresa mexicana dedicada a la producción y exportación de
                limón mexicano de alta calidad, con sede en Michoacán, México.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Uso del Sitio</h2>
              <p>
                El contenido de este sitio web es únicamente con fines informativos y comerciales.
                Usted se compromete a utilizar el sitio de manera lícita y conforme a la moral, las
                buenas costumbres y el orden público. Queda prohibido el uso del sitio para fines
                fraudulentos o que perjudiquen a terceros.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Propiedad Intelectual</h2>
              <p>
                Todos los contenidos del sitio (textos, imágenes, logotipos, diseño, marcas, modelos 3D)
                son propiedad de JBM Cítricos Premium o de sus respectivos titulares y están protegidos
                por las leyes de propiedad intelectual aplicables. Queda prohibida su reproducción total
                o parcial sin autorización previa por escrito.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Cotizaciones y Pedidos</h2>
              <p>
                Las cotizaciones solicitadas a través del formulario de contacto no constituyen una
                oferta vinculante. Los pedidos están sujetos a confirmación, disponibilidad de producto,
                condiciones logísticas y firma del contrato de compraventa correspondiente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Limitación de Responsabilidad</h2>
              <p>
                JBM Cítricos Premium no será responsable de daños directos, indirectos, incidentales o
                consecuentes derivados del uso o la imposibilidad de usar este sitio web. La información
                publicada se ofrece "tal cual" sin garantías de ningún tipo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Enlaces a Terceros</h2>
              <p>
                Este sitio puede contener enlaces a sitios externos. JBM no es responsable del contenido
                ni de las prácticas de privacidad de dichos sitios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las
                modificaciones serán efectivas a partir de su publicación en el sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Legislación Aplicable</h2>
              <p>
                Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier
                controversia será resuelta ante los tribunales competentes del estado de Michoacán, México.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">10. Contacto</h2>
              <p>
                Para cualquier duda sobre estos términos, puede contactarnos en{' '}
                <a href="mailto:ventas@jbm.com.mx" className="text-primary hover:underline">
                  ventas@jbm.com.mx
                </a>{' '}
                o al teléfono +52 (425) 115-2205.
              </p>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Terminos;
