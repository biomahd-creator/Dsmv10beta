import { ComponentShowcase } from "../ui/component-showcase";
import { LiquidityMeter } from "../business/LiquidityMeter";
import { Card } from "../ui/card";

function LiquidityMeterDemo() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="p-6">
          <LiquidityMeter
            current={8500000}
            required={5000000}
            title="Liquidez Actual"
            description="Posición de liquidez saludable"
          />
        </Card>
        <Card className="p-6">
          <LiquidityMeter
            current={3200000}
            required={5000000}
            title="Liquidez Baja"
            description="Considerar factoring para mejorar flujo"
          />
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <LiquidityMeter
            current={10000000}
            required={4000000}
            title="Excelente"
          />
        </Card>
        <Card className="p-6">
          <LiquidityMeter
            current={4500000}
            required={5000000}
            title="Buena"
          />
        </Card>
        <Card className="p-6">
          <LiquidityMeter
            current={2000000}
            required={5000000}
            title="Crítica"
          />
        </Card>
      </div>
    </div>
  );
}

export function LiquidityMeterPage() {
  return (
    <ComponentShowcase
      title="Liquidity Meter"
      description="Medidor visual de liquidez que compara el efectivo disponible con los requerimientos mínimos."
      previewComponent={<LiquidityMeterDemo />}
      codeBlock={`import { LiquidityMeter } from "@biomahd-creator/financio-design-system/business";

<LiquidityMeter
  current={8500000}
  required={5000000}
  title="Liquidez Actual"
  description="Posición de liquidez saludable"
/>`}
      usageExample={`// Dashboard de tesorería
<LiquidityMeter
  current={company.cashAvailable}
  required={company.minLiquidity}
  title="Liquidez de Caja"
/>`}
    />
  );
}
