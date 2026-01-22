import { ComponentShowcase } from "../ui/component-showcase";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function PaginationPage() {
  return (
    <ComponentShowcase
      title="Pagination"
      description="Pagination with page navigation, next and previous links."
      category="Navigation"
      
      // Main Preview
      preview={
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      }
      
      // Code
      code={`import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}`}
      
      // Usage
      usage="Pagination se compone de varios subcomponentes para construir una barra de navegación de páginas. Usa PaginationLink con isActive para la página actual."
      
      props={[
        {
          name: "isActive",
          type: "boolean",
          default: "false",
          description: "Indica si el link corresponde a la página actual (estilo activo).",
        },
        {
          name: "size",
          type: "'default' | 'sm' | 'lg' | 'icon'",
          default: "'icon'",
          description: "Tamaño del botón de paginación (PaginationLink usa variante de botón).",
        }
      ]}
      
      examples={[
        {
          title: "Simple Pagination",
          description: "Basic pagination without ellipsis.",
          preview: (
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          ),
          code: `<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    {/* Page Links */}
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`
        }
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Pagination</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">isActive</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Indica si el link corresponde a la página actual</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">size</code></td>
                    <td className="p-2">"default" | "sm" | "lg" | "icon"</td>
                    <td className="p-2">"icon"</td>
                    <td className="p-2">Tamaño del botón de paginación</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">href</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">URL de destino del enlace de página</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onClick</code></td>
                    <td className="p-2">(event: Event) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback ejecutado al hacer click en un link</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">disabled</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Deshabilita el botón Previous/Next</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Pagination</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Tablas de Datos</h4>
                  <p className="text-sm text-muted-foreground">
                    Navegar entre páginas de resultados en tablas con grandes volúmenes de datos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔍 Resultados de Búsqueda</h4>
                  <p className="text-sm text-muted-foreground">
                    Dividir resultados de búsqueda en páginas para mejor experiencia de usuario
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📰 Blogs y Artículos</h4>
                  <p className="text-sm text-muted-foreground">
                    Navegar entre posts o artículos en sitios de contenido editorial
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🛒 E-commerce</h4>
                  <p className="text-sm text-muted-foreground">
                    Explorar catálogos de productos organizados en múltiples páginas
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📋 Listas de Items</h4>
                  <p className="text-sm text-muted-foreground">
                    Paginar listas de facturas, transacciones, usuarios o cualquier colección
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🖼️ Galerías</h4>
                  <p className="text-sm text-muted-foreground">
                    Navegar colecciones de imágenes, fotos o media organizadas por páginas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de Pagination</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra máximo 7-9 números de página visibles para evitar sobrecarga visual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa PaginationEllipsis (...) para indicar páginas ocultas entre rangos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Deshabilita Previous en página 1 y Next en última página para claridad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Marca claramente la página actual con <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">isActive</code> para orientación del usuario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra información de contexto como "Showing 1-10 of 100" junto a la paginación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye atajos de teclado (flechas ←/→) para mejorar la navegación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Persiste el estado de página en la URL (?page=2) para compartir y bookmarks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En móviles, considera mostrar solo Previous/Next y página actual para ahorrar espacio</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}