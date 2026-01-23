import { ComponentShowcase } from "../ui/component-showcase";
import { RadarChart } from "../advanced/RadarChart";
import { Card } from "../ui/card";

const performanceData = [
  { subject: "Velocidad", A: 120, B: 110 },
  { subject: "Calidad", A: 98, B: 130 },
  { subject: "Costo", A: 86, B: 90 },
  { subject: "Satisfacción", A: 99, B: 85 },
  { subject: "Innovación", A: 85, B: 95 },
];

function RadarChartDemo() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Radar Chart - Comparación</h3>
        <RadarChart
          data={performanceData}
          dataKeys={["A", "B"]}
          angleKey="subject"
        />
      </Card>
    </div>
  );
}

export function RadarChartPage() {
  return (
    <ComponentShowcase
      title="Radar Chart"
      description="Gráfico radar para comparar múltiples variables. Ideal para análisis de desempeño, competencia o habilidades."
      previewComponent={<RadarChartDemo />}
      codeBlock={`import { RadarChart } from "@biomahd-creator/financio-design-system/advanced";

const data = [
  { subject: "Velocidad", A: 120, B: 110 },
  { subject: "Calidad", A: 98, B: 130 },
  { subject: "Costo", A: 86, B: 90 },
];

<RadarChart
  data={data}
  dataKeys={["A", "B"]}
  angleKey="subject"
/>`}
      usageExample={`// Comparación de proveedores
<RadarChart
  data={supplierMetrics}
  dataKeys={["Proveedor A", "Proveedor B"]}
  angleKey="metric"
/>`}
    />
  );
}
