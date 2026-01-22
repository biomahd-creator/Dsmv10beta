import { ComponentShowcase } from "../ui/component-showcase";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "../ui/table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MoreHorizontal, ArrowUpDown, Download, FileText } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function TablePage() {
  const invoices = [
    { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
    { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
    { id: "INV003", status: "Unpaid", method: "Bank Transfer", amount: "$350.00" },
    { id: "INV004", status: "Paid", method: "Credit Card", amount: "$450.00" },
    { id: "INV005", status: "Paid", method: "PayPal", amount: "$550.00" },
    { id: "INV006", status: "Pending", method: "Bank Transfer", amount: "$200.00" },
    { id: "INV007", status: "Unpaid", method: "Credit Card", amount: "$300.00" },
  ];

  const users = [
    { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Active" },
    { name: "Bob Johnson", email: "bob@example.com", role: "Viewer", status: "Inactive" },
  ];

  return (
    <ComponentShowcase
      title="Table"
      description="A responsive table component for displaying data in rows and columns."
      category="Data Display"
      
      // Main Preview
      preview={
        <div className="rounded-md border w-full">
          <Table>
            <TableCaption>A list of your recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.slice(0, 5).map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={
                        invoice.status === "Paid" ? "default" : 
                        invoice.status === "Pending" ? "secondary" : 
                        "destructive"
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{invoice.method}</TableCell>
                  <TableCell className="text-right">{invoice.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      }
      
      // Main Code
      code={`import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function TableDemo() {
  const invoices = [
    { id: "INV001", status: "Paid", method: "Credit Card", amount: "$250.00" },
    { id: "INV002", status: "Pending", method: "PayPal", amount: "$150.00" },
  ];

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>{invoice.id}</TableCell>
            <TableCell>{invoice.status}</TableCell>
            <TableCell>{invoice.method}</TableCell>
            <TableCell className="text-right">{invoice.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}`}
      
      // Usage
      usage="Importa los componentes Table desde @/components/ui/table. Usa Table como contenedor, TableHeader para los encabezados, TableBody para las filas de datos y TableCell para cada celda."
      usageCode={`import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

function MyTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`}
      
      // Props Documentation
      props={[
        {
          name: "className",
          type: "string",
          description: "Clases CSS adicionales para personalizar la tabla",
        },
        {
          name: "children",
          type: "ReactNode",
          description: "Contenido de la tabla (TableHeader, TableBody, TableFooter, TableCaption)",
          required: true,
        },
      ]}
      
      // Examples
      examples={[
        {
          title: "With Footer",
          description: "Tabla con pie de página para totales",
          preview: (
            <div className="rounded-md border w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.slice(0, 5).map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>
                        <Badge variant={invoice.status === "Paid" ? "default" : "secondary"}>
                          {invoice.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">{invoice.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell className="text-right">$1,750.00</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          ),
          code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {/* Data rows */}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={1}>Total</TableCell>
      <TableCell className="text-right">$1,750.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`
        },
        {
          title: "With Actions",
          description: "Tabla con acciones por fila usando Dropdown Menu",
          preview: (
            <div className="rounded-md border w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.email}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{user.role}</Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <span className="sr-only">Open menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Edit user</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">
                              Delete user
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ),
          code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Name</TableHead>
      <TableHead className="text-right">Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map((user) => (
      <TableRow key={user.email}>
        <TableCell>{user.name}</TableCell>
        <TableCell className="text-right">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>View</DropdownMenuItem>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`
        },
        {
          title: "Compact Table",
          description: "Tabla con filas más compactas",
          preview: (
            <div className="rounded-md border w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="h-8">ID</TableHead>
                    <TableHead className="h-8">Status</TableHead>
                    <TableHead className="h-8 text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.slice(0, 4).map((invoice) => (
                    <TableRow key={invoice.id} className="h-8">
                      <TableCell className="py-2 font-medium">{invoice.id}</TableCell>
                      <TableCell className="py-2">
                        <Badge variant="outline" className="text-xs">
                          {invoice.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="py-2 text-right">{invoice.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ),
          code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="h-8">ID</TableHead>
      <TableHead className="h-8">Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((item) => (
      <TableRow key={item.id} className="h-8">
        <TableCell className="py-2">{item.id}</TableCell>
        <TableCell className="py-2">{item.status}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`
        },
        {
          title: "Striped Rows",
          description: "Tabla con filas alternadas para mejor legibilidad",
          preview: (
            <div className="rounded-md border w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice, index) => (
                    <TableRow 
                      key={invoice.id}
                      className={index % 2 === 0 ? "bg-muted/50" : ""}
                    >
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>{invoice.method}</TableCell>
                      <TableCell className="text-right">{invoice.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ),
          code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.map((item, index) => (
      <TableRow 
        key={item.id}
        className={index % 2 === 0 ? "bg-muted/50" : ""}
      >
        <TableCell>{item.id}</TableCell>
        <TableCell>{item.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`
        },
        {
          title: "Hoverable Rows",
          description: "Tabla con efecto hover en las filas",
          preview: (
            <div className="rounded-md border w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow 
                      key={user.email}
                      className="hover:bg-muted/50 cursor-pointer transition-colors"
                    >
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>
                        <Badge 
                          variant={user.status === "Active" ? "default" : "secondary"}
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ),
          code: `<Table>
  <TableBody>
    {users.map((user) => (
      <TableRow 
        key={user.id}
        className="hover:bg-muted/50 cursor-pointer transition-colors"
      >
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.role}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>`
        },
        {
          title: "With Icon Buttons",
          description: "Tabla con botones de acción rápida",
          preview: (
            <div className="rounded-md border w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Annual Report 2024</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="gap-1">
                        <FileText className="h-3 w-3" />
                        PDF
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Q4 Financial Summary</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="gap-1">
                        <FileText className="h-3 w-3" />
                        PDF
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          ),
          code: `<Table>
  <TableBody>
    <TableRow>
      <TableCell>Document Name</TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Button variant="ghost" size="sm">
            <Download className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>`
        },
        {
          title: "Sortable Headers",
          description: "Tabla con encabezados ordenables (visual)",
          preview: (
            <div className="rounded-md border w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <Button variant="ghost" className="h-8 px-2 lg:px-3">
                        Invoice
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button variant="ghost" className="h-8 px-2 lg:px-3">
                        Status
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead className="text-right">
                      <Button variant="ghost" className="h-8 px-2 lg:px-3">
                        Amount
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.slice(0, 4).map((invoice) => (
                    <TableRow key={invoice.id}>
                      <TableCell className="font-medium">{invoice.id}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{invoice.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{invoice.amount}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ),
          code: `import { ArrowUpDown } from "lucide-react";

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>
        <Button variant="ghost" onClick={() => handleSort('invoice')}>
          Invoice
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </TableHead>
      <TableHead>
        <Button variant="ghost" onClick={() => handleSort('amount')}>
          Amount
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      </TableHead>
    </TableRow>
  </TableHeader>
</Table>`
        },
        {
          title: "Empty State",
          description: "Tabla mostrando estado vacío cuando no hay datos",
          preview: (
            <div className="rounded-md border w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={3} className="h-24 text-center">
                      <div className="flex flex-col items-center justify-center text-muted-foreground">
                        <FileText className="h-8 w-8 mb-2" />
                        <p>No invoices found.</p>
                        <p className="text-sm">Create your first invoice to get started.</p>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          ),
          code: `<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {data.length === 0 ? (
      <TableRow>
        <TableCell colSpan={2} className="h-24 text-center">
          <div className="flex flex-col items-center text-muted-foreground">
            <FileText className="h-8 w-8 mb-2" />
            <p>No data found.</p>
          </div>
        </TableCell>
      </TableRow>
    ) : (
      data.map((item) => <TableRow key={item.id}>...</TableRow>)
    )}
  </TableBody>
</Table>`
        }
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Table</CardDescription>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2 text-foreground">Componente</th>
                    <th className="text-left p-2 text-foreground">Elemento HTML</th>
                    <th className="text-left p-2 text-foreground">Descripción</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">Table</code></td>
                    <td className="p-2">table</td>
                    <td className="p-2">Contenedor principal de la tabla con estilos base</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TableHeader</code></td>
                    <td className="p-2">thead</td>
                    <td className="p-2">Encabezado de la tabla con estilo diferenciado</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TableBody</code></td>
                    <td className="p-2">tbody</td>
                    <td className="p-2">Cuerpo de la tabla conteniendo las filas de datos</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TableFooter</code></td>
                    <td className="p-2">tfoot</td>
                    <td className="p-2">Pie de tabla para totales o resúmenes</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TableRow</code></td>
                    <td className="p-2">tr</td>
                    <td className="p-2">Fila de la tabla con hover y estados interactivos</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TableHead</code></td>
                    <td className="p-2">th</td>
                    <td className="p-2">Celda de encabezado con tipografía bold</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TableCell</code></td>
                    <td className="p-2">td</td>
                    <td className="p-2">Celda de datos con padding consistente</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">TableCaption</code></td>
                    <td className="p-2">caption</td>
                    <td className="p-2">Título descriptivo de la tabla (accesibilidad)</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Table</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Listas de Datos</h4>
                  <p className="text-sm text-muted-foreground">
                    Facturas, clientes, productos con información estructurada en columnas
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">👥 Gestión de Usuarios</h4>
                  <p className="text-sm text-muted-foreground">
                    Listas de usuarios con roles, estados y acciones contextuales
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💰 Reportes Financieros</h4>
                  <p className="text-sm text-muted-foreground">
                    Transacciones, balances y estados de cuenta con totales
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📁 Administración de Archivos</h4>
                  <p className="text-sm text-muted-foreground">
                    Documentos con tipo, tamaño, fecha y acciones de descarga
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📈 Dashboards de Métricas</h4>
                  <p className="text-sm text-muted-foreground">
                    KPIs y métricas con comparaciones y variaciones porcentuales
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🗓️ Historial de Actividades</h4>
                  <p className="text-sm text-muted-foreground">
                    Logs de auditoría con timestamps, usuarios y acciones realizadas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de Table</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">TableCaption</code> para describir el contenido de la tabla (mejora accesibilidad)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Aplica <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">text-right</code> en TableHead y TableCell para columnas numéricas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">hover:bg-muted/50</code> en TableRow para feedback visual interactivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implementa estados vacíos con <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">colSpan</code> para mostrar mensajes cuando no hay datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Para tablas largas, envuelve en un div con <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">overflow-x-auto</code> o usa ScrollArea</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa Badge para estados visuales (Activo/Inactivo, Pagado/Pendiente) en lugar de texto plano</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Combina con DropdownMenu para acciones contextuales sin saturar la interfaz</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Aplica <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">font-medium</code> en la primera columna para jerarquía visual</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}