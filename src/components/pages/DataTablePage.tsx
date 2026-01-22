import { ComponentShowcase } from "../ui/component-showcase";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { DataTable } from "../advanced/DataTable";
import { MoreHorizontal, ArrowUpDown, CheckCircle, Clock, AlertCircle, XCircle, Circle } from "lucide-react";
import { ProgressBar } from "../business/ProgressBar";
import { toast } from "sonner@2.0.3";

// Sample Data Type
type Invoice = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  client: string;
  date: string;
  riskScore: number;
};

// Sample Data
const data: Invoice[] = Array.from({ length: 50 }, (_, i) => ({
  id: `INV-${1000 + i}`,
  amount: Math.floor(Math.random() * 1000000) + 50000,
  status: ["pending", "processing", "success", "failed"][
    Math.floor(Math.random() * 4)
  ] as Invoice["status"],
  email: `client${i}@example.com`,
  client: `Client Company ${i + 1} S.A.`,
  date: new Date(2024, 0, 1 + i).toISOString().split("T")[0],
  riskScore: Math.floor(Math.random() * 1000),
}));

export const columns: ColumnDef<Invoice>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const config = {
        success: { color: "text-green-500 bg-green-500/10", icon: CheckCircle, label: "Paid" },
        pending: { color: "text-yellow-500 bg-yellow-500/10", icon: Clock, label: "Pending" },
        processing: { color: "text-blue-500 bg-blue-500/10", icon: AlertCircle, label: "Processing" },
        failed: { color: "text-red-500 bg-red-500/10", icon: XCircle, label: "Failed" },
      }[status] || { color: "text-muted-foreground", icon: Circle, label: status };

      const Icon = config.icon;

      return (
        <Badge variant="outline" className={`${config.color} border-0 flex w-fit items-center gap-1`}>
            <Icon className="h-3 w-3" />
            {config.label}
        </Badge>
      );
    },
  },
  {
    accessorKey: "client",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Client
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="font-medium ml-4">{row.getValue("client")}</div>,
  },
  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => <div className="lowercase text-muted-foreground">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
      accessorKey: "riskScore",
      header: "Risk Score",
      cell: ({ row }) => {
          const score = row.getValue("riskScore") as number;
          let variant: "danger" | "warning" | "success" = "success";
          let colorClass = "text-green-500";
          
          if (score < 500) {
            variant = "danger";
            colorClass = "text-red-500";
          } else if (score < 700) {
            variant = "warning";
            colorClass = "text-yellow-500";
          }
          
          return (
              <div className="flex items-center gap-2">
                  <div className="w-24">
                    <ProgressBar value={score/10} variant={variant} size="sm" />
                  </div>
                  <span className={`text-xs font-medium ${colorClass}`}>{score}</span>
              </div>
          )
      }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                try {
                  navigator.clipboard.writeText(payment.id)
                    .then(() => toast.success("Invoice ID copied to clipboard"))
                    .catch(() => toast.error("Failed to copy Invoice ID"));
                } catch (error) {
                  toast.error("Clipboard access not available");
                }
              }}
            >
              Copy Invoice ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View details</DropdownMenuItem>
            <DropdownMenuItem>Download PDF</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function DataTablePage() {
  return (
    <ComponentShowcase
      title="Advanced Data Table"
      description="Powerful table component with sorting, filtering, pagination, and selection. Built on top of TanStack Table. Fully responsive with horizontal scroll on mobile."
      category="Advanced"
      
      preview={
        <div className="w-full">
           <DataTable columns={columns} data={data} searchKey="client" searchPlaceholder="Filter by client..." />
        </div>
      }
      
      code={`import { DataTable } from "@/components/advanced/DataTable"
import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
// ... imports

export const columns: ColumnDef<Invoice>[] = [
  // ... column definitions
]

export function DataTableDemo() {
  return (
    <DataTable 
      columns={columns} 
      data={data} 
      searchKey="client" 
      searchPlaceholder="Filter by client..." 
    />
  )
}`}
      
      usage="El componente DataTable encapsula la lógica compleja de TanStack Table. Proporciona props para configurar columnas, datos, y búsqueda."
      
      props={[
        {
          name: "columns",
          type: "ColumnDef<TData, TValue>[]",
          description: "Definición de columnas de TanStack Table",
        },
        {
          name: "data",
          type: "TData[]",
          description: "Array de datos a mostrar",
        },
        {
          name: "searchKey",
          type: "string",
          description: "Key del objeto data por la cual filtrar (ej: 'email', 'client')",
        },
        {
          name: "searchPlaceholder",
          type: "string",
          description: "Placeholder para el input de búsqueda",
        }
      ]}
      
      examples={[
        {
          title: "Features Overview",
          description: "Resumen de funcionalidades incluidas",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-1">Sorting</h3>
                <p className="text-muted-foreground">Click en headers para ordenar. Soporte multi-columna.</p>
              </div>
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-1">Filtering</h3>
                <p className="text-muted-foreground">Filtrado instantáneo por cliente usando el input.</p>
              </div>
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-1">Pagination</h3>
                <p className="text-muted-foreground">Controles de paginación y selector de tamaño de página.</p>
              </div>
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-1">Row Selection</h3>
                <p className="text-muted-foreground">Selección individual o masiva con checkboxes.</p>
              </div>
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-1">Column Visibility</h3>
                <p className="text-muted-foreground">Toggle para ocultar/mostrar columnas dinámicamente.</p>
              </div>
              <div className="p-4 border rounded-lg bg-card">
                <h3 className="font-semibold mb-1">Custom Cells</h3>
                <p className="text-muted-foreground">Renderizado personalizado (Badges, ProgressBars, Menús).</p>
              </div>
            </div>
          ),
          code: `// Features are built-in to the DataTable component.`
        }
      ]}

      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades Detalladas</CardTitle>
              <CardDescription>API completa del componente DataTable</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">columns *</code></td>
                    <td className="p-2">ColumnDef&lt;TData&gt;[]</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Definición de columnas según TanStack Table API</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">data *</code></td>
                    <td className="p-2">TData[]</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Array de datos a mostrar en la tabla</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">searchKey</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Clave del objeto por la cual filtrar (ej: "email", "client")</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">searchPlaceholder</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">"Buscar..."</td>
                    <td className="p-2">Placeholder del input de búsqueda</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente DataTable</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📋 Listado de Facturas</h4>
                  <p className="text-sm text-muted-foreground">
                    Gestión de facturas con estados, filtrado por cliente y acciones masivas
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">👥 Gestión de Usuarios</h4>
                  <p className="text-sm text-muted-foreground">
                    Tabla de usuarios con roles, permisos, búsqueda y edición inline
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📦 Inventario de Productos</h4>
                  <p className="text-sm text-muted-foreground">
                    Catálogo de productos con stock, precios, sorting y paginación
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Reportes y Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Visualización de métricas, KPIs y datos financieros tabulados
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎫 Sistema de Tickets</h4>
                  <p className="text-sm text-muted-foreground">
                    Gestión de tickets con estados, prioridades y asignaciones
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💼 CRM Empresarial</h4>
                  <p className="text-sm text-muted-foreground">
                    Listado de clientes, oportunidades de venta y seguimiento
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del DataTable</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Define <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">accessorKey</code> o <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">accessorFn</code> para cada columna con datos dinámicos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">enableSorting: false</code> en columnas de acciones o checkboxes para evitar sorting innecesario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implementa celdas personalizadas con Badges, ProgressBars o Dropdowns para enriquecer la UX</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">searchKey</code> para habilitar filtrado rápido en columnas clave (nombres, emails, IDs)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Configura paginación adecuada: 10-25 filas por página para UX óptima en datasets grandes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye columna de selección con checkboxes cuando necesites acciones masivas (delete, export, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Formatea valores numéricos (monedas, porcentajes) con Intl.NumberFormat para localización correcta</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Asegura responsive design con scroll horizontal en mobile y colapso de columnas secundarias si es necesario</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}