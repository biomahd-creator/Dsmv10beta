import { ComponentShowcase } from "../ui/component-showcase";
import { EditableTable } from "../patterns/EditableTable";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Edit2, DollarSign, Building2 } from "lucide-react";

export function EditableTablePage() {
  return (
    <ComponentShowcase
      title="Editable Table"
      description="Tabla interactiva con edición inline de diferentes tipos de datos: texto, números, fechas, estados y checkboxes."
      badges={[
        { text: "Patterns", variant: "secondary" }
      ]}
      
      // Main Preview
      previewComponent={
        <div className="w-full">
           <EditableTable />
        </div>
      }
      
      // Code - Ahora más detallado
      codeBlock={`import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, X, Pencil } from "lucide-react";

interface Invoice {
  id: string;
  folio: string;
  cliente: string;
  monto: number;
  fecha: Date;
  estado: "pendiente" | "aprobado" | "rechazado";
  prioritaria: boolean;
}

export function EditableTable() {
  const [data, setData] = useState<Invoice[]>([
    { id: "1", folio: "F-2024-001", cliente: "Acme Corp", monto: 150000, fecha: new Date("2024-01-15"), estado: "pendiente", prioritaria: true },
    { id: "2", folio: "F-2024-002", cliente: "Tech Solutions", monto: 280000, fecha: new Date("2024-01-18"), estado: "aprobado", prioritaria: false },
  ]);
  
  const [editingCell, setEditingCell] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<any>(null);

  const handleSave = (id: string, field: keyof Invoice) => {
    setData(data.map(row => 
      row.id === id ? { ...row, [field]: editValue } : row
    ));
    setEditingCell(null);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Folio</TableHead>
          <TableHead>Cliente</TableHead>
          <TableHead>Monto</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Prioritaria</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{/* ... celda editable ... */}</TableCell>
            {/* Más celdas... */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}`}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
              <CardDescription>Cómo usar este componente en tu aplicación</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Este es un patrón compuesto que combina Table, Input, Popover, Calendar y Select para permitir edición en línea. El estado se gestiona internamente o puede elevarse mediante props si se refactoriza para ser controlado.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Props</CardTitle>
              <CardDescription>Propiedades disponibles para este componente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Prop</th>
                      <th className="text-left p-2">Tipo</th>
                      <th className="text-left p-2">Descripción</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground text-sm">
                    <tr className="border-b">
                      <td className="p-2 font-mono">initialData</td>
                      <td className="p-2">Invoice[]</td>
                      <td className="p-2">Datos iniciales de la tabla</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onDataChange</td>
                      <td className="p-2">(data: Invoice[]) =&gt; void</td>
                      <td className="p-2">Callback cuando los datos cambian</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tipos de Datos Soportados</CardTitle>
              <CardDescription>Diferentes tipos de celdas editables</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3 w-full">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <Edit2 className="h-4 w-4 text-primary" />
                      Edición Inline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      Click en cualquier celda para activar el modo de edición. Guarda con el botón check o cancela con la X.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-primary" />
                      Validación
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      Los campos numéricos solo aceptan números. Los selectores tienen opciones predefinidas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-sm">
                      <Building2 className="h-4 w-4 text-primary" />
                      Tipos de Datos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      Soporta texto, números con formato de moneda, fechas con calendario, estados con badge y checkboxes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ejemplos de Implementación</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-md overflow-x-auto">
                <pre className="text-sm">
                  <code>{`// 1. Texto simple
<Input value={editValue} onChange={(e) => setEditValue(e.target.value)} />

// 2. Números con formato
<Input 
  type="number" 
  value={editValue} 
  onChange={(e) => setEditValue(Number(e.target.value))} 
/>

// 3. Fechas con Calendar picker
<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">{format(date, "PPP")}</Button>
  </PopoverTrigger>
  <PopoverContent>
    <Calendar mode="single" selected={date} onSelect={setDate} />
  </PopoverContent>
</Popover>

// 4. Select con opciones predefinidas
<Select value={estado} onValueChange={setEstado}>
  <SelectTrigger>
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="pendiente">Pendiente</SelectItem>
    <SelectItem value="aprobado">Aprobado</SelectItem>
    <SelectItem value="rechazado">Rechazado</SelectItem>
  </SelectContent>
</Select>

// 5. Checkbox
<Checkbox checked={prioritaria} onCheckedChange={setPrioritaria} />`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}