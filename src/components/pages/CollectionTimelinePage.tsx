import { ComponentShowcase } from "../ui/component-showcase";
import { CollectionTimeline } from "../business/CollectionTimeline";

const collectionEvents = [
  {
    id: "1",
    invoiceNumber: "FAC-2024-001",
    amount: 125000,
    dueDate: new Date("2024-01-15"),
    status: "collected" as const,
    payorName: "Empresa XYZ S.A.",
    collectedDate: new Date("2024-01-14"),
  },
  {
    id: "2",
    invoiceNumber: "FAC-2024-002",
    amount: 85000,
    dueDate: new Date("2024-01-20"),
    status: "pending" as const,
    payorName: "Comercial ABC Ltda.",
  },
  {
    id: "3",
    invoiceNumber: "FAC-2024-003",
    amount: 250000,
    dueDate: new Date("2024-01-25"),
    status: "due-soon" as const,
    payorName: "Distribuidora DEF",
  },
  {
    id: "4",
    invoiceNumber: "FAC-2024-004",
    amount: 45000,
    dueDate: new Date("2024-01-10"),
    status: "overdue" as const,
    payorName: "Tiendas GHI",
  },
];

function CollectionTimelineDemo() {
  return (
    <CollectionTimeline events={collectionEvents} />
  );
}

export function CollectionTimelinePage() {
  return (
    <ComponentShowcase
      title="Collection Timeline"
      description="Timeline visual de cobranzas con estados, fechas de vencimiento y montos. Ideal para seguimiento de facturas."
      previewComponent={<CollectionTimelineDemo />}
      codeBlock={`import { CollectionTimeline } from "@biomahd-creator/financio-design-system/business";

const events = [
  {
    id: "1",
    invoiceNumber: "FAC-2024-001",
    amount: 125000,
    dueDate: new Date("2024-01-15"),
    status: "collected",
    payorName: "Empresa XYZ S.A.",
    collectedDate: new Date("2024-01-14"),
  },
];

<CollectionTimeline events={events} />`}
      usageExample={`// Panel de cobranzas
<CollectionTimeline events={upcomingCollections} />`}
    />
  );
}
