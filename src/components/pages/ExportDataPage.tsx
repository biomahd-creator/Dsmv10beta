import { ComponentShowcase } from "../ui/component-showcase";
import { ExportData, ExportColumn, quickExportCSV } from "../advanced/ExportData";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Download } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

// Sample data: Facturas
const facturasData = [
  {
    id: "F-2024-001",
    cliente: "Corporación Global S.A.",
    monto: 450000,
    estado: "Pagada",
    fecha: "2024-01-15",
    region: "Centro",
    moneda: "CLP",
  },
  {
    id: "F-2024-002",
    cliente: "Innovatech Solutions",
    monto: 320000,
    estado: "Aprobada",
    fecha: "2024-01-18",
    region: "Sur",
    moneda: "CLP",
  },
  {
    id: "F-2024-003",
    cliente: "Distribuidora Nacional",
    monto: 420000,
    estado: "Pagada",
    fecha: "2024-01-20",
    region: "Norte",
    moneda: "CLP",
  },
  {
    id: "F-2024-004",
    cliente: "TechCorp Industries",
    monto: 560000,
    estado: "Pendiente",
    fecha: "2024-01-22",
    region: "Centro",
    moneda: "CLP",
  },
  {
    id: "F-2024-005",
    cliente: "Logística Express",
    monto: 190000,
    estado: "Aprobada",
    fecha: "2024-01-25",
    region: "Sur",
    moneda: "CLP",
  }
];

// Custom columns with formatting
const facturasColumns: ExportColumn[] = [
  { key: "id", label: "ID Factura" },
  { key: "cliente", label: "Cliente" },
  {
    key: "monto",
    label: "Monto",
    format: (value) => `$${value.toLocaleString("es-ES")}`,
  },
  { key: "estado", label: "Estado" },
  {
    key: "fecha",
    label: "Fecha",
    format: (value) => new Date(value).toLocaleDateString("es-ES"),
  },
  { key: "region", label: "Región" },
  { key: "moneda", label: "Moneda" },
];

export function ExportDataPage() {
  return (
    <ComponentShowcase
      title="Export Data"
      description="Exportación configurable de datos a formatos CSV y Excel (XLSX) con selección de columnas, formato personalizado y vista previa."
      category="Advanced"
      
      // Main Preview
      preview={
        <div className="space-y-4 w-full">
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="text-right">Monto</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {facturasData.slice(0, 3).map((factura) => (
                  <TableRow key={factura.id}>
                    <TableCell className="font-medium">{factura.id}</TableCell>
                    <TableCell>{factura.cliente}</TableCell>
                    <TableCell className="text-right">
                      ${factura.monto.toLocaleString("es-ES")}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{factura.estado}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <ExportData
            data={facturasData}
            defaultFilename="facturas-2024"
            availableColumns={facturasColumns}
            onExport={(format, config) => {
              console.log(`Exportado ${facturasData.length} registros a ${format}`, config);
            }}
          />
        </div>
      }
      
      // Code
      code={`import { ExportData, ExportColumn } from "@/components/advanced/ExportData";

// Define columnas con formato opcional
const columns: ExportColumn[] = [
  { key: "id", label: "ID" },
  { key: "cliente", label: "Cliente" },
  { 
    key: "monto", 
    label: "Monto",
    format: (value) => \`$\${value.toLocaleString("es-ES")}\`
  },
  { key: "estado", label: "Estado" },
];

export function ExportDemo() {
  return (
    <ExportData
      data={facturasData}
      defaultFilename="facturas-2024"
      availableColumns={columns}
      onExport={(format, config) => console.log(format, config)}
    />
  );
}`}
      
      // Usage
      usage="Importa ExportData. Pasa tus datos en la prop `data` y la definición de columnas en `availableColumns`. El componente maneja la UI de configuración y la generación de archivos (CSV nativo, Excel via xlsx)."
      
      props={[
        {
          name: "data",
          type: "any[]",
          description: "Array de objetos con los datos a exportar",
        },
        {
          name: "availableColumns",
          type: "ExportColumn[]",
          description: "Definición de columnas y formateo",
        },
        {
          name: "defaultFilename",
          type: "string",
          default: '"export"',
          description: "Nombre sugerido para el archivo (sin extensión)",
        },
        {
          name: "onExport",
          type: "(format, config) => void",
          description: "Callback ejecutado al confirmar la exportación",
        },
      ]}
      
      examples={[
        {
          title: "Quick Export (No UI)",
          description: "Exportación directa sin mostrar el diálogo de configuración, usando `quickExportCSV`.",
          preview: (
            <Button
              onClick={() => quickExportCSV(facturasData, "facturas-quick")}
              variant="outline"
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              Download CSV Immediately
            </Button>
          ),
          code: `import { quickExportCSV } from "@/components/advanced/ExportData";

<Button onClick={() => quickExportCSV(data, "filename")}>
  Download CSV
</Button>`
        }
      ]}
    />
  );
}
