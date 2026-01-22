import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Separator } from "../ui/separator";
import { ScrollArea } from "../ui/scroll-area";
import { 
  CheckCircle2, 
  Package, 
  Palette, 
  Layers, 
  Accessibility, 
  Code2,
  Zap,
  Shield,
  Sparkles,
  Users,
  TrendingUp,
  Activity,
  Grid3x3,
  Scale,
  Award,
  Rocket,
  Layout,
  MousePointerClick,
  MessageSquare,
  Database,
  FileCode,
  BookOpen
} from "lucide-react";
import { Logo } from "../layout/Logo";

export function HomePage() {
  // Component Registry Data
  const categories = [
    {
      name: "Actions",
      icon: MousePointerClick,
      color: "text-primary",
      components: [
        { name: "Button", status: "completed", hasNew: true },
        { name: "Toggle", status: "completed", hasNew: true },
        { name: "Toggle Group", status: "completed", hasNew: true },
      ]
    },
    {
      name: "Forms",
      icon: FileCode,
      color: "text-green-500",
      components: [
        { name: "Input", status: "completed", hasNew: true },
        { name: "Textarea", status: "completed", hasNew: true },
        { name: "Select", status: "completed", hasNew: true },
        { name: "Checkbox", status: "completed", hasNew: true },
        { name: "Radio Group", status: "completed", hasNew: true },
        { name: "Switch", status: "completed", hasNew: true },
        { name: "Slider", status: "completed", hasNew: true },
        { name: "Calendar", status: "completed", hasNew: true },
        { name: "Label", status: "completed", hasNew: true },
        { name: "Date Picker", status: "completed", hasNew: true },
        { name: "Combobox", status: "completed", hasNew: true },
        { name: "Form", status: "completed", hasNew: true },
        { name: "Input OTP", status: "completed", hasNew: true },
        { name: "Multi Select", status: "completed", hasNew: false },
      ]
    },
    {
      name: "Navigation",
      icon: Layers,
      color: "text-purple-500",
      components: [
        { name: "Tabs", status: "completed", hasNew: true },
        { name: "Breadcrumb", status: "completed", hasNew: false },
        { name: "Command", status: "completed", hasNew: false },
        { name: "Dropdown Menu", status: "completed", hasNew: false },
        { name: "Pagination", status: "completed", hasNew: false },
        { name: "Menubar", status: "completed", hasNew: false },
        { name: "Navigation Menu", status: "completed", hasNew: false },
        { name: "Context Menu", status: "completed", hasNew: false },
        { name: "Sidebar", status: "completed", hasNew: true },
      ]
    },
    {
      name: "Data Display",
      icon: Database,
      color: "text-orange-500",
      components: [
        { name: "Card", status: "completed", hasNew: true },
        { name: "Badge", status: "completed", hasNew: true },
        { name: "Table", status: "completed", hasNew: true },
        { name: "Avatar", status: "completed", hasNew: false },
        { name: "Separator", status: "completed", hasNew: false },
        { name: "Hover Card", status: "completed", hasNew: false },
      ]
    },
    {
      name: "Feedback",
      icon: MessageSquare,
      color: "text-pink-500",
      components: [
        { name: "Alert", status: "completed", hasNew: true },
        { name: "Dialog", status: "completed", hasNew: true },
        { name: "Tooltip", status: "completed", hasNew: false },
        { name: "Progress", status: "completed", hasNew: false },
        { name: "Skeleton", status: "completed", hasNew: false },
        { name: "Popover", status: "completed", hasNew: false },
        { name: "Sheet", status: "completed", hasNew: false },
        { name: "Alert Dialog", status: "completed", hasNew: false },
        { name: "Toast", status: "completed", hasNew: false },
        { name: "Drawer", status: "completed", hasNew: false },
      ]
    },
    {
      name: "Layout",
      icon: Layout,
      color: "text-indigo-500",
      components: [
        { name: "Accordion", status: "completed", hasNew: false },
        { name: "Carousel", status: "completed", hasNew: false },
        { name: "Collapsible", status: "completed", hasNew: false },
        { name: "Scroll Area", status: "completed", hasNew: false },
        { name: "Resizable", status: "completed", hasNew: false },
      ]
    },
    {
      name: "Advanced",
      icon: Sparkles,
      color: "text-yellow-500",
      components: [
        { name: "Charts", status: "completed", hasNew: false },
        { name: "Color Picker", status: "completed", hasNew: false },
        { name: "Rating", status: "completed", hasNew: false },
        { name: "Kanban", status: "completed", hasNew: false },
        { name: "Date Range Picker", status: "completed", hasNew: false },
        { name: "File Uploader", status: "completed", hasNew: false },
        { name: "Rich Text Editor", status: "completed", hasNew: false },
        { name: "Timeline", status: "completed", hasNew: false },
        { name: "Data Table", status: "completed", hasNew: false },
        { name: "Tree Table", status: "completed", hasNew: false },
        { name: "Pivot Table", status: "completed", hasNew: true },
        { name: "Export Data", status: "completed", hasNew: false },
        { name: "Funnel Chart", status: "completed", hasNew: false },
        { name: "Gauge Chart", status: "completed", hasNew: false },
        { name: "Heatmap", status: "completed", hasNew: false },
        { name: "Sparkline", status: "completed", hasNew: false },
        { name: "Treemap Chart", status: "completed", hasNew: false },
        { name: "Step Indicator", status: "completed", hasNew: false },
        { name: "Form Builder", status: "completed", hasNew: false },
        { name: "Multi Column Form", status: "completed", hasNew: false },
        { name: "Conditional Form", status: "completed", hasNew: false },
      ]
    },
    {
      name: "Business Patterns",
      icon: TrendingUp,
      color: "text-cyan-500",
      components: [
        { name: "Invoice Generator", status: "completed", hasNew: false },
        { name: "Payment Form", status: "completed", hasNew: false },
        { name: "Multi Step Wizard", status: "completed", hasNew: false },
        { name: "Data Table Advanced", status: "completed", hasNew: false },
        { name: "Advanced Filter Panel", status: "completed", hasNew: false },
        { name: "Approval Timeline", status: "completed", hasNew: false },
        { name: "Stats Dashboard", status: "completed", hasNew: false },
        { name: "Quick Action Toolbar", status: "completed", hasNew: false },
        { name: "Upload Zone", status: "completed", hasNew: false },
        { name: "Notification Center", status: "completed", hasNew: false },
        { name: "Factoring Calculator", status: "completed", hasNew: false },
        { name: "Liquidity Calculator", status: "completed", hasNew: false },
        { name: "Cupo Validator", status: "completed", hasNew: false },
        { name: "Approval Flow Wizard", status: "completed", hasNew: false },
        { name: "Onboarding Wizard", status: "completed", hasNew: false },
      ]
    },
    {
      name: "Business Components",
      icon: Award,
      color: "text-emerald-500",
      components: [
        { name: "Status KPI Card", status: "completed", hasNew: false },
        { name: "Audit Log Viewer", status: "completed", hasNew: false },
        { name: "Booking Calendar", status: "completed", hasNew: false },
        { name: "Contact Form", status: "completed", hasNew: false },
        { name: "Testimonials Carousel", status: "completed", hasNew: false },
        { name: "Color Swatch", status: "completed", hasNew: false },
        { name: "Contrast Preview", status: "completed", hasNew: false },
        { name: "Grid System Preview", status: "completed", hasNew: false },
        { name: "Spacing Preview", status: "completed", hasNew: false },
        { name: "Status Alert", status: "completed", hasNew: false },
      ]
    },
    {
      name: "Help System",
      icon: BookOpen,
      color: "text-rose-500",
      components: [
        { name: "Contextual Help", status: "completed", hasNew: true },
        { name: "Help Center", status: "completed", hasNew: true },
        { name: "Help Button", status: "completed", hasNew: true },
        { name: "Product Tour", status: "completed", hasNew: true },
      ]
    }
  ];

  const realPages = [
    "Multi Step Wizard", "Invoice Generator", "Factoring Dashboard", "Operations List", 
    "Approval Flow", "Liquidity Calculator", "Onboarding", "Admin Portal", "Status KPIs"
  ];

  const totalComponents = categories.reduce((acc, cat) => acc + cat.components.length, 0);
  const totalCategories = categories.length;
  const newComponents = categories.reduce((acc, cat) => acc + cat.components.filter(c => c.hasNew).length, 0);

  const stats = [
    { label: "Componentes Totales", value: `${totalComponents}`, icon: Package, color: "text-primary" },
    { label: "DSM Migration", value: "100%", icon: Sparkles, color: "text-green-500" },
    { label: "Categorías", value: `${totalCategories}`, icon: Layers, color: "text-primary" },
    { label: "Compliance WCAG AA", value: "98%", icon: Accessibility, color: "text-warning" },
  ];

  const features = [
    {
      icon: Palette,
      title: "Design Tokens",
      description: "Sistema de diseño basado en tokens CSS con colores corporativos #84cc16 (Verde Lima) y #1C2D3A (Azul Oscuro)",
      badge: "Activo"
    },
    {
      icon: Accessibility,
      title: "WCAG 2.1 AA Compliant",
      description: "98% de cumplimiento con ratios de contraste optimizados para accesibilidad",
      badge: "Verificado"
    },
    {
      icon: Layers,
      title: "Atomic Design",
      description: "Arquitectura jerárquica con Atoms, Molecules, Organisms, Templates y Pages",
      badge: "Implementado"
    },
    {
      icon: Code2,
      title: "shadcn/ui Base",
      description: "Construido sobre componentes oficiales de shadcn/ui con Radix UI primitives",
      badge: "Estable"
    },
    {
      icon: Zap,
      title: "Reactivos y Dinámicos",
      description: "Theme Customizer en tiempo real con soporte para modo claro/oscuro",
      badge: "Live"
    },
    {
      icon: Shield,
      title: "Tipografía Satoshi",
      description: "Sistema tipográfico único con escalas predefinidas y pesos consistentes",
      badge: "Sistema"
    },
  ];

  const techStack = [
    { name: "React 18", version: "18.x" },
    { name: "TypeScript", version: "5.x" },
    { name: "Tailwind CSS", version: "4.0" },
    { name: "shadcn/ui", version: "Latest" },
    { name: "Radix UI", version: "Latest" },
    { name: "Recharts", version: "2.x" },
  ];

  const progress = {
    components: 100, // Componentes oficiales shadcn/ui
    patterns: 100, // Patterns completos
    business: 100, // Business components
    advanced: 100, // Advanced components
    accessibility: 98, // WCAG compliance
    documentation: 29, // Documentation (20 componentes de ~70 con documentación completa)
  };

  // Sprint Progress
  const sprintProgress = {
    sprint1: { name: "Sprint 1: Básicos", completed: 8, total: 8, percentage: 100 },
    sprint2: { name: "Sprint 2: Navegación & Overlay", completed: 10, total: 10, percentage: 100 },
    sprint3: { name: "Sprint 3: Forms & Feedback", completed: 2, total: 12, percentage: 17 },
  };

  const documentationStats = {
    total: 70, // Total de páginas de componentes que necesitan documentación
    completed: 20, // Componentes con documentación completa (props + 6 casos de uso + 8 mejores prácticas)
    inProgress: 2, // Componentes en progreso actual
    pending: 48, // Componentes pendientes
  };

  return (
    <div className="space-y-8 pb-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-8 md:p-12 elevation-2">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-4 flex-wrap">
            <Logo size="lg" variant="auto" />
            <Badge variant="default" className="text-xs px-3 py-1">
              v2.0.0
            </Badge>
            <Badge className="text-xs px-3 py-1 bg-green-500 hover:bg-green-600 gap-1">
              <Sparkles className="h-3 w-3" />
              DSM 100%
            </Badge>
            <Badge className="text-xs px-3 py-1 bg-blue-500 hover:bg-blue-600 gap-1">
              <Grid3x3 className="h-3 w-3" />
              {totalComponents} Componentes
            </Badge>
          </div>
          <h1 className="mb-4">
            Design System Manager
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-6 font-light">
            Sistema de diseño completo para aplicaciones de Factoring, construido con React, 
            Tailwind CSS y shadcn/ui. Gestión centralizada de <strong>{totalComponents} componentes</strong> distribuidos 
            en <strong>{totalCategories} categorías</strong>, enfocado en accesibilidad, consistencia y escalabilidad.
          </p>
          <div className="flex flex-wrap gap-3">
            <Badge variant="outline" className="gap-2">
              <Activity className="h-3 w-3" />
              Última actualización: Enero 2026
            </Badge>
            <Badge variant="outline" className="gap-2">
              <Users className="h-3 w-3" />
              Metodología Atomic Design
            </Badge>
            <Badge variant="outline" className="gap-2">
              <Layout className="h-3 w-3" />
              {realPages.length} Páginas Reales
            </Badge>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl -z-0" />
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="elevation-1 hover:elevation-2 transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm">{stat.label}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress Section */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="elevation-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <CardTitle>Estado de Implementación</CardTitle>
            </div>
            <CardDescription>
              Progreso actual del desarrollo del Design System
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Componentes Core</span>
                <span className="font-semibold">{progress.components}%</span>
              </div>
              <Progress value={progress.components} className="h-2" />
              <p className="text-xs text-muted-foreground">48/48 componentes oficiales shadcn/ui</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Patterns Compuestos</span>
                <span className="font-semibold">{progress.patterns}%</span>
              </div>
              <Progress value={progress.patterns} className="h-2" />
              <p className="text-xs text-muted-foreground">Patterns de UX completos</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Advanced Features</span>
                <span className="font-semibold">{progress.advanced}%</span>
              </div>
              <Progress value={progress.advanced} className="h-2" />
              <p className="text-xs text-muted-foreground">Componentes avanzados implementados</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Accesibilidad WCAG 2.1 AA</span>
                <span className="font-semibold">{progress.accessibility}%</span>
              </div>
              <Progress value={progress.accessibility} className="h-2" />
              <p className="text-xs text-muted-foreground">Ratios de contraste optimizados</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Documentación</span>
                <span className="font-semibold text-primary">{progress.documentation}%</span>
              </div>
              <Progress value={progress.documentation} className="h-2" />
              <p className="text-xs text-muted-foreground">{documentationStats.completed}/{documentationStats.total} componentes con docs completas</p>
            </div>
          </CardContent>
        </Card>

        {/* Documentation Sprint Progress */}
        <Card className="elevation-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <CardTitle>Sprints de Documentación</CardTitle>
            </div>
            <CardDescription>
              Progreso de la auditoría y actualización de componentes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Sprint 1 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-muted-foreground">{sprintProgress.sprint1.name}</span>
                </div>
                <span className="font-semibold text-green-500">{sprintProgress.sprint1.percentage}%</span>
              </div>
              <Progress value={sprintProgress.sprint1.percentage} className="h-2 bg-green-500/20" />
              <p className="text-xs text-muted-foreground">
                {sprintProgress.sprint1.completed}/{sprintProgress.sprint1.total} componentes • 
                Button, Badge, Label, Accordion, Alert, Card, Breadcrumb, Checkbox
              </p>
            </div>

            {/* Sprint 2 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span className="text-muted-foreground">{sprintProgress.sprint2.name}</span>
                </div>
                <span className="font-semibold text-green-500">{sprintProgress.sprint2.percentage}%</span>
              </div>
              <Progress value={sprintProgress.sprint2.percentage} className="h-2 bg-green-500/20" />
              <p className="text-xs text-muted-foreground">
                {sprintProgress.sprint2.completed}/{sprintProgress.sprint2.total} componentes • 
                NavigationMenu, Menubar, Pagination, Command, Combobox, ContextMenu, DropdownMenu, Dialog, Sheet, Drawer
              </p>
            </div>

            {/* Sprint 3 */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary animate-pulse" />
                  <span className="text-muted-foreground">{sprintProgress.sprint3.name}</span>
                </div>
                <span className="font-semibold text-primary">{sprintProgress.sprint3.percentage}%</span>
              </div>
              <Progress value={sprintProgress.sprint3.percentage} className="h-2" />
              <p className="text-xs text-muted-foreground">
                {sprintProgress.sprint3.completed}/{sprintProgress.sprint3.total} componentes • 
                Input, Tooltip completados • En progreso...
              </p>
            </div>

            <Separator />

            {/* Summary */}
            <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
              <div>
                <p className="text-sm font-medium">Total Documentados</p>
                <p className="text-xs text-muted-foreground">Con props, casos de uso y mejores prácticas</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-primary">{documentationStats.completed}</p>
                <p className="text-xs text-muted-foreground">de {documentationStats.total}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Component Registry */}
      <Card className="elevation-1">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Code2 className="h-5 w-5 text-primary" />
            Component Registry
          </CardTitle>
          <CardDescription>
            Inventario completo de {totalComponents} componentes disponibles en el sistema
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-8">
              {categories.map((category, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-center gap-2 sticky top-0 bg-background/95 backdrop-blur py-2 z-10 border-b">
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <Badge variant="secondary" className="ml-auto">
                      {category.components.length}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {category.components.map((component, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors group"
                      >
                        <span className="font-medium text-sm">{component.name}</span>
                        {component.hasNew && (
                          <Badge variant="outline" className="text-xs h-5 px-1 bg-primary/10 text-primary border-primary/20 font-medium">
                            NEW
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      <Separator />

      {/* Features Grid */}
      <div>
        <div className="mb-6">
          <h2 className="mb-2">Características Principales</h2>
          <p className="text-muted-foreground">
            Fundamentos y pilares del Design System
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="elevation-1 hover:elevation-2 transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* Hero UI Inspired Components */}
      <div>
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <h2>Componentes Nivel Hero UI Pro</h2>
            <Badge variant="default" className="text-xs">
              Premium Features
            </Badge>
          </div>
          <p className="text-muted-foreground">
            Componentes avanzados inspirados en Hero UI Pro que elevan el sistema más allá de shadcn/ui básico
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Advanced Charts */}
          <Card className="elevation-1 hover:elevation-2 transition-shadow border-l-4 border-l-chart-2">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-chart-2/10">
                  <Activity className="h-5 w-5 text-chart-2" />
                </div>
                <Badge variant="outline" className="text-xs">
                  Recharts
                </Badge>
              </div>
              <CardTitle className="text-lg">Advanced Charts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                6 tipos de gráficos profesionales con integración completa al Theme Customizer y soporte dinámico para modo claro/oscuro.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Line</Badge>
                <Badge variant="secondary" className="text-xs">Bar</Badge>
                <Badge variant="secondary" className="text-xs">Pie</Badge>
                <Badge variant="secondary" className="text-xs">Area</Badge>
                <Badge variant="secondary" className="text-xs">Mixed</Badge>
                <Badge variant="secondary" className="text-xs">Responsive</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Data Tables */}
          <Card className="elevation-1 hover:elevation-2 transition-shadow border-l-4 border-l-chart-3">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-chart-3/10">
                  <Grid3x3 className="h-5 w-5 text-chart-3" />
                </div>
                <Badge variant="outline" className="text-xs">
                  TanStack Table
                </Badge>
              </div>
              <CardTitle className="text-lg">Data Tables Avanzadas</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Tablas con ordenamiento, filtrado, paginación, selección múltiple y exportación de datos.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Sorting</Badge>
                <Badge variant="secondary" className="text-xs">Filtering</Badge>
                <Badge variant="secondary" className="text-xs">Pagination</Badge>
                <Badge variant="secondary" className="text-xs">Export</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Rich Text Editor */}
          <Card className="elevation-1 hover:elevation-2 transition-shadow border-l-4 border-l-chart-4">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-chart-4/10">
                  <Code2 className="h-5 w-5 text-chart-4" />
                </div>
                <Badge variant="outline" className="text-xs">
                  Tiptap
                </Badge>
              </div>
              <CardTitle className="text-lg">Rich Text Editor</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Editor WYSIWYG completo con formato de texto, listas, links, imágenes y markdown.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Bold/Italic</Badge>
                <Badge variant="secondary" className="text-xs">Lists</Badge>
                <Badge variant="secondary" className="text-xs">Links</Badge>
                <Badge variant="secondary" className="text-xs">Images</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Kanban Board */}
          <Card className="elevation-1 hover:elevation-2 transition-shadow border-l-4 border-l-chart-5">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-chart-5/10">
                  <Layers className="h-5 w-5 text-chart-5" />
                </div>
                <Badge variant="outline" className="text-xs">
                  React DnD
                </Badge>
              </div>
              <CardTitle className="text-lg">Kanban Board</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Tablero drag & drop para gestión de tareas con columnas personalizables y estado visual.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Drag & Drop</Badge>
                <Badge variant="secondary" className="text-xs">Columnas</Badge>
                <Badge variant="secondary" className="text-xs">Estados</Badge>
              </div>
            </CardContent>
          </Card>

          {/* File Uploader */}
          <Card className="elevation-1 hover:elevation-2 transition-shadow border-l-4 border-l-warning">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-warning/10">
                  <Zap className="h-5 w-5 text-warning" />
                </div>
                <Badge variant="outline" className="text-xs">
                  React Dropzone
                </Badge>
              </div>
              <CardTitle className="text-lg">File Uploader</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Zona de carga con drag & drop, preview de imágenes, validación de tipos y progreso de carga.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Drag & Drop</Badge>
                <Badge variant="secondary" className="text-xs">Preview</Badge>
                <Badge variant="secondary" className="text-xs">Validation</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Multi Select */}
          <Card className="elevation-1 hover:elevation-2 transition-shadow border-l-4 border-l-success">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-success/10">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                </div>
                <Badge variant="outline" className="text-xs">
                  Custom Pattern
                </Badge>
              </div>
              <CardTitle className="text-lg">Multi Select & Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-3">
                Selectores múltiples con chips, búsqueda filtrada y componente de línea de tiempo para flujos.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-xs">Multi Select</Badge>
                <Badge variant="secondary" className="text-xs">Timeline</Badge>
                <Badge variant="secondary" className="text-xs">Search</Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Note */}
        <Card className="mt-6 bg-primary/5 border-primary/20 elevation-1">
          <CardContent className="pt-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Scale className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Comparación con Hero UI</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Este Design System implementa componentes avanzados que normalmente solo se encuentran 
                  en bibliotecas premium como Hero UI Pro ($299), pero manteniendo el control total del código 
                  y la flexibilidad de shadcn/ui (gratuito y open-source).
                </p>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="font-semibold mb-1">Hero UI Pro</p>
                    <p className="text-muted-foreground">• Licencia: $299</p>
                    <p className="text-muted-foreground">• 100+ componentes</p>
                    <p className="text-muted-foreground">• Código cerrado</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Nuestro DSM</p>
                    <p className="text-muted-foreground">• Licencia: Open Source</p>
                    <p className="text-muted-foreground">• {totalComponents} componentes</p>
                    <p className="text-muted-foreground">• Control total del código</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Tech Stack */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="elevation-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5 text-chart-2" />
              <CardTitle>Stack Tecnológico</CardTitle>
            </div>
            <CardDescription>Librerías y frameworks utilizados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {techStack.map((tech, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{tech.name}</span>
                  <Badge variant="outline" className="text-xs">
                    {tech.version}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="elevation-1">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-success" />
              <CardTitle>Heurísticas WCAG</CardTitle>
            </div>
            <CardDescription>Cumplimiento de estándares de accesibilidad</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium">Contraste de Color</p>
                <p className="text-xs text-muted-foreground">
                  Ratios superiores a 4.5:1 para texto normal y 3:1 para texto grande
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium">Navegación por Teclado</p>
                <p className="text-xs text-muted-foreground">
                  Todos los componentes interactivos son accesibles vía Tab/Enter/Escape
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium">Screen Readers</p>
                <p className="text-xs text-muted-foreground">
                  ARIA labels y roles semánticos en todos los componentes
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-success mt-0.5" />
              <div>
                <p className="text-sm font-medium">Focus Visible</p>
                <p className="text-xs text-muted-foreground">
                  Ring de enfoque (#84cc16) claramente visible en modo claro y oscuro
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Footer Note */}
      <Card className="bg-muted/30 elevation-1">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-warning/10">
              <Rocket className="h-5 w-5 text-warning" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Sistema en Evolución Continua</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Este Design System está en desarrollo activo. Los componentes se actualizan 
                regularmente con mejoras de accesibilidad, rendimiento y nuevas funcionalidades.
              </p>
              <p className="text-xs text-muted-foreground">
                <strong>Última actualización:</strong> Enero 2026 • <strong>Versión:</strong> DSM v2.0.0 • <strong>Fase:</strong> Desarrollo Iterativo
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}