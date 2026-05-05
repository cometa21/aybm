import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Privacidad = () => {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | JBM Cítricos Premium</title>
        <meta name="description" content="Aviso de privacidad y tratamiento de datos personales de JBM Cítricos Premium conforme a la LFPDPPP." />
        <link rel="canonical" href="https://www.jbm.com.mx/privacidad" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 pt-32 pb-20 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Aviso de Privacidad
          </h1>
          <p className="text-sm text-muted-foreground mb-8">
            Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">1. Responsable del Tratamiento</h2>
              <p>
                JBM Cítricos Premium, con domicilio en Michoacán, México, es responsable del tratamiento
                de los datos personales que usted nos proporcione, en cumplimiento de la Ley Federal de
                Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">2. Datos Personales que Recabamos</h2>
              <p>Podemos recabar los siguientes datos a través de nuestro formulario de contacto:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Nombre completo</li>
                <li>Correo electrónico</li>
                <li>Número telefónico</li>
                <li>Empresa y país</li>
                <li>Información comercial relacionada con su solicitud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">3. Finalidades del Tratamiento</h2>
              <p>Sus datos personales serán utilizados para:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Responder a sus solicitudes de cotización e información comercial</li>
                <li>Establecer y mantener relaciones comerciales</li>
                <li>Enviar información sobre nuestros productos y servicios</li>
                <li>Cumplir con obligaciones legales y fiscales</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">4. Transferencia de Datos</h2>
              <p>
                Sus datos no serán compartidos con terceros, salvo cuando sea necesario para cumplir con
                obligaciones legales o para procesar su pedido (por ejemplo, con empresas de logística
                y agentes aduanales).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Derechos ARCO</h2>
              <p>
                Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (Derechos ARCO) al
                tratamiento de sus datos personales, así como revocar su consentimiento. Para ejercer
                estos derechos, envíe su solicitud a{' '}
                <a href="mailto:ventas@jbm.com.mx" className="text-primary hover:underline">
                  ventas@jbm.com.mx
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">6. Medidas de Seguridad</h2>
              <p>
                Implementamos medidas administrativas, técnicas y físicas razonables para proteger sus
                datos personales contra daño, pérdida, alteración, destrucción o uso no autorizado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">7. Uso de Cookies</h2>
              <p>
                Nuestro sitio utiliza cookies y tecnologías similares. Para más información, consulte
                nuestra{' '}
                <a href="/cookies" className="text-primary hover:underline">
                  Política de Cookies
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">8. Cambios al Aviso de Privacidad</h2>
              <p>
                Cualquier modificación a este aviso será publicada en esta misma página. Le recomendamos
                revisarla periódicamente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">9. Contacto</h2>
              <p>
                Para cualquier duda sobre el tratamiento de sus datos personales, contáctenos en{' '}
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

export default Privacidad;
