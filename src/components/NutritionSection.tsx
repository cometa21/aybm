import { Zap, Heart, Shield, Sun } from 'lucide-react';

const NutritionSection = () => {
  const nutrients = [
    {
      icon: Zap,
      name: 'Vitamina C',
      value: '29mg',
      percentage: '32%',
      color: 'from-citrus-400 to-citrus-500',
    },
    {
      icon: Heart,
      name: 'Potasio',
      value: '102mg',
      percentage: '3%',
      color: 'from-lime-400 to-lime-500',
    },
    {
      icon: Shield,
      name: 'Calcio',
      value: '33mg',
      percentage: '3%',
      color: 'from-lime-500 to-lime-600',
    },
    {
      icon: Sun,
      name: 'Vitamina B6',
      value: '0.04mg',
      percentage: '2%',
      color: 'from-citrus-300 to-citrus-400',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-lime-100 text-lime-700 text-sm font-medium mb-6">
              Valor Nutricional
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Beneficios
              <br />
              <span className="text-lime-600">Naturales</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              El limón mexicano es una fuente excepcional de vitamina C y antioxidantes naturales. 
              Por cada 100g de fruto fresco:
            </p>

            {/* Nutrition Grid */}
            <div className="grid grid-cols-2 gap-4">
              {nutrients.map((nutrient, index) => (
                <div
                  key={nutrient.name}
                  className="p-5 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${nutrient.color} mb-3`}>
                    <nutrient.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <h4 className="font-medium text-foreground mb-1">{nutrient.name}</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">{nutrient.value}</span>
                    <span className="text-sm text-muted-foreground">({nutrient.percentage} VD)</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              *Valores basados en 100g de limón mexicano fresco. VD = Valor Diario recomendado.
            </p>
          </div>

          {/* Visual Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-lime-50 to-citrus-50 rounded-3xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <span className="text-6xl lg:text-8xl font-display font-bold text-lime-600">29</span>
                <span className="text-2xl lg:text-3xl font-display text-lime-600">mg</span>
                <p className="text-muted-foreground mt-2">Vitamina C por 100g</p>
              </div>

              {/* Additional Info */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-card rounded-xl">
                  <span className="text-muted-foreground">Calorías</span>
                  <span className="font-semibold text-foreground">30 kcal</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-xl">
                  <span className="text-muted-foreground">Carbohidratos</span>
                  <span className="font-semibold text-foreground">10.5g</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-xl">
                  <span className="text-muted-foreground">Fibra</span>
                  <span className="font-semibold text-foreground">2.8g</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-card rounded-xl">
                  <span className="text-muted-foreground">Agua</span>
                  <span className="font-semibold text-foreground">88%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
