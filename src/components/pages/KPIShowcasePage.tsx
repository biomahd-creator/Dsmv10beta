import { Badge } from "../ui/badge";
import { Separator } from "../ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  ShoppingCart, 
  Activity,
  Target,
  Award,
  BarChart3,
  ArrowUpRight,
  ArrowDownRight,
  Minus
} from "lucide-react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

/**
 * KPIShowcasePage - Showcase de componentes KPI (Key Performance Indicators)
 * 
 * Componentes demostrados:
 * 1. KPI con valor y tendencia básica
 * 2. KPI con porcentaje y comparación
 * 3. KPI con sparkline (mini gráfico)
 * 4. KPI con objetivo y progreso
 * 5. KPI con múltiples métricas
 * 6. KPI con estado de alerta
 * 
 * Ubicación: /components/pages/KPIShowcasePage.tsx
 * Estado: ✅ Completado - Componentes de indicadores de rendimiento
 */

// Mock data para sparklines
const generateSparklineData = (trend: 'up' | 'down' | 'stable') => {
  return Array.from({ length: 12 }, (_, i) => {
    let value = 50;
    if (trend === 'up') {
      value = 30 + (i * 5) + Math.random() * 10;
    } else if (trend === 'down') {
      value = 90 - (i * 4) + Math.random() * 8;
    } else {
      value = 50 + Math.random() * 20 - 10;
    }
    return { value };
  });
};

// Componente KPI básico con tendencia
interface KPICardProps {
  title: string;
  value: string;
  change: number;
  changeLabel?: string;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

function KPICard({ title, value, change, changeLabel = "vs last month", icon, trend = 'neutral' }: KPICardProps) {
  const isPositive = change > 0;
  const isNegative = change < 0;
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-4 w-4 text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center gap-1 mt-1">
          {isPositive && (
            <>
              <ArrowUpRight className="h-4 w-4 text-[#84cc16]" />
              <span className="text-xs font-medium text-[#84cc16]">
                +{change}%
              </span>
            </>
          )}
          {isNegative && (
            <>
              <ArrowDownRight className="h-4 w-4 text-destructive" />
              <span className="text-xs font-medium text-destructive">
                {change}%
              </span>
            </>
          )}
          {!isPositive && !isNegative && (
            <>
              <Minus className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs font-medium text-muted-foreground">
                {change}%
              </span>
            </>
          )}
          <span className="text-xs text-muted-foreground ml-1">{changeLabel}</span>
        </div>
      </CardContent>
    </Card>
  );
}

// Componente KPI con sparkline
interface KPISparklineCardProps {
  title: string;
  value: string;
  change: number;
  data: Array<{ value: number }>;
  color?: string;
}

