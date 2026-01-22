import { ComponentShowcase } from "../ui/component-showcase";
import { Rating } from "../advanced/RatingComponent";
import { Separator } from "../ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function RatingPage() {
  return (
    <ComponentShowcase
      title="Rating"
      description="Interactive star rating component with different sizes and states"
      category="Advanced"
      
      preview={
        <Rating value={4} />
      }
      
      code={`import { Rating } from "@/components/advanced/RatingComponent"

export function RatingDemo() {
  return <Rating value={4} />
}`}
      
      usage="Importa Rating desde @/components/advanced/RatingComponent. El componente permite calificaciones interactivas con estrellas, ideal para feedback de usuarios, evaluaciones de calidad o niveles de riesgo."
      
      usageCode={`import { Rating } from "@/components/advanced/RatingComponent"
import { useState } from "react"

function MyComponent() {
  const [rating, setRating] = useState(0);
  
  return (
    <Rating 
      value={rating} 
      onChange={setRating}
    />
  );
}`}
      
      props={[
        {
          name: "value",
          type: "number",
          description: "Valor actual del rating (0-5)",
        },
        {
          name: "onChange",
          type: "(value: number) => void",
          description: "Callback cuando cambia el rating",
        },
        {
          name: "size",
          type: '"sm" | "md" | "lg"',
          default: '"md"',
          description: "Tamaño de las estrellas",
        },
        {
          name: "readonly",
          type: "boolean",
          default: "false",
          description: "Si true, el rating no es editable",
        },
      ]}
      
      examples={[
        {
          title: "Available Sizes",
          description: "Rating component in different sizes",
          preview: (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm w-24">Small:</span>
                <Rating size="sm" value={4} />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-24">Medium:</span>
                <Rating size="md" value={3} />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-24">Large:</span>
                <Rating size="lg" value={5} />
              </div>
            </div>
          ),
          code: `import { Rating } from "@/components/advanced/RatingComponent"

<div className="space-y-4">
  <div className="flex items-center gap-4">
    <span className="text-sm w-24">Small:</span>
    <Rating size="sm" value={4} />
  </div>
  <div className="flex items-center gap-4">
    <span className="text-sm w-24">Medium:</span>
    <Rating size="md" value={3} />
  </div>
  <div className="flex items-center gap-4">
    <span className="text-sm w-24">Large:</span>
    <Rating size="lg" value={5} />
  </div>
</div>`
        },
        {
          title: "States",
          description: "Interactive and read-only states",
          preview: (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm w-24">Interactive:</span>
                <Rating value={0} />
                <span className="text-xs text-muted-foreground">
                  (Hover and click to select)
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm w-24">Read only:</span>
                <Rating value={4} readonly />
                <span className="text-xs text-muted-foreground">
                  (Not editable)
                </span>
              </div>
            </div>
          ),
          code: `import { Rating } from "@/components/advanced/RatingComponent"

<div className="space-y-4">
  <div className="flex items-center gap-4">
    <span className="text-sm w-24">Interactive:</span>
    <Rating value={0} />
  </div>
  <div className="flex items-center gap-4">
    <span className="text-sm w-24">Read only:</span>
    <Rating value={4} readonly />
  </div>
</div>`
        },
        {
          title: "Use Cases",
          description: "Real-world applications for rating component",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    Service Quality
                  </span>
                  <Rating value={5} readonly size="sm" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Customer rating for the process
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">
                    Risk Level
                  </span>
                  <Rating value={2} readonly size="sm" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Credit risk evaluation
                </p>
              </div>
            </div>
          ),
          code: `import { Rating } from "@/components/advanced/RatingComponent"

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="p-4 border rounded-lg">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium">Service Quality</span>
      <Rating value={5} readonly size="sm" />
    </div>
    <p className="text-xs text-muted-foreground">
      Customer rating for the process
    </p>
  </div>
  <div className="p-4 border rounded-lg">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm font-medium">Risk Level</span>
      <Rating value={2} readonly size="sm" />
    </div>
    <p className="text-xs text-muted-foreground">
      Credit risk evaluation
    </p>
  </div>
</div>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Rating</CardDescription>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2 text-foreground">Prop</th>
                    <th className="text-left p-2 text-foreground">Tipo</th>
                    <th className="text-left p-2 text-foreground">Default</th>
                    <th className="text-left p-2 text-foreground">Descripción</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">value</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Valor actual del rating (0-5)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onChange</code></td>
                    <td className="p-2">(value: number) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback cuando cambia el rating</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">size</code></td>
                    <td className="p-2">"sm" | "md" | "lg"</td>
                    <td className="p-2">"md"</td>
                    <td className="p-2">Tamaño de las estrellas</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">readonly</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Si true, el rating no es editable (solo visualización)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">max</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">5</td>
                    <td className="p-2">Número máximo de estrellas a mostrar</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">className</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Clases CSS adicionales</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Rating</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">⭐ Reseñas de Productos</h4>
                  <p className="text-sm text-muted-foreground">
                    Calificar productos, servicios o experiencias de compra
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Evaluación de Calidad</h4>
                  <p className="text-sm text-muted-foreground">
                    Medir calidad de servicio en procesos de factoring
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎯 Nivel de Riesgo</h4>
                  <p className="text-sm text-muted-foreground">
                    Indicador visual de nivel de riesgo crediticio o operacional
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💡 Satisfacción de Cliente</h4>
                  <p className="text-sm text-muted-foreground">
                    Encuestas de satisfacción y feedback post-servicio
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🏆 Niveles de Competencia</h4>
                  <p className="text-sm text-muted-foreground">
                    Indicar nivel de habilidad o experiencia en perfiles
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📈 Prioridad de Tareas</h4>
                  <p className="text-sm text-muted-foreground">
                    Asignar prioridad visual a tareas, tickets o reportes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de Rating</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">readonly=&#123;true&#125;</code> para mostrar ratings existentes sin permitir edición</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye label contextual cerca del rating para claridad ("Calidad de servicio:", "Nivel de riesgo:")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">size="sm"</code> en tarjetas compactas o listas densas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Combina con texto numérico (ej: "4.5/5") para mayor claridad en ratings readonly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Provee feedback inmediato al hover/click en modo interactivo para UX clara</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para escalas de riesgo, considera invertir colores (1 estrella = alto riesgo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa estado controlado con <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">value</code> y <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">onChange</code> para integrar con formularios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrega tooltip con descripción textual del rating para accesibilidad mejorada</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}