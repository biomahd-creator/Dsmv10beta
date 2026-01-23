import { ComponentShowcase } from "../ui/component-showcase";
import { PayorCard } from "../business/PayorCard";
import { Card } from "../ui/card";

function PayorCardDemo() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <PayorCard
        name="Empresa XYZ S.A."
        rut="76.123.456-7"
        creditLimit={5000000}
        usedCredit={2500000}
        riskLevel="low"
        phone="+56 2 2345 6789"
        email="contacto@empresa-xyz.cl"
      />
      <PayorCard
        name="Comercial ABC Ltda."
        rut="77.234.567-8"
        creditLimit={3000000}
        usedCredit={2700000}
        riskLevel="medium"
        phone="+56 2 3456 7890"
        email="finanzas@comercial-abc.cl"
      />
      <PayorCard
        name="Distribuidora DEF"
        rut="78.345.678-9"
        creditLimit={10000000}
        usedCredit={1500000}
        riskLevel="low"
        phone="+56 2 4567 8901"
        email="cuentas@distribuidora-def.cl"
      />
      <PayorCard
        name="Tiendas GHI"
        rut="79.456.789-0"
        creditLimit={2000000}
        usedCredit={1950000}
        riskLevel="high"
        phone="+56 2 5678 9012"
        email="pagos@tiendas-ghi.cl"
      />
    </div>
  );
}

export function PayorCardPage() {
  return (
    <ComponentShowcase
      title="Payor Card"
      description="Tarjeta con información del pagador (deudor) incluyendo límite de crédito, uso y nivel de riesgo."
      previewComponent={<PayorCardDemo />}
      codeBlock={`import { PayorCard } from "@biomahd-creator/financio-design-system/business";

<PayorCard
  name="Empresa XYZ S.A."
  rut="76.123.456-7"
  creditLimit={5000000}
  usedCredit={2500000}
  riskLevel="low"
  phone="+56 2 2345 6789"
  email="contacto@empresa-xyz.cl"
/>`}
      usageExample={`// Directorio de pagadores
{payors.map(payor => (
  <PayorCard
    key={payor.id}
    name={payor.name}
    rut={payor.rut}
    creditLimit={payor.creditLimit}
    usedCredit={payor.usedCredit}
    riskLevel={payor.riskLevel}
  />
))}`}
    />
  );
}