function KPISparklineCard({ title, value, change, data, color = "#84cc16" }: KPISparklineCardProps) {
  const isPositive = change > 0;
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <div className="text-2xl font-bold">{value}</div>
            <div className="flex items-center gap-1">
              {isPositive ? (
                <TrendingUp className="h-4 w-4 text-[#84cc16]" />
              ) : (
                <TrendingDown className="h-4 w-4 text-destructive" />
              )}
              <span className={`text-xs font-medium ${isPositive ? 'text-[#84cc16]' : 'text-destructive'}`}>
                {isPositive ? '+' : ''}{change}%
              </span>
            </div>
          </div>
          <div className="h-16 w-32">
            <ResponsiveContainer width="100%" height={64}>
              <LineChart data={data}>
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke={color} 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Componente KPI con objetivo y progreso
interface KPIProgressCardProps {
  title: string;
  current: number;
  target: number;
  unit?: string;
  icon: React.ReactNode;
}

function KPIProgressCard({ title, current, target, unit = "", icon }: KPIProgressCardProps) {
  const percentage = Math.min((current / target) * 100, 100);
  const isOnTrack = percentage >= 70;
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-4 w-4 text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-baseline justify-between">
          <div className="text-2xl font-bold">
            {current.toLocaleString()}{unit}
          </div>
          <div className="text-sm text-muted-foreground">
            of {target.toLocaleString()}{unit}
          </div>
        </div>
        <div className="space-y-2">
          <Progress value={percentage} className="h-2" />
          <div className="flex items-center justify-between text-xs">
            <span className={isOnTrack ? 'text-[#84cc16] font-medium' : 'text-muted-foreground'}>
              {percentage.toFixed(0)}% Complete
            </span>
            {isOnTrack && (
              <Badge variant="outline" className="h-5 border-[#84cc16] text-[#84cc16]">
                On Track
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Componente KPI con múltiples métricas
interface KPIMultiMetricCardProps {
  title: string;
  metrics: Array<{
    label: string;
    value: string;
    change?: number;
  }>;
  icon: React.ReactNode;
}

function KPIMultiMetricCard({ title, metrics, icon }: KPIMultiMetricCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <div className="h-5 w-5 text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {metrics.map((metric, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">{metric.label}</p>
                <p className="text-lg font-bold">{metric.value}</p>
              </div>
              {metric.change !== undefined && (
                <div className={`flex items-center gap-1 ${
                  metric.change > 0 ? 'text-[#84cc16]' : 
                  metric.change < 0 ? 'text-destructive' : 
                  'text-muted-foreground'
                }`}>
                  {metric.change > 0 && <TrendingUp className="h-3 w-3" />}
                  {metric.change < 0 && <TrendingDown className="h-3 w-3" />}
                  <span className="text-xs font-medium">
                    {metric.change > 0 ? '+' : ''}{metric.change}%
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Componente KPI con estado de alerta
interface KPIAlertCardProps {
  title: string;
  value: string;
  threshold: number;
  current: number;
  unit?: string;
  icon: React.ReactNode;
}

function KPIAlertCard({ title, value, threshold, current, unit = "%", icon }: KPIAlertCardProps) {
  const status = current >= threshold ? 'success' : current >= threshold * 0.7 ? 'warning' : 'danger';
  
  const statusConfig = {
    success: {
      color: 'text-[#84cc16]',
      bgColor: 'bg-[#84cc16]/10',
      borderColor: 'border-[#84cc16]/20',
      label: 'Excellent',
    },
    warning: {
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-500/10',
      borderColor: 'border-yellow-500/20',
      label: 'Warning',
    },
    danger: {
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      borderColor: 'border-destructive/20',
      label: 'Critical',
    },
  };
  
  const config = statusConfig[status];
  
  return (
    <Card className={`${config.borderColor} border-2`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="h-4 w-4 text-muted-foreground">
          {icon}
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-2xl font-bold">{value}</div>
        <div className={`flex items-center justify-between rounded-md px-3 py-2 ${config.bgColor}`}>
          <span className="text-xs text-muted-foreground">
            Threshold: {threshold}{unit}
          </span>
          <Badge variant="outline" className={`${config.color} border-current`}>
            {config.label}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}

export function KPIShowcasePage() {
  return (
    <div className="space-y-12 max-w-7xl">
      {/* Page Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <h1 className="font-bold">KPI Showcase</h1>
          <Badge className="bg-[#84cc16] hover:bg-[#84cc16]/90 text-[#1C2D3A]">
            NEW
          </Badge>
          <Badge variant="secondary">Advanced</Badge>
        </div>
        <p className="text-muted-foreground">
          Componentes de indicadores de rendimiento (KPI) para dashboards y paneles de control.
          Perfectos para mostrar métricas clave, tendencias y objetivos de negocio.
        </p>
      </div>

      <Separator />

      {/* 1. KPI Cards con Tendencia Básica */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Basic KPI Cards</h2>
            <Badge variant="outline">Fundamental</Badge>
          </div>
          <p className="text-muted-foreground">
            Tarjetas KPI básicas con valor actual, cambio porcentual y tendencia.
            Ideales para mostrar métricas principales de un vistazo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPICard
            title="Total Revenue"
            value="$45,231.89"
            change={20.1}
            icon={<DollarSign className="h-4 w-4" />}
            trend="up"
          />
          <KPICard
            title="Active Users"
            value="2,350"
            change={-4.5}
            changeLabel="vs last week"
            icon={<Users className="h-4 w-4" />}
            trend="down"
          />
          <KPICard
            title="Conversions"
            value="1,234"
            change={15.8}
            changeLabel="vs last month"
            icon={<ShoppingCart className="h-4 w-4" />}
            trend="up"
          />
          <KPICard
            title="Performance Score"
            value="94.2"
            change={2.3}
            changeLabel="vs last quarter"
            icon={<Activity className="h-4 w-4" />}
            trend="up"
          />
        </div>
      </section>

      {/* 2. KPI Cards con Sparkline */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">KPI with Sparklines</h2>
            <Badge variant="outline">Visualization</Badge>
          </div>
          <p className="text-muted-foreground">
            KPIs con mini gráficos de tendencia (sparklines) que muestran la evolución histórica.
            Perfectos para identificar patrones rápidamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <KPISparklineCard
            title="Monthly Revenue"
            value="$124,589"
            change={12.5}
            data={generateSparklineData('up')}
            color="#84cc16"
          />
          <KPISparklineCard
            title="New Customers"
            value="1,423"
            change={-5.2}
            data={generateSparklineData('down')}
            color="#ef4444"
          />
          <KPISparklineCard
            title="Avg. Order Value"
            value="$87.50"
            change={8.3}
            data={generateSparklineData('up')}
            color="#3b82f6"
          />
        </div>
      </section>

      {/* 3. KPI Cards con Objetivo y Progreso */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">KPI with Goals & Progress</h2>
            <Badge variant="outline">Target Tracking</Badge>
          </div>
          <p className="text-muted-foreground">
            KPIs que muestran el progreso hacia un objetivo específico.
            Incluyen barra de progreso y estado visual del avance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <KPIProgressCard
            title="Quarterly Sales Target"
            current={847000}
            target={1000000}
            unit="$"
            icon={<Target className="h-4 w-4" />}
          />
          <KPIProgressCard
            title="New Signups Goal"
            current={3420}
            target={5000}
            icon={<Users className="h-4 w-4" />}
          />
          <KPIProgressCard
            title="Customer Satisfaction"
            current={92}
            target={95}
            unit="%"
            icon={<Award className="h-4 w-4" />}
          />
        </div>
      </section>

      {/* 4. KPI Cards con Múltiples Métricas */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">Multi-Metric KPI Cards</h2>
            <Badge variant="outline">Comprehensive</Badge>
          </div>
          <p className="text-muted-foreground">
            Tarjetas KPI que agrupan múltiples métricas relacionadas.
            Ideales para mostrar un contexto más completo de un área de negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <KPIMultiMetricCard
            title="E-commerce Performance"
            icon={<ShoppingCart className="h-5 w-5" />}
            metrics={[
              { label: "Total Orders", value: "1,234", change: 12.3 },
              { label: "Avg. Order Value", value: "$87.50", change: 5.8 },
              { label: "Cart Abandonment", value: "23.4%", change: -3.2 },
            ]}
          />
          <KPIMultiMetricCard
            title="User Engagement"
            icon={<Activity className="h-5 w-5" />}
            metrics={[
              { label: "Active Users", value: "8,234", change: -2.1 },
              { label: "Avg. Session Time", value: "4m 32s", change: 8.5 },
              { label: "Bounce Rate", value: "32.1%", change: -5.3 },
            ]}
          />
          <KPIMultiMetricCard
            title="Financial Health"
            icon={<DollarSign className="h-5 w-5" />}
            metrics={[
              { label: "Revenue", value: "$245.6K", change: 18.2 },
              { label: "Profit Margin", value: "24.5%", change: 2.1 },
              { label: "Operating Costs", value: "$185.3K", change: -3.4 },
            ]}
          />
        </div>
      </section>

      {/* 5. KPI Cards con Estado de Alerta */}
      <section className="space-y-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="font-bold">KPI with Alert States</h2>
            <Badge variant="outline">Status Monitoring</Badge>
          </div>
          <p className="text-muted-foreground">
            KPIs con estados de alerta visual basados en umbrales.
            Útiles para monitoreo de SLA, KPIs críticos y métricas de servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <KPIAlertCard
            title="System Uptime"
            value="99.8%"
            current={99.8}
            threshold={99.5}
            icon={<Activity className="h-4 w-4" />}
          />
          <KPIAlertCard
            title="Customer Satisfaction"
            value="87.5%"
            current={87.5}
            threshold={90}
            icon={<Award className="h-4 w-4" />}
          />
          <KPIAlertCard
            title="Response Time"
            value="92.3%"
            current={92.3}
            threshold={95}
            icon={<BarChart3 className="h-4 w-4" />}
          />
          <KPIAlertCard
            title="Conversion Rate"
            value="65.2%"
            current={65.2}
            threshold={80}
            icon={<Target className="h-4 w-4" />}
          />
        </div>
      </section>

      {/* Best Practices Card */}
      <Card className="bg-muted/50 border-[#84cc16]/20">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-[#84cc16]" />
            Best Practices for KPI Design
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium">✓ Data Presentation</h4>
              <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                <li>• Keep values clear and easy to scan</li>
                <li>• Use consistent formatting for numbers</li>
                <li>• Show trends with colors: green for positive, red for negative</li>
                <li>• Include comparison periods (vs last month, etc.)</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">✓ Visual Hierarchy</h4>
              <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                <li>• Primary metric should be most prominent</li>
                <li>• Use icons to improve scannability</li>
                <li>• Group related metrics together</li>
                <li>• Maintain consistent card sizes in grids</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">✓ Contextual Information</h4>
              <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                <li>• Always show comparison period</li>
                <li>• Include units when applicable ($, %, etc.)</li>
                <li>• Add sparklines for historical context</li>
                <li>• Show progress bars for goal-oriented metrics</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">✓ Accessibility</h4>
              <ul className="text-sm text-muted-foreground space-y-2 ml-4">
                <li>• Don't rely solely on color for meaning</li>
                <li>• Use icons and labels for clarity</li>
                <li>• Ensure sufficient contrast ratios</li>
                <li>• Make values keyboard accessible</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Implementation Card */}
      <Card className="bg-[#1C2D3A]/5 border-[#1C2D3A]/20">
        <CardHeader>
          <CardTitle className="text-lg">Technical Implementation</CardTitle>
          <CardDescription>
            Components used and libraries required for KPI showcase
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Core Components</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Card</Badge>
                <Badge variant="secondary">Badge</Badge>
                <Badge variant="secondary">Progress</Badge>
                <Badge variant="secondary">Separator</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Icons</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">lucide-react</Badge>
                <Badge variant="outline">TrendingUp / TrendingDown</Badge>
                <Badge variant="outline">ArrowUpRight / ArrowDownRight</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Charts</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">recharts</Badge>
                <Badge variant="outline">LineChart (Sparklines)</Badge>
                <Badge variant="outline">ResponsiveContainer</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Colors</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#84cc16] text-[#1C2D3A]">#84cc16 (Primary - Lime)</Badge>
                <Badge className="bg-[#1C2D3A] text-white">#1C2D3A (Secondary - Dark Blue)</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}