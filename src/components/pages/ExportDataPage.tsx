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

      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades Detalladas</CardTitle>
              <CardDescription>API completa del componente ExportData</CardDescription>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2 text-foreground">Prop</th>
                    <th className="text-left p-2 text-foreground">Tipo</th>
                    <th className="text-left p-2 text-foreground">Default</th>
                    <th className="text-left p-2 text-foreground">Descripción</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">data *</code></td>
                    <td className="p-2">Record&lt;string, any&gt;[]</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Array de objetos a exportar</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">columns</code></td>
                    <td className="p-2">ExportColumn[]</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Definición de columnas con labels y formato personalizado</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">defaultFilename</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">"export"</td>
                    <td className="p-2">Nombre sugerido del archivo (sin extensión)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onExport</code></td>
                    <td className="p-2">(format, config) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback al confirmar exportación con formato y config</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes de ExportData</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Exportar Reportes</h4>
                  <p className="text-sm text-muted-foreground">
                    Generar reportes financieros en CSV/Excel para análisis offline
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📋 Listados de Facturas</h4>
                  <p className="text-sm text-muted-foreground">
                    Exportar facturas con estados, montos y clientes para contabilidad
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📈 Datos de Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Exportar métricas, KPIs y estadísticas para presentaciones
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">👥 Base de Datos de Clientes</h4>
                  <p className="text-sm text-muted-foreground">
                    Extraer listados de clientes con datos de contacto y segmentación
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📦 Inventarios</h4>
                  <p className="text-sm text-muted-foreground">
                    Exportar catálogo de productos con stock, precios y categorías
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🗃️ Backups de Datos</h4>
                  <p className="text-sm text-muted-foreground">
                    Crear copias de seguridad de datos críticos en formato legible
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de ExportData</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Define <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">columns</code> con labels descriptivos para mejorar legibilidad del archivo exportado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa funciones <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">format</code> para convertir valores (fechas, montos, porcentajes)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Limita datasets grandes a máximo 10,000 filas para evitar bloqueos del navegador</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye timestamp en el filename para identificar versiones (ej: facturas-2024-01-22)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para datasets masivos (&gt;10k filas), implementa exportación server-side con streaming</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Permite seleccionar solo columnas relevantes para reducir tamaño del archivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra preview de las primeras 5 filas antes de exportar para validación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa CSV para compatibilidad universal, Excel (XLSX) para formato rico con estilos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}