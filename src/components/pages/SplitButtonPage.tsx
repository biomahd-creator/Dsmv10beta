import { ComponentShowcase } from "../ui/component-showcase";
import { SplitButton } from "../advanced/SplitButton";
import { Card } from "../ui/card";
import { Save, Download, Share } from "lucide-react";
import { toast } from "sonner";

function SplitButtonDemo() {
  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-4">Split Button Básico</h3>
        <div className="flex flex-wrap gap-4">
          <SplitButton
            label="Guardar"
            icon={<Save className="size-4" />}
            onMainAction={() => toast.success("Guardado")}
            options={[
              { label: "Guardar y cerrar", onClick: () => toast.success("Guardado y cerrado") },
              { label: "Guardar como...", onClick: () => toast.info("Guardar como") },
              { label: "Guardar plantilla", onClick: () => toast.info("Plantilla guardada") },
            ]}
          />

          <SplitButton
            label="Descargar"
            icon={<Download className="size-4" />}
            variant="outline"
            onMainAction={() => toast.success("Descargando")}
            options={[
              { label: "Descargar PDF", onClick: () => toast.info("PDF") },
              { label: "Descargar Excel", onClick: () => toast.info("Excel") },
              { label: "Descargar CSV", onClick: () => toast.info("CSV") },
            ]}
          />

          <SplitButton
            label="Compartir"
            icon={<Share className="size-4" />}
            variant="secondary"
            onMainAction={() => toast.success("Compartido")}
            options={[
              { label: "Copiar enlace", onClick: () => toast.success("Enlace copiado") },
              { label: "Compartir por email", onClick: () => toast.info("Email") },
              { label: "Compartir en Slack", onClick: () => toast.info("Slack") },
            ]}
          />
        </div>
      </Card>
    </div>
  );
}

export function SplitButtonPage() {
  return (
    <ComponentShowcase
      title="Split Button"
      description="Botón con acción principal y dropdown de acciones secundarias. Ideal para operaciones con variantes."
      previewComponent={<SplitButtonDemo />}
      codeBlock={`import { SplitButton } from "@biomahd-creator/financio-design-system/advanced";

<SplitButton
  label="Guardar"
  icon={<Save className="size-4" />}
  onMainAction={() => save()}
  options={[
    { label: "Guardar y cerrar", onClick: () => saveAndClose() },
    { label: "Guardar como...", onClick: () => saveAs() },
  ]}
/>`}
      usageExample={`// Exportar datos en múltiples formatos
<SplitButton
  label="Exportar"
  onMainAction={() => exportDefault()}
  options={[
    { label: "Exportar PDF", onClick: () => exportPDF() },
    { label: "Exportar Excel", onClick: () => exportExcel() },
    { label: "Exportar CSV", onClick: () => exportCSV() },
  ]}
/>`}
    />
  );
}
