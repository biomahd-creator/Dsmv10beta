import { ComponentShowcase } from "../ui/component-showcase";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "../ui/resizable";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";

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
      
      additionalContent={
        <div className="space-y-8">
          <Separator />
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Casos de Uso</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 space-y-2">
                <h4 className="font-medium">Code Editor</h4>
                <p className="text-sm text-muted-foreground">
                  Navegador de archivos + Editor + Panel de propiedades
                </p>
              </div>
              <div className="border rounded-lg p-4 space-y-2">
                <h4 className="font-medium">Email Client</h4>
                <p className="text-sm text-muted-foreground">
                  Lista de emails + Vista previa + Detalles
                </p>
              </div>
              <div className="border rounded-lg p-4 space-y-2">
                <h4 className="font-medium">Dashboard</h4>
                <p className="text-sm text-muted-foreground">
                  Sidebar + Gráficas + Widgets personalizables
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">✅ Características</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Tamaños mínimos y máximos configurables</p>
                <p>• Handles visuales opcionales</p>
                <p>• Anidación de layouts horizontal y vertical</p>
                <p>• Persistencia de tamaños (localStorage)</p>
              </div>
            </div>
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">⌨️ Teclado</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Focus en handles con Tab</p>
                <p>• Flechas para redimensionar con teclado</p>
                <p>• Enter para activar/desactivar resize</p>
                <p>• Completamente accesible</p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="bg-primary/5 border-primary/20 border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">♿ Accesibilidad</h3>
            <div className="space-y-2 text-sm">
              <p>✓ <strong>Keyboard navigation</strong> - Redimensionar con teclado</p>
              <p>✓ <strong>ARIA labels</strong> - Roles y labels apropiados</p>
              <p>✓ <strong>Focus visible</strong> - Indicadores claros de foco</p>
              <p>✓ <strong>Screen reader</strong> - Anuncia cambios de tamaño</p>
            </div>
          </div>

          <Separator />

          <div className="bg-muted/50 border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Composición</h3>
            <p className="text-sm text-muted-foreground">Componentes shadcn/ui utilizados</p>
            <div className="space-y-2">
              <p className="text-sm">
                <Badge variant="outline" className="mr-2">ResizablePanelGroup</Badge>
                Contenedor de paneles
              </p>
              <p className="text-sm">
                <Badge variant="outline" className="mr-2">ResizablePanel</Badge>
                Panel individual redimensionable
              </p>
              <p className="text-sm">
                <Badge variant="outline" className="mr-2">ResizableHandle</Badge>
                Handle arrastrable entre paneles
              </p>
              <Separator className="my-3" />
              <p className="text-xs text-muted-foreground">
                Basado en react-resizable-panels. Ideal para aplicaciones con layouts complejos
                como IDEs, dashboards y herramientas de productividad.
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
}
