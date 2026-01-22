import { ComponentShowcase } from "../ui/component-showcase";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function SkeletonPage() {
  return (
    <ComponentShowcase
      title="Skeleton"
      description="A placeholder to show while content is loading"
      category="Feedback"
      
      preview={
        <div className="space-y-4 w-full">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      }
      
      code={`import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonDemo() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
    </div>
  )
}`}
      
      usage="Importa el componente Skeleton desde @/components/ui/skeleton. Úsalo como placeholder mientras se cargan los datos reales. Ajusta las dimensiones con clases de Tailwind."
      
      usageCode={`import { Skeleton } from "@/components/ui/skeleton"

function MyComponent() {
  const [loading, setLoading] = useState(true);
  
  if (loading) {
    return <Skeleton className="h-12 w-full" />;
  }
  
  return <div>Content loaded!</div>;
}`}
      
      props={[
        {
          name: "className",
          type: "string",
          description: "Clases CSS adicionales para personalizar tamaño, forma y espaciado",
        },
      ]}
      
      examples={[
        {
          title: "Card Skeleton",
          description: "Loading state for a card layout",
          preview: (
            <div className="flex items-center space-x-4 w-full">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          ),
          code: `import { Skeleton } from "@/components/ui/skeleton"

<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2 flex-1">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-3/4" />
  </div>
</div>`
        },
        {
          title: "List Skeleton",
          description: "Loading state for list items",
          preview: (
            <div className="space-y-4 w-full">
              {[1, 2, 3].map((item) => (
                <div key={item} className="flex items-center space-x-4">
                  <Skeleton className="h-10 w-10 rounded" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ),
          code: `import { Skeleton } from "@/components/ui/skeleton"

<div className="space-y-4">
  {[1, 2, 3].map((item) => (
    <div key={item} className="flex items-center space-x-4">
      <Skeleton className="h-10 w-10 rounded" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-2/3" />
      </div>
    </div>
  ))}
</div>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Ejemplos Adicionales</CardTitle>
              <CardDescription>Más patrones de uso para Skeleton</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Profile Card Skeleton */}
              <div>
                <h4 className="font-medium mb-4">Profile Card</h4>
                <div className="border rounded-lg p-6 space-y-4 max-w-md">
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-16 w-16 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                  <Skeleton className="h-20 w-full" />
                  <div className="flex gap-2">
                    <Skeleton className="h-9 w-24" />
                    <Skeleton className="h-9 w-24" />
                  </div>
                </div>
              </div>

              {/* Table Skeleton */}
              <div>
                <h4 className="font-medium mb-4">Table Rows</h4>
                <div className="space-y-3 max-w-2xl">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="flex items-center gap-4">
                      <Skeleton className="h-4 w-8" />
                      <Skeleton className="h-4 flex-1" />
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-16" />
                      <Skeleton className="h-8 w-8 rounded" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Blog Post Skeleton */}
              <div>
                <h4 className="font-medium mb-4">Blog Post</h4>
                <div className="space-y-4 max-w-2xl">
                  <Skeleton className="h-48 w-full rounded-lg" />
                  <Skeleton className="h-8 w-3/4" />
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-3 w-32" />
                      <Skeleton className="h-3 w-24" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                </div>
              </div>

              {/* Product Grid Skeleton */}
              <div>
                <h4 className="font-medium mb-4">Product Grid</h4>
                <div className="grid grid-cols-3 gap-4 max-w-2xl">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="space-y-3">
                      <Skeleton className="h-40 w-full rounded-lg" />
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                      <Skeleton className="h-6 w-16" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Comment Thread Skeleton */}
              <div>
                <h4 className="font-medium mb-4">Comment Thread</h4>
                <div className="space-y-4 max-w-2xl">
                  {[1, 2].map((item) => (
                    <div key={item} className="flex gap-3">
                      <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2">
                          <Skeleton className="h-3 w-24" />
                          <Skeleton className="h-3 w-16" />
                        </div>
                        <Skeleton className="h-16 w-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dashboard Stats Skeleton */}
              <div>
                <h4 className="font-medium mb-4">Dashboard Stats</h4>
                <div className="grid grid-cols-4 gap-4 max-w-4xl">
                  {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="border rounded-lg p-4 space-y-3">
                      <Skeleton className="h-3 w-20" />
                      <Skeleton className="h-8 w-16" />
                      <Skeleton className="h-2 w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Skeleton</CardDescription>
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
                      <td className="p-2 font-mono">className</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Clases CSS adicionales para personalizar tamaño, forma y espaciado. Usa clases de Tailwind como h-4, w-full, rounded-full, etc.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">as</td>
                      <td className="p-2">React.ElementType</td>
                      <td className="p-2">"div"</td>
                      <td className="p-2">Elemento HTML a renderizar (div, span, etc.)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Skeleton</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🔄 Carga Inicial</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar placeholder mientras se cargan datos de APIs o bases de datos
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📱 Infinite Scroll</h4>
                  <p className="text-sm text-muted-foreground">
                    Indicar que más contenido se está cargando al hacer scroll
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🖼️ Lazy Loading</h4>
                  <p className="text-sm text-muted-foreground">
                    Placeholder para imágenes y contenido pesado que carga progresivamente
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📋 Tablas y Listas</h4>
                  <p className="text-sm text-muted-foreground">
                    Estado de carga para filas de tablas, items de lista, feeds
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🎴 Cards y Grids</h4>
                  <p className="text-sm text-muted-foreground">
                    Layouts de productos, artículos, perfiles durante carga
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📊 Dashboards</h4>
                  <p className="text-sm text-muted-foreground">
                    Widgets, gráficos, estadísticas mientras se procesan datos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén la misma estructura y dimensiones que el contenido real para evitar layout shifts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa múltiples skeletons con anchos variados (w-full, w-3/4, w-1/2) para simular texto real</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para avatares y elementos circulares, usa rounded-full en lugar de rounded</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra skeletons durante un mínimo de 300ms para evitar flashes en cargas rápidas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Replica la estructura exacta del componente real (mismo número de elementos, spacing, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para listas, muestra 3-5 items skeleton como preview del contenido que cargará</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Combina con Suspense de React para manejar estados de carga de forma declarativa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Evita usar skeleton para errores - usa mensajes de error explícitos en su lugar</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}