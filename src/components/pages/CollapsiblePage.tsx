import { ComponentShowcase } from "../ui/component-showcase";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Button } from "../ui/button";
import { ChevronsUpDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function CollapsiblePage() {
  return (
    <ComponentShowcase
      title="Collapsible"
      description="An interactive component which expands/collapses a panel"
      category="Layout"
      
      preview={
        <Collapsible className="w-full">
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              Can I use this in my project?
              <ChevronsUpDown className="h-4 w-4" />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4 space-y-2">
            <div className="rounded-md border px-4 py-3 text-sm">
              Yes. Free to use for personal and commercial projects. No attribution required.
            </div>
          </CollapsibleContent>
        </Collapsible>
      }
      
      code={`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronsUpDown } from "lucide-react"

export function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          Can I use this in my project?
          <ChevronsUpDown className="h-4 w-4" />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4">
        <div className="rounded-md border px-4 py-3 text-sm">
          Yes. Free to use for personal and commercial projects.
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}`}
      
      usage="Importa Collapsible, CollapsibleTrigger y CollapsibleContent. Envuelve el trigger con CollapsibleTrigger usando asChild para evitar wrappers innecesarios. El contenido dentro de CollapsibleContent se mostrará/ocultará al hacer clic."
      
      usageCode={`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

function MyComponent() {
  return (
    <Collapsible>
      <CollapsibleTrigger asChild>
        <Button>Toggle Content</Button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="mt-2">
          {/* Your collapsible content here */}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`}
      
      props={[
        {
          name: "open",
          type: "boolean",
          description: "Estado controlado del collapsible (abierto/cerrado)",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          description: "Callback cuando cambia el estado del collapsible",
        },
        {
          name: "defaultOpen",
          type: "boolean",
          description: "Estado inicial del collapsible (no controlado)",
        },
        {
          name: "disabled",
          type: "boolean",
          description: "Deshabilita la interacción con el collapsible",
        },
      ]}
      
      examples={[
        {
          title: "Multiple Items",
          description: "Several independent collapsible sections",
          preview: (
            <div className="space-y-4 w-full">
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="w-full justify-between">
                    @peduarte starred 3 repositories
                    <ChevronsUpDown className="h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-2 mt-2">
                  <div className="rounded-md border px-4 py-3 text-sm">@radix-ui/primitives</div>
                  <div className="rounded-md border px-4 py-3 text-sm">@radix-ui/colors</div>
                  <div className="rounded-md border px-4 py-3 text-sm">@stitches/react</div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ),
          code: `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { ChevronsUpDown } from "lucide-react"

<Collapsible>
  <CollapsibleTrigger asChild>
    <Button variant="ghost" className="w-full justify-between">
      @peduarte starred 3 repositories
      <ChevronsUpDown className="h-4 w-4" />
    </Button>
  </CollapsibleTrigger>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-3 text-sm">
      @radix-ui/primitives
    </div>
    <div className="rounded-md border px-4 py-3 text-sm">
      @radix-ui/colors
    </div>
    <div className="rounded-md border px-4 py-3 text-sm">
      @stitches/react
    </div>
  </CollapsibleContent>
</Collapsible>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Collapsible</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">open</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Estado controlado del collapsible (abierto/cerrado)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onOpenChange</code></td>
                    <td className="p-2">(open: boolean) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback ejecutado cuando cambia el estado del collapsible</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">defaultOpen</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Estado inicial del collapsible (no controlado)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">disabled</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Deshabilita la interacción con el collapsible</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">asChild</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Permite usar componente hijo personalizado (en CollapsibleTrigger)</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Collapsible</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">❓ FAQs</h4>
                  <p className="text-sm text-muted-foreground">
                    Organizar preguntas frecuentes de manera expandible para reducir el scroll inicial
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📋 Detalles Adicionales</h4>
                  <p className="text-sm text-muted-foreground">
                    Ocultar información secundaria que se muestra solo cuando el usuario la necesita
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔧 Configuraciones Avanzadas</h4>
                  <p className="text-sm text-muted-foreground">
                    Agrupar opciones avanzadas bajo secciones colapsables para simplificar la UI
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Filtros de Búsqueda</h4>
                  <p className="text-sm text-muted-foreground">
                    Permitir mostrar/ocultar grupos de filtros en páginas de búsqueda o catálogos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📝 Formularios Largos</h4>
                  <p className="text-sm text-muted-foreground">
                    Dividir formularios extensos en secciones colapsables por categoría
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📦 Detalles de Productos</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar especificaciones técnicas, shipping info o reviews de forma colapsable
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del Collapsible</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">asChild</code> en CollapsibleTrigger para evitar wrappers HTML innecesarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye iconos indicadores (ChevronsUpDown, ChevronDown) para mostrar el estado expandible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">defaultOpen=&#123;true&#125;</code> para secciones importantes que deben estar abiertas por defecto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrega márgenes adecuados (mt-2, mt-4) al CollapsibleContent para espaciado visual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para FAQs, considera agrupar varios Collapsible independientes en lugar de usar Accordion</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa estado controlado (open/onOpenChange) cuando necesites sincronizar con lógica externa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén el contenido colapsable relevante y breve para no abrumar al expandirse</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Asegúrate que el trigger sea claramente clickeable con estilos de hover y focus visibles</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}