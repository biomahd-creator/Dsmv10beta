import { ComponentShowcase } from "../ui/component-showcase";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Menu, Settings, User, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function DrawerPage() {
  return (
    <ComponentShowcase
      title="Drawer"
      description="Panel deslizable desde los bordes de la pantalla, ideal para mobile"
      category="Feedback"
      
      preview={
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" className="w-full">
              <Menu className="h-4 w-4 mr-2" />
              Abrir Drawer
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Configuración</DrawerTitle>
              <DrawerDescription>Ajusta tus preferencias</DrawerDescription>
            </DrawerHeader>
            <div className="px-4 py-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Notificaciones</span>
                <Badge>Habilitado</Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Tema oscuro</span>
                <Badge variant="outline">Auto</Badge>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Idioma</span>
                <Badge variant="secondary">Español</Badge>
              </div>
            </div>
            <DrawerFooter>
              <Button>Guardar cambios</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      }
      
      code={`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>Drawer description</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 py-6">
          {/* Your content here */}
        </div>
        <DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}`}
      
      usage="Importa Drawer, DrawerTrigger, DrawerContent, DrawerHeader y DrawerFooter. El drawer se desliza desde abajo por defecto y es ideal para experiencias mobile-first con gestos de deslizamiento."
      
      usageCode={`import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

function MyComponent() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button>Open Settings</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Settings</DrawerTitle>
          <DrawerDescription>Configure your preferences</DrawerDescription>
        </DrawerHeader>
        <div className="px-4 py-6">
          {/* Content */}
        </div>
        <DrawerFooter>
          <Button>Save</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`}
      
      props={[
        {
          name: "open",
          type: "boolean",
          description: "Estado controlado del drawer (abierto/cerrado)",
        },
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          description: "Callback cuando cambia el estado del drawer",
        },
        {
          name: "dismissible",
          type: "boolean",
          default: "true",
          description: "Si el drawer puede cerrarse deslizando hacia abajo",
        },
      ]}
      
      examples={[
        {
          title: "Perfil de Usuario",
          description: "Drawer con información de cuenta y opciones de perfil",
          preview: (
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="w-full">
                  <User className="h-4 w-4 mr-2" />
                  Ver Perfil
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Tu Perfil</DrawerTitle>
                  <DrawerDescription>Información de tu cuenta</DrawerDescription>
                </DrawerHeader>
                <div className="px-4 py-6 space-y-3">
                  <div>
                    <p className="text-sm font-medium">Nombre</p>
                    <p className="text-sm text-muted-foreground">Juan Pérez</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">juan@example.com</p>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm font-medium">Plan</p>
                    <Badge>Premium</Badge>
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Editar Perfil</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cerrar</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ),
          code: `import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { User } from "lucide-react"

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">
      <User className="h-4 w-4 mr-2" />
      Ver Perfil
    </Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Tu Perfil</DrawerTitle>
      <DrawerDescription>Información de tu cuenta</DrawerDescription>
    </DrawerHeader>
    <div className="px-4 py-6 space-y-3">
      <div>
        <p className="text-sm font-medium">Nombre</p>
        <p className="text-sm text-muted-foreground">Juan Pérez</p>
      </div>
      <Separator />
      <div>
        <p className="text-sm font-medium">Email</p>
        <p className="text-sm text-muted-foreground">juan@example.com</p>
      </div>
      <Separator />
      <div>
        <p className="text-sm font-medium">Plan</p>
        <Badge>Premium</Badge>
      </div>
    </div>
    <DrawerFooter>
      <Button>Editar Perfil</Button>
      <DrawerClose asChild>
        <Button variant="outline">Cerrar</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`
        },
        {
          title: "Notificaciones",
          description: "Centro de notificaciones con múltiples items y scroll",
          preview: (
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline" className="w-full">
                  <Bell className="h-4 w-4 mr-2" />
                  Ver Notificaciones
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Notificaciones</DrawerTitle>
                  <DrawerDescription>3 notificaciones nuevas</DrawerDescription>
                </DrawerHeader>
                <div className="px-4 py-6 space-y-4 max-h-[300px] overflow-y-auto">
                  <div className="flex gap-3">
                    <Badge className="h-fit">Nuevo</Badge>
                    <div>
                      <p className="text-sm font-medium">Nuevo mensaje</p>
                      <p className="text-xs text-muted-foreground">Hace 5 minutos</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex gap-3">
                    <Badge variant="outline" className="h-fit">Info</Badge>
                    <div>
                      <p className="text-sm font-medium">Actualización disponible</p>
                      <p className="text-xs text-muted-foreground">Hace 1 hora</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex gap-3">
                    <Badge variant="secondary" className="h-fit">Sistema</Badge>
                    <div>
                      <p className="text-sm font-medium">Mantenimiento programado</p>
                      <p className="text-xs text-muted-foreground">Hace 2 horas</p>
                    </div>
                  </div>
                </div>
                <DrawerFooter>
                  <Button variant="outline">Marcar todas como leídas</Button>
                  <DrawerClose asChild>
                    <Button>Cerrar</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          ),
          code: `import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Bell } from "lucide-react"

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">
      <Bell className="h-4 w-4 mr-2" />
      Ver Notificaciones
    </Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Notificaciones</DrawerTitle>
      <DrawerDescription>3 notificaciones nuevas</DrawerDescription>
    </DrawerHeader>
    <div className="px-4 py-6 space-y-4 max-h-[300px] overflow-y-auto">
      <div className="flex gap-3">
        <Badge className="h-fit">Nuevo</Badge>
        <div>
          <p className="text-sm font-medium">Nuevo mensaje</p>
          <p className="text-xs text-muted-foreground">Hace 5 minutos</p>
        </div>
      </div>
      <Separator />
      <div className="flex gap-3">
        <Badge variant="outline" className="h-fit">Info</Badge>
        <div>
          <p className="text-sm font-medium">Actualización disponible</p>
          <p className="text-xs text-muted-foreground">Hace 1 hora</p>
        </div>
      </div>
      <Separator />
      <div className="flex gap-3">
        <Badge variant="secondary" className="h-fit">Sistema</Badge>
        <div>
          <p className="text-sm font-medium">Mantenimiento programado</p>
          <p className="text-xs text-muted-foreground">Hace 2 horas</p>
        </div>
      </div>
    </div>
    <DrawerFooter>
      <Button variant="outline">Marcar todas como leídas</Button>
      <DrawerClose asChild>
        <Button>Cerrar</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Drawer</CardDescription>
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
                    <td className="p-2">Estado controlado del drawer (abierto/cerrado)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onOpenChange</code></td>
                    <td className="p-2">(open: boolean) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback cuando cambia el estado del drawer</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">dismissible</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">true</td>
                    <td className="p-2">Si el drawer puede cerrarse deslizando hacia abajo</td>
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
              <CardDescription>Aplicaciones comunes del componente Drawer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📱 Menús Mobile</h4>
                  <p className="text-sm text-muted-foreground">
                    Navegación principal que desliza desde abajo en interfaces mobile-first
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔔 Centro de Notificaciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Panel de notificaciones con scroll y acciones rápidas desde abajo
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔍 Filtros y Ordenamiento</h4>
                  <p className="text-sm text-muted-foreground">
                    Opciones de filtrado y sort para listas y catálogos en mobile
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">👤 Perfil de Usuario</h4>
                  <p className="text-sm text-muted-foreground">
                    Información de cuenta y opciones de perfil accesibles rápidamente
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📄 Detalles de Items</h4>
                  <p className="text-sm text-muted-foreground">
                    Información adicional de productos, posts o elementos seleccionados
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">⚙️ Configuración Rápida</h4>
                  <p className="text-sm text-muted-foreground">
                    Ajustes y preferencias accesibles con gestos de deslizamiento
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del Drawer</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa Drawer para experiencias mobile-first que deslican desde abajo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Habilita <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">dismissible</code> para permitir "pull to close" con gestos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye DrawerHeader con DrawerTitle para contexto y accesibilidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa DrawerFooter con botones de acción primaria y cierre</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para contenido extenso, aplica <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">overflow-y-auto</code> con altura máxima</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Limita la altura del drawer a 70-80% de pantalla para indicar contenido debajo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Diferencia: usa Drawer (abajo) para mobile, Sheet (lados) para desktop</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implementa animaciones suaves y respuesta táctil inmediata para mejor UX</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
      
      additionalContent={
        <div className="space-y-8">
          <Separator />
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">✅ Cuándo usar</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Interfaces mobile-first</p>
                <p>• Menús de navegación en mobile</p>
                <p>• Filtros y opciones secundarias</p>
                <p>• Información contextual adicional</p>
              </div>
            </div>
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">💡 Diferencia con Sheet</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• <strong>Drawer:</strong> Desde abajo, gestualidad mobile</p>
                <p>• <strong>Sheet:</strong> Desde los lados, más desktop</p>
                <p>• Drawer tiene "pull to close"</p>
                <p>• Sheet es mejor para contenido extenso</p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="bg-primary/5 border-primary/20 border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">♿ Accesibilidad</h3>
            <div className="space-y-2 text-sm">
              <p>✓ <strong>Dialog role</strong> - ARIA role apropiado</p>
              <p>✓ <strong>Focus trap</strong> - Mantiene el foco dentro del drawer</p>
              <p>✓ <strong>Escape key</strong> - Cierra con tecla Escape</p>
              <p>✓ <strong>Swipe gestures</strong> - Deslizar para cerrar en touch</p>
            </div>
          </div>

          <Separator />

          <div className="bg-muted/50 border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Composición</h3>
            <p className="text-sm text-muted-foreground">Componentes shadcn/ui utilizados</p>
            <div className="space-y-2">
              <p className="text-sm">
                <Badge variant="outline" className="mr-2">Drawer</Badge>
                Basado en Vaul library de Emil Kowalski
              </p>
              <Separator className="my-3" />
              <p className="text-xs text-muted-foreground">
                El Drawer es ideal para mobile-first experiences. Incluye gestos de deslizamiento,
                animaciones suaves y accesibilidad completa.
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
}