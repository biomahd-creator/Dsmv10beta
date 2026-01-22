import { ComponentShowcase } from "../ui/component-showcase";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "../ui/resizable";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function ResizablePage() {
  return (
    <ComponentShowcase
      title="Resizable"
      description="Paneles redimensionables con handles arrastrables"
      category="Layout"
      
      preview={
        <ResizablePanelGroup direction="horizontal" className="min-h-[200px] rounded-lg border">
          <ResizablePanel defaultSize={25} minSize={15}>
            <div className="flex h-full items-center justify-center p-6">
              <div className="text-center space-y-2">
                <p className="font-semibold">Sidebar</p>
                <p className="text-sm text-muted-foreground">Panel izquierdo</p>
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <div className="text-center space-y-2">
                <p className="font-semibold">Contenido Principal</p>
                <p className="text-sm text-muted-foreground">Panel derecho</p>
              </div>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      }
      
      code={`import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"

export function ResizableDemo() {
  return (
    <ResizablePanelGroup 
      direction="horizontal" 
      className="min-h-[200px] rounded-lg border"
    >
      <ResizablePanel defaultSize={25} minSize={15}>
        <div className="flex h-full items-center justify-center p-6">
          <span>Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span>Contenido Principal</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}`}
      
      usage="Importa ResizablePanelGroup, ResizablePanel y ResizableHandle. Usa ResizablePanelGroup como contenedor con direction='horizontal' o 'vertical'. Separa los paneles con ResizableHandle y configura tamaños mínimos/máximos con minSize y maxSize."
      
      usageCode={`import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"

function MyComponent() {
  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-[400px]">
      <ResizablePanel defaultSize={30} minSize={20}>
        {/* Panel 1 content */}
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={70}>
        {/* Panel 2 content */}
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`}
      
      props={[
        {
          name: "direction",
          type: '"horizontal" | "vertical"',
          description: "Dirección del layout de paneles (en ResizablePanelGroup)",
        },
        {
          name: "defaultSize",
          type: "number",
          description: "Tamaño inicial del panel en porcentaje (en ResizablePanel)",
        },
        {
          name: "minSize",
          type: "number",
          description: "Tamaño mínimo permitido en porcentaje (en ResizablePanel)",
        },
        {
          name: "maxSize",
          type: "number",
          description: "Tamaño máximo permitido en porcentaje (en ResizablePanel)",
        },
        {
          name: "withHandle",
          type: "boolean",
          description: "Muestra un handle visual arrastrable (en ResizableHandle)",
        },
      ]}
      
      examples={[
        {
          title: "Layout Vertical",
          description: "Paneles apilados verticalmente con handles arrastrables",
          preview: (
            <ResizablePanelGroup direction="vertical" className="min-h-[400px] rounded-lg border">
              <ResizablePanel defaultSize={20} minSize={10}>
                <div className="flex h-full items-center justify-center p-6">
                  <div className="text-center space-y-2">
                    <p className="font-semibold">Header</p>
                    <p className="text-sm text-muted-foreground">Panel superior</p>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={60}>
                <div className="flex h-full items-center justify-center p-6">
                  <div className="text-center space-y-2">
                    <p className="font-semibold">Contenido Principal</p>
                    <p className="text-sm text-muted-foreground">Panel central</p>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={20} minSize={10}>
                <div className="flex h-full items-center justify-center p-6">
                  <div className="text-center space-y-2">
                    <p className="font-semibold">Footer</p>
                    <p className="text-sm text-muted-foreground">Panel inferior</p>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          ),
          code: `import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"

<ResizablePanelGroup direction="vertical" className="min-h-[400px] rounded-lg border">
  <ResizablePanel defaultSize={20} minSize={10}>
    <div className="flex h-full items-center justify-center p-6">
      <span>Header</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={60}>
    <div className="flex h-full items-center justify-center p-6">
      <span>Contenido Principal</span>
    </div>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={20} minSize={10}>
    <div className="flex h-full items-center justify-center p-6">
      <span>Footer</span>
    </div>
  </ResizablePanel>
</ResizablePanelGroup>`
        },
        {
          title: "Layout Complejo",
          description: "Combinación de layouts horizontal y vertical anidados",
          preview: (
            <ResizablePanelGroup direction="horizontal" className="min-h-[400px] rounded-lg border">
              <ResizablePanel defaultSize={20} minSize={15}>
                <div className="flex h-full items-center justify-center p-6 bg-muted/30">
                  <div className="text-center space-y-2">
                    <p className="font-semibold">Sidebar</p>
                    <p className="text-sm text-muted-foreground">Navegación</p>
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={55}>
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel defaultSize={15} minSize={10}>
                    <div className="flex h-full items-center justify-center p-6 bg-card">
                      <div className="text-center space-y-2">
                        <p className="font-semibold">Header</p>
                        <p className="text-sm text-muted-foreground">Barra superior</p>
                      </div>
                    </div>
                  </ResizablePanel>
                  <ResizableHandle withHandle />
                  <ResizablePanel defaultSize={85}>
                    <div className="flex h-full items-center justify-center p-6">
                      <div className="text-center space-y-2">
                        <p className="font-semibold">Contenido Principal</p>
                        <p className="text-sm text-muted-foreground">Área de trabajo</p>
                      </div>
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={25} minSize={15}>
                <div className="flex h-full items-center justify-center p-6 bg-muted/30">
                  <div className="text-center space-y-2">
                    <p className="font-semibold">Panel Derecho</p>
                    <p className="text-sm text-muted-foreground">Propiedades</p>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          ),
          code: `import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"

<ResizablePanelGroup direction="horizontal" className="min-h-[400px]">
  <ResizablePanel defaultSize={20} minSize={15}>
    {/* Sidebar */}
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={55}>
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={15} minSize={10}>
        {/* Header */}
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={85}>
        {/* Main Content */}
      </ResizablePanel>
    </ResizablePanelGroup>
  </ResizablePanel>
  <ResizableHandle withHandle />
  <ResizablePanel defaultSize={25} minSize={15}>
    {/* Right Panel */}
  </ResizablePanel>
</ResizablePanelGroup>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Resizable</CardDescription>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2 text-foreground">Componente / Prop</th>
                    <th className="text-left p-2 text-foreground">Tipo</th>
                    <th className="text-left p-2 text-foreground">Default</th>
                    <th className="text-left p-2 text-foreground">Descripción</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr className="border-b border-border bg-muted/30">
                    <td className="p-2 font-semibold" colSpan={4}>ResizablePanelGroup</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">direction</code></td>
                    <td className="p-2">"horizontal" | "vertical"</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Dirección del layout de paneles</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">className</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Clases CSS adicionales</td>
                  </tr>
                  <tr className="border-b border-border bg-muted/30">
                    <td className="p-2 font-semibold" colSpan={4}>ResizablePanel</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">defaultSize</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Tamaño inicial del panel (porcentaje)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">minSize</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">10</td>
                    <td className="p-2">Tamaño mínimo permitido</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">maxSize</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">100</td>
                    <td className="p-2">Tamaño máximo permitido</td>
                  </tr>
                  <tr className="border-b border-border bg-muted/30">
                    <td className="p-2 font-semibold" colSpan={4}>ResizableHandle</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">withHandle</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Muestra handle visual arrastrable</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Resizable</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💻 Code Editors / IDEs</h4>
                  <p className="text-sm text-muted-foreground">
                    Navegador de archivos + Editor + Panel de propiedades redimensionables
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📧 Email Clients</h4>
                  <p className="text-sm text-muted-foreground">
                    Lista de emails + Vista previa + Panel de detalles ajustables
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Dashboards Complejos</h4>
                  <p className="text-sm text-muted-foreground">
                    Sidebar + Gráficas + Widgets personalizables por el usuario
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎨 Herramientas de Diseño</h4>
                  <p className="text-sm text-muted-foreground">
                    Canvas central + Panel de capas + Propiedades editables
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📁 File Managers</h4>
                  <p className="text-sm text-muted-foreground">
                    Árbol de directorios + Vista de archivos + Panel de preview
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🗂️ Admin Panels</h4>
                  <p className="text-sm text-muted-foreground">
                    Navegación lateral + Contenido principal + Panel de acciones
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de Resizable</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Define <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">minSize</code> y <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">maxSize</code> para evitar que paneles se colapsen o expandan demasiado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">withHandle</code> para hacer handles visibles y más fáciles de agarrar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Suma de defaultSize de todos los paneles debe ser aproximadamente 100</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para layouts complejos, anida ResizablePanelGroup en diferentes direcciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Establece min-h o min-w en el PanelGroup para evitar colapsos visuales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Considera persistir tamaños de paneles en localStorage para guardar preferencias del usuario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Permite navegación por teclado (Tab + flechas) para accesibilidad completa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Evita más de 4 paneles visibles simultáneamente para mantener claridad visual</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}