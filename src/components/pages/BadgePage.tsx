import { ComponentShowcase } from "../ui/component-showcase";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Check, X, AlertCircle, Info, Clock, Star } from "lucide-react";

export function BadgePage() {
  return (
    <ComponentShowcase
      title="Badge"
      description="Displays a badge or a component that looks like a badge."
      badges={[
        { text: "Data Display", variant: "secondary" }
      ]}
      previewComponent={
        <div className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      }
      codeBlock={`import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex gap-4">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  );
}`}
      examplesSection={
        <div className="space-y-8">
          {/* Variantes */}
          <Card>
            <CardHeader>
              <CardTitle>Variantes</CardTitle>
              <CardDescription>
                Diferentes estilos visuales para distintos contextos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Con Iconos */}
          <Card>
            <CardHeader>
              <CardTitle>Con Iconos</CardTitle>
              <CardDescription>
                Badges con iconos para mayor contexto visual
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Badge className="gap-1">
                  <Check className="size-3" />
                  Aprobado
                </Badge>
                <Badge variant="destructive" className="gap-1">
                  <X className="size-3" />
                  Rechazado
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Clock className="size-3" />
                  Pendiente
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Info className="size-3" />
                  Info
                </Badge>
                <Badge className="gap-1 bg-orange-500 hover:bg-orange-600">
                  <AlertCircle className="size-3" />
                  Alerta
                </Badge>
                <Badge className="gap-1 bg-yellow-500 hover:bg-yellow-600 text-yellow-950">
                  <Star className="size-3" />
                  Premium
                </Badge>
              </div>
            </CardContent>
          </Card>

          {/* Estados de Facturas */}
          <Card>
            <CardHeader>
              <CardTitle>Estados de Facturas</CardTitle>
              <CardDescription>
                Badges para indicar estados en operaciones de factoring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-green-500 hover:bg-green-600">Pagada</Badge>
                <Badge className="bg-blue-500 hover:bg-blue-600">Aprobada</Badge>
                <Badge variant="secondary">Pendiente</Badge>
                <Badge variant="destructive">Rechazada</Badge>
                <Badge variant="outline">Borrador</Badge>
                <Badge className="bg-orange-500 hover:bg-orange-600">En Revisión</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Con Contadores */}
          <Card>
            <CardHeader>
              <CardTitle>Con Contadores</CardTitle>
              <CardDescription>
                Badges que muestran números o cantidades
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm">Notificaciones</span>
                  <Badge>12</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Nuevos mensajes</span>
                  <Badge variant="destructive">5</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">Total facturas</span>
                  <Badge variant="secondary">234</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm">En proceso</span>
                  <Badge variant="outline">8</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tamaños Personalizados */}
          <Card>
            <CardHeader>
              <CardTitle>Tamaños Personalizados</CardTitle>
              <CardDescription>
                Ajusta el tamaño con clases de Tailwind
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Badge className="text-xs px-2 py-0.5">Pequeño</Badge>
                <Badge>Mediano (default)</Badge>
                <Badge className="text-base px-3 py-1.5">Grande</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Colores Personalizados */}
          <Card>
            <CardHeader>
              <CardTitle>Colores Personalizados</CardTitle>
              <CardDescription>
                Badges con colores corporativos o temáticos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-primary hover:bg-primary/90">Primary (#84cc16)</Badge>
                <Badge className="bg-[#1C2D3A] hover:bg-[#1C2D3A]/90">Secondary (#1C2D3A)</Badge>
                <Badge className="bg-purple-500 hover:bg-purple-600">Purple</Badge>
                <Badge className="bg-pink-500 hover:bg-pink-600">Pink</Badge>
                <Badge className="bg-indigo-500 hover:bg-indigo-600">Indigo</Badge>
                <Badge className="bg-teal-500 hover:bg-teal-600">Teal</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Uso en Listas */}
          <Card>
            <CardHeader>
              <CardTitle>Uso en Listas</CardTitle>
              <CardDescription>
                Ejemplos de badges en componentes de lista
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Factura #F-2024-001</span>
                  <div className="flex gap-2">
                    <Badge className="bg-green-500 hover:bg-green-600">Pagada</Badge>
                    <Badge variant="outline">$150,000</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Factura #F-2024-002</span>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Pendiente</Badge>
                    <Badge variant="outline">$85,000</Badge>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm">Factura #F-2024-003</span>
                  <div className="flex gap-2">
                    <Badge variant="destructive">Rechazada</Badge>
                    <Badge variant="outline">$42,000</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      }
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API del componente Badge</CardDescription>
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
                      <td className="p-2 font-mono">variant</td>
                      <td className="p-2">"default" | "secondary" | "outline" | "destructive"</td>
                      <td className="p-2">"default"</td>
                      <td className="p-2">El estilo visual del badge</td>
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
              <CardDescription>Escenarios comunes de aplicación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📊 Estados de Operaciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Indicar el estado actual de facturas, aprobaciones o procesos.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🔔 Notificaciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar contadores de mensajes sin leer o alertas pendientes.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🏷️ Categorización</h4>
                  <p className="text-sm text-muted-foreground">
                    Etiquetar items con categorías, tipos o clasificaciones.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">💰 Valores Monetarios</h4>
                  <p className="text-sm text-muted-foreground">
                    Resaltar montos, totales o valores importantes.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">✓ Verificación</h4>
                  <p className="text-sm text-muted-foreground">
                    Indicar items verificados, aprobados o completados.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🎯 Prioridades</h4>
                  <p className="text-sm text-muted-foreground">
                    Marcar niveles de prioridad o urgencia (alta, media, baja).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}
