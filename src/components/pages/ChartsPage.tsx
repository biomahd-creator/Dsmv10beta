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
              <CardTitle className="text-lg">Available Chart Types</CardTitle>
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
              <CardTitle>Installation</CardTitle>
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

          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Use ResponsiveContainer para gráficos adaptables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén colores consistentes con tu design system</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye tooltips para mejor comprensión de datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Optimiza alturas para dispositivos móviles (200-300px)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa gradientes y animaciones con moderación</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}