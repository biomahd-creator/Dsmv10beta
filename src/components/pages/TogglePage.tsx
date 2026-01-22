import { ComponentShowcase } from "../ui/component-showcase";
import { Toggle } from "../ui/toggle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Bold, Italic, Underline } from "lucide-react";

export function TogglePage() {
  return (
    <ComponentShowcase
      title="Toggle"
      description="A two-state button that can be either on or off"
      category="Actions"
      
      preview={
        <Toggle aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
      }
      
      code={`import { Toggle } from "@/components/ui/toggle"
import { Italic } from "lucide-react"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  )
}`}
      
      usage="Importa Toggle desde @/components/ui/toggle. El Toggle es un botón de dos estados (on/off) ideal para controles como formato de texto, filtros, o preferencias."
      
      usageCode={`import { Toggle } from "@/components/ui/toggle"
import { Bold } from "lucide-react"

function MyComponent() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="h-4 w-4" />
    </Toggle>
  );
}`}
      
      props={[
        {
          name: "pressed",
          type: "boolean",
          description: "Estado controlado del toggle (presionado/no presionado)",
        },
        {
          name: "onPressedChange",
          type: "(pressed: boolean) => void",
          description: "Callback cuando cambia el estado del toggle",
        },
        {
          name: "defaultPressed",
          type: "boolean",
          description: "Estado inicial del toggle (no controlado)",
        },
        {
          name: "disabled",
          type: "boolean",
          description: "Deshabilita la interacción con el toggle",
        },
        {
          name: "variant",
          type: '"default" | "outline"',
          default: '"default"',
          description: "Estilo visual del toggle",
        },
        {
          name: "size",
          type: '"default" | "sm" | "lg"',
          default: '"default"',
          description: "Tamaño del toggle",
        },
      ]}
      
      examples={[
        {
          title: "Text Formatting",
          description: "Common use case for text editor toolbars",
          preview: (
            <div className="flex gap-2">
              <Toggle aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          ),
          code: `import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic, Underline } from "lucide-react"

<div className="flex gap-2">
  <Toggle aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </Toggle>
</div>`
        },
        {
          title: "Variants",
          description: "Different visual styles for the toggle",
          preview: (
            <div className="flex gap-2">
              <Toggle variant="default">Default</Toggle>
              <Toggle variant="outline">Outline</Toggle>
            </div>
          ),
          code: `import { Toggle } from "@/components/ui/toggle"

<div className="flex gap-2">
  <Toggle variant="default">Default</Toggle>
  <Toggle variant="outline">Outline</Toggle>
</div>`
        },
        {
          title: "With Text and Icon",
          description: "Toggle buttons with both text labels and icons",
          preview: (
            <div className="flex gap-2">
              <Toggle aria-label="Toggle italic">
                <Italic className="mr-2 h-4 w-4" />
                Italic
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle bold">
                <Bold className="mr-2 h-4 w-4" />
                Bold
              </Toggle>
            </div>
          ),
          code: `import { Toggle } from "@/components/ui/toggle"
import { Italic, Bold } from "lucide-react"

<div className="flex gap-2">
  <Toggle aria-label="Toggle italic">
    <Italic className="mr-2 h-4 w-4" />
    Italic
  </Toggle>
  <Toggle variant="outline" aria-label="Toggle bold">
    <Bold className="mr-2 h-4 w-4" />
    Bold
  </Toggle>
</div>`
        },
        {
          title: "Sizes",
          description: "Toggles available in different sizes",
          preview: (
            <div className="flex items-center gap-2">
              <Toggle size="sm" aria-label="Toggle small">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle size="default" aria-label="Toggle default">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle size="lg" aria-label="Toggle large">
                <Italic className="h-6 w-6" />
              </Toggle>
            </div>
          ),
          code: `import { Toggle } from "@/components/ui/toggle"
import { Italic } from "lucide-react"

<div className="flex items-center gap-2">
  <Toggle size="sm" aria-label="Toggle small">
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle size="default" aria-label="Toggle default">
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle size="lg" aria-label="Toggle large">
    <Italic className="h-6 w-6" />
  </Toggle>
</div>`
        },
        {
          title: "Disabled",
          description: "Non-interactive toggle states",
          preview: (
            <div className="flex gap-2">
              <Toggle disabled>
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle disabled defaultPressed>
                <Italic className="h-4 w-4" />
              </Toggle>
            </div>
          ),
          code: `import { Toggle } from "@/components/ui/toggle"
import { Bold, Italic } from "lucide-react"

<div className="flex gap-2">
  <Toggle disabled>
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle disabled defaultPressed>
    <Italic className="h-4 w-4" />
  </Toggle>
</div>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Toggle</CardDescription>
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
                      <td className="p-2 font-mono">pressed</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Estado controlado del toggle (true = presionado, false = no presionado)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onPressedChange</td>
                      <td className="p-2">(pressed: boolean) =&gt; void</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Callback que se ejecuta cuando cambia el estado del toggle</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">defaultPressed</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Estado inicial en modo no controlado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">disabled</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Deshabilita la interacción con el toggle</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">variant</td>
                      <td className="p-2">"default" | "outline"</td>
                      <td className="p-2">"default"</td>
                      <td className="p-2">Estilo visual del toggle</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">size</td>
                      <td className="p-2">"default" | "sm" | "lg"</td>
                      <td className="p-2">"default"</td>
                      <td className="p-2">Tamaño del botón toggle</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">asChild</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Renderiza como hijo del toggle (Slot pattern de Radix)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">className</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Clases CSS adicionales para personalización</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Toggle</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">✏️ Editores de Texto</h4>
                  <p className="text-sm text-muted-foreground">
                    Formato de texto: negrita, cursiva, subrayado, alineación
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🔍 Filtros y Búsqueda</h4>
                  <p className="text-sm text-muted-foreground">
                    Activar/desactivar filtros en búsquedas, tablas o dashboards
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🎨 Herramientas de Diseño</h4>
                  <p className="text-sm text-muted-foreground">
                    Activar herramientas: pincel, selector, borrador, regla
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">👁️ Vistas y Modos</h4>
                  <p className="text-sm text-muted-foreground">
                    Cambiar entre vista grid/list, modo lectura/edición
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">⭐ Favoritos y Likes</h4>
                  <p className="text-sm text-muted-foreground">
                    Marcar como favorito, me gusta, bookmark, destacado
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🎛️ Toolbars</h4>
                  <p className="text-sm text-muted-foreground">
                    Barras de herramientas con múltiples opciones seleccionables
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
                  <span>Siempre incluye aria-label cuando el toggle solo contiene un icono sin texto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa variant="outline" para toggles secundarios o menos prominentes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrupa toggles relacionados visualmente (con gap-2 o gap-1 en flex)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>El estado presionado debe ser visualmente claro - usa el estilo por defecto que destaca el estado activo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para toolbars de texto, usa iconos estándar (Bold, Italic, Underline de lucide-react)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Considera usar ToggleGroup en lugar de múltiples Toggle cuando solo una opción puede estar activa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>El efecto del toggle debe ser inmediato y visible en la UI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>No uses toggle para acciones que requieren confirmación - usa Button o Dialog en su lugar</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}