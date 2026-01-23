import { useState } from "react";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function DateRangePickerPage() {
  const [range1, setRange1] = useState<DateRange | undefined>();

  return (
    <ComponentShowcase
      title="Date Range Picker"
      description="Selector de rango de fechas con calendario visual, localización en español y formato personalizable."
      category="Forms"
      
      // Main Preview
      preview={
        <div className="space-y-4">
          <DateRangePicker
            dateRange={range1}
            onDateRangeChange={setRange1}
            className="w-[300px]"
          />
          {range1?.from && (
            <div className="rounded-md bg-muted p-3 text-sm text-muted-foreground">
              {range1.to
                ? `Rango: ${format(range1.from, "dd/MM/yyyy")} - ${format(range1.to, "dd/MM/yyyy")}`
                : `Inicio: ${format(range1.from, "dd/MM/yyyy")}`}
            </div>
          )}
        </div>
      }
      
      // Main Code
      code={`import { DateRangePicker } from "@/components/ui/date-range-picker";
import { useState } from "react";
import { DateRange } from "react-day-picker";

export function DateRangePickerDemo() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  return (
    <DateRangePicker
      dateRange={dateRange}
      onDateRangeChange={setDateRange}
      placeholder="Seleccionar rango"
    />
  );
}`}
      
      // Usage
      usage="Importa DateRangePicker. El componente maneja el estado del rango seleccionado (from, to). Requiere 'react-day-picker' y 'date-fns' como dependencias."
      
      props={[
        {
          name: "dateRange",
          type: "DateRange | undefined",
          description: "El rango de fechas seleccionado actualmente",
        },
        {
          name: "onDateRangeChange",
          type: "(range: DateRange | undefined) => void",
          description: "Callback cuando cambia la selección",
        },
        {
          name: "placeholder",
          type: "string",
          default: '"Selecciona un rango..."',
          description: "Texto a mostrar cuando no hay selección",
        },
        {
          name: "disabled",
          type: "boolean",
          default: "false",
          description: "Deshabilita la interacción con el picker",
        },
      ]}
      
      examples={[
        {
          title: "Preselected Range",
          description: "Selector con un rango predefinido",
          preview: (
            <DateRangePicker
              dateRange={{
                from: new Date(2024, 11, 1),
                to: new Date(2024, 11, 15),
              }}
              onDateRangeChange={() => {}}
              className="w-[300px]"
            />
          ),
          code: `<DateRangePicker
  dateRange={{
    from: new Date(2024, 11, 1),
    to: new Date(2024, 11, 15),
  }}
  onDateRangeChange={setDateRange}
/>`
        },
        {
          title: "Custom Placeholder",
          description: "Texto de placeholder personalizado",
          preview: (
            <DateRangePicker
              dateRange={undefined}
              onDateRangeChange={() => {}}
              placeholder="Elige el período del reporte"
              className="w-[300px]"
            />
          ),
          code: `<DateRangePicker
  placeholder="Elige el período del reporte"
  dateRange={dateRange}
  onDateRangeChange={setDateRange}
/>`
        },
        {
          title: "Disabled State",
          description: "Componente en estado deshabilitado",
          preview: (
            <DateRangePicker
              dateRange={{
                from: new Date(2024, 11, 1),
                to: new Date(2024, 11, 31),
              }}
              onDateRangeChange={() => {}}
              disabled
              className="w-[300px]"
            />
          ),
          code: `<DateRangePicker
  disabled
  dateRange={currentRange}
  onDateRangeChange={setDateRange}
/>`
        }
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente DateRangePicker</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">dateRange</code></td>
                    <td className="p-2">DateRange | undefined</td>
                    <td className="p-2">-</td>
                    <td className="p-2">El rango de fechas seleccionado actualmente (from/to)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onDateRangeChange</code></td>
                    <td className="p-2">(range: DateRange | undefined) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback ejecutado cuando cambia la selección</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">placeholder</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">"Selecciona un rango..."</td>
                    <td className="p-2">Texto a mostrar cuando no hay selección</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">disabled</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Deshabilita la interacción con el picker</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">className</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Clases CSS adicionales para el contenedor</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">numberOfMonths</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">2</td>
                    <td className="p-2">Número de meses a mostrar en el calendario</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente DateRangePicker</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Filtros de Reportes</h4>
                  <p className="text-sm text-muted-foreground">
                    Seleccionar período para generar reportes financieros o de gestión
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📈 Análisis de Datos</h4>
                  <p className="text-sm text-muted-foreground">
                    Comparar métricas entre dos períodos de tiempo específicos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">✈️ Reservas y Viajes</h4>
                  <p className="text-sm text-muted-foreground">
                    Selección de fechas de inicio y fin para reservas de hotel o vuelos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💼 Gestión de Facturas</h4>
                  <p className="text-sm text-muted-foreground">
                    Filtrar facturas por rango de fechas de emisión o vencimiento
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📅 Planificación de Eventos</h4>
                  <p className="text-sm text-muted-foreground">
                    Definir período de duración de proyectos o campañas
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔍 Búsqueda Histórica</h4>
                  <p className="text-sm text-muted-foreground">
                    Buscar transacciones, logs o eventos en un rango temporal
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de DateRangePicker</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">numberOfMonths=2</code> para facilitar selección de rangos largos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Valida que la fecha <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">from</code> sea anterior a <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">to</code> en tu lógica de negocio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa format() de date-fns para mostrar el rango seleccionado en formato legible localizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye botones de "Hoy", "Esta semana", "Este mes" como atajos para rangos comunes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Proporciona feedback visual del rango seleccionado debajo del picker</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Limita rangos demasiado largos (&gt;1 año) para evitar problemas de rendimiento en reportes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa placeholder descriptivo del contexto ("Período del reporte", "Fechas de facturación")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Considera guardar el rango en localStorage/URL params para persistencia entre sesiones</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}