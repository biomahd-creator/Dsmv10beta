import { ComponentShowcase } from "../ui/component-showcase";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Calendar, Settings, Share2, User, Bell, MessageSquare } from "lucide-react";

export function PopoverPage() {
  return (
    <ComponentShowcase
      title="Popover"
      description="Displays rich content in a portal, triggered by a button"
      category="Feedback"
      
      preview={
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">Open popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="space-y-2">
              <h4 className="font-medium">Popover Title</h4>
              <p className="text-sm text-muted-foreground">
                This is a simple popover with some content.
              </p>
            </div>
          </PopoverContent>
        </Popover>
      }
      
      code={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="space-y-2">
          <h4 className="font-medium">Popover Title</h4>
          <p className="text-sm text-muted-foreground">
            This is a simple popover with some content.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  )
}`}
      
      usage="Importa Popover, PopoverTrigger y PopoverContent desde @/components/ui/popover. Envuelve el botón trigger con PopoverTrigger usando asChild, y define el contenido dentro de PopoverContent."
      
      usageCode={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

function MyComponent() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button>Click me</Button>
      </PopoverTrigger>
      <PopoverContent>
        <p>Your content here</p>
      </PopoverContent>
    </Popover>
  );
}`}
      
      props={[
        {
          name: "open",
          type: "boolean",
          description: "Estado controlado del popover (abierto/cerrado)",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          description: "Callback cuando cambia el estado del popover",
        },
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          default: '"bottom"',
          description: "El lado preferido donde aparecerá el popover",
        },
        {
          name: "align",
          type: '"start" | "center" | "end"',
          default: '"center"',
          description: "La alineación del popover respecto al trigger",
        },
      ]}
      
      examples={[
        {
          title: "Popover with Form",
          description: "Interactive popover with inputs for collecting data",
          preview: (
            <Popover>
              <PopoverTrigger asChild>
                <Button>Update dimensions</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="width">Width</Label>
                    <Input id="width" placeholder="100%" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="height">Height</Label>
                    <Input id="height" placeholder="25px" />
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ),
          code: `import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<Popover>
  <PopoverTrigger asChild>
    <Button>Update dimensions</Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-4">
      <div className="space-y-2">
        <h4 className="font-medium">Dimensions</h4>
        <p className="text-sm text-muted-foreground">
          Set the dimensions for the layer.
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="width">Width</Label>
        <Input id="width" placeholder="100%" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="height">Height</Label>
        <Input id="height" placeholder="25px" />
      </div>
    </div>
  </PopoverContent>
</Popover>`
        },
        {
          title: "Different Positions",
          description: "Popover puede aparecer en cualquier lado del trigger",
          preview: (
            <div className="flex flex-wrap gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Top</Button>
                </PopoverTrigger>
                <PopoverContent side="top">
                  <p className="text-sm">Popover arriba</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Right</Button>
                </PopoverTrigger>
                <PopoverContent side="right">
                  <p className="text-sm">Popover a la derecha</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Bottom</Button>
                </PopoverTrigger>
                <PopoverContent side="bottom">
                  <p className="text-sm">Popover abajo</p>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">Left</Button>
                </PopoverTrigger>
                <PopoverContent side="left">
                  <p className="text-sm">Popover a la izquierda</p>
                </PopoverContent>
              </Popover>
            </div>
          ),
          code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Top</Button>
  </PopoverTrigger>
  <PopoverContent side="top">
    <p className="text-sm">Popover arriba</p>
  </PopoverContent>
</Popover>`
        },
        {
          title: "With Icons",
          description: "Popover con iconos para acciones rápidas",
          preview: (
            <div className="flex gap-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      Configuración
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Ajusta la configuración de la cuenta
                    </p>
                  </div>
                </PopoverContent>
              </Popover>

              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="space-y-2">
                    <h4 className="font-medium flex items-center gap-2">
                      <Share2 className="h-4 w-4" />
                      Compartir
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Comparte este contenido
                    </p>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          ),
          code: `import { Settings, Share2 } from "lucide-react";

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline" size="icon">
      <Settings className="h-4 w-4" />
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    <div className="space-y-2">
      <h4 className="font-medium flex items-center gap-2">
        <Settings className="h-4 w-4" />
        Configuración
      </h4>
      <p className="text-sm text-muted-foreground">
        Ajusta la configuración de la cuenta
      </p>
    </div>
  </PopoverContent>
</Popover>`
        },
        {
          title: "User Profile Menu",
          description: "Popover como menú de usuario con información",
          preview: (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <User className="h-4 w-4 mr-2" />
                  Perfil
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Juan Pérez</p>
                      <p className="text-sm text-muted-foreground">juan@example.com</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Button variant="ghost" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Configuración
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Bell className="h-4 w-4 mr-2" />
                      Notificaciones
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ),
          code: `<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <User className="h-4 w-4 mr-2" />
      Perfil
    </Button>
  </PopoverTrigger>
  <PopoverContent className="w-80">
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="h-5 w-5 text-primary" />
        </div>
        <div>
          <p className="font-medium">Juan Pérez</p>
          <p className="text-sm text-muted-foreground">juan@example.com</p>
        </div>
      </div>
    </div>
  </PopoverContent>
</Popover>`
        },
        {
          title: "Date Picker",
          description: "Popover con calendario para selección de fechas",
          preview: (
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline">
                  <Calendar className="h-4 w-4 mr-2" />
                  Seleccionar fecha
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <div className="space-y-2">
                  <h4 className="font-medium">Selecciona una fecha</h4>
                  <p className="text-sm text-muted-foreground">
                    Usa el calendario para elegir
                  </p>
                </div>
              </PopoverContent>
            </Popover>
          ),
          code: `import { Calendar } from "lucide-react";

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">
      <Calendar className="h-4 w-4 mr-2" />
      Seleccionar fecha
    </Button>
  </PopoverTrigger>
  <PopoverContent>
    {/* Aquí iría el componente Calendar */}
  </PopoverContent>
</Popover>`
        },
        {
          title: "Rich Content",
          description: "Popover con contenido complejo y múltiples acciones",
          preview: (
            <Popover>
              <PopoverTrigger asChild>
                <Button>Ver detalles</Button>
              </PopoverTrigger>
              <PopoverContent className="w-96">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Información del Proyecto</h4>
                    <p className="text-sm text-muted-foreground">
                      Detalles completos sobre el proyecto actual
                    </p>
                  </div>
                  <div className="space-y-2 border-t pt-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Estado:</span>
                      <span className="font-medium text-primary">Activo</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progreso:</span>
                      <span className="font-medium">75%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Equipo:</span>
                      <span className="font-medium">8 miembros</span>
                    </div>
                  </div>
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1">Editar</Button>
                    <Button size="sm" variant="outline" className="flex-1">Compartir</Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ),
          code: `<Popover>
  <PopoverTrigger asChild>
    <Button>Ver detalles</Button>
  </PopoverTrigger>
  <PopoverContent className="w-96">
    <div className="space-y-4">
      <div>
        <h4 className="font-medium mb-2">Información del Proyecto</h4>
        <p className="text-sm text-muted-foreground">
          Detalles completos sobre el proyecto actual
        </p>
      </div>
      {/* Más contenido... */}
    </div>
  </PopoverContent>
</Popover>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Popover</CardDescription>
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
                    <td className="p-2">Estado controlado del popover</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onOpenChange</code></td>
                    <td className="p-2">(open: boolean) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback cuando cambia el estado</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">side</code></td>
                    <td className="p-2">"top" | "right" | "bottom" | "left"</td>
                    <td className="p-2">"bottom"</td>
                    <td className="p-2">Lado preferido donde aparecerá</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">align</code></td>
                    <td className="p-2">"start" | "center" | "end"</td>
                    <td className="p-2">"center"</td>
                    <td className="p-2">Alineación respecto al trigger</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Popover</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📅 Selectores de Fecha</h4>
                  <p className="text-sm text-muted-foreground">
                    Calendarios, date pickers y rangos de fechas en formularios
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">⚙️ Menús de Configuración</h4>
                  <p className="text-sm text-muted-foreground">
                    Opciones avanzadas y settings sin navegar a otra página
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📝 Formularios Rápidos</h4>
                  <p className="text-sm text-muted-foreground">
                    Inputs contextuales para edición inline sin modales pesados
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">ℹ️ Vista Previa de Datos</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar información detallada al hacer hover o click
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔔 Notificaciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Listas de notificaciones y mensajes recientes
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎨 Color Pickers</h4>
                  <p className="text-sm text-muted-foreground">
                    Selectores de color, gradientes y paletas personalizadas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del Popover</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa Popover para contenido interactivo que requiera input del usuario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para información de solo lectura sin interacción, considera usar Tooltip</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">asChild</code> en PopoverTrigger para evitar wrappers innecesarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Define un ancho explícito con className cuando el contenido lo requiera (ej: w-80)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">side</code> para controlar la posición y evitar que quede fuera del viewport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implementa estado controlado (open/onOpenChange) cuando necesites cerrar programáticamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén el contenido organizado con espaciado consistente (space-y-2, space-y-4)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para formularios complejos o flujos largos, usa Dialog en lugar de Popover</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}