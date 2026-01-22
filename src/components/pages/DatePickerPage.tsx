import { ComponentShowcase } from "../ui/component-showcase";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "../ui/utils";
import { format, addDays } from "date-fns";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function DatePickerPage() {
  const [date, setDate] = useState<Date>();
  const [range, setRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(2024, 0, 20),
    to: addDays(new Date(2024, 0, 20), 20),
  });

  return (
    <ComponentShowcase
      title="Date Picker"
      description="A date picker component built using Popover, Calendar, and Button."
      category="Forms"
      preview={
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[280px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      }
      code={`import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePickerDemo() {
  const [date, setDate] = React.useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
`}
      usage={`// This is a pattern, not a single component.
// It combines Popover, Button, and Calendar.`}
      props={[
        {
          name: "Calendar Props",
          type: "various",
          default: "-",
          description: "See Calendar component props",
        },
        {
          name: "Popover Props",
          type: "various",
          default: "-",
          description: "See Popover component props",
        }
      ]}
      examples={[
        {
          title: "Date Range Picker",
          description: "Picker for a date range.",
          preview: (
            <div className="grid gap-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-[300px] justify-start text-left font-normal",
                      !range && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {range?.from ? (
                      range.to ? (
                        <>
                          {format(range.from, "LLL dd, y")} -{" "}
                          {format(range.to, "LLL dd, y")}
                        </>
                      ) : (
                        format(range.from, "LLL dd, y")
                      )
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={range?.from}
                    selected={range}
                    onSelect={setRange}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </div>
          ),
          code: `// ... imports

export function DateRangePickerDemo() {
  const [date, setDate] = React.useState({
    from: new Date(2024, 0, 20),
    to: addDays(new Date(2024, 0, 20), 20),
  })

  return (
    <div className="grid gap-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={setDate}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
`
        }
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente DatePicker</CardDescription>
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
                    <td className="p-2">"single" | "range"</td>
                    <td className="p-2">"single"</td>
                    <td className="p-2">Modo de selección: fecha única o rango</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">selected</code></td>
                    <td className="p-2">Date | DateRange</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Fecha o rango seleccionado (controlado)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onSelect</code></td>
                    <td className="p-2">(date) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback al seleccionar fecha</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">disabled</code></td>
                    <td className="p-2">Date[] | function</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Fechas deshabilitadas o función de validación</td>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">numberOfMonths</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">1</td>
                    <td className="p-2">Número de meses a mostrar (útil para rangos)</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente DatePicker</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📅 Reservas y Citas</h4>
                  <p className="text-sm text-muted-foreground">
                    Selección de fecha para agendar reuniones, citas médicas o reservas
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Filtros de Reportes</h4>
                  <p className="text-sm text-muted-foreground">
                    Rangos de fechas para filtrar datos en dashboards y reportes
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">✈️ Viajes y Estancias</h4>
                  <p className="text-sm text-muted-foreground">
                    Selección de check-in y check-out para hoteles o vuelos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📆 Planificación de Eventos</h4>
                  <p className="text-sm text-muted-foreground">
                    Configuración de fechas de inicio y fin para eventos o proyectos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎂 Fecha de Nacimiento</h4>
                  <p className="text-sm text-muted-foreground">
                    Formularios de registro con restricción de edad mínima
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💼 Gestión de Facturas</h4>
                  <p className="text-sm text-muted-foreground">
                    Fechas de emisión, vencimiento y pago de documentos financieros
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de DatePicker</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">mode="range"</code> con <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">numberOfMonths=2</code> para rangos de fechas visuales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implementa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">fromDate</code> y <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">toDate</code> para restringir fechas válidas según contexto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">format()</code> de date-fns para mostrar fechas en formato localizado legible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Combina con Popover para UX no intrusiva - el calendario se muestra solo cuando es necesario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Aplica <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">initialFocus</code> en Calendar para keyboard accessibility inmediata</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">disabled</code> como función para validación compleja (ej: solo días laborales)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra placeholder "Selecciona una fecha" cuando no hay valor seleccionado para claridad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye icono CalendarIcon en el trigger para indicar visualmente que es un date picker</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}