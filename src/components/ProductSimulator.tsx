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
  const [showARView, setShowARView] = useState(false);
  const [cameraStream, setCameraStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);

  const currentCalibre = calibres.find(c => c.calibre === selectedCalibre) || calibres[0];
  const maturityInfo = maturityData[maturity];

  // Cleanup camera stream on unmount
  useEffect(() => {
    return () => {
      if (cameraStream) {
        cameraStream.getTracks().forEach(track => track.stop());
      }
    };
  }, [cameraStream]);

  const handleARView = async () => {
    setCameraError(null);
    
    // Check if camera is available
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      setCameraError('Tu navegador no soporta acceso a la cámara. Prueba con Chrome o Safari.');
      setShowARView(true);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { 
          facingMode: 'environment', // Use back camera
          width: { ideal: 1280 },
          height: { ideal: 720 }
        }
      });
      setCameraStream(stream);
      setShowARView(true);
    } catch (error: any) {
      console.error('Camera error:', error);
      if (error.name === 'NotAllowedError') {
        setCameraError('Permiso de cámara denegado. Por favor, permite el acceso a la cámara en tu navegador.');
      } else if (error.name === 'NotFoundError') {
        setCameraError('No se encontró una cámara en tu dispositivo.');
      } else {
        setCameraError('Error al acceder a la cámara. Intenta de nuevo.');
      }
      setShowARView(true);
    }
  };

  const closeARView = () => {
    if (cameraStream) {
      cameraStream.getTracks().forEach(track => track.stop());
      setCameraStream(null);
    }
    setShowARView(false);
    setCameraError(null);
  };

  // Generate ruler marks - more precise
  const rulerMarks = [];
  for (let i = 0; i <= 50; i += 5) {
    rulerMarks.push(i);
  }

  // WhatsApp message with selected calibre
  const whatsappMessage = encodeURIComponent(
    `Hola JBM Cítricos, me interesa una cotización de Limón Mexicano. Vi el Calibre ${currentCalibre.size} en su sitio web y me gustaría más información.`
  );
  const whatsappUrl = `https://wa.me/524531234567?text=${whatsappMessage}`;

  // Calculate visual size based on calibre (base 180px for calibre 200)
  const baseSizePx = 180;
  const visualSize = baseSizePx * currentCalibre.scale;

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
        <div className="relative h-[320px] max-w-[320px] mx-auto mb-6">
          {/* Background Glow - follows lime size */}
          <div 
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-30 transition-all duration-500 ease-out bg-gradient-to-br ${maturityInfo.bgGradient}`}
            style={{ 
              width: `${visualSize * 1.5}px`,
              height: `${visualSize * 1.5}px`,
            }}
          />

          {/* Permanent Millimeter Ruler - Left Side */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 h-[240px] flex flex-col justify-between items-end z-10">
            <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-lime-300 via-lime-500 to-lime-300 rounded-full" />
            {rulerMarks.map((mark) => (
              <div key={mark} className="relative flex items-center -mr-[2px]">
                <span className="text-[9px] font-mono text-lime-700 mr-1 font-medium">{mark}</span>
                <div className={`h-[1.5px] rounded ${mark % 10 === 0 ? 'w-4 bg-lime-700' : 'w-2 bg-lime-500'}`} />
              </div>
            ))}
            <span className="text-[8px] text-muted-foreground mt-1">mm</span>
          </div>

          {/* Permanent Hand Silhouette Reference - Always visible */}
          <div className="absolute right-2 bottom-2 w-16 h-24 opacity-20 z-10">
            <Hand className="w-full h-full text-foreground" />
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] text-muted-foreground whitespace-nowrap">Escala ref.</span>
          </div>

          {/* Lime Image with REAL Dynamic Sizing (width/height change) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <img 
                src={limeSingle}
                alt={`Limón calibre ${currentCalibre.size}`}
                className="object-contain drop-shadow-2xl transition-all duration-300 ease-out"
                style={{ 
                  width: `${visualSize}px`,
                  height: `${visualSize}px`,
                  filter: maturityInfo.hueRotate,
                }}
              />
              
              {/* Dynamic Info Badge - Diameter */}
              <div className="absolute -top-4 -right-4 px-3 py-2 rounded-xl bg-card/95 backdrop-blur-sm border border-lime-200 shadow-card">
                <div className="text-center">
                  <span className="block text-[10px] text-muted-foreground">Diámetro</span>
                  <span className="block text-xl font-bold text-lime-700">{currentCalibre.diameterMm}mm</span>
                </div>
              </div>

              {/* Pieces per Kg Badge */}
              <div className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl bg-lime-600 text-white shadow-card">
                <div className="text-center">
                  <span className="block text-[10px] opacity-80">Piezas/Kg</span>
                  <span className="block text-sm font-bold">{currentCalibre.piezasKg}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Use Case Badge - Top */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-gradient-to-r from-lime-500 to-lime-600 text-white text-sm font-medium shadow-soft whitespace-nowrap z-20">
            {currentCalibre.uso.split(' / ')[0]}
          </div>

          {/* Calibre indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-card border border-lime-200 shadow-sm">
            <span className="text-xs font-medium text-lime-700">Calibre {currentCalibre.size}</span>
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
        <div className="grid grid-cols-2 gap-3 mb-4">
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

        {/* WhatsApp CTA Button */}
        <Button
          asChild
          className="w-full gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-medium"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Cotizar Calibre {currentCalibre.size}
          </a>
        </Button>

        {/* AR Support Notice */}
        <p className="text-[10px] text-muted-foreground text-center mt-3">
          <Smartphone className="w-3 h-3 inline mr-1" />
          Usa AR para proyectar el limón sobre cualquier superficie
        </p>
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

      {/* AR View Modal with Camera */}
      {showARView && (
        <div className="fixed inset-0 z-50 bg-black flex flex-col">
          {/* Camera Feed */}
          {cameraStream && !cameraError ? (
            <video
              autoPlay
              playsInline
              muted
              ref={(video) => {
                if (video && cameraStream) {
                  video.srcObject = cameraStream;
                }
              }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              <div className="text-center p-6">
                <Camera className="w-16 h-16 text-gray-500 mx-auto mb-4" />
                <p className="text-white text-lg mb-2">Vista AR Simulada</p>
                <p className="text-gray-400 text-sm max-w-xs">
                  {cameraError || 'Imagina el limón proyectado sobre tu superficie'}
                </p>
              </div>
            </div>
          )}

          {/* AR Overlay - Draggable Lime */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div 
              className="relative pointer-events-auto cursor-move select-none animate-pulse"
              style={{ 
                width: `${currentCalibre.diameterMm * 2.5}px`, 
                height: `${currentCalibre.diameterMm * 2.5}px`,
                minWidth: '100px',
                minHeight: '100px'
              }}
              draggable={false}
            >
              <img 
                src={limeSingle}
                alt={`Limón calibre ${currentCalibre.size}`}
                className="w-full h-full object-contain drop-shadow-2xl"
                style={{ filter: `${maturityInfo.hueRotate} drop-shadow(0 10px 30px rgba(0,0,0,0.5))` }}
                draggable={false}
              />
              
              {/* AR Info Badge */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm shadow-lg">
                <span className="text-sm font-bold text-lime-700">
                  Calibre {currentCalibre.size} • {currentCalibre.diameterMm}mm
                </span>
              </div>
            </div>
          </div>

          {/* AR Controls */}
          <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            {/* Calibre Selection */}
            <div className="flex gap-2 justify-center mb-4 flex-wrap">
              {calibres.map((calibre) => (
                <button
                  key={calibre.calibre}
                  onClick={() => onCalibreChange(calibre.calibre)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedCalibre === calibre.calibre
                      ? 'bg-lime-500 text-white'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {calibre.size}
                </button>
              ))}
            </div>

            {/* Maturity Selection */}
            <div className="flex gap-2 justify-center mb-4">
              {(Object.keys(maturityData) as MaturityLevel[]).map((level) => (
                <button
                  key={level}
                  onClick={() => setMaturity(level)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                    maturity === level
                      ? `bg-gradient-to-r ${maturityData[level].bgGradient} text-white`
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {maturityData[level].label}
                </button>
              ))}
            </div>

            <Button 
              className="w-full bg-white text-black hover:bg-gray-100"
              onClick={closeARView}
            >
              Cerrar Vista AR
            </Button>
          </div>

          {/* Instructions */}
          <div className="absolute top-4 inset-x-4 text-center">
            <p className="text-white/80 text-sm bg-black/50 rounded-full px-4 py-2 inline-block backdrop-blur-sm">
              {cameraStream ? 'Mueve tu dispositivo para ver el limón sobre superficies' : 'Proyección AR del limón'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSimulator;
