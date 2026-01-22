import { ComponentShowcase } from "../ui/component-showcase";
import { DateRangePicker } from "../ui/date-range-picker";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { DateRange } from "react-day-picker@8.10.1";
import { format } from "date-fns";

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
    />
  );
}
