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
    />
  );
}