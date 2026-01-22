import { ComponentShowcase } from "../ui/component-showcase";
import { PivotTable, PivotDataRow } from "../advanced/PivotTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Badge } from "../ui/badge";
import { AlertCircle, Info } from "lucide-react";

// Sample data: Facturas de factoring
const facturasData: PivotDataRow[] = [
  { cliente: "Corporación Global", region: "Centro", estado: "Pagada", mes: "Enero", monto: 450000, cantidad: 1 },
  { cliente: "Corporación Global", region: "Centro", estado: "Pagada", mes: "Febrero", monto: 380000, cantidad: 1 },
  { cliente: "Corporación Global", region: "Norte", estado: "Pendiente", mes: "Enero", monto: 220000, cantidad: 1 },
  { cliente: "Corporación Global", region: "Norte", estado: "Aprobada", mes: "Marzo", monto: 510000, cantidad: 1 },
  
  { cliente: "Innovatech Solutions", region: "Sur", estado: "Pagada", mes: "Enero", monto: 320000, cantidad: 1 },
  { cliente: "Innovatech Solutions", region: "Sur", estado: "Aprobada", mes: "Febrero", monto: 290000, cantidad: 1 },
  { cliente: "Innovatech Solutions", region: "Centro", estado: "Pagada", mes: "Enero", monto: 175000, cantidad: 1 },
  { cliente: "Innovatech Solutions", region: "Centro", estado: "Rechazada", mes: "Marzo", monto: 0, cantidad: 1 },
  
  { cliente: "Distribuidora Nacional", region: "Norte", estado: "Pagada", mes: "Enero", monto: 420000, cantidad: 1 },
  { cliente: "Distribuidora Nacional", region: "Norte", estado: "Pagada", mes: "Febrero", monto: 440000, cantidad: 1 },
  { cliente: "Distribuidora Nacional", region: "Sur", estado: "Aprobada", mes: "Enero", monto: 380000, cantidad: 1 },
  { cliente: "Distribuidora Nacional", region: "Sur", estado: "Pendiente", mes: "Marzo", monto: 350000, cantidad: 1 },
  
  { cliente: "TechCorp Industries", region: "Centro", estado: "Pagada", mes: "Febrero", monto: 560000, cantidad: 1 },
  { cliente: "TechCorp Industries", region: "Centro", estado: "Aprobada", mes: "Marzo", monto: 490000, cantidad: 1 },
  { cliente: "TechCorp Industries", region: "Norte", estado: "Pendiente", mes: "Enero", monto: 310000, cantidad: 1 },
  { cliente: "TechCorp Industries", region: "Sur", estado: "Pagada", mes: "Febrero", monto: 275000, cantidad: 1 },
  
  { cliente: "Logística Express", region: "Sur", estado: "Pagada", mes: "Enero", monto: 190000, cantidad: 1 },
  { cliente: "Logística Express", region: "Sur", estado: "Pagada", mes: "Febrero", monto: 210000, cantidad: 1 },
  { cliente: "Logística Express", region: "Centro", estado: "Aprobada", mes: "Marzo", monto: 185000, cantidad: 1 },
  { cliente: "Logística Express", region: "Norte", estado: "Rechazada", mes: "Enero", monto: 0, cantidad: 1 },
  
  { cliente: "MegaCorp Internacional", region: "Norte", estado: "Pagada", mes: "Enero", monto: 680000, cantidad: 1 },
  { cliente: "MegaCorp Internacional", region: "Norte", estado: "Pagada", mes: "Febrero", monto: 720000, cantidad: 1 },
  { cliente: "MegaCorp Internacional", region: "Centro", estado: "Aprobada", mes: "Marzo", monto: 650000, cantidad: 1 },
  { cliente: "MegaCorp Internacional", region: "Sur", estado: "Pendiente", mes: "Febrero", monto: 590000, cantidad: 1 },
  
  { cliente: "Comercial del Pacífico", region: "Sur", estado: "Pagada", mes: "Enero", monto: 340000, cantidad: 1 },
  { cliente: "Comercial del Pacífico", region: "Sur", estado: "Aprobada", mes: "Marzo", monto: 370000, cantidad: 1 },
  { cliente: "Comercial del Pacífico", region: "Centro", estado: "Pendiente", mes: "Febrero", monto: 280000, cantidad: 1 },
  { cliente: "Comercial del Pacífico", region: "Norte", estado: "Pagada", mes: "Marzo", monto: 320000, cantidad: 1 },
  
  { cliente: "Industrias del Sur", region: "Sur", estado: "Pagada", mes: "Febrero", monto: 420000, cantidad: 1 },
  { cliente: "Industrias del Sur", region: "Sur", estado: "Aprobada", mes: "Marzo", monto: 390000, cantidad: 1 },
  { cliente: "Industrias del Sur", region: "Centro", estado: "Pagada", mes: "Enero", monto: 310000, cantidad: 1 },
  { cliente: "Industrias del Sur", region: "Norte", estado: "Pendiente", mes: "Febrero", monto: 280000, cantidad: 1 },
];

