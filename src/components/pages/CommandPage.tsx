import { ComponentShowcase } from "../ui/component-showcase";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "../ui/command";
import { Calendar, Mail, Settings, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function CommandPage() {
  return (
    <ComponentShowcase
      title="Command"
      description="Fast, composable, unstyled command menu for React"
      category="Navigation"
      
      preview={
        <Command className="rounded-lg border">
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Mail className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      }
      
      code={`import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import { Calendar, Mail, Settings, User } from "lucide-react"

export function CommandDemo() {
  return (
    <Command className="rounded-lg border">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Mail className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}`}
      
      usage="Importa Command, CommandInput, CommandList, CommandGroup, CommandItem y CommandEmpty. El Command menu es ideal para implementar paletas de comandos tipo Spotlight/CMD+K, búsquedas rápidas y navegación por teclado."
      
      usageCode={`import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

function MyComponent() {
  return (
    <Command>
      <CommandInput placeholder="Search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>Action 1</CommandItem>
          <CommandItem>Action 2</CommandItem>
          <CommandItem>Action 3</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`}
      
      props={[
        {
          name: "value",
          type: "string",
          description: "Valor del item seleccionado actualmente (en Command)",
        },
        {
          name: "onValueChange",
          type: "(value: string) => void",
          description: "Callback cuando cambia el item seleccionado (en Command)",
        },
        {
          name: "filter",
          type: "(value: string, search: string) => number",
          description: "Función custom de filtrado (en Command)",
        },
        {
          name: "onSelect",
          type: "(value: string) => void",
          description: "Callback cuando se selecciona un item (en CommandItem)",
        },
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Command</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">value</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Valor del item seleccionado actualmente (Command)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onValueChange</code></td>
                    <td className="p-2">(value: string) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback ejecutado cuando cambia el item seleccionado</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">filter</code></td>
                    <td className="p-2">(value: string, search: string) =&gt; number</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Función personalizada de filtrado de resultados</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onSelect</code></td>
                    <td className="p-2">(value: string) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback cuando se selecciona un CommandItem</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">disabled</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Deshabilita un CommandItem específico</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Command</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">⌨️ Command Palette (CMD+K)</h4>
                  <p className="text-sm text-muted-foreground">
                    Paleta de comandos estilo Spotlight para acceso rápido a acciones y navegación
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔍 Búsqueda Global</h4>
                  <p className="text-sm text-muted-foreground">
                    Búsqueda universal en aplicaciones que filtra páginas, usuarios y contenido
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎯 Quick Actions</h4>
                  <p className="text-sm text-muted-foreground">
                    Acceso rápido a acciones comunes como crear, editar, eliminar items
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📁 File Picker</h4>
                  <p className="text-sm text-muted-foreground">
                    Selector de archivos o documentos con búsqueda y navegación por teclado
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🏷️ Tag Selector</h4>
                  <p className="text-sm text-muted-foreground">
                    Selección múltiple de tags o categorías con búsqueda fuzzy
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">⚡ Shortcuts Menu</h4>
                  <p className="text-sm text-muted-foreground">
                    Menú de atajos de teclado y comandos rápidos de productividad
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del Command</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implementa el atajo CMD+K (Mac) o CTRL+K (Windows) para abrir el command menu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrupa items relacionados con CommandGroup para organización clara</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye iconos en CommandItem para identificación visual rápida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa CommandEmpty para mostrar mensaje claro cuando no hay resultados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Implementa búsqueda fuzzy custom con la prop <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">filter</code> para mejores matches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra shortcuts de teclado en los items para educar a usuarios sobre productividad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Integra con Dialog o Popover para overlay modal que no interrumpa el flujo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Cierra el menú automáticamente después de seleccionar un item con onSelect</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}