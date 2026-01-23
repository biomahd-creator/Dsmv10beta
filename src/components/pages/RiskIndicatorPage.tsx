import { ComponentShowcase } from "../ui/component-showcase";
import { RiskIndicator } from "../business/RiskIndicator";
import { Card } from "../ui/card";

function RiskIndicatorDemo() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Indicadores de Riesgo</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <RiskIndicator
            level="low"
            score={85}
            label="Bajo Riesgo"
            description="Excelente historial crediticio"
          />
          <RiskIndicator
            level="medium"
            score={65}
            label="Riesgo Medio"
            description="Algunos retrasos ocasionales"
          />
          <RiskIndicator
            level="high"
            score={35}
            label="Alto Riesgo"
            description="Múltiples incumplimientos"
          />
          <RiskIndicator
            level="critical"
            score={15}
            label="Riesgo Crítico"
            description="Historial de morosidad"
          />
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Sin Label</h3>
        <div className="flex gap-4 flex-wrap">
          <RiskIndicator level="low" score={90} />
          <RiskIndicator level="medium" score={60} />
          <RiskIndicator level="high" score={30} />
          <RiskIndicator level="critical" score={10} />
        </div>
      </Card>
    </div>
  );
}

export function RiskIndicatorPage() {
  return (
    <ComponentShowcase
      title="Risk Indicator"
      description="Indicador visual de nivel de riesgo crediticio con score numérico y colores semafóricos."
      previewComponent={<RiskIndicatorDemo />}
      codeBlock={`import { RiskIndicator } from "@biomahd-creator/financio-design-system/business";

<RiskIndicator
  level="low"
  score={85}
  label="Bajo Riesgo"
  description="Excelente historial crediticio"
/>`}
      usageExample={`// Mostrar riesgo de un pagador
<RiskIndicator
  level={payor.riskLevel}
  score={payor.creditScore}
  label={getRiskLabel(payor.riskLevel)}
/>`}
    />
  );
}
