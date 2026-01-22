import { ComponentShowcase } from "../ui/component-showcase";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function SheetPage() {
  return (
    <ComponentShowcase
      title="Sheet"
      description="Extends the Dialog component to display content that slides in from the edge of the screen"
      category="Feedback"
      
      preview={
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open from Right</Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Right Sheet</SheetTitle>
              <SheetDescription>
                This is the default side for sheets.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      }
      
      code={`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            Sheet description goes here.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}`}
      
      usage="Importa Sheet, SheetTrigger y SheetContent desde @/components/ui/sheet. Define el trigger con asChild para evitar wrappers innecesarios, y usa SheetHeader, SheetTitle y SheetDescription para estructurar el contenido."
      
      usageCode={`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

function MyComponent() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Title</SheetTitle>
          <SheetDescription>Description</SheetDescription>
        </SheetHeader>
        <div className="py-4">
          {/* Your content here */}
        </div>
      </SheetContent>
    </Sheet>
  );
}`}
      
      props={[
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          default: '"right"',
          description: "El lado desde donde aparecerá el sheet",
        },
        {
          name: "open",
          type: "boolean",
          description: "Estado controlado del sheet (abierto/cerrado)",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          description: "Callback cuando cambia el estado del sheet",
        },
      ]}
      
      examples={[
        {
          title: "Sheet Sides",
          description: "Sheets can slide from different sides of the screen",
          preview: (
            <div className="flex flex-wrap gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open from Top</Button>
                </SheetTrigger>
                <SheetContent side="top">
                  <SheetHeader>
                    <SheetTitle>Top Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the top of the screen.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open from Right</Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Right Sheet</SheetTitle>
                    <SheetDescription>
                      This is the default side for sheets.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open from Bottom</Button>
                </SheetTrigger>
                <SheetContent side="bottom">
                  <SheetHeader>
                    <SheetTitle>Bottom Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the bottom.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">Open from Left</Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <SheetHeader>
                    <SheetTitle>Left Sheet</SheetTitle>
                    <SheetDescription>
                      This sheet slides in from the left.
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          ),
          code: `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

<div className="flex flex-wrap gap-4">
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open from Top</Button>
    </SheetTrigger>
    <SheetContent side="top">
      <SheetHeader>
        <SheetTitle>Top Sheet</SheetTitle>
        <SheetDescription>
          This sheet slides in from the top of the screen.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>

  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open from Right</Button>
    </SheetTrigger>
    <SheetContent side="right">
      <SheetHeader>
        <SheetTitle>Right Sheet</SheetTitle>
        <SheetDescription>
          This is the default side for sheets.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>

  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open from Bottom</Button>
    </SheetTrigger>
    <SheetContent side="bottom">
      <SheetHeader>
        <SheetTitle>Bottom Sheet</SheetTitle>
        <SheetDescription>
          This sheet slides in from the bottom.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>

  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open from Left</Button>
    </SheetTrigger>
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle>Left Sheet</SheetTitle>
        <SheetDescription>
          This sheet slides in from the left.
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
</div>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Sheet</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">side</code></td>
                    <td className="p-2">"top" | "right" | "bottom" | "left"</td>
                    <td className="p-2">"right"</td>
                    <td className="p-2">Lado desde donde aparece el sheet</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">open</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Estado controlado del sheet (abierto/cerrado)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onOpenChange</code></td>
                    <td className="p-2">(open: boolean) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback cuando cambia el estado del sheet</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">modal</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">true</td>
                    <td className="p-2">Si debe bloquear interacción con contenido debajo</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Sheet</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📱 Mobile Navigation</h4>
                  <p className="text-sm text-muted-foreground">
                    Menú de navegación principal en móviles que desliza desde el lateral
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🛒 Shopping Cart</h4>
                  <p className="text-sm text-muted-foreground">
                    Carrito de compras que aparece desde el lateral mostrando productos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📋 Detail Panels</h4>
                  <p className="text-sm text-muted-foreground">
                    Paneles de detalles de items seleccionados sin abandonar la vista principal
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔔 Notifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Panel de notificaciones que desliza desde arriba o lateral derecho
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔍 Filters Sidebar</h4>
                  <p className="text-sm text-muted-foreground">
                    Panel de filtros avanzados en e-commerce o búsquedas complejas
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📝 Quick Forms</h4>
                  <p className="text-sm text-muted-foreground">
                    Formularios rápidos de creación sin modal centrado completo
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del Sheet</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa Sheet en lugar de Dialog para contenido secundario o navegación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Elige <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">side="right"</code> para detalles/forms, <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">side="left"</code> para navegación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">side="bottom"</code> en móviles para mejor alcance del pulgar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye SheetHeader con SheetTitle para accesibilidad y contexto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Limita el ancho del sheet para no cubrir toda la pantalla (max-w-md o max-w-lg)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Proporciona botón de cierre visible (X) en la esquina superior</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa Sheet controlado con useState para manejar apertura/cierre programáticamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implementa animaciones suaves de entrada/salida para mejor UX</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}