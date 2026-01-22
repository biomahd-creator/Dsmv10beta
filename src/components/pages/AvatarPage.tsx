import { ComponentShowcase } from "../ui/component-showcase";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function AvatarPage() {
  return (
    <ComponentShowcase
      title="Avatar"
      description="An image element with a fallback for representing a user or entity"
      category="Data Display"
      
      preview={
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>XY</AvatarFallback>
          </Avatar>
        </div>
      }
      
      code={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function AvatarDemo() {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>XY</AvatarFallback>
      </Avatar>
    </div>
  )
}`}
      
      usage="Importa Avatar, AvatarImage y AvatarFallback. AvatarImage muestra la imagen del usuario, mientras que AvatarFallback se muestra cuando la imagen no está disponible o aún se está cargando."
      
      usageCode={`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function MyComponent() {
  return (
    <Avatar>
      <AvatarImage src="/path/to/image.jpg" alt="User name" />
      <AvatarFallback>UN</AvatarFallback>
    </Avatar>
  );
}`}
      
      props={[
        {
          name: "src",
          type: "string",
          description: "URL de la imagen del avatar (en AvatarImage)",
        },
        {
          name: "alt",
          type: "string",
          description: "Texto alternativo para la imagen (en AvatarImage)",
        },
        {
          name: "className",
          type: "string",
          description: "Clases CSS adicionales para personalizar tamaño y estilo",
        },
      ]}
      
      examples={[
        {
          title: "Different Sizes",
          description: "Avatars in various sizes using className",
          preview: (
            <div className="flex items-center gap-4">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">SM</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
              <Avatar className="h-14 w-14">
                <AvatarFallback className="text-lg">LG</AvatarFallback>
              </Avatar>
              <Avatar className="h-20 w-20">
                <AvatarFallback className="text-xl">XL</AvatarFallback>
              </Avatar>
            </div>
          ),
          code: `import { Avatar, AvatarFallback } from "@/components/ui/avatar"

<div className="flex items-center gap-4">
  <Avatar className="h-8 w-8">
    <AvatarFallback className="text-xs">SM</AvatarFallback>
  </Avatar>
  <Avatar>
    <AvatarFallback>MD</AvatarFallback>
  </Avatar>
  <Avatar className="h-14 w-14">
    <AvatarFallback className="text-lg">LG</AvatarFallback>
  </Avatar>
  <Avatar className="h-20 w-20">
    <AvatarFallback className="text-xl">XL</AvatarFallback>
  </Avatar>
</div>`
        },
        {
          title: "Avatar Group",
          description: "Multiple avatars stacked together with overlapping effect",
          preview: (
            <div className="flex -space-x-4">
              <Avatar className="border-2 border-background">
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarFallback>MK</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarFallback>SP</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarFallback>+5</AvatarFallback>
              </Avatar>
            </div>
          ),
          code: `import { Avatar, AvatarFallback } from "@/components/ui/avatar"

<div className="flex -space-x-4">
  <Avatar className="border-2 border-background">
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>MK</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>SP</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>+5</AvatarFallback>
  </Avatar>
</div>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Avatar</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">src</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">URL de la imagen del avatar (usado en AvatarImage)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">alt</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Texto alternativo para accesibilidad (usado en AvatarImage)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">className</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Clases CSS adicionales para personalizar tamaño y estilos</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">asChild</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Permite usar un componente hijo personalizado</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">delayMs</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">0</td>
                    <td className="p-2">Tiempo de espera antes de mostrar el fallback si la imagen falla</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Avatar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">👤 Perfil de Usuario</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar la foto de perfil del usuario en la barra de navegación, menús desplegables o tarjetas de información
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💬 Chat y Mensajería</h4>
                  <p className="text-sm text-muted-foreground">
                    Identificar participantes en conversaciones, mostrando avatares junto a cada mensaje
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">👥 Equipos Colaborativos</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar miembros de un equipo o proyecto con avatares agrupados y superpuestos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📝 Asignación de Tareas</h4>
                  <p className="text-sm text-muted-foreground">
                    Indicar quién está asignado a una tarea o responsable de un ticket en sistemas de gestión
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Dashboards</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar usuarios activos, últimas actividades o colaboradores recientes en paneles administrativos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔔 Notificaciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Identificar quién generó una notificación o alerta en el sistema
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del Avatar</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Siempre proporciona un <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">alt</code> descriptivo para accesibilidad cuando uses AvatarImage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Utiliza AvatarFallback con iniciales del usuario (máximo 2 letras) cuando la imagen no esté disponible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén tamaños consistentes de avatares en un mismo contexto (ej: todos los comentarios con h-8 w-8)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En grupos de avatares superpuestos, agrega <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">border-2 border-background</code> para mejorar la separación visual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa tamaños proporcionados: h-8 w-8 (small), h-10 w-10 (default), h-14 w-14 (large), h-20 w-20 (extra large)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Optimiza las imágenes de avatar a resoluciones apropiadas (típicamente 80x80 a 200x200 píxeles)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Considera usar colores de fondo diferentes en AvatarFallback para distinguir usuarios cuando no hay imagen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En listas de usuarios con muchos avatares, usa técnicas de lazy loading para mejorar el rendimiento</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}