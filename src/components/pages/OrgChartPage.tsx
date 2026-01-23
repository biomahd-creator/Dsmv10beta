import { ComponentShowcase } from "../ui/component-showcase";
import { OrgChart } from "../advanced/OrgChart";
import { Card } from "../ui/card";

const orgData = {
  id: "1",
  name: "Juan Pérez",
  title: "CEO",
  children: [
    {
      id: "2",
      name: "María González",
      title: "CTO",
      children: [
        { id: "4", name: "Carlos López", title: "Dev Lead" },
        { id: "5", name: "Ana Martínez", title: "QA Lead" },
      ],
    },
    {
      id: "3",
      name: "Pedro Sánchez",
      title: "CFO",
      children: [
        { id: "6", name: "Laura Torres", title: "Contador" },
      ],
    },
  ],
};

function OrgChartDemo() {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Organigrama</h3>
      <div className="border rounded-lg bg-muted/10">
        <OrgChart data={orgData} />
      </div>
    </Card>
  );
}

export function OrgChartPage() {
  return (
    <ComponentShowcase
      title="Org Chart (Organigrama)"
      description="Visualización jerárquica de la estructura organizacional. Muestra relaciones de reporte y equipos."
      previewComponent={<OrgChartDemo />}
      codeBlock={`import { OrgChart } from "@biomahd-creator/financio-design-system/advanced";

const orgData = {
  id: "1",
  name: "Juan Pérez",
  title: "CEO",
  children: [
    {
      id: "2",
      name: "María González",
      title: "CTO",
      children: [...]
    }
  ]
};

<OrgChart data={orgData} />`}
      usageExample={`// Estructura de equipos
<OrgChart data={teamStructure} />`}
    />
  );
}
