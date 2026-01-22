import { ComponentShowcase } from "../ui/component-showcase";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function CarouselPage() {
  return (
    <ComponentShowcase
      title="Carousel"
      description="A carousel component for cycling through elements."
      category="Layout"
      
      // Main Preview
      preview={
        <div className="flex justify-center w-full">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      }
      
      // Main Code
      code={`import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`}
      
      // Usage
      usage="Importa los componentes Carousel desde @/components/ui/carousel. El componente utiliza embla-carousel-react bajo el capó. Asegúrate de envolver tus items en CarouselItem dentro de CarouselContent."
      usageCode={`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

function MyCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>Item 1</CarouselItem>
        <CarouselItem>Item 2</CarouselItem>
        <CarouselItem>Item 3</CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}`}
      
      // Props
      props={[
        {
          name: "opts",
          type: "CarouselOptions",
          description: "Opciones de configuración de Embla Carousel (align, loop, etc.)",
        },
        {
          name: "plugins",
          type: "CarouselPlugin[]",
          description: "Plugins de Embla Carousel (Autoplay, etc.)",
        },
        {
          name: "orientation",
          type: '"horizontal" | "vertical"',
          default: '"horizontal"',
          description: "Orientación del carrusel",
        },
        {
          name: "setApi",
          type: "(api: CarouselApi) => void",
          description: "Callback para obtener la instancia de la API del carrusel",
        },
        {
          name: "className",
          type: "string",
          description: "Clases CSS adicionales para personalización",
        },
      ]}
      
      // Examples
      examples={[
        {
          title: "Multiple Items",
          description: "Mostrar múltiples items a la vez usando clases de utilidad de Tailwind (basis)",
          preview: (
            <Carousel className="w-full max-w-sm mx-auto">
              <CarouselContent className="-ml-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-2xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          ),
          code: `<Carousel className="w-full max-w-sm">
  <CarouselContent className="-ml-1">
    {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
        <div className="p-1">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <span className="text-2xl font-semibold">{index + 1}</span>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Carousel</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">opts</code></td>
                    <td className="p-2">CarouselOptions</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Opciones de configuración de Embla Carousel (align, loop, etc.)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">plugins</code></td>
                    <td className="p-2">CarouselPlugin[]</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Plugins de Embla Carousel (Autoplay, etc.)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">orientation</code></td>
                    <td className="p-2">"horizontal" | "vertical"</td>
                    <td className="p-2">"horizontal"</td>
                    <td className="p-2">Orientación del carrusel</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">setApi</code></td>
                    <td className="p-2">(api: CarouselApi) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback para obtener la instancia de la API del carrusel</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">className</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Clases CSS adicionales para personalización</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Carousel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🖼️ Galerías de Imágenes</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar múltiples fotos de productos, portfolios o galerías de manera navegable
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📢 Banners Promocionales</h4>
                  <p className="text-sm text-muted-foreground">
                    Rotar ofertas, anuncios o mensajes importantes en la página principal
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💬 Testimonios</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar opiniones y reseñas de clientes de forma dinámica y atractiva
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📦 Productos Destacados</h4>
                  <p className="text-sm text-muted-foreground">
                    Presentar catálogo de productos, artículos relacionados o recomendaciones
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📰 Noticias Recientes</h4>
                  <p className="text-sm text-muted-foreground">
                    Destacar artículos, blogs o actualizaciones más recientes del sitio
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎓 Onboarding Guiado</h4>
                  <p className="text-sm text-muted-foreground">
                    Guiar a nuevos usuarios a través de pasos o funcionalidades de la aplicación
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del Carousel</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Limita el número de slides a 5-10 para evitar fatiga de navegación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">opts=&#123;&#123; loop: true &#125;&#125;</code> para permitir navegación continua infinita</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye controles de navegación (CarouselPrevious/CarouselNext) para accesibilidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrega indicadores visuales (dots) para mostrar la posición actual del slide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">basis-1/2</code> o <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">basis-1/3</code> en CarouselItem para mostrar múltiples items simultáneamente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En carousels automáticos, permite pausar al hover para mejorar la experiencia del usuario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Optimiza imágenes para cargar rápidamente y considera lazy loading para slides no visibles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En móviles, habilita swipe/drag para navegación táctil intuitiva (habilitado por defecto)</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}