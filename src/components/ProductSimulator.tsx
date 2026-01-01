import { useState, useEffect } from 'react';
import { 
  Maximize2, 
  Camera, 
  Ruler, 
  Hand,
  Info,
  Smartphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import limeSingle from '@/assets/lime-single.png';

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

type MaturityLevel = 'verde' | 'alimonado' | 'amarillo';

const maturityData: Record<MaturityLevel, { 
  label: string; 
  shelfLife: string; 
  hueRotate: string; 
  bgGradient: string;
  textColor: string;
}> = {
  verde: {
    label: 'Verde',
    shelfLife: '15-25 días',
    hueRotate: 'hue-rotate(0deg)',
    bgGradient: 'from-lime-500 to-lime-600',
    textColor: 'text-lime-700',
  },
  alimonado: {
    label: 'Alimonado',
    shelfLife: '10-12 días',
    hueRotate: 'hue-rotate(25deg) saturate(1.2)',
    bgGradient: 'from-lime-400 to-citrus-400',
    textColor: 'text-citrus-600',
  },
  amarillo: {
    label: 'Amarillo',
    shelfLife: '5-7 días',
    hueRotate: 'hue-rotate(45deg) saturate(1.3)',
    bgGradient: 'from-citrus-400 to-gold-400',
    textColor: 'text-gold-500',
  },
};

const ProductSimulator = ({ selectedCalibre, calibres, onCalibreChange }: ProductSimulatorProps) => {
  const [maturity, setMaturity] = useState<MaturityLevel>('verde');
  const [showRealSize, setShowRealSize] = useState(false);
  const [isARSupported, setIsARSupported] = useState(false);

  const currentCalibre = calibres.find(c => c.calibre === selectedCalibre) || calibres[0];
  const maturityInfo = maturityData[maturity];

  useEffect(() => {
    // Check if AR is potentially supported (WebXR)
    if ('xr' in navigator) {
      (navigator as any).xr?.isSessionSupported?.('immersive-ar').then((supported: boolean) => {
        setIsARSupported(supported);
      }).catch(() => setIsARSupported(false));
    }
  }, []);

  const handleARView = async () => {
    if ('xr' in navigator) {
      try {
        const session = await (navigator as any).xr.requestSession('immersive-ar', {
          requiredFeatures: ['hit-test', 'dom-overlay'],
          domOverlay: { root: document.body }
        });
        // AR session handling would go here
        console.log('AR session started', session);
      } catch (error) {
        // Fallback: open camera overlay simulation
        alert('AR no disponible. Usa la función "Tamaño Real" para ver el limón a escala.');
      }
    } else {
      alert('Tu navegador no soporta Realidad Aumentada. Prueba con Chrome en Android.');
    }
  };

  // Generate ruler marks
  const rulerMarks = [];
  for (let i = 0; i <= 50; i += 5) {
    rulerMarks.push(i);
  }

  return (
    <div className="relative">
      {/* Glass Panel Container */}
      <div className="p-6 lg:p-8 rounded-3xl bg-card/80 backdrop-blur-xl border border-lime-200/50 shadow-elevated">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h4 className="font-display text-lg lg:text-xl font-bold text-foreground">
              Visualizador de Calidad JBM
            </h4>
            <p className="text-sm text-muted-foreground mt-1">
              Interactúa con la tabla para ver los tamaños
            </p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-500 to-lime-600 flex items-center justify-center shadow-soft">
            <Ruler className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Main Visualizer Area */}
        <div className="relative aspect-square max-w-[320px] mx-auto mb-6">
          {/* Background Glow */}
          <div 
            className={`absolute inset-0 rounded-full blur-3xl opacity-30 transition-all duration-500 bg-gradient-to-br ${maturityInfo.bgGradient}`}
            style={{ transform: `scale(${currentCalibre.scale})` }}
          />

          {/* Ruler - Left Side */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[80%] w-8 flex flex-col justify-between items-end pr-1">
            <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-lime-300 via-lime-500 to-lime-300" />
            {rulerMarks.map((mark) => (
              <div key={mark} className="relative flex items-center">
                <span className="text-[8px] text-muted-foreground mr-1">{mark}</span>
                <div className={`h-[1px] ${mark % 10 === 0 ? 'w-3 bg-lime-600' : 'w-2 bg-lime-400'}`} />
              </div>
            ))}
          </div>

          {/* Hand Silhouette Reference */}
          <div className="absolute right-0 bottom-0 w-20 h-32 opacity-10">
            <Hand className="w-full h-full text-foreground" />
          </div>

          {/* Lime Image with Dynamic Scaling */}
          <div 
            className="absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out"
            style={{ 
              transform: `scale(${currentCalibre.scale})`,
            }}
          >
            <div className="relative">
              <img 
                src={limeSingle}
                alt={`Limón calibre ${currentCalibre.size}`}
                className="w-48 h-48 object-contain drop-shadow-2xl transition-all duration-300"
                style={{ 
                  filter: maturityInfo.hueRotate,
                }}
              />
              
              {/* Dynamic Info Badge */}
              <div className="absolute -top-2 -right-2 px-3 py-2 rounded-xl bg-card/95 backdrop-blur-sm border border-lime-200 shadow-card">
                <div className="text-center">
                  <span className="block text-xs text-muted-foreground">Diámetro</span>
                  <span className="block text-lg font-bold text-lime-700">{currentCalibre.diameterMm}mm</span>
                </div>
              </div>

              {/* Pieces per Kg Badge */}
              <div className="absolute -bottom-2 -left-2 px-3 py-2 rounded-xl bg-lime-600 text-white shadow-card">
                <div className="text-center">
                  <span className="block text-[10px] opacity-80">Piezas/Kg</span>
                  <span className="block text-sm font-bold">{currentCalibre.piezasKg}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Use Case Badge */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-gradient-to-r from-lime-500 to-lime-600 text-white text-sm font-medium shadow-soft whitespace-nowrap">
            {currentCalibre.uso.split(' / ')[0]}
          </div>
        </div>

        {/* Maturity Selector */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Info className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Nivel de Maduración</span>
          </div>
          <div className="flex gap-2">
            {(Object.keys(maturityData) as MaturityLevel[]).map((level) => (
              <button
                key={level}
                onClick={() => setMaturity(level)}
                className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  maturity === level
                    ? `bg-gradient-to-r ${maturityData[level].bgGradient} text-white shadow-soft scale-105`
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                }`}
              >
                <span className="block">{maturityData[level].label}</span>
                {maturity === level && (
                  <span className="block text-[10px] opacity-80 mt-0.5">
                    Vida: {maturityData[level].shelfLife}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Calibre Quick Select */}
        <div className="mb-6">
          <span className="text-sm font-medium text-foreground mb-3 block">Selección Rápida de Calibre</span>
          <div className="flex gap-2 flex-wrap">
            {calibres.map((calibre) => (
              <button
                key={calibre.calibre}
                onClick={() => onCalibreChange(calibre.calibre)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCalibre === calibre.calibre
                    ? 'bg-lime-600 text-white shadow-soft'
                    : 'bg-lime-100 text-lime-700 hover:bg-lime-200'
                }`}
              >
                {calibre.size}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="gap-2 border-lime-300 text-lime-700 hover:bg-lime-50"
            onClick={() => setShowRealSize(true)}
          >
            <Maximize2 className="w-4 h-4" />
            <span className="text-xs sm:text-sm">Tamaño Real</span>
          </Button>
          <Button
            variant="outline"
            className="gap-2 border-lime-300 text-lime-700 hover:bg-lime-50"
            onClick={handleARView}
          >
            <Camera className="w-4 h-4" />
            <span className="text-xs sm:text-sm">Ver en AR</span>
          </Button>
        </div>

        {/* AR Support Notice */}
        {!isARSupported && (
          <p className="text-[10px] text-muted-foreground text-center mt-3">
            <Smartphone className="w-3 h-3 inline mr-1" />
            AR disponible en dispositivos compatibles con WebXR
          </p>
        )}
      </div>

      {/* Real Size Modal */}
      {showRealSize && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowRealSize(false)}
        >
          <div className="relative max-w-md w-full" onClick={e => e.stopPropagation()}>
            <div className="text-center mb-6">
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                Tamaño Real 1:1
              </h3>
              <p className="text-sm text-muted-foreground">
                Coloca una moneda de <strong>$10 MXN</strong> o un <strong>Quarter USD</strong> en la pantalla para calibrar.
              </p>
            </div>

            {/* Actual Size Lime Display */}
            <div className="relative mx-auto" style={{ width: `${currentCalibre.diameterMm}mm`, height: `${currentCalibre.diameterMm}mm`, minWidth: '80px', minHeight: '80px' }}>
              <img 
                src={limeSingle}
                alt={`Limón calibre ${currentCalibre.size} tamaño real`}
                className="w-full h-full object-contain"
                style={{ filter: maturityInfo.hueRotate }}
              />
              {/* Diameter indicator */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="text-lg font-bold text-lime-700">{currentCalibre.diameterMm}mm</span>
              </div>
            </div>

            {/* Coin Reference */}
            <div className="mt-16 flex justify-center gap-8">
              <div className="text-center">
                <div className="w-[28mm] h-[28mm] rounded-full border-2 border-dashed border-lime-400 flex items-center justify-center bg-lime-50/50">
                  <span className="text-xs text-lime-600 font-medium">$10 MXN<br/>28mm</span>
                </div>
              </div>
              <div className="text-center">
                <div className="w-[24.26mm] h-[24.26mm] rounded-full border-2 border-dashed border-lime-400 flex items-center justify-center bg-lime-50/50">
                  <span className="text-xs text-lime-600 font-medium">Quarter<br/>24.3mm</span>
                </div>
              </div>
            </div>

            <Button 
              className="mt-8 w-full"
              onClick={() => setShowRealSize(false)}
            >
              Cerrar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSimulator;
