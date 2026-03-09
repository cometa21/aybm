import { useState } from 'react';
import { 
  MapPin, 
  Leaf, 
  Clock, 
  Shield, 
  Zap, 
  Thermometer, 
  Package, 
  Layers,
  FileDown,
  ChevronRight,
  Sun,
  Droplets
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import michoacanMap from '@/assets/michoacan-map.png';
import ProductSimulator from './ProductSimulator';

export type ColorCategory = 'Verde' | 'Alimonado' | 'Amarillo';

export interface CalibreData {
  calibre: string;
  categoria: ColorCategory;
  volumen: number;
  scale: number;
}
const ClassificationsSection = () => {
  const [selectedCalibre, setSelectedCalibre] = useState<string>('V-XX');

  const calibres: CalibreData[] = [
    // Verde
    { calibre: 'V-4', categoria: 'Verde', volumen: 1000, scale: 0.55 },
    { calibre: 'V-5', categoria: 'Verde', volumen: 1000, scale: 0.60 },
    { calibre: 'V-X', categoria: 'Verde', volumen: 4000, scale: 0.68 },
    { calibre: 'V-XX', categoria: 'Verde', volumen: 6000, scale: 0.76 },
    { calibre: 'V-XXX', categoria: 'Verde', volumen: 4000, scale: 0.84 },
    { calibre: 'V-EXT', categoria: 'Verde', volumen: 2000, scale: 0.92 },
    // Alimonado
    { calibre: 'AL-4', categoria: 'Alimonado', volumen: 1000, scale: 0.55 },
    { calibre: 'AL-5', categoria: 'Alimonado', volumen: 1000, scale: 0.60 },
    { calibre: 'AL-X', categoria: 'Alimonado', volumen: 2000, scale: 0.68 },
    { calibre: 'AL-XX', categoria: 'Alimonado', volumen: 2000, scale: 0.76 },
    { calibre: 'AL-XXX', categoria: 'Alimonado', volumen: 1000, scale: 0.84 },
    { calibre: 'AL-EXT', categoria: 'Alimonado', volumen: 1000, scale: 0.92 },
    // Amarillo
    { calibre: 'AM-X', categoria: 'Amarillo', volumen: 1000, scale: 0.68 },
    { calibre: 'AM-XX', categoria: 'Amarillo', volumen: 1000, scale: 0.76 },
    { calibre: 'AM-XXX', categoria: 'Amarillo', volumen: 1000, scale: 0.84 },
    { calibre: 'AM-EXT', categoria: 'Amarillo', volumen: 1000, scale: 0.92 },
  ];

  const categories: ColorCategory[] = ['Verde', 'Alimonado', 'Amarillo'];
  const productAttributes = [
    {
      icon: Sun,
      title: 'Madurez y Color',
      description: 'El color varía de verde oscuro a amarillo según la maduración fisiológica del fruto.',
      highlight: 'Verde a Amarillo',
    },
    {
      icon: Clock,
      title: 'Vida de Anaquel',
      description: 'Duración óptima bajo condiciones de almacenamiento controlado.',
      highlight: '15 - 25 días',
    },
    {
      icon: Droplets,
      title: 'Calidad Física',
      description: 'Fruto de cáscara delgada, suave, con semilla y jugo altamente ácido (pH 2.0-2.35).',
      highlight: 'Premium',
    },
  ];

  const nutritionFacts = [
    { label: 'Energía', value: '20', unit: 'Kcal' },
    { label: 'Vitamina C', value: '19.5', unit: 'mg' },
    { label: 'Calcio', value: '22', unit: 'mg' },
    { label: 'Sodio', value: '1', unit: 'mg' },
  ];

  const logisticsSpecs = [
    {
      icon: Package,
      title: 'Presentaciones',
      items: [
        'Caja plástica: 10, 15, 18 y 20 kg',
        'Arpilla: 10 a 25 kg',
        'Cajas: 10 o 40 libras',
      ],
    },
    {
      icon: Layers,
      title: 'Paletizado',
      items: [
        '56 cajas por pallet',
        'Exportación y Nacional',
        'Estiba estándar USDA',
      ],
    },
    {
      icon: Thermometer,
      title: 'Conservación',
      items: [
        'Temperatura: 8°C - 15°C',
        'Humedad relativa: 85-90%',
        'Transporte refrigerado',
      ],
    },
  ];

  return (
    <section id="clasificaciones" className="py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-lime-100 text-lime-700 text-sm font-medium mb-4">
            Dashboard B2B
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Especificaciones <span className="text-lime-600">Técnicas</span>
          </h2>
        </div>

        {/* Origin Header - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 p-6 lg:p-10 rounded-3xl bg-gradient-to-br from-lime-50 to-background border border-lime-100">
          {/* Left - Origin Info */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-lime-600" />
              <span className="text-sm font-medium text-lime-700 uppercase tracking-wider">Origen Certificado</span>
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Michoacán: Calidad de Exportación
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Las condiciones únicas de clima subtropical y suelos volcánicos de Michoacán propician 
              una producción de limón mexicano de <strong className="text-foreground">alta calidad durante todo el año</strong>. 
              Nuestra ubicación estratégica garantiza el mejor sabor y frescura.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-lime-100 text-lime-700 text-sm font-medium">
                <Leaf className="w-4 h-4" />
                Producción 365 días
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-lime-100 text-lime-700 text-sm font-medium">
                <Shield className="w-4 h-4" />
                Trazabilidad completa
              </span>
            </div>
          </div>

          {/* Right - Map with fade effect */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-lime-400/20 rounded-full blur-3xl scale-75" />
              {/* Map with fade edges */}
              <div className="relative z-10">
                <div 
                  className="absolute inset-0 pointer-events-none z-20"
                  style={{
                    background: 'radial-gradient(ellipse at center, transparent 40%, hsl(var(--background)) 85%)',
                  }}
                />
                <img 
                  src={michoacanMap} 
                  alt="Mapa de Michoacán - Zona de origen del limón mexicano JBM"
                  className="w-full h-auto"
                  style={{
                    maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 80%)',
                  }}
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
                <div className="relative">
                  <div className="absolute inset-0 bg-lime-500 rounded-full animate-ping opacity-20" />
                  <div className="w-4 h-4 bg-lime-600 rounded-full border-2 border-white shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Calibres Table + Product Simulator */}
        <div className="grid lg:grid-cols-[1fr,400px] gap-8 mb-16">
          {/* Table Section */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground">
                Tabla de Clasificación
              </h3>
              <span className="text-sm text-muted-foreground">
                Clasificación JBM
              </span>
            </div>
            
            <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-lime-50 hover:bg-lime-50">
                      <TableHead className="font-semibold text-lime-900">Calibre</TableHead>
                      <TableHead className="font-semibold text-lime-900">Descripción</TableHead>
                      <TableHead className="font-semibold text-lime-900">Color Disponible</TableHead>
                      <TableHead className="font-semibold text-lime-900 hidden xl:table-cell">Uso Recomendado</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {calibres.map((item) => (
                      <TableRow 
                        key={item.calibre}
                        className={`cursor-pointer transition-all duration-300 ${
                          selectedCalibre === item.calibre 
                            ? 'bg-lime-50 border-l-4 border-l-lime-500 shadow-sm' 
                            : 'hover:bg-muted/50'
                        }`}
                        onClick={() => setSelectedCalibre(item.calibre)}
                        onMouseEnter={() => setSelectedCalibre(item.calibre)}
                      >
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <span className={`w-10 h-8 rounded-lg flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                              selectedCalibre === item.calibre 
                                ? 'bg-lime-500 text-white scale-110' 
                                : 'bg-lime-100 text-lime-700'
                            }`}>
                              {item.calibre}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-foreground">
                            {item.descripcion}
                          </span>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {item.color.split(' / ').map((color) => (
                              <span 
                                key={color}
                                className={`inline-block px-2 py-0.5 rounded-md text-xs font-medium ${
                                  color === 'Verde' 
                                    ? 'bg-lime-100 text-lime-700' 
                                    : color === 'Alimonado'
                                    ? 'bg-citrus-100 text-citrus-700'
                                    : 'bg-gold-100 text-gold-700'
                                }`}
                              >
                                {color}
                              </span>
                            ))}
                          </div>
                        </TableCell>
                        <TableCell className="text-muted-foreground hidden xl:table-cell">{item.uso}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Mobile: Show selected use */}
            <div className="xl:hidden mt-4 p-4 rounded-xl bg-lime-50 border border-lime-200">
              <span className="text-sm text-muted-foreground">Uso recomendado:</span>
              <p className="font-medium text-foreground mt-1">
                {calibres.find(c => c.calibre === selectedCalibre)?.uso}
              </p>
              <div className="flex flex-wrap gap-1 mt-2">
                {calibres.find(c => c.calibre === selectedCalibre)?.color.split(' / ').map((color) => (
                  <span 
                    key={color}
                    className={`inline-block px-2 py-0.5 rounded-md text-xs font-medium ${
                      color === 'Verde' 
                        ? 'bg-lime-100 text-lime-700' 
                        : color === 'Alimonado'
                        ? 'bg-citrus-100 text-citrus-700'
                        : 'bg-gold-100 text-gold-700'
                    }`}
                  >
                    {color}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Product Simulator Panel */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductSimulator 
              selectedCalibre={selectedCalibre}
              calibres={calibres}
              onCalibreChange={setSelectedCalibre}
            />
          </div>
        </div>

        {/* Product Attributes + Nutrition Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {/* Product Attributes Cards */}
          {productAttributes.map((attr, index) => (
            <div 
              key={attr.title}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-card hover:border-lime-200 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-lime-500 to-lime-600 flex items-center justify-center shadow-sm">
                  <attr.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground mb-1">{attr.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{attr.description}</p>
                  <span className="inline-block px-3 py-1 rounded-full bg-lime-100 text-lime-700 text-sm font-semibold">
                    {attr.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nutrition Panel + Logistics */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Nutrition Facts */}
          <div className="p-6 lg:p-8 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-2 mb-6">
              <Zap className="w-5 h-5 text-lime-600" />
              <h3 className="font-display text-xl font-bold text-foreground">
                Información Nutricional
              </h3>
              <span className="ml-auto text-sm text-muted-foreground">Porción 67g</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {nutritionFacts.map((fact) => (
                <div 
                  key={fact.label}
                  className="p-4 rounded-xl bg-gradient-to-br from-lime-50 to-background border border-lime-100"
                >
                  <span className="text-sm text-muted-foreground">{fact.label}</span>
                  <div className="flex items-baseline gap-1 mt-1">
                    <span className="text-2xl font-bold text-foreground">{fact.value}</span>
                    <span className="text-sm text-muted-foreground">{fact.unit}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              *Valores basados en porción de 67g de limón mexicano fresco.
            </p>
          </div>

          {/* Logistics Specs */}
          <div className="p-6 lg:p-8 rounded-2xl bg-lime-700 text-primary-foreground">
            <h3 className="font-display text-xl font-bold mb-6 flex items-center gap-2">
              <Package className="w-5 h-5" />
              Especificaciones Logísticas
            </h3>
            
            <div className="space-y-6">
              {logisticsSpecs.map((spec) => (
                <div key={spec.title}>
                  <div className="flex items-center gap-2 mb-3">
                    <spec.icon className="w-4 h-4 text-citrus-300" />
                    <h4 className="font-semibold text-citrus-200">{spec.title}</h4>
                  </div>
                  <ul className="space-y-1.5 pl-6">
                    {spec.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-lime-100">
                        <ChevronRight className="w-3 h-3 text-citrus-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="gap-2 bg-lime-600 hover:bg-lime-700 text-white shadow-lg hover:shadow-xl transition-all"
          >
            <a href="/docs/ficha-tecnica-jbm.pdf" download="Ficha_Tecnica_JBM_Citricos.pdf">
              <FileDown className="w-5 h-5" />
              Descargar Ficha Técnica Completa (PDF)
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClassificationsSection;