// Ventas por producto y región
const ventasData: PivotDataRow[] = [
  { producto: "Software CRM", categoria: "Tecnología", region: "Norte", trimestre: "Q1", ventas: 145000, unidades: 12 },
  { producto: "Software CRM", categoria: "Tecnología", region: "Norte", trimestre: "Q2", ventas: 168000, unidades: 14 },
  { producto: "Software CRM", categoria: "Tecnología", region: "Sur", trimestre: "Q1", ventas: 132000, unidades: 11 },
  { producto: "Software CRM", categoria: "Tecnología", region: "Centro", trimestre: "Q2", ventas: 156000, unidades: 13 },
  
  { producto: "Consultoría", categoria: "Servicios", region: "Norte", trimestre: "Q1", ventas: 280000, unidades: 8 },
  { producto: "Consultoría", categoria: "Servicios", region: "Sur", trimestre: "Q1", ventas: 310000, unidades: 9 },
  { producto: "Consultoría", categoria: "Servicios", region: "Centro", trimestre: "Q2", ventas: 295000, unidades: 8 },
  { producto: "Consultoría", categoria: "Servicios", region: "Norte", trimestre: "Q2", ventas: 325000, unidades: 10 },
  
  { producto: "Hardware", categoria: "Tecnología", region: "Centro", trimestre: "Q1", ventas: 95000, unidades: 45 },
  { producto: "Hardware", categoria: "Tecnología", region: "Sur", trimestre: "Q1", ventas: 88000, unidades: 42 },
  { producto: "Hardware", categoria: "Tecnología", region: "Norte", trimestre: "Q2", ventas: 102000, unidades: 48 },
  { producto: "Hardware", categoria: "Tecnología", region: "Centro", trimestre: "Q2", ventas: 98000, unidades: 46 },
  
  { producto: "Capacitación", categoria: "Servicios", region: "Sur", trimestre: "Q1", ventas: 75000, unidades: 25 },
  { producto: "Capacitación", categoria: "Servicios", region: "Norte", trimestre: "Q1", ventas: 82000, unidades: 28 },
  { producto: "Capacitación", categoria: "Servicios", region: "Centro", trimestre: "Q2", ventas: 79000, unidades: 26 },
  { producto: "Capacitación", categoria: "Servicios", region: "Sur", trimestre: "Q2", ventas: 85000, unidades: 29 },
];

export function PivotTablePage() {
  return (
    <ComponentShowcase
      title="Pivot Table"
      description="Tabla dinámica para análisis multidimensional de datos con agregaciones, drill-down y configuración en tiempo real."
      badges={[
        { text: "📱 Responsive", variant: "default" },
        { text: "NEW", variant: "secondary" }
      ]}
      codeBlock={`import { PivotTable, PivotDataRow } from "./components/advanced/PivotTable";

const data: PivotDataRow[] = [
  { cliente: "Corporación Global", region: "Centro", monto: 450000 },
  { cliente: "Innovatech Solutions", region: "Sur", monto: 320000 },
  // ... más datos
];

<PivotTable
  data={data}
  initialConfig={{
    rows: ["cliente"],        // Campo para filas
    columns: ["region"],      // Campo para columnas
    values: "monto",          // Campo a agregar
    aggregation: "sum",       // Tipo de agregación
  }}
  availableFields={["cliente", "region", "estado", "monto"]}
  onConfigChange={(config) => {
    console.log("Nueva configuración:", config);
  }}
/>`}
      examplesSection={
        <div className="space-y-8">
          {/* Description Alert */}
          <Alert>
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              El <strong>Pivot Table</strong> permite analizar grandes volúmenes de datos mediante agregaciones dinámicas,
              agrupación por filas y columnas, y exploración interactiva con drill-down para ver detalles de cada celda.
            </AlertDescription>
          </Alert>

          {/* Example 1: Facturas por Cliente y Región */}
          <Card>
            <CardHeader>
              <CardTitle>Análisis de Facturas: Cliente × Región</CardTitle>
              <CardDescription>
                Suma de montos por cliente y región con totales automáticos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <PivotTable
                data={facturasData}
                initialConfig={{
                  rows: ["cliente"],
                  columns: ["region"],
                  values: "monto",
                  aggregation: "sum",
                }}
                availableFields={["cliente", "region", "estado", "mes", "monto", "cantidad"]}
              />
            </CardContent>
          </Card>

          {/* Example 2: Facturas por Estado y Mes */}
          <Card>
            <CardHeader>
              <CardTitle>Análisis por Estado × Mes</CardTitle>
              <CardDescription>
                Conteo de facturas agrupadas por estado y mes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <PivotTable
                data={facturasData}
                initialConfig={{
                  rows: ["estado"],
                  columns: ["mes"],
                  values: "cantidad",
                  aggregation: "count",
                }}
                availableFields={["cliente", "region", "estado", "mes", "monto", "cantidad"]}
              />
            </CardContent>
          </Card>

          {/* Example 3: Ventas por Producto y Trimestre */}
          <Card>
            <CardHeader>
              <CardTitle>Ventas: Producto × Trimestre</CardTitle>
              <CardDescription>
                Promedio de ventas por producto en cada trimestre
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <PivotTable
                data={ventasData}
                initialConfig={{
                  rows: ["producto"],
                  columns: ["trimestre"],
                  values: "ventas",
                  aggregation: "avg",
                }}
                availableFields={["producto", "categoria", "region", "trimestre", "ventas", "unidades"]}
              />
            </CardContent>
          </Card>

          {/* Example 4: Interactive Configuration */}
          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="flex items-center gap-2">
                    🎯 Configuración Dinámica
                    <Badge variant="default">INTERACTIVO</Badge>
                  </CardTitle>
                  <CardDescription>
                    Cambia filas, columnas, valores y tipo de agregación en tiempo real
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Explora tus Datos</AlertTitle>
                <AlertDescription className="space-y-2 mt-2">
                  <p>
                    Usa los selectores en la parte superior para <strong>cambiar la configuración</strong> del Pivot Table:
                  </p>
                  <p className="text-xs mt-2">
                    🔹 <strong>Filas:</strong> Campo a usar como filas (ej: cliente, producto)<br />
                    🔹 <strong>Columnas:</strong> Campo a usar como columnas (ej: región, trimestre)<br />
                    🔹 <strong>Valores:</strong> Campo numérico a agregar (ej: monto, ventas)<br />
                    🔹 <strong>Agregación:</strong> Función de cálculo (suma, promedio, conteo, min, max)
                  </p>
                </AlertDescription>
              </Alert>
              
              <PivotTable
                data={facturasData}
                availableFields={["cliente", "region", "estado", "mes", "monto", "cantidad"]}
                onConfigChange={(config) => console.log("Nueva configuración:", config)}
              />
            </CardContent>
          </Card>
        </div>
      }
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades Detalladas</CardTitle>
              <CardDescription>API completa del componente PivotTable</CardDescription>
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
                    <td className="p-2">PivotDataRow[]</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Array de datos fuente para análisis</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">initialConfig</code></td>
                    <td className="p-2">PivotConfig</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Configuración inicial: rows, columns, values, aggregation</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">availableFields</code></td>
                    <td className="p-2">string[]</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Lista de campos disponibles para configuración</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onConfigChange</code></td>
                    <td className="p-2">(config: PivotConfig) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback cuando cambia la configuración</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">showControls</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">true</td>
                    <td className="p-2">Muestra panel de configuración</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del Pivot Table</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Análisis de Facturas</h4>
                  <p className="text-sm text-muted-foreground">
                    Analizar facturas por cliente, región, estado y periodo con totales agregados
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💰 Reportes Financieros</h4>
                  <p className="text-sm text-muted-foreground">
                    Generar reportes de ventas, ingresos y gastos con múltiples dimensiones
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📈 KPIs y Métricas</h4>
                  <p className="text-sm text-muted-foreground">
                    Visualizar indicadores clave con drill-down por categorías
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🗂️ Gestión de Cartera</h4>
                  <p className="text-sm text-muted-foreground">
                    Analizar distribución de cartera por cliente, producto y región
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📅 Análisis Temporal</h4>
                  <p className="text-sm text-muted-foreground">
                    Comparar datos por mes, trimestre o año con agregaciones automáticas
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎯 Segmentación</h4>
                  <p className="text-sm text-muted-foreground">
                    Segmentar clientes por comportamiento, región o volumen de operaciones
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del Pivot Table</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Normaliza los datos antes de pasarlos al PivotTable - asegura que todas las filas tengan las mismas claves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa agregaciones adecuadas: <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">sum</code> para montos, <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">count</code> para cantidades, <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">avg</code> para promedios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Limita dimensiones a 2-3 máximo para mantener legibilidad (1 fila + 1-2 columnas)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implementa paginación o scroll virtual para datasets grandes (&gt;1000 registros)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Permite exportación a CSV/Excel para que usuarios puedan analizar datos offline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Guarda configuraciones preferidas del usuario en localStorage para persistencia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Formatea valores numéricos con Intl.NumberFormat para separadores de miles y decimales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa color coding para destacar valores positivos/negativos o rangos de importancia</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}