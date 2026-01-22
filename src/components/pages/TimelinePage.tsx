import { ComponentShowcase } from "../ui/component-showcase";
import * as React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { 
  Timeline, 
  TimelineItem, 
  TimelineConnector, 
  TimelineIcon, 
  TimelineContent, 
  TimelineHeader, 
  TimelineTitle, 
  TimelineDescription,
  TimelineTime 
} from "../advanced/Timeline";
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  GitCommit, 
  GitPullRequest, 
  MessageSquare, 
  Package, 
  UserPlus 
} from "lucide-react";

function TimelineExamples() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Activity Feed */}
      <Card>
        <CardHeader>
          <CardTitle>Activity Feed</CardTitle>
          <CardDescription>
            Recent actions and updates from your team.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Timeline>
            <TimelineItem>
              <TimelineConnector />
              <TimelineIcon className="bg-primary/10 border-primary/20">
                <UserPlus className="h-5 w-5 text-primary" />
              </TimelineIcon>
              <TimelineContent>
                <TimelineHeader>
                  <TimelineTitle>New teammate joined</TimelineTitle>
                  <TimelineTime>Just now</TimelineTime>
                </TimelineHeader>
                <TimelineDescription>
                  <span className="font-medium text-foreground">Sarah Connor</span> joined the design team.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector />
              <TimelineIcon className="bg-orange-500/10 border-orange-500/20">
                <GitPullRequest className="h-5 w-5 text-orange-500" />
              </TimelineIcon>
              <TimelineContent>
                <TimelineHeader>
                  <TimelineTitle>PR #42 Merged</TimelineTitle>
                  <TimelineTime>2 hours ago</TimelineTime>
                </TimelineHeader>
                <TimelineDescription>
                  Fix authentication flow edge cases.
                </TimelineDescription>
                <div className="mt-2 flex items-center gap-2">
                   <Badge variant="secondary" className="font-mono text-xs">feat/auth-fix</Badge>
                </div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineConnector />
              <TimelineIcon className="bg-blue-500/10 border-blue-500/20">
                <MessageSquare className="h-5 w-5 text-blue-500" />
              </TimelineIcon>
              <TimelineContent>
                <TimelineHeader>
                  <TimelineTitle>New Comment</TimelineTitle>
                  <TimelineTime>5 hours ago</TimelineTime>
                </TimelineHeader>
                <TimelineDescription>
                  <span className="font-medium text-foreground">Alex</span> commented on <span className="font-medium text-foreground">Design System</span> task.
                </TimelineDescription>
                <div className="mt-2 p-3 bg-muted rounded-md text-sm italic">
                  "Looks great! Just check the contrast ratio on dark mode."
                </div>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineIcon className="bg-green-500/10 border-green-500/20">
                <Package className="h-5 w-5 text-green-500" />
              </TimelineIcon>
              <TimelineContent>
                <TimelineHeader>
                  <TimelineTitle>Release v2.0.0</TimelineTitle>
                  <TimelineTime>Yesterday</TimelineTime>
                </TimelineHeader>
                <TimelineDescription>
                  Major version release with new features.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </CardContent>
      </Card>

      {/* Order History */}
      <Card>
        <CardHeader>
          <CardTitle>Order History</CardTitle>
          <CardDescription>
            Tracking status for order #ORD-7721
          </CardDescription>
        </CardHeader>
        <CardContent>
           <Timeline className="pl-2">
            <TimelineItem className="pb-10">
              <div className="absolute left-[19px] top-10 bottom-0 w-px bg-primary" />
              <TimelineIcon className="bg-primary text-secondary border-primary">
                <CheckCircle2 className="h-5 w-5" />
              </TimelineIcon>
              <TimelineContent>
                <TimelineHeader>
                  <TimelineTitle className="text-primary">Order Delivered</TimelineTitle>
                  <TimelineTime className="text-primary font-medium">Oct 24, 14:30</TimelineTime>
                </TimelineHeader>
                <TimelineDescription className="text-foreground">
                  Package received by customer.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem className="pb-10">
              <div className="absolute left-[19px] top-10 bottom-0 w-px bg-primary" />
              <TimelineIcon className="bg-primary text-secondary border-primary">
                <CheckCircle2 className="h-5 w-5" />
              </TimelineIcon>
              <TimelineContent>
                <TimelineHeader>
                  <TimelineTitle>Out for Delivery</TimelineTitle>
                  <TimelineTime>Oct 24, 08:15</TimelineTime>
                </TimelineHeader>
                <TimelineDescription>
                  Driver is on the way.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem className="pb-10">
              <div className="absolute left-[19px] top-10 bottom-0 w-px bg-border" />
              <TimelineIcon className="bg-background text-muted-foreground">
                <Circle className="h-5 w-5 fill-current" />
              </TimelineIcon>
              <TimelineContent>
                <TimelineHeader>
                  <TimelineTitle>Shipped</TimelineTitle>
                  <TimelineTime>Oct 23, 18:00</TimelineTime>
                </TimelineHeader>
                <TimelineDescription>
                  Package has left the facility.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>

             <TimelineItem>
              <TimelineIcon className="bg-background text-muted-foreground">
                <Circle className="h-5 w-5" />
              </TimelineIcon>
              <TimelineContent>
                <TimelineHeader>
                  <TimelineTitle>Order Confirmed</TimelineTitle>
                  <TimelineTime>Oct 22, 10:45</TimelineTime>
                </TimelineHeader>
                <TimelineDescription>
                  Payment verified and order processing started.
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
           </Timeline>
        </CardContent>
      </Card>
    </div>
  );
}

