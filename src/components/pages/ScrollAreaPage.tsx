import { ComponentShowcase } from "../ui/component-showcase";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function ScrollAreaPage() {
  return (
    <ComponentShowcase
      title="Scroll Area"
      description="Augments native scroll functionality for custom, cross-browser styling"
      category="Layout"
      
      preview={
        <ScrollArea className="h-72 w-full rounded-md border p-4">
          <div className="space-y-4">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i}>
                <div className="text-sm">
                  Item {i + 1}
                </div>
                {i < 19 && <Separator className="my-2" />}
              </div>
            ))}
          </div>
        </ScrollArea>
      }
      
      code={`import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

export function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-full rounded-md border p-4">
      <div className="space-y-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i}>
            <div className="text-sm">
              Item {i + 1}
            </div>
            {i < 19 && <Separator className="my-2" />}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}`}
      
      usage="Importa ScrollArea desde @/components/ui/scroll-area. Define una altura fija usando className (ej: h-72) para habilitar el scroll vertical. El componente proporciona scrollbars personalizados que se adaptan al tema."
      
      usageCode={`import { ScrollArea } from "@/components/ui/scroll-area"

function MyComponent() {
  return (
    <ScrollArea className="h-[400px] w-full rounded-md border p-4">
      <div>
        {/* Your scrollable content here */}
        <p>Content that exceeds the height will be scrollable</p>
      </div>
    </ScrollArea>
  );
}`}
      
      props={[
        {
          name: "className",
          type: "string",
          description: "Clases CSS para personalizar tamaño y estilo. Debe incluir una altura fija para el scroll vertical.",
        },
        {
          name: "orientation",
          type: '"vertical" | "horizontal" | "both"',
          default: '"vertical"',
          description: "Dirección del scroll permitido",
        },
      ]}
      
      examples={[
        {
          title: "Horizontal Scroll",
          description: "Scrollable content in horizontal direction",
          preview: (
            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
              <div className="flex w-max space-x-4 p-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="shrink-0">
                    <div className="h-20 w-40 rounded-md border bg-muted flex items-center justify-center">
                      Item {i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ),
          code: `import { ScrollArea } from "@/components/ui/scroll-area"

<ScrollArea className="w-full whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={i} className="shrink-0">
        <div className="h-20 w-40 rounded-md border bg-muted flex items-center justify-center">
          Item {i + 1}
        </div>
      </div>
    ))}
  </div>
</ScrollArea>`
        },
        {
          title: "Tags List",
          description: "Lista de tags scrollable verticalmente",
          preview: (
            <ScrollArea className="h-48 w-full rounded-md border p-4">
              <div className="space-y-2">
                {["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js", "Express", 
                  "MongoDB", "PostgreSQL", "Docker", "AWS", "Vercel", "Supabase"].map((tag) => (
                  <div key={tag} className="flex items-center">
                    <Badge variant="secondary" className="mr-2">{tag}</Badge>
                    <span className="text-sm text-muted-foreground">Technology</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ),
          code: `<ScrollArea className="h-48 w-full rounded-md border p-4">
  <div className="space-y-2">
    {tags.map((tag) => (
      <div key={tag}>
        <Badge variant="secondary">{tag}</Badge>
      </div>
    ))}
  </div>
</ScrollArea>`
        },
        {
          title: "Chat Messages",
          description: "Área de chat con mensajes scrollables",
          preview: (
            <ScrollArea className="h-80 w-full rounded-md border p-4">
              <div className="space-y-4">
                {Array.from({ length: 15 }).map((_, i) => (
                  <div key={i} className={`flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-xs px-4 py-2 rounded-lg ${
                      i % 2 === 0 ? 'bg-muted' : 'bg-primary text-primary-foreground'
                    }`}>
                      <p className="text-sm">
                        Este es un mensaje de ejemplo #{i + 1}
                      </p>
                      <span className="text-xs opacity-70">
                        {new Date().toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ),
          code: `<ScrollArea className="h-80 w-full rounded-md border p-4">
  <div className="space-y-4">
    {messages.map((msg, i) => (
      <div key={i} className={i % 2 === 0 ? 'justify-start' : 'justify-end'}>
        <div className="px-4 py-2 rounded-lg bg-muted">
          <p className="text-sm">{msg.text}</p>
          <span className="text-xs">{msg.time}</span>
        </div>
      </div>
    ))}
  </div>
</ScrollArea>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Scroll Area</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">className</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Clases CSS para personalizar tamaño y estilo (debe incluir altura fija)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">orientation</code></td>
                    <td className="p-2">"vertical" | "horizontal" | "both"</td>
                    <td className="p-2">"vertical"</td>
                    <td className="p-2">Dirección del scroll permitido</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">type</code></td>
                    <td className="p-2">"auto" | "always" | "scroll" | "hover"</td>
                    <td className="p-2">"hover"</td>
                    <td className="p-2">Cuándo mostrar las scrollbars</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">scrollHideDelay</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">600</td>
                    <td className="p-2">Tiempo en ms antes de ocultar scrollbars después del hover</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">dir</code></td>
                    <td className="p-2">"ltr" | "rtl"</td>
                    <td className="p-2">"ltr"</td>
                    <td className="p-2">Dirección del texto para scroll horizontal</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Scroll Area</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💬 Chat y Mensajería</h4>
                  <p className="text-sm text-muted-foreground">
                    Contenedor de mensajes con scroll automático y scrollbars personalizados
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📋 Listas Largas</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar listas de items, notificaciones o logs con altura contenida
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Tablas de Datos</h4>
                  <p className="text-sm text-muted-foreground">
                    Tablas con muchas filas o columnas que necesitan scroll horizontal/vertical
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎨 Galerías</h4>
                  <p className="text-sm text-muted-foreground">
                    Galerías de imágenes o cards con scroll horizontal suave
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📝 Contenido Extenso</h4>
                  <p className="text-sm text-muted-foreground">
                    Artículos, documentación o términos y condiciones con scroll vertical
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🗂️ Sidebars</h4>
                  <p className="text-sm text-muted-foreground">
                    Barras laterales con navegación extensa o widgets scrollables
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del Scroll Area</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Siempre define una altura fija (h-72, h-[400px]) para habilitar el scroll vertical</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para scroll horizontal, usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">whitespace-nowrap</code> y <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">w-max</code> en el contenido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrega padding (p-4) al ScrollArea para evitar que el contenido toque los bordes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">rounded-md border</code> para dar un aspecto contenido al área scrollable</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para listas largas (&gt;1000 items), considera usar virtualización con libraries como react-window</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Las scrollbars personalizadas respetan el tema (dark/light) automáticamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En móviles, las scrollbars se ocultan por defecto para usar el scroll nativo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Evita anidar múltiples ScrollAreas; puede confundir al usuario sobre qué contenido está scrolleando</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}
