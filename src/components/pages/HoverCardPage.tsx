import { ComponentShowcase } from "../ui/component-showcase";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { CalendarDays, MapPin, Mail, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function HoverCardPage() {
  return (
    <ComponentShowcase
      title="Hover Card"
      description="Card flotante con información adicional que aparece al hacer hover"
      category="Data Display"
      
      preview={
        <p className="text-sm text-muted-foreground">
          Creado por{" "}
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button variant="link" className="p-0 h-auto font-semibold">
                @shadcn
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SC</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@shadcn</h4>
                  <p className="text-sm text-muted-foreground">
                    The React Framework – creado y mantenido por @vercel.
                  </p>
                  <div className="flex items-center pt-2">
                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
                    <span className="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </p>
      }
      
      code={`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CalendarDays } from "lucide-react"

export function HoverCardDemo() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@shadcn</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@shadcn</h4>
            <p className="text-sm text-muted-foreground">
              The React Framework.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}`}
      
      usage="Importa HoverCard, HoverCardTrigger y HoverCardContent. Envuelve el elemento trigger (generalmente un link o botón) con HoverCardTrigger usando asChild, y define el contenido rico dentro de HoverCardContent."
      
      usageCode={`import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"

function MyComponent() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">Hover me</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="font-semibold">Title</h4>
          <p className="text-sm text-muted-foreground">
            Rich content with images, links, etc.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}`}
      
      props={[
        {
          name: "side",
          type: '"top" | "right" | "bottom" | "left"',
          default: '"bottom"',
          description: "El lado donde aparecerá el hover card",
        },
        {
          name: "align",
          type: '"start" | "center" | "end"',
          default: '"center"',
          description: "La alineación del hover card respecto al trigger",
        },
        {
          name: "openDelay",
          type: "number",
          default: "700",
          description: "Tiempo en ms antes de mostrar el hover card",
        },
        {
          name: "closeDelay",
          type: "number",
          default: "300",
          description: "Tiempo en ms antes de ocultar el hover card",
        },
      ]}
      
      examples={[
        {
          title: "Link Preview",
          description: "Preview de enlaces externos con información adicional",
          preview: (
            <p className="text-sm text-muted-foreground">
              Visita{" "}
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button variant="link" className="p-0 h-auto">
                    shadcn/ui
                  </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="space-y-2">
                    <h4 className="font-semibold">shadcn/ui</h4>
                    <p className="text-sm text-muted-foreground">
                      Componentes de UI bellamente diseñados y accesibles que puedes
                      copiar y pegar en tus apps.
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-xs text-muted-foreground">ui.shadcn.com</span>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
              {" "}para más información
            </p>
          ),
          code: `import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

<p className="text-sm">
  Visita{" "}
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="link" className="p-0 h-auto">
        shadcn/ui
      </Button>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="space-y-2">
        <h4 className="font-semibold">shadcn/ui</h4>
        <p className="text-sm text-muted-foreground">
          Componentes de UI bellamente diseñados y accesibles.
        </p>
        <div className="flex items-center gap-2 pt-2">
          <ExternalLink className="h-4 w-4" />
          <span className="text-xs text-muted-foreground">ui.shadcn.com</span>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
  {" "}para más información
</p>`
        },
        {
          title: "Team Member",
          description: "Información detallada de miembros del equipo con contacto",
          preview: (
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg transition-colors">
                  <Avatar>
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-muted-foreground">Product Manager</p>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">John Doe</h4>
                      <p className="text-sm text-muted-foreground">Product Manager</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 opacity-70" />
                      <span className="text-muted-foreground">john@company.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 opacity-70" />
                      <span className="text-muted-foreground">San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ),
          code: `import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Mail, MapPin } from "lucide-react"

<HoverCard>
  <HoverCardTrigger asChild>
    <div className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded-lg">
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <div>
        <p className="text-sm font-medium">John Doe</p>
        <p className="text-xs text-muted-foreground">Product Manager</p>
      </div>
    </div>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-3">
      <div className="flex gap-3">
        <Avatar className="h-12 w-12">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold">John Doe</h4>
          <p className="text-sm text-muted-foreground">Product Manager</p>
        </div>
      </div>
      <Separator />
      <div className="space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4 opacity-70" />
          <span className="text-muted-foreground">john@company.com</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 opacity-70" />
          <span className="text-muted-foreground">San Francisco, CA</span>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`
        },
        {
          title: "Product Info",
          description: "Detalles expandidos de productos al hacer hover",
          preview: (
            <HoverCard>
              <HoverCardTrigger asChild>
                <div className="cursor-pointer hover:bg-muted/50 p-3 rounded-lg transition-colors border">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold">MacBook Pro 14"</p>
                      <p className="text-sm text-muted-foreground">Apple M3 Pro</p>
                    </div>
                    <Badge>En stock</Badge>
                  </div>
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="font-semibold">MacBook Pro 14"</h4>
                  <p className="text-sm text-muted-foreground">
                    Chip Apple M3 Pro, 18GB RAM, 512GB SSD
                  </p>
                  <Separator />
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Precio</span>
                      <span className="font-semibold">$1,999</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Stock</span>
                      <Badge variant="outline">12 disponibles</Badge>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          ),
          code: `import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

<HoverCard>
  <HoverCardTrigger asChild>
    <div className="cursor-pointer hover:bg-muted/50 p-3 rounded-lg border">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold">MacBook Pro 14"</p>
          <p className="text-sm text-muted-foreground">Apple M3 Pro</p>
        </div>
        <Badge>En stock</Badge>
      </div>
    </div>
  </HoverCardTrigger>
  <HoverCardContent className="w-80">
    <div className="space-y-2">
      <h4 className="font-semibold">MacBook Pro 14"</h4>
      <p className="text-sm text-muted-foreground">
        Chip Apple M3 Pro, 18GB RAM, 512GB SSD
      </p>
      <Separator />
      <div className="space-y-1 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Precio</span>
          <span className="font-semibold">$1,999</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Stock</span>
          <Badge variant="outline">12 disponibles</Badge>
        </div>
      </div>
    </div>
  </HoverCardContent>
</HoverCard>`
        },
        {
          title: "Tooltip Avanzado",
          description: "Información de ayuda rica en contexto para formularios",
          preview: (
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Email address{" "}
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="ghost" size="sm" className="h-5 w-5 p-0 rounded-full">
                      ?
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="font-semibold">¿Por qué necesitamos tu email?</h4>
                      <p className="text-sm text-muted-foreground">
                        Usamos tu email para enviarte notificaciones importantes sobre
                        tu cuenta y actualizaciones del producto.
                      </p>
                      <Separator />
                      <p className="text-xs text-muted-foreground">
                        ✓ Nunca compartiremos tu email con terceros
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </label>
            </div>
          ),
          code: `import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

<label className="text-sm font-medium">
  Email address{" "}
  <HoverCard>
    <HoverCardTrigger asChild>
      <Button variant="ghost" size="sm" className="h-5 w-5 p-0 rounded-full">
        ?
      </Button>
    </HoverCardTrigger>
    <HoverCardContent className="w-80">
      <div className="space-y-2">
        <h4 className="font-semibold">¿Por qué necesitamos tu email?</h4>
        <p className="text-sm text-muted-foreground">
          Usamos tu email para notificaciones importantes.
        </p>
        <Separator />
        <p className="text-xs text-muted-foreground">
          ✓ Nunca compartiremos tu email con terceros
        </p>
      </div>
    </HoverCardContent>
  </HoverCard>
</label>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Hover Card</CardDescription>
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
                    <td className="p-2">"bottom"</td>
                    <td className="p-2">Lado donde aparecerá el hover card relativo al trigger</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">align</code></td>
                    <td className="p-2">"start" | "center" | "end"</td>
                    <td className="p-2">"center"</td>
                    <td className="p-2">Alineación del hover card respecto al trigger</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">openDelay</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">700</td>
                    <td className="p-2">Tiempo en milisegundos antes de mostrar el hover card</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">closeDelay</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">300</td>
                    <td className="p-2">Tiempo en milisegundos antes de ocultar el hover card</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">asChild</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Permite usar componente hijo personalizado (en HoverCardTrigger)</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Hover Card</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">👤 Perfiles de Usuario</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar información detallada de perfiles al hacer hover sobre nombres o avatares
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔗 Preview de Links</h4>
                  <p className="text-sm text-muted-foreground">
                    Proporcionar contexto adicional sobre enlaces externos antes de hacer clic
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📦 Detalles de Productos</h4>
                  <p className="text-sm text-muted-foreground">
                    Expandir información de productos en catálogos sin navegar a otra página
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">❓ Ayuda Contextual</h4>
                  <p className="text-sm text-muted-foreground">
                    Ofrecer tooltips ricos en formularios con explicaciones detalladas y ejemplos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Datos Adicionales</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar métricas, estadísticas o detalles expandidos en dashboards
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🏢 Info de Empresas</h4>
                  <p className="text-sm text-muted-foreground">
                    Presentar tarjetas con datos de contacto, ubicación y detalles corporativos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del Hover Card</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa HoverCard para contenido rico y complejo; usa Tooltip para texto breve y simple</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Ajusta <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">openDelay</code> según el contexto (700ms por defecto es apropiado)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén el contenido del HoverCard conciso y enfocado (máximo 80-100 palabras)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">asChild</code> en HoverCardTrigger para evitar wrappers HTML innecesarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Asegúrate que el trigger sea visualmente identificable (subrayado, color diferente, hover effect)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>No coloques acciones críticas solo en HoverCard; siempre debe haber alternativa clickeable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En móviles, considera deshabilitar HoverCard o convertirlo en Dialog/Sheet al tap</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa clases como <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">w-80</code> para controlar el ancho del contenido</span>
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
                <p>• Previews de perfiles de usuario</p>
                <p>• Información adicional de links</p>
                <p>• Detalles de productos o items</p>
                <p>• Tooltips con contenido rico</p>
              </div>
            </div>
            <div className="border rounded-lg p-6 space-y-4">
              <h3 className="font-semibold">💡 Diferencia con Tooltip</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• <strong>Tooltip:</strong> Texto breve y simple</p>
                <p>• <strong>Hover Card:</strong> Contenido rico y complejo</p>
                <p>• Hover Card puede tener imágenes, links, etc.</p>
                <p>• Tooltip es más ligero y rápido</p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="bg-primary/5 border-primary/20 border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">♿ Accesibilidad</h3>
            <div className="space-y-2 text-sm">
              <p>✓ <strong>Keyboard accessible</strong> - Se abre con focus</p>
              <p>✓ <strong>Delay configurable</strong> - Tiempo antes de mostrar</p>
              <p>✓ <strong>ARIA attributes</strong> - aria-describedby apropiado</p>
              <p>✓ <strong>Focus management</strong> - No interfiere con navegación</p>
            </div>
          </div>

          <Separator />

          <div className="bg-muted/50 border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold">Composición</h3>
            <p className="text-sm text-muted-foreground">Componentes shadcn/ui utilizados</p>
            <div className="space-y-2">
              <p className="text-sm">
                <Badge variant="outline" className="mr-2">HoverCard</Badge>
                Basado en Radix UI Hover Card
              </p>
              <Separator className="my-3" />
              <p className="text-xs text-muted-foreground">
                Hover Card proporciona una manera elegante de mostrar contenido adicional
                sin sobrecargar la interfaz. Ideal para previews y información contextual.
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
}