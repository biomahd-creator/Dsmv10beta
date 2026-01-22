import { ComponentShowcase } from "../ui/component-showcase";
import { Slider } from "../ui/slider";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Volume2, VolumeX, Sun, DollarSign, Gauge } from "lucide-react";
import { useState } from "react";

export function SliderPage() {
  return (
    <ComponentShowcase
      title="Slider"
      description="An input control where the user selects a value from within a given range using a draggable thumb."
      category="Forms"
      
      // Main Preview
      preview={
        <div className="w-full max-w-md space-y-6">
          <Slider defaultValue={[50]} max={100} step={1} />
          <Slider defaultValue={[75]} max={100} step={1} />
        </div>
      }
      
      // Main Code
      code={`import { Slider } from "@/components/ui/slider";

export function SliderDemo() {
  return (
    <div className="space-y-6">
      <Slider defaultValue={[50]} max={100} step={1} />
      <Slider defaultValue={[75]} max={100} step={1} />
    </div>
  );
}`}
      
      // Usage
      usage="Importa el componente Slider desde @/components/ui/slider. Ideal para volumen, brillo, rangos de precios, porcentajes, y cualquier valor numérico dentro de un rango. Usa siempre con un Label para accesibilidad."
      usageCode={`import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

function VolumeControl() {
  return (
    <div className="space-y-2">
      <Label>Volume</Label>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
      />
    </div>
  );
}`}
      
      // Props Documentation
      props={[
        {
          name: "value",
          type: "number[]",
          description: "Valor controlado del slider (array para múltiples thumbs)",
        },
        {
          name: "defaultValue",
          type: "number[]",
          default: "[0]",
          description: "Valor inicial no controlado",
        },
        {
          name: "onValueChange",
          type: "(value: number[]) => void",
          description: "Callback cuando cambia el valor",
        },
        {
          name: "min",
          type: "number",
          default: "0",
          description: "Valor mínimo del rango",
        },
        {
          name: "max",
          type: "number",
          default: "100",
          description: "Valor máximo del rango",
        },
        {
          name: "step",
          type: "number",
          default: "1",
          description: "Incremento entre valores",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Deshabilita el slider",
        },
        {
          name: "orientation",
          type: '"horizontal" | "vertical"',
          default: '"horizontal"',
          description: "Orientación del slider",
        },
        {
          name: "className",
          type: "string",
          description: "Clases CSS adicionales",
        },
      ]}
      
      examples={[
        {
          title: "Basic Slider",
          description: "Slider simple con valor por defecto",
          preview: (
            <div className="w-full max-w-md space-y-2">
              <Label>Basic Slider</Label>
              <Slider defaultValue={[33]} max={100} step={1} />
            </div>
          ),
          code: `import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export function BasicSlider() {
  return (
    <div className="space-y-2">
      <Label>Basic Slider</Label>
      <Slider defaultValue={[33]} max={100} step={1} />
    </div>
  );
}`,
        },
        {
          title: "Volume Control",
          description: "Slider con iconos y valor visible en tiempo real",
          preview: (
            <VolumeControlExample />
          ),
          code: `import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

export function VolumeControl() {
  const [volume, setVolume] = useState([50]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label>Volume</Label>
        <span className="text-sm text-muted-foreground">
          {volume[0]}%
        </span>
      </div>
      <div className="flex items-center gap-3">
        <VolumeX className="h-4 w-4 text-muted-foreground" />
        <Slider
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
          className="flex-1"
        />
        <Volume2 className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
}`,
        },
        {
          title: "Range Slider",
          description: "Slider con múltiples thumbs para seleccionar rango",
          preview: (
            <RangeSliderExample />
          ),
          code: `import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function RangeSlider() {
  const [range, setRange] = useState([25, 75]);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label>Age Range</Label>
        <span className="text-sm text-muted-foreground">
          {range[0]} - {range[1]} years
        </span>
      </div>
      <Slider
        value={range}
        onValueChange={setRange}
        min={18}
        max={100}
        step={1}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>18</span>
        <span>100</span>
      </div>
    </div>
  );
}`,
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Slider</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Prop</th>
                      <th className="text-left p-2">Tipo</th>
                      <th className="text-left p-2">Default</th>
                      <th className="text-left p-2">Descripción</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground text-sm">
                    <tr className="border-b">
                      <td className="p-2 font-mono">value</td>
                      <td className="p-2">number[]</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Valor controlado del slider (array para soportar múltiples thumbs en rangos)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">defaultValue</td>
                      <td className="p-2">number[]</td>
                      <td className="p-2">[0]</td>
                      <td className="p-2">Valor inicial en modo no controlado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onValueChange</td>
                      <td className="p-2">(value: number[]) =&gt; void</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Callback que se ejecuta cuando cambia el valor del slider</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">min</td>
                      <td className="p-2">number</td>
                      <td className="p-2">0</td>
                      <td className="p-2">Valor mínimo del rango</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">max</td>
                      <td className="p-2">number</td>
                      <td className="p-2">100</td>
                      <td className="p-2">Valor máximo del rango</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">step</td>
                      <td className="p-2">number</td>
                      <td className="p-2">1</td>
                      <td className="p-2">Incremento entre valores permitidos</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">disabled</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Deshabilita la interacción con el slider</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">orientation</td>
                      <td className="p-2">"horizontal" | "vertical"</td>
                      <td className="p-2">"horizontal"</td>
                      <td className="p-2">Orientación visual del slider</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onValueCommit</td>
                      <td className="p-2">(value: number[]) =&gt; void</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Callback que se ejecuta cuando el usuario termina de interactuar (mouseup/touchend)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">className</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Clases CSS adicionales para el contenedor</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Slider</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🔊 Controles de Audio/Video</h4>
                  <p className="text-sm text-muted-foreground">
                    Ajustar volumen, balance, velocidad de reproducción o progreso
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">💰 Filtros de Precio</h4>
                  <p className="text-sm text-muted-foreground">
                    Permitir al usuario seleccionar rangos de precio en tiendas o marketplaces
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">☀️ Configuraciones de Sistema</h4>
                  <p className="text-sm text-muted-foreground">
                    Brillo de pantalla, temperatura de color, tamaño de fuente
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📊 Dashboards e Indicadores</h4>
                  <p className="text-sm text-muted-foreground">
                    Visualizar métricas como rendimiento, uso de recursos o progreso
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📅 Rangos de Fechas/Edades</h4>
                  <p className="text-sm text-muted-foreground">
                    Seleccionar rangos numéricos como edad, años de experiencia o períodos
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">⚙️ Parámetros Técnicos</h4>
                  <p className="text-sm text-muted-foreground">
                    Ajustar configuraciones numéricas como límites, umbrales o porcentajes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Siempre incluye un Label asociado para indicar qué controla el slider</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra el valor actual visible (especialmente en tiempo real) para dar feedback inmediato</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Ajusta el step según el contexto: valores finos (step=1), medios (step=10) o gruesos (step=25)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye indicadores de min/max cuando el rango no es obvio (ej: "$0" a "$1,000")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa onValueCommit para operaciones costosas (API calls) en lugar de onValueChange</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para rangos (múltiples thumbs), usa array con 2 valores: defaultValue={[25, 75]}</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrega iconos contextuales (volumen, brillo, dinero) para mayor claridad visual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Evita sliders para valores discretos pequeños (menos de 5 opciones) - usa RadioGroup en su lugar</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}

// Helper components for examples
function VolumeControlExample() {
  const [volume, setVolume] = useState([50]);

  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex items-center justify-between">
        <Label>Volume</Label>
        <span className="text-muted-foreground">
          {volume[0]}%
        </span>
      </div>
      <div className="flex items-center gap-3">
        <VolumeX className="h-4 w-4 text-muted-foreground" />
        <Slider
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
          className="flex-1"
        />
        <Volume2 className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
}

function PriceRangeExample() {
  const [price, setPrice] = useState([500]);

  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex items-center justify-between">
        <Label>Maximum Price</Label>
        <div className="flex items-center gap-1">
          <DollarSign className="h-3 w-3 text-muted-foreground" />
          <span className="font-medium">
            {price[0].toLocaleString()}
          </span>
        </div>
      </div>
      <Slider
        value={price}
        onValueChange={setPrice}
        min={0}
        max={1000}
        step={50}
      />
      <div className="flex justify-between text-muted-foreground">
        <span>$0</span>
        <span>$1,000</span>
      </div>
    </div>
  );
}

function BrightnessControlExample() {
  const [brightness, setBrightness] = useState([70]);

  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sun className="h-4 w-4 text-muted-foreground" />
          <Label>Brightness</Label>
        </div>
        <span className="text-muted-foreground">
          {brightness[0]}%
        </span>
      </div>
      <Slider
        value={brightness}
        onValueChange={setBrightness}
        min={10}
        max={100}
        step={5}
      />
    </div>
  );
}

function PerformanceGaugeExample() {
  const [performance, setPerformance] = useState([65]);
  
  const getPerformanceLevel = (value: number) => {
    if (value < 30) return { label: "Low", color: "text-red-500" };
    if (value < 70) return { label: "Medium", color: "text-yellow-500" };
    return { label: "High", color: "text-green-500" };
  };
  
  const level = getPerformanceLevel(performance[0]);

  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Gauge className="h-4 w-4 text-muted-foreground" />
          <Label>Performance</Label>
        </div>
        <span className={`font-medium ${level.color}`}>
          {level.label} ({performance[0]}%)
        </span>
      </div>
      <Slider
        value={performance}
        onValueChange={setPerformance}
        max={100}
        step={1}
      />
    </div>
  );
}

function RangeSliderExample() {
  const [range, setRange] = useState([25, 75]);

  return (
    <div className="w-full max-w-md space-y-2">
      <div className="flex items-center justify-between">
        <Label>Age Range</Label>
        <span className="text-muted-foreground">
          {range[0]} - {range[1]} years
        </span>
      </div>
      <Slider
        value={range}
        onValueChange={setRange}
        min={18}
        max={100}
        step={1}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>18</span>
        <span>100</span>
      </div>
    </div>
  );
}