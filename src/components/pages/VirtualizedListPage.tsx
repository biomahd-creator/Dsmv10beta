import { ComponentShowcase } from "../ui/component-showcase";
import { VirtualizedList } from "../advanced/VirtualizedList";
import { Card } from "../ui/card";

const mockData = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: `Item ${i + 1}`,
  description: `Description for item ${i + 1}`,
  value: Math.floor(Math.random() * 1000),
}));

function VirtualizedListDemo() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Lista Virtualizada (1000 items)</h3>
        <VirtualizedList
          items={mockData}
          height={400}
          itemHeight={60}
          renderItem={(item) => (
            <div className="p-4 hover:bg-muted/50 transition-colors">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <span className="text-sm font-mono">${item.value}</span>
              </div>
            </div>
          )}
        />
      </Card>
    </div>
  );
}

export function VirtualizedListPage() {
  return (
    <ComponentShowcase
      title="Virtualized List"
      description="Renderiza listas largas de forma eficiente usando react-window. Solo renderiza los items visibles en pantalla."
      previewComponent={<VirtualizedListDemo />}
      codeBlock={`import { VirtualizedList } from "@biomahd-creator/financio-design-system/advanced";

const mockData = Array.from({ length: 1000 }, (_, i) => ({
  id: i,
  name: \`Item \${i + 1}\`,
}));

<VirtualizedList
  items={mockData}
  height={400}
  itemHeight={60}
  renderItem={(item) => (
    <div className="p-4">
      <p>{item.name}</p>
    </div>
  )}
/>`}
      usageExample={`// Lista de facturas con scroll virtual
<VirtualizedList
  items={invoices}
  height={600}
  itemHeight={80}
  renderItem={(invoice) => (
    <InvoiceCard invoice={invoice} />
  )}
/>`}
    />
  );
}
