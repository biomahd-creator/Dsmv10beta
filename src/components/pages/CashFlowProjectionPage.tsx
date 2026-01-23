import { ComponentShowcase } from "../ui/component-showcase";
import { CashFlowProjection } from "../business/CashFlowProjection";
import { Card } from "../ui/card";

const projectionData = [
  { month: "Ene", ingresos: 450000, egresos: 320000, proyectado: 480000 },
  { month: "Feb", ingresos: 520000, egresos: 350000, proyectado: 550000 },
  { month: "Mar", ingresos: 480000, egresos: 380000, proyectado: 510000 },
  { month: "Abr", ingresos: 600000, egresos: 420000, proyectado: 630000 },
  { month: "May", ingresos: 550000, egresos: 390000, proyectado: 580000 },
  { month: "Jun", ingresos: 620000, egresos: 450000, proyectado: 650000 },
];

function CashFlowProjectionDemo() {
  return (
    <Card className="p-6">
      <CashFlowProjection
        data={projectionData}
        title="Proyección de Flujo de Caja"
        description="Proyección de ingresos y egresos para los próximos 6 meses"
      />
    </Card>
  );
}

export function CashFlowProjectionPage() {
  return (
    <ComponentShowcase
      title="Cash Flow Projection"
      description="Gráfico de proyección de flujo de caja con comparación de ingresos, egresos y valores proyectados."
      previewComponent={<CashFlowProjectionDemo />}
      codeBlock={`import { CashFlowProjection } from "@biomahd-creator/financio-design-system/business";

const data = [
  { month: "Ene", ingresos: 450000, egresos: 320000, proyectado: 480000 },
  { month: "Feb", ingresos: 520000, egresos: 350000, proyectado: 550000 },
];

<CashFlowProjection
  data={data}
  title="Proyección de Flujo de Caja"
  description="Próximos 6 meses"
/>`}
      usageExample={`// Dashboard financiero
<CashFlowProjection
  data={cashFlowData}
  title="Proyección Anual"
/>`}
    />
  );
}
