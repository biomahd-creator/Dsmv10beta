import { ComponentShowcase } from "../ui/component-showcase";
import { AreaChart } from "../advanced/AreaChart";
import { Card } from "../ui/card";

const salesData = [
  { month: "Ene", ventas: 4000, gastos: 2400 },
  { month: "Feb", ventas: 3000, gastos: 1398 },
  { month: "Mar", ventas: 2000, gastos: 9800 },
  { month: "Abr", ventas: 2780, gastos: 3908 },
  { month: "May", ventas: 1890, gastos: 4800 },
  { month: "Jun", ventas: 2390, gastos: 3800 },
  { month: "Jul", ventas: 3490, gastos: 4300 },
];

function AreaChartDemo() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Area Chart - Ventas vs Gastos</h3>
        <AreaChart
          data={salesData}
          yKeys={["ventas", "gastos"]}
          xKey="month"
        />
      </Card>
    </div>
  );
}

export function AreaChartPage() {
  return (
    <ComponentShowcase
      title="Area Chart"
      description="Gráfico de área para visualizar tendencias y volúmenes a lo largo del tiempo. Ideal para métricas acumulativas."
      previewComponent={<AreaChartDemo />}
      codeBlock={`import { AreaChart } from "@biomahd-creator/financio-design-system/advanced";

const data = [
  { month: "Ene", ventas: 4000, gastos: 2400 },
  { month: "Feb", ventas: 3000, gastos: 1398 },
  { month: "Mar", ventas: 2000, gastos: 9800 },
];

<AreaChart
  data={data}
  yKeys={["ventas", "gastos"]}
  xKey="month"
/>`}
      usageExample={`// Flujo de caja mensual
<AreaChart
  data={cashFlowData}
  yKeys={["ingresos", "egresos"]}
  xKey="mes"
/>`}
    />
  );
}
