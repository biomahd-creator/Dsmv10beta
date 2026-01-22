import { ComponentShowcase } from "../ui/component-showcase";
import { GridShowcase } from "../ui/grid-showcase";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  Star,
  Sparkles,
  Columns,
  Layers,
  Grid3x3
} from "lucide-react";

export function GridShowcasePage() {
  return (
    <ComponentShowcase
      title="Grid Layout"
      description="Componente GridShowcase para crear layouts responsivos con control de columnas y espaciado."
      category="Layout"
      
      // Main Preview: 4 Columns Stats
      preview={
        <GridShowcase columns={4} gap="sm">
          <Card className="elevation-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-chart-1" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">$45,231</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-chart-1">+20.1%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card className="elevation-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Active Users</CardTitle>
              <Users className="h-4 w-4 text-chart-2" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">2,350</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-chart-2">+180</span> new this week
              </p>
            </CardContent>
          </Card>

          <Card className="elevation-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Growth Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-chart-3" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">+12.5%</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-chart-3">+2.3%</span> vs last quarter
              </p>
            </CardContent>
          </Card>

          <Card className="elevation-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">Engagement</CardTitle>
              <Activity className="h-4 w-4 text-chart-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">89.2%</div>
              <p className="text-xs text-muted-foreground mt-1">
                <span className="text-chart-4">+5.4%</span> increase
              </p>
            </CardContent>
          </Card>
        </GridShowcase>
      }
      
      // Code
      code={`import { GridShowcase } from "@/components/ui/grid-showcase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function GridStatsDemo() {
  return (
    <GridShowcase columns={4} gap="sm">
      <Card>
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-semibold">$45,231</div>
        </CardContent>
      </Card>
      {/* ... more cards */}
    </GridShowcase>
  );
}`}
      
      // Usage
      usage="GridShowcase facilita la creación de layouts CSS Grid responsivos. Mobile: 1 columna, Tablet: 2 columnas, Desktop: N columnas."
      
      props={[
        {
          name: "columns",
          type: "1 | 2 | 3 | 4 | 'auto'",
          default: "2",
          description: "Número de columnas en desktop. 'auto' usa minmax(280px, 1fr).",
        },
        {
          name: "gap",
          type: "'sm' | 'md' | 'lg'",
          default: "'md'",
          description: "Espaciado entre elementos (16px, 24px, 32px).",
        },
        {
          name: "children",
          type: "ReactNode",
          description: "Elementos del grid.",
        }
      ]}
      
      examples={[
        {
          title: "3 Columnas - Productos",
          description: "Ideal para catálogos. Mobile: 1 col, Desktop: 3 col.",
          preview: (
            <GridShowcase columns={3} gap="md">
              {[
                { name: "Premium Plan", price: "$29", icon: Star, color: "text-chart-1", bg: "bg-chart-1/10" },
                { name: "Business Plan", price: "$49", icon: TrendingUp, color: "text-chart-2", bg: "bg-chart-2/10" },
                { name: "Enterprise Plan", price: "$99", icon: Users, color: "text-chart-3", bg: "bg-chart-3/10" },
              ].map((product, i) => (
                <Card key={i} className="elevation-1 hover:elevation-2 transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg ${product.bg}`}>
                        <product.icon className={`h-5 w-5 ${product.color}`} />
                      </div>
                      <Badge variant="outline">{product.price}</Badge>
                    </div>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full" variant="outline">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </GridShowcase>
          ),
          code: `<GridShowcase columns={3} gap="md">
  {products.map(product => (
    <Card key={product.name}>
      {/* ... */}
    </Card>
  ))}
</GridShowcase>`
        },
        {
          title: "2 Columnas - Formularios",
          description: "Layout dividido para formularios o comparaciones.",
          preview: (
            <GridShowcase columns={2} gap="lg">
              <Card className="elevation-1">
                <CardHeader>
                  <CardTitle>Login</CardTitle>
                  <CardDescription>Existing user</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input type="email" placeholder="Email" />
                  <Input type="password" placeholder="Password" />
                  <Button className="w-full">Sign In</Button>
                </CardContent>
              </Card>

              <Card className="elevation-1">
                <CardHeader>
                  <CardTitle>Register</CardTitle>
                  <CardDescription>New account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Full Name" />
                  <Input type="email" placeholder="Email" />
                  <Button className="w-full" variant="outline">Create Account</Button>
                </CardContent>
              </Card>
            </GridShowcase>
          ),
          code: `<GridShowcase columns={2} gap="lg">
  <Card>...</Card>
  <Card>...</Card>
</GridShowcase>`
        },
        {
          title: "Auto-fit",
          description: "Columnas dinámicas según el espacio disponible (min 280px).",
          preview: (
            <GridShowcase columns="auto" gap="md">
              {[
                { icon: "⚡", title: "Fast" },
                { icon: "🔒", title: "Secure" },
                { icon: "✅", title: "Reliable" },
              ].map((feature, i) => (
                <Card key={i} className="elevation-1 text-center">
                  <CardContent className="pt-6 space-y-3">
                    <div className="text-2xl">{feature.icon}</div>
                    <h3 className="font-semibold">{feature.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </GridShowcase>
          ),
          code: `<GridShowcase columns="auto">\n  {/* Cards will wrap automatically */}\n</GridShowcase>`
        }
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades Detalladas</CardTitle>
              <CardDescription>API completa del componente GridShowcase</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">columns</code></td>
                    <td className="p-2">1 | 2 | 3 | 4 | 'auto'</td>
                    <td className="p-2">2</td>
                    <td className="p-2">Número de columnas en desktop. 'auto' usa grid-auto-fit con min 280px</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">gap</code></td>
                    <td className="p-2">'sm' | 'md' | 'lg'</td>
                    <td className="p-2">'md'</td>
                    <td className="p-2">Espaciado entre elementos: sm=16px, md=24px, lg=32px</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">children</code></td>
                    <td className="p-2">ReactNode</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Elementos del grid (Cards, divs, etc.)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">className</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Clases CSS adicionales para el contenedor grid</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">responsive</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">true</td>
                    <td className="p-2">Activa breakpoints mobile (1 col) y tablet (2 col)</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones del GridShowcase en diseño responsivo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 KPI Dashboards</h4>
                  <p className="text-sm text-muted-foreground">
                    Grid de 4 columnas para métricas clave con cards de estadísticas
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🛍️ Catálogos de Productos</h4>
                  <p className="text-sm text-muted-foreground">
                    Grid de 3 columnas para listados de productos o servicios con imágenes
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📝 Formularios Divididos</h4>
                  <p className="text-sm text-muted-foreground">
                    Grid de 2 columnas para separar secciones de formularios largos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">👥 Grids de Usuarios</h4>
                  <p className="text-sm text-muted-foreground">
                    Listado de perfiles de equipo o directorio con auto-fit responsive
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📰 Blog y Noticias</h4>
                  <p className="text-sm text-muted-foreground">
                    Grid de 3 columnas para artículos con preview de imágenes y extractos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">⚙️ Configuraciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Grid de 2 columnas para panels de configuración divididos por categorías
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de GridShowcase</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa columns=4 para dashboards KPI, columns=3 para catálogos y columns=2 para formularios divididos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Aprovecha columns="auto" para grids flexibles que se adaptan automáticamente al viewport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén gap='md' como default (24px) - usa 'sm' para grids densos y 'lg' para layouts espaciados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Combina con elevation-1 en Cards para jerarquía visual clara sin bordes intrusivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>El componente colapsa automáticamente a 1 columna en mobile (&lt;768px) para UX óptima</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Evita grids de más de 4 columnas - en desktop se vuelven difíciles de escanear</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa min-height consistente en Cards dentro del grid para alineación visual uniforme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Combina con Skeleton placeholders para estados de carga manteniendo el layout estable</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}