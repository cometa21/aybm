import { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Smartphone,
  RotateCcw,
  ZoomIn,
  Hand,
  Info,
  Package
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

// --- 1. SOLUCIÓN DE TIPOS PARA MODEL-VIEWER ---
// Esto evita que TypeScript marque error en el componente <model-viewer>
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        src?: string;
        alt?: string;
        ar?: boolean;
        'ar-modes'?: string;
        'ar-scale'?: string;
        'ar-placement'?: string;
        'camera-controls'?: boolean;
        'touch-action'?: string;
        'auto-rotate'?: boolean;
        'auto-rotate-delay'?: number;
        'rotation-per-second'?: string;
        'shadow-intensity'?: string;
        'shadow-softness'?: string;
        exposure?: string;
        'environment-image'?: string;
        'interaction-prompt'?: string;
        'interaction-prompt-style'?: string;
        poster?: string;
        loading?: string;
        ref?: any;
      };
    }
  }
}

interface CalibreData {
  calibre: string;
  size: string;
  clasificacion: string;
  diametro: string;
  piezasKg: string;
  uso: string;
  scale: number;
  diameterMm: number;
}

interface ProductSimulatorProps {
  selectedCalibre: string;
  calibres: CalibreData[];
  onCalibreChange: (calibre: string) => void;
}

type ProductType = 'lime' | 'masterbox';

// --- 2. RUTAS DE MODELOS (AJUSTADAS PARA TU ARCHIVO ACTUAL) ---
// He apuntado todo a '/limon.glb' para que funcione YA.
// Cuando tengas los modelos específicos, cambia las rutas aquí.
const DEFAULT_MODEL = '/lime-dark-green.glb'; 

const LIME_MODELS = {
  darkGreen: DEFAULT_MODEL,   // Antes: '/models/lime-dark-green.glb'
  mediumGreen: DEFAULT_MODEL, // Antes: '/models/lime-medium-green.glb'
  yellow: DEFAULT_MODEL,      // Antes: '/models/lime-yellow.glb'
};

const getCalibreModel = (calibre: string): string => {
  switch (calibre) {
    case '150':
    case '175':
      return LIME_MODELS.darkGreen;
    case '110':
    case '230':
      return LIME_MODELS.mediumGreen;
    case '200':
    case '250':
    default:
      return LIME_MODELS.yellow;
  }
};

const MASTERBOX_MODEL = DEFAULT_MODEL; // Placeholder temporal

const ProductSimulator = ({ selectedCalibre, calibres, onCalibreChange }: ProductSimulatorProps) => {
  const [productType, setProductType] = useState<ProductType>('lime');
  const [isLoaded, setIsLoaded] = useState(false);
  const [modelViewerReady, setModelViewerReady] = useState(false);
  const modelViewerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  
  const currentCalibre = calibres.find(c => c.calibre === selectedCalibre) || calibres[0];

  useEffect(() => {
    const loadModelViewer = async () => {
      // Chequeo seguro para evitar doble carga o errores en SSR
      if (typeof window !== 'undefined' && !customElements.get('model-viewer')) {
        try {
          await import('@google/model-viewer');
          setModelViewerReady(true);
        } catch (error) {
          console.error('Failed to load model-viewer:', error);
        }
      } else {
        setModelViewerReady(true);
      }
    };
    loadModelViewer();
  }, []);

  useEffect(() => {
    if (!modelViewerReady) return;
    
    const modelViewer = modelViewerRef.current;
    if (!modelViewer) return;

    const handleLoad = () => {
      setIsLoaded(true);
      console.log('Modelo cargado correctamente');
    };

    modelViewer.addEventListener('load', handleLoad);
    
    return () => {
      modelViewer.removeEventListener('load', handleLoad);
    };
  }, [productType, modelViewerReady, currentCalibre]); // Añadido currentCalibre para recargar si cambia

  useEffect(() => {
    setIsLoaded(false);
  }, [productType, selectedCalibre]);

  // --- 3. FIX DE TIPADO PARA RESET CAMERA ---
  const resetCamera = () => {
    // Casting específico para acceder a propiedades del componente web
    const modelViewer = modelViewerRef.current as (HTMLElement & { cameraOrbit: string; fieldOfView: string });
    if (modelViewer) {
      modelViewer.cameraOrbit = '0deg 75deg 105%'; // Un ángulo inicial estándar
      modelViewer.fieldOfView = 'auto';
    }
  };

  const currentModelUrl = productType === 'lime' 
    ? getCalibreModel(selectedCalibre) 
    : MASTERBOX_MODEL;
    
  const scaleHint = productType === 'lime' 
    ? `Calibre ${currentCalibre.size} • Ø ${currentCalibre.diameterMm}mm`
    : 'Caja Master 40 lbs • 18.14 kg';

  return (
    <div className="relative">
      <div className="p-6 lg:p-8 rounded-3xl bg-card/80 backdrop-blur-xl border border-lime-200/50 shadow-elevated">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4 className="font-display text-lg lg:text-xl font-bold text-foreground">
              Visualizador 3D / AR
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Explora nuestros productos en 3D
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-500 to-lime-600 flex items-center justify-center shadow-soft">
            <Box className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Product Type Selector */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setProductType('lime')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
              productType === 'lime'
                ? 'bg-gradient-to-r from-lime-500 to-lime-600 text-white shadow-lg shadow-lime-500/30'
                : 'bg-lime-50 text-lime-700 hover:bg-lime-100'
            }`}
          >
            <span className="text-xl">🍋</span>
            <span className="text-sm">Limón Individual</span>
          </button>
          <button
            onClick={() => setProductType('masterbox')}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
              productType === 'masterbox'
                ? 'bg-gradient-to-r from-lime-500 to-lime-600 text-white shadow-lg shadow-lime-500/30'
                : 'bg-lime-50 text-lime-700 hover:bg-lime-100'
            }`}
          >
            <Package className="w-5 h-5" />
            <span className="text-sm">Caja Master</span>
          </button>
        </div>

        {/* Calibre Selector */}
        {productType === 'lime' && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-muted-foreground mb-2">
              Seleccionar Calibre
            </label>
            <div className="grid grid-cols-5 gap-2">
              {calibres.map((cal) => (
                <button
                  key={cal.calibre}
                  onClick={() => onCalibreChange(cal.calibre)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCalibre === cal.calibre
                      ? 'bg-lime-600 text-white shadow-md'
                      : 'bg-lime-50 text-lime-700 hover:bg-lime-100'
                  }`}
                >
                  {cal.size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 3D Model Viewer Container */}
        <div className="relative h-[350px] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-50 to-lime-50 mb-4 border border-lime-100">
          
          {/* Loading Overlay */}
          {(!isLoaded || !modelViewerReady) && (
            <div className="absolute inset-0 flex items-center justify-center bg-lime-50/80 backdrop-blur-sm z-10 transition-opacity duration-300">
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 border-4 border-lime-200 border-t-lime-600 rounded-full animate-spin" />
                <span className="text-sm text-muted-foreground font-medium">
                  {!modelViewerReady ? 'Inicializando motor 3D...' : 'Cargando textura...'}
                </span>
              </div>
            </div>
          )}

          {modelViewerReady && (
            <model-viewer
              ref={modelViewerRef}
              src={currentModelUrl}
              poster="/placeholder.svg" // Recomendado: Cambiar por una imagen real del limón (webp)
              alt={productType === 'lime' 
                ? `Limón Mexicano Calibre ${currentCalibre.size}` 
                : 'Caja Master JBM Cítricos'
              }
              ar
              ar-modes="webxr scene-viewer quick-look"
              ar-scale="fixed"
              ar-placement="floor"
              camera-controls
              touch-action="pan-y"
              auto-rotate={!isMobile}
              auto-rotate-delay={1000}
              rotation-per-second="30deg"
              shadow-intensity="1"
              shadow-softness="0.8"
              exposure="1.2"
              environment-image="neutral"
              interaction-prompt={isMobile ? "none" : "auto"}
              interaction-prompt-style="wiggle"
              loading="eager" // Carga prioritaria
              style={{
                width: '100%',
                height: '100%',
              } as React.CSSProperties}
              className="w-full h-full focus:outline-none"
            >
              <button 
                slot="ar-button"
                className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 z-50 ${
                  isMobile 
                    ? 'bg-gradient-to-r from-lime-500 to-lime-600 text-white shadow-xl shadow-lime-500/40 scale-110 animate-pulse'
                    : 'bg-lime-600 text-white shadow-lg hover:shadow-xl hover:scale-105'
                }`}
              >
                <Smartphone className="w-5 h-5" />
                <span>Ver en tu Espacio</span>
              </button>

              <div slot="progress-bar" className="absolute bottom-0 left-0 right-0 h-1 bg-lime-100">
                <div className="h-full bg-gradient-to-r from-lime-500 to-lime-600 transition-all duration-300 origin-left" />
              </div>
            </model-viewer>
          )}

          {/* Control Buttons - Desktop */}
          {!isMobile && modelViewerReady && (
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
              <button
                onClick={resetCamera}
                className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center text-lime-700 hover:bg-lime-50 transition-colors"
                title="Resetear vista"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md z-20 pointer-events-none">
            <span className="text-xs text-muted-foreground block">Visualizando</span>
            <span className="text-sm font-semibold text-lime-700">{scaleHint}</span>
          </div>
        </div>

        {/* Instructions */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-lime-50/50 border border-lime-100">
          <Info className="w-5 h-5 text-lime-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-muted-foreground">
            {isMobile ? (
              <p>
                <strong className="text-foreground">Toca "Ver en tu Espacio"</strong> para activar la cámara y ver el tamaño real en tu mesa.
              </p>
            ) : (
              <p>
                <strong className="text-foreground">Arrastra para rotar</strong> el modelo 3D. Usa la rueda del mouse para hacer zoom.
              </p>
            )}
          </div>
        </div>

        {/* Interaction Hints - Desktop */}
        {!isMobile && (
          <div className="flex justify-center gap-6 mt-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Hand className="w-4 h-4" />
              <span>Arrastra para rotar</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ZoomIn className="w-4 h-4" />
              <span>Scroll para zoom</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSimulator;
