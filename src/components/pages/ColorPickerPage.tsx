import { ComponentShowcase } from "../ui/component-showcase";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { ColorPicker } from "../advanced/ColorPicker";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function ColorPickerPage() {
  return (
    <ComponentShowcase
      title="Color Picker"
      description="Advanced color selection component with presets and hex input."
      badges={[
        { text: "Advanced", variant: "secondary" }
      ]}
      previewComponent={
        <div className="w-full max-w-md">
          <ColorPicker />
        </div>
      }
      codeBlock={`import { ColorPicker } from "@/components/advanced/ColorPicker";
import { useState } from "react";

export function ColorPickerDemo() {
  const [color, setColor] = useState("#DEFB49");

  return (
    <div className="space-y-4">
      <ColorPicker 
        value={color} 
        onChange={setColor} 
      />
      
      <div className="p-4 rounded-lg border">
        <p className="text-sm text-muted-foreground">
          Color seleccionado: <strong>{color}</strong>
        </p>
      </div>
    </div>
  );
}`}
      examplesSection={
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Características</CardTitle>
              <CardDescription>
                Funcionalidades incluidas en el color picker
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Colores Predefinidos</h4>
                  <p className="text-sm text-muted-foreground">
                    Paleta de 12 colores del sistema incluyendo primarios y secundarios
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Native HTML5 Picker</h4>
                  <p className="text-sm text-muted-foreground">
                    Selector de color nativo del navegador para máxima compatibilidad
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Input Manual HEX</h4>
                  <p className="text-sm text-muted-foreground">
                    Campo de texto para ingresar códigos hexadecimales directamente
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Vista Previa en Tiempo Real</h4>
                  <p className="text-sm text-muted-foreground">
                    Preview instantáneo del color seleccionado con área grande
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Colores del Sistema</CardTitle>
              <CardDescription>
                Paleta predefinida corporativa
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-6 gap-3">
                {[
                  { color: "#DEFB49", name: "Primary" },
                  { color: "#1C2D3A", name: "Secondary" },
                  { color: "#ef4444", name: "Red" },
                  { color: "#f59e0b", name: "Orange" },
                  { color: "#10b981", name: "Green" },
                  { color: "#3b82f6", name: "Blue" },
                  { color: "#8b5cf6", name: "Purple" },
                  { color: "#ec4899", name: "Pink" },
                  { color: "#000000", name: "Black" },
                  { color: "#ffffff", name: "White" },
                  { color: "#6b7280", name: "Gray" },
                  { color: "#f3f4f6", name: "Light Gray" },
                ].map((preset) => (
                  <div key={preset.color} className="flex flex-col items-center gap-2">
                    <div
                      className="w-12 h-12 rounded-lg border-2 border-border shadow-sm"
                      style={{ backgroundColor: preset.color }}
                    />
                    <span className="text-xs text-muted-foreground">{preset.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      }
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Props API</CardTitle>
              <CardDescription>Propiedades disponibles para ColorPicker</CardDescription>
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
                      <td className="p-2">string</td>
                      <td className="p-2">"#DEFB49"</td>
                      <td className="p-2">Color inicial en formato HEX</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onChange</td>
                      <td className="p-2">(color: string) =&gt; void</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Callback cuando el color cambia</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones del Color Picker</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">🎨 Personalización de Temas</h4>
                  <p className="text-sm text-muted-foreground">
                    Permite a los usuarios personalizar colores de marca en dashboards
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📊 Configuración de Gráficos</h4>
                  <p className="text-sm text-muted-foreground">
                    Selección de colores para series de datos en charts
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">🏷️ Etiquetas y Categorías</h4>
                  <p className="text-sm text-muted-foreground">
                    Asignación de colores a tags, categorías o estados
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">✏️ Herramientas de Diseño</h4>
                  <p className="text-sm text-muted-foreground">
                    Editores de contenido, generadores de reportes, firmas personalizadas
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📝 Estado de Facturas</h4>
                  <p className="text-sm text-muted-foreground">
                    Codificación visual por colores para estados de documentos financieros
                  </p>
                </div>
                
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">👤 Identificación de Usuarios</h4>
                  <p className="text-sm text-muted-foreground">
                    Avatares y badges de color para diferenciar roles o equipos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
              <CardDescription>Recomendaciones de uso</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye colores corporativos en los presets para mantener consistencia de marca</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Valida el formato HEX (#RRGGBB) antes de aplicar el color seleccionado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra una preview grande del color seleccionado para verificación visual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Considera contraste de accesibilidad (WCAG AA mínimo) para texto sobre el color elegido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Proporciona feedback visual instantáneo cuando el color cambia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa el picker nativo del navegador para mayor compatibilidad y familiaridad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Permite input manual HEX para usuarios avanzados que conocen códigos exactos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Organiza presets por categoría (corporativos, neutrales, saturados) para navegación rápida</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}