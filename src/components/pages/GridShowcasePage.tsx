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
          code: `<GridShowcase columns="auto">
  {/* Cards will wrap automatically */}
</GridShowcase>`
        }
      ]}
    />
  );
}
