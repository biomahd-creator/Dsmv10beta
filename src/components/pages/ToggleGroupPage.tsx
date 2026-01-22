import { ComponentShowcase } from "../ui/component-showcase";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";

export function ToggleGroupPage() {
  return (
    <ComponentShowcase
      title="Toggle Group"
      description="A set of two-state buttons that can be toggled on or off"
      category="Actions"
      
      preview={
        <ToggleGroup type="single" defaultValue="center">
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="justify" aria-label="Align justify">
            <AlignJustify className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      }
      
      code={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react"

export function ToggleGroupDemo() {
  return (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Align justify">
        <AlignJustify className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}`}
      
      usage="Importa ToggleGroup y ToggleGroupItem. Usa type='single' para permitir solo una selección, o type='multiple' para múltiples selecciones simultáneas. Ideal para toolbars y controles de formato."
      
      usageCode={`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

function MyComponent() {
  return (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  );
}`}
      
      props={[
        {
          name: "type",
          type: '"single" | "multiple"',
          description: "Define si solo un item puede estar seleccionado ('single') o múltiples ('multiple')",
        },
        {
          name: "value",
          type: "string | string[]",
          description: "Valor(es) controlado(s) del/los item(s) seleccionado(s)",
        },
        {
          name: "onValueChange",
          type: "(value: string | string[]) => void",
          description: "Callback cuando cambia la selección",
        },
        {
          name: "defaultValue",
          type: "string | string[]",
          description: "Valor(es) inicial(es) seleccionado(s) (no controlado)",
        },
        {
          name: "disabled",
          type: "boolean",
          description: "Deshabilita todo el grupo",
        },
        {
          name: "variant",
          type: '"default" | "outline"',
          default: '"default"',
          description: "Estilo visual del grupo",
        },
      ]}
      
      examples={[
        {
          title: "Multiple Select",
          description: "Multiple items can be selected simultaneously",
          preview: (
            <ToggleGroup type="multiple">
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          ),
          code: `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Bold, Italic, Underline } from "lucide-react"

<ToggleGroup type="multiple">
  <ToggleGroupItem value="bold" aria-label="Toggle bold">
    <Bold className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="italic" aria-label="Toggle italic">
    <Italic className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="underline" aria-label="Toggle underline">
    <Underline className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`
        },
        {
          title: "Variants",
          description: "Different visual styles for the toggle group",
          preview: (
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-medium text-sm">Default</h4>
                <ToggleGroup type="single" variant="default">
                  <ToggleGroupItem value="left">Left</ToggleGroupItem>
                  <ToggleGroupItem value="center">Center</ToggleGroupItem>
                  <ToggleGroupItem value="right">Right</ToggleGroupItem>
                </ToggleGroup>
              </div>
              
              <Separator />

              <div className="space-y-3">
                <h4 className="font-medium text-sm">Outline</h4>
                <ToggleGroup type="single" variant="outline">
                  <ToggleGroupItem value="left">Left</ToggleGroupItem>
                  <ToggleGroupItem value="center">Center</ToggleGroupItem>
                  <ToggleGroupItem value="right">Right</ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          ),
          code: `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

{/* Default variant */}
<ToggleGroup type="single" variant="default">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>

{/* Outline variant */}
<ToggleGroup type="single" variant="outline">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center">Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`
        },
        {
          title: "Disabled",
          description: "Non-interactive toggle group state",
          preview: (
            <ToggleGroup type="single" disabled>
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          ),
          code: `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react"

<ToggleGroup type="single" disabled>
  <ToggleGroupItem value="left" aria-label="Align left">
    <AlignLeft className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="center" aria-label="Align center">
    <AlignCenter className="h-4 w-4" />
  </ToggleGroupItem>
  <ToggleGroupItem value="right" aria-label="Align right">
    <AlignRight className="h-4 w-4" />
  </ToggleGroupItem>
</ToggleGroup>`
        },
        {
          title: "Text Editor Toolbar",
          description: "Complete text editor toolbar with alignment and formatting",
          preview: (
            <div className="flex gap-2">
              <ToggleGroup type="single" defaultValue="left">
                <ToggleGroupItem value="left">
                  <AlignLeft className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="center">
                  <AlignCenter className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="right">
                  <AlignRight className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
              
              <Separator orientation="vertical" className="h-9" />
              
              <ToggleGroup type="multiple">
                <ToggleGroupItem value="bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          ),
          code: `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Separator } from "@/components/ui/separator"
import { AlignLeft, AlignCenter, AlignRight, Bold, Italic, Underline } from "lucide-react"

<div className="flex gap-2">
  <ToggleGroup type="single" defaultValue="left">
    <ToggleGroupItem value="left">
      <AlignLeft className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="center">
      <AlignCenter className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="right">
      <AlignRight className="h-4 w-4" />
    </ToggleGroupItem>
  </ToggleGroup>
  
  <Separator orientation="vertical" className="h-9" />
  
  <ToggleGroup type="multiple">
    <ToggleGroupItem value="bold">
      <Bold className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic">
      <Italic className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline">
      <Underline className="h-4 w-4" />
    </ToggleGroupItem>
  </ToggleGroup>
</div>`
        },
        {
          title: "View Switcher",
          description: "Switch between different view modes",
          preview: (
            <ToggleGroup type="single" defaultValue="list" variant="outline">
              <ToggleGroupItem value="list">List</ToggleGroupItem>
              <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
              <ToggleGroupItem value="table">Table</ToggleGroupItem>
            </ToggleGroup>
          ),
          code: `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

<ToggleGroup type="single" defaultValue="list" variant="outline">
  <ToggleGroupItem value="list">List</ToggleGroupItem>
  <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
  <ToggleGroupItem value="table">Table</ToggleGroupItem>
</ToggleGroup>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente ToggleGroup</CardDescription>
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
                      <td className="p-2 font-mono">type</td>
                      <td className="p-2">"single" | "multiple"</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Define si solo un item puede estar seleccionado ('single') o múltiples ('multiple')</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">value</td>
                      <td className="p-2">string | string[]</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Valor(es) controlado(s) del/los item(s) seleccionado(s)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onValueChange</td>
                      <td className="p-2">(value: string | string[]) =&gt; void</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Callback que se ejecuta cuando cambia la selección</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">defaultValue</td>
                      <td className="p-2">string | string[]</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Valor(es) inicial(es) seleccionado(s) en modo no controlado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">disabled</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Deshabilita la interacción con todo el grupo</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">variant</td>
                      <td className="p-2">"default" | "outline"</td>
                      <td className="p-2">"default"</td>
                      <td className="p-2">Estilo visual del grupo de toggles</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">size</td>
                      <td className="p-2">"default" | "sm" | "lg"</td>
                      <td className="p-2">"default"</td>
                      <td className="p-2">Tamaño de los items del grupo</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">rovingFocus</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">true</td>
                      <td className="p-2">Permite navegación con teclado (flechas) entre los items</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">className</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Clases CSS adicionales para el grupo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente ToggleGroup</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">✏️ Editores de Texto</h4>
                  <p className="text-sm text-muted-foreground">
                    Alineación de texto, formato de párrafos, estilos de fuente
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">👁️ Cambio de Vista</h4>
                  <p className="text-sm text-muted-foreground">
                    Alternar entre list/grid/table, modo compacto/expandido
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🔍 Filtros de Búsqueda</h4>
                  <p className="text-sm text-muted-foreground">
                    Activar categorías, rangos de fecha, tipos de contenido
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📊 Dashboards</h4>
                  <p className="text-sm text-muted-foreground">
                    Seleccionar período (día/semana/mes), tipo de gráfico
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🎨 Herramientas de Diseño</h4>
                  <p className="text-sm text-muted-foreground">
                    Seleccionar herramienta activa, modo de dibujo, capas
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">⚙️ Configuraciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Opciones de visualización, preferencias de ordenamiento
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
                  <span>Usa type="single" cuando solo una opción debe estar activa (ej: alineación de texto)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa type="multiple" cuando varias opciones pueden coexistir (ej: negrita + cursiva)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrupa lógicamente las opciones relacionadas - máximo 5-7 items por grupo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa Separator con orientation="vertical" para separar grupos distintos en toolbars</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye aria-label en items que solo tienen iconos para accesibilidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa variant="outline" para grupos secundarios o menos prominentes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>El estado activo debe ser visualmente claro - el estilo por defecto ya lo maneja</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Prefiere ToggleGroup sobre múltiples Toggle individuales para opciones relacionadas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}