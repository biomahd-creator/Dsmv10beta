import { ComponentShowcase } from "../ui/component-showcase";
import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { ChartShowcase } from "../advanced/ChartShowcase";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  LineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const sampleData = [
  { month: "Ene", value: 45 },
  { month: "Feb", value: 52 },
  { month: "Mar", value: 61 },
  { month: "Abr", value: 58 },
  { month: "May", value: 70 },
  { month: "Jun", value: 65 },
];

export function ChartsPage() {
  return (
    <ComponentShowcase
      title="Charts"
      description="Beautiful charts built using Recharts and Tailwind CSS."
      badges={[
        { text: "Advanced", variant: "secondary" }
      ]}
      previewComponent={
        <div className="w-full max-w-2xl">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={sampleData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                strokeWidth={3}
                name="Facturas"
                dot={{ fill: "hsl(var(--primary))", r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      }
      codeBlock={`import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Ene", value: 45 },
  { month: "Feb", value: 52 },
  { month: "Mar", value: 61 },
  { month: "Abr", value: 58 },
  { month: "May", value: 70 },
  { month: "Jun", value: 65 },
];

export function ChartDemo() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
        <XAxis dataKey="month" tick={{ fill: "hsl(var(--muted-foreground))" }} />
        <YAxis tick={{ fill: "hsl(var(--muted-foreground))" }} />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="hsl(var(--primary))"
          strokeWidth={3}
          name="Facturas"
          dot={{ fill: "hsl(var(--primary))", r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}`}
      examplesSection={
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Chart Gallery</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartShowcase />
            </CardContent>
          </Card>
        </div>
      }
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades Comunes de Recharts</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2 text-foreground">Componente / Prop</th>
                    <th className="text-left p-2 text-foreground">Tipo</th>
                    <th className="text-left p-2 text-foreground">Descripción</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr className="border-b border-border bg-muted/30">
                    <td className="p-2 font-semibold" colSpan={3}>ResponsiveContainer</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">width</code></td>
                    <td className="p-2">string | number</td>
                    <td className="p-2">Ancho del contenedor (ej: "100%", 600)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">height</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">Altura del gráfico en píxeles</td>
                  </tr>
                  <tr className="border-b border-border bg-muted/30">
                    <td className="p-2 font-semibold" colSpan={3}>LineChart / BarChart / PieChart</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">data</code></td>
                    <td className="p-2">array</td>
                    <td className="p-2">Array de objetos con los datos a visualizar</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">dataKey</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">Clave del objeto data para el eje o serie</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">stroke</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">Color del trazo/línea (CSS color o hsl var)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">fill</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">Color de relleno (barras, áreas, pie)</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Tipos de Gráficos Disponibles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Line Chart</h4>
                  <p className="text-sm text-muted-foreground">
                    Perfect for temporal trends and metric evolution
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Bar Chart</h4>
                  <p className="text-sm text-muted-foreground">
                    Ideal for comparisons between categories
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Pie Chart</h4>
                  <p className="text-sm text-muted-foreground">
                    Shows distributions and percentages
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">✓ Area Chart</h4>
                  <p className="text-sm text-muted-foreground">
                    Visualizes volume and accumulated trends
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Dashboards Financieros</h4>
                  <p className="text-sm text-muted-foreground">
                    Visualizar ingresos, gastos y flujo de caja en gráficos de línea o barras
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📈 KPIs y Métricas</h4>
                  <p className="text-sm text-muted-foreground">
                    Monitorear indicadores clave de rendimiento a lo largo del tiempo
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🥧 Distribución de Datos</h4>
                  <p className="text-sm text-muted-foreground">
                    Mostrar proporciones con pie charts (ej: cuota de mercado, categorías)
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📉 Comparativas Temporales</h4>
                  <p className="text-sm text-muted-foreground">
                    Comparar periodos mes a mes, año a año con múltiples series
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💼 Reportes Ejecutivos</h4>
                  <p className="text-sm text-muted-foreground">
                    Presentar datos de ventas, clientes y operaciones de forma visual
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎯 Analytics de Usuario</h4>
                  <p className="text-sm text-muted-foreground">
                    Tracking de actividad, conversiones y engagement en aplicaciones
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">ResponsiveContainer</code> para gráficos adaptables que se ajusten al viewport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén colores consistentes con tu design system usando hsl(var(--primary)) y variables CSS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye Tooltips para mostrar valores exactos al hover sobre los datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Optimiza alturas para dispositivos móviles (200-300px) y desktops (300-500px)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa gradientes y animaciones con moderación para no distraer del contenido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Añade Legend cuando tengas múltiples series de datos para claridad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Formatea números en tooltips con separadores de miles y símbolos de moneda apropiados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Considera cargar datos de forma asíncrona y mostrar loading states para datasets grandes</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Instalación</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Install Recharts library:
              </p>
              <pre className="bg-muted p-4 rounded-lg text-sm">
                <code>npm install recharts</code>
              </pre>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}