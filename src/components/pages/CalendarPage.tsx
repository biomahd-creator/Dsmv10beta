import { ComponentShowcase } from "../ui/component-showcase";
import { Calendar } from "../ui/calendar";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <ComponentShowcase
      title="Calendar"
      description="A date field component to allow users to enter and edit date."
      category="Forms"
      preview={
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      }
      code={`import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export function CalendarDemo() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  )
}`}
      usage="Importa el componente Calendar desde @/components/ui/calendar. Basado en react-day-picker."
      props={[
        {
          name: "mode",
          type: '"single" | "range" | "multiple"',
          default: '"single"',
          description: "El modo de selección",
        },
        {
          name: "selected",
          type: "Date | Date[] | DateRange",
          description: "La fecha o rango seleccionado",
        },
        {
          name: "onSelect",
          type: "function",
          description: "Callback cuando cambia la selección",
        },
      ]}
      examples={[]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Calendar</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">mode</code></td>
                    <td className="p-2">"single" | "range" | "multiple"</td>
                    <td className="p-2">"single"</td>
                    <td className="p-2">Modo de selección del calendario</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">selected</code></td>
                    <td className="p-2">Date | Date[] | DateRange</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Fecha(s) seleccionada(s) actualmente</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onSelect</code></td>
                    <td className="p-2">function</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback ejecutado cuando cambia la selección</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">disabled</code></td>
                    <td className="p-2">Date[] | function</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Fechas deshabilitadas o función para deshabilitar</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">fromDate</code></td>
                    <td className="p-2">Date</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Fecha mínima seleccionable</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">toDate</code></td>
                    <td className="p-2">Date</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Fecha máxima seleccionable</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">className</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Clases CSS adicionales para personalización</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Calendar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📅 Reservas y Citas</h4>
                  <p className="text-sm text-muted-foreground">
                    Permitir a usuarios seleccionar fechas para reservar servicios, hoteles o agendar reuniones
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Filtros de Reportes</h4>
                  <p className="text-sm text-muted-foreground">
                    Seleccionar rangos de fechas para generar informes y análisis de datos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">✈️ Viajes y Transporte</h4>
                  <p className="text-sm text-muted-foreground">
                    Elegir fechas de salida y llegada en sistemas de reserva de vuelos o transporte
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📝 Formularios de Eventos</h4>
                  <p className="text-sm text-muted-foreground">
                    Capturar fechas de nacimiento, vencimientos o plazos en formularios
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🗓️ Gestión de Proyectos</h4>
                  <p className="text-sm text-muted-foreground">
                    Establecer fechas de inicio, entrega y milestones en herramientas de project management
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💳 Pagos y Facturación</h4>
                  <p className="text-sm text-muted-foreground">
                    Seleccionar fechas de vencimiento, períodos de facturación o fechas de pago
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del Calendar</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">mode="range"</code> para selecciones de períodos (fechas de inicio y fin)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Establece <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">fromDate</code> y <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">toDate</code> para limitar el rango de fechas seleccionables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Deshabilita fechas pasadas cuando solo se permiten fechas futuras usando la prop <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">disabled</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra el mes actual por defecto para facilitar la navegación del usuario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En móviles, considera usar el calendario nativo del navegador para mejor experiencia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Proporciona labels descriptivos y formato de fecha claro en el campo asociado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrega bordes visuales con <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">rounded-md border</code> para definir mejor el área del calendario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa localización apropiada para mostrar nombres de meses y días según el idioma del usuario</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}