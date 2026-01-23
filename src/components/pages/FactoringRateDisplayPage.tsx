import { ComponentShowcase } from "../ui/component-showcase";
import { FactoringRateDisplay } from "../business/FactoringRateDisplay";
import { Card } from "../ui/card";

function FactoringRateDisplayDemo() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <FactoringRateDisplay
        rate={2.5}
        period="mensual"
        amount={1000000}
        title="Tasa Preferencial"
        description="Para clientes con bajo riesgo"
      />
      <FactoringRateDisplay
        rate={3.2}
        period="mensual"
        amount={500000}
        title="Tasa Estándar"
        description="Condiciones normales"
      />
      <FactoringRateDisplay
        rate={1.8}
        period="mensual"
        amount={2500000}
        title="Tasa Premium"
        description="Montos mayores a $2M"
      />
      <FactoringRateDisplay
        rate={4.5}
        period="mensual"
        amount={300000}
        title="Tasa Especial"
        description="Mayor riesgo crediticio"
      />
    </div>
  );
}

export function FactoringRateDisplayPage() {
  return (
    <ComponentShowcase
      title="Factoring Rate Display"
      description="Muestra la tasa de factoring aplicable con cálculo de comisión y monto neto a recibir."
      previewComponent={<FactoringRateDisplayDemo />}
      codeBlock={`import { FactoringRateDisplay } from "@biomahd-creator/financio-design-system/business";

<FactoringRateDisplay
  rate={2.5}
  period="mensual"
  amount={1000000}
  title="Tasa Preferencial"
  description="Para clientes con bajo riesgo"
/>`}
      usageExample={`// Cotización de factoring
<FactoringRateDisplay
  rate={calculateRate(invoice)}
  period="mensual"
  amount={invoice.amount}
  title="Tu Tasa"
/>`}
    />
  );
}
