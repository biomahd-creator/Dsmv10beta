import { ComponentShowcase } from "../ui/component-showcase";
import { InvoiceCard } from "../business/InvoiceCard";
import { Card } from "../ui/card";

function InvoiceCardDemo() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <InvoiceCard
        invoiceNumber="FAC-2024-001"
        amount={125000}
        dueDate={new Date("2024-02-15")}
        status="pending"
        payorName="Empresa XYZ S.A."
        issueDate={new Date("2024-01-15")}
      />
      <InvoiceCard
        invoiceNumber="FAC-2024-002"
        amount={85000}
        dueDate={new Date("2024-01-20")}
        status="approved"
        payorName="Comercial ABC Ltda."
        issueDate={new Date("2024-01-10")}
      />
      <InvoiceCard
        invoiceNumber="FAC-2024-003"
        amount={250000}
        dueDate={new Date("2024-03-01")}
        status="paid"
        payorName="Distribuidora DEF"
        issueDate={new Date("2024-02-01")}
      />
      <InvoiceCard
        invoiceNumber="FAC-2024-004"
        amount={45000}
        dueDate={new Date("2024-01-10")}
        status="rejected"
        payorName="Tiendas GHI"
        issueDate={new Date("2024-01-05")}
      />
    </div>
  );
}

export function InvoiceCardPage() {
  return (
    <ComponentShowcase
      title="Invoice Card"
      description="Tarjeta para mostrar información resumida de una factura con estado visual."
      previewComponent={<InvoiceCardDemo />}
      codeBlock={`import { InvoiceCard } from "@biomahd-creator/financio-design-system/business";

<InvoiceCard
  invoiceNumber="FAC-2024-001"
  amount={125000}
  dueDate={new Date("2024-02-15")}
  status="pending"
  payorName="Empresa XYZ S.A."
  issueDate={new Date("2024-01-15")}
/>`}
      usageExample={`// Lista de facturas
{invoices.map(invoice => (
  <InvoiceCard
    key={invoice.id}
    invoiceNumber={invoice.number}
    amount={invoice.amount}
    status={invoice.status}
    payorName={invoice.payor}
  />
))}`}
    />
  );
}
