import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductSection from '@/components/ProductSection';
import ClassificationsSection from '@/components/ClassificationsSection';
import NutritionSection from '@/components/NutritionSection';
import LogisticsSection from '@/components/LogisticsSection';
import CertificationsSection from '@/components/CertificationsSection';
import WhyJBMSection from '@/components/WhyJBMSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>JBM Cítricos Premium | Exportación de Limón Mexicano de Alta Calidad</title>
        <meta 
          name="description" 
          content="Exportadores de limón mexicano premium desde Michoacán. Producción todo el año, calidad certificada para exportación global. Solicita cotización." 
        />
        <meta name="keywords" content="limón mexicano, exportación limón, cítricos premium, Michoacán, limón verde, Mexican lime export" />
        <meta property="og:title" content="JBM Cítricos Premium | Limón Mexicano de Exportación" />
        <meta property="og:description" content="Limón mexicano premium desde Michoacán. Producción 365 días, exportación global." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jbm.com.mx" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://www.jbm.com.mx" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "JBM Cítricos Premium",
            "description": "Exportadores de limón mexicano de alta calidad desde Michoacán, México",
            "url": "https://www.jbm.com.mx",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Michoacán",
              "addressCountry": "MX"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+52-452-123-4567",
              "contactType": "sales",
              "availableLanguage": ["Spanish", "English"]
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ProductSection />
          <ClassificationsSection />
          <NutritionSection />
          <LogisticsSection />
          <CertificationsSection />
          <WhyJBMSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