export function TimelinePage() {
  return (
    <ComponentShowcase
      title="Timeline"
      description="A vertical display of events, activity, or history."
      badges={[
        { text: "Advanced", variant: "default" },
        { text: "New", variant: "outline", className: "border-green-500 text-green-500" }
      ]}
      previewComponent={<TimelineExamples />}
      codeBlock={`import { 
  Timeline, 
  TimelineItem, 
  TimelineConnector, 
  TimelineIcon, 
  TimelineContent, 
  TimelineHeader, 
  TimelineTitle, 
  TimelineDescription,
  TimelineTime 
} from "@/components/advanced/Timeline";
import { CheckCircle2, UserPlus } from "lucide-react";

export function ActivityTimeline() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineConnector />
        <TimelineIcon className="bg-primary/10 border-primary/20">
          <UserPlus className="h-5 w-5 text-primary" />
        </TimelineIcon>
        <TimelineContent>
          <TimelineHeader>
            <TimelineTitle>New teammate joined</TimelineTitle>
            <TimelineTime>Just now</TimelineTime>
          </TimelineHeader>
          <TimelineDescription>
            Sarah Connor joined the design team.
          </TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      
      {/* More timeline items... */}
    </Timeline>
  );
}`}
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa de los componentes Timeline</CardDescription>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2 text-foreground">Componente</th>
                    <th className="text-left p-2 text-foreground">Props</th>
                    <th className="text-left p-2 text-foreground">Descripción</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">Timeline</code></td>
                    <td className="p-2">children, className</td>
                    <td className="p-2">Contenedor principal del timeline</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TimelineItem</code></td>
                    <td className="p-2">children, className</td>
                    <td className="p-2">Item individual del timeline</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TimelineIcon</code></td>
                    <td className="p-2">children, className</td>
                    <td className="p-2">Círculo con icono (lucide-react)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TimelineConnector</code></td>
                    <td className="p-2">className</td>
                    <td className="p-2">Línea vertical conectora</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TimelineContent</code></td>
                    <td className="p-2">children, className</td>
                    <td className="p-2">Contenido del evento</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TimelineTitle</code></td>
                    <td className="p-2">children, className</td>
                    <td className="p-2">Título del evento</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TimelineDescription</code></td>
                    <td className="p-2">children, className</td>
                    <td className="p-2">Descripción detallada</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TimelineTime</code></td>
                    <td className="p-2">children, className</td>
                    <td className="p-2">Timestamp del evento</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Componentes de Timeline</CardTitle>
              <CardDescription>Estructura y subcomponentes disponibles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">Timeline</h4>
                  <p className="text-sm text-muted-foreground">
                    Contenedor principal para todos los items del timeline. Define el espaciado y layout vertical.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">TimelineItem</h4>
                  <p className="text-sm text-muted-foreground">
                    Cada evento individual en el timeline. Contiene el icono, conector y contenido.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">TimelineIcon</h4>
                  <p className="text-sm text-muted-foreground">
                    Círculo con icono que representa el tipo de evento. Acepta cualquier icono de lucide-react.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">TimelineConnector</h4>
                  <p className="text-sm text-muted-foreground">
                    Línea vertical que conecta eventos consecutivos. Se omite en el último item.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">TimelineContent</h4>
                  <p className="text-sm text-muted-foreground">
                    Contenedor para el contenido del evento (header, description, etc.).
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">TimelineHeader</h4>
                  <p className="text-sm text-muted-foreground">
                    Header del evento que contiene título y timestamp en un layout flex.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">TimelineTitle</h4>
                  <p className="text-sm text-muted-foreground">
                    Título del evento con estilos semibold.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">TimelineDescription</h4>
                  <p className="text-sm text-muted-foreground">
                    Descripción detallada del evento con color muted.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">TimelineTime</h4>
                  <p className="text-sm text-muted-foreground">
                    Timestamp del evento con estilos de texto pequeño y muted.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Características</CardTitle>
              <CardDescription>Funcionalidades del componente Timeline</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium">✅ Funcionalidades</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Estructura vertical clara y organizada</li>
                    <li>• Iconos personalizables por evento</li>
                    <li>• Conectores visuales entre eventos</li>
                    <li>• Timestamps para cada evento</li>
                    <li>• Soporte para contenido enriquecido (badges, avatars, etc.)</li>
                    <li>• Estados visuales diferenciados (completado, pendiente)</li>
                    <li>• Múltiples variantes de diseño</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">🎨 Personalización</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Colores de iconos customizables</li>
                    <li>• Colores de conectores personalizables</li>
                    <li>• Espaciado ajustable entre items</li>
                    <li>• Soporta contenido adicional (comentarios, badges)</li>
                    <li>• Compatible con modo claro/oscuro</li>
                    <li>• Responsive design</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones del Timeline en sistemas empresariales</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📋 Historial de Operaciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Seguimiento de estados de facturas: creación, aprobación, pago, rechazo.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">👥 Activity Feed</h4>
                  <p className="text-sm text-muted-foreground">
                    Stream de actividades del equipo: comentarios, cambios, asignaciones.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📦 Tracking de Pedidos</h4>
                  <p className="text-sm text-muted-foreground">
                    Estados de envío y entrega con timestamps y confirmaciones.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🔄 Flujo de Aprobación</h4>
                  <p className="text-sm text-muted-foreground">
                    Visualizar proceso de aprobación multinivel con responsables.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📝 Audit Log</h4>
                  <p className="text-sm text-muted-foreground">
                    Registro cronológico de cambios y modificaciones en el sistema.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">⏱️ Historial de Proyecto</h4>
                  <p className="text-sm text-muted-foreground">
                    Hitos importantes del proyecto con fechas y responsables.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de Timeline</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Ordena eventos de más reciente a más antiguo para activity feeds (cronología inversa)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa iconos distintivos y colores consistentes para cada tipo de evento (UserPlus, GitCommit, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye timestamps claros relativos ("2 hours ago") o absolutos ("Oct 23, 18:00")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Omite <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">TimelineConnector</code> en el último item para terminar el flujo visual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Añade contenido enriquecido como badges, avatars o comentarios para más contexto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Diferencia estados con colores de iconos (verde=completado, gris=pendiente, rojo=error)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrupa eventos por fecha o categoría cuando haya muchos items para mejor navegación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa ScrollArea para timelines largos y considera lazy loading para mejor rendimiento</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}