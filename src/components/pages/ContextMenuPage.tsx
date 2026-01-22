import { ComponentShowcase } from "../ui/component-showcase";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "../ui/context-menu";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function ContextMenuPage() {
  return (
    <ComponentShowcase
      title="Context Menu"
      description="Menú contextual que aparece al hacer click derecho."
      category="Navigation"
      
      // Main Preview
      preview={
        <ContextMenu>
          <ContextMenuTrigger className="flex h-[200px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
            Click derecho aquí
          </ContextMenuTrigger>
          <ContextMenuContent className="w-64">
            <ContextMenuItem inset>
              Back
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset disabled>
              Forward
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem inset>
              Reload
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-48">
                <ContextMenuItem>
                  Save Page As...
                  <ContextMenuShortcut>⌘S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                <ContextMenuItem>Name Window...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Developer Tools</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuCheckboxItem checked>
              Show Bookmarks Bar
              <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
            <ContextMenuSeparator />
            <ContextMenuRadioGroup value="pedro">
              <ContextMenuRadioItem value="pedro">
                Pedro Duarte
              </ContextMenuRadioItem>
              <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuContent>
        </ContextMenu>
      }
      
      // Main Code
      code={`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
} from "@/components/ui/context-menu"

export function ContextMenuDemo() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem inset>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset disabled>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem inset>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem checked>
          Show Bookmarks Bar
          <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value="pedro">
          <ContextMenuRadioItem value="pedro">
            Pedro Duarte
          </ContextMenuRadioItem>
          <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  )
}`}
      
      // Usage
      usage="Importa los componentes de ContextMenu. Envuelve el área trigger con ContextMenu y ContextMenuTrigger. Define el contenido del menú en ContextMenuContent. Context Menu es ideal para aplicaciones con muchas acciones contextuales (file operations, edit actions)."
      
      props={[
        {
          name: "onOpenChange",
          type: "(open: boolean) => void",
          description: "Callback cuando cambia el estado de apertura",
        },
        {
          name: "modal",
          type: "boolean",
          default: "true",
          description: "Si el menú debe renderizarse como un modal",
        }
      ]}
      
      // Examples
      examples={[
        {
          title: "File Context Menu",
          description: "Acciones de archivo (Open, Rename, Delete)",
          preview: (
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                📄 documento.pdf
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>Open</ContextMenuItem>
                <ContextMenuItem>Open with...</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Rename</ContextMenuItem>
                <ContextMenuItem>Duplicate</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Move to Trash</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Get Info</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ),
          code: `<ContextMenu>
  <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
    📄 documento.pdf
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Open</ContextMenuItem>
    <ContextMenuItem>Open with...</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Rename</ContextMenuItem>
    <ContextMenuItem>Duplicate</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Move to Trash</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`
        },
        {
          title: "Image Context Menu",
          description: "Acciones de imagen (View, Copy, Save)",
          preview: (
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm bg-muted/30">
                🖼️ image.jpg
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>View Image</ContextMenuItem>
                <ContextMenuItem>Copy Image</ContextMenuItem>
                <ContextMenuItem>Copy Image Address</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Save Image As...</ContextMenuItem>
                <ContextMenuItem>Open Image in New Tab</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Search Image with Google</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ),
          code: `<ContextMenu>
  <ContextMenuTrigger>
    🖼️ image.jpg
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>View Image</ContextMenuItem>
    <ContextMenuItem>Copy Image</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem>Save Image As...</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`
        },
        {
          title: "Text Context Menu",
          description: "Acciones de texto (Cut, Copy, Paste, Format)",
          preview: (
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm p-4">
                <p className="text-center">
                  Selecciona este texto y haz click derecho para ver opciones
                </p>
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>
                  Cut
                  <ContextMenuShortcut>⌘X</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Copy
                  <ContextMenuShortcut>⌘C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Paste
                  <ContextMenuShortcut>⌘V</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Select All</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuSub>
                  <ContextMenuSubTrigger>Format</ContextMenuSubTrigger>
                  <ContextMenuSubContent>
                    <ContextMenuItem>Bold</ContextMenuItem>
                    <ContextMenuItem>Italic</ContextMenuItem>
                    <ContextMenuItem>Underline</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuContent>
            </ContextMenu>
          ),
          code: `<ContextMenu>
  <ContextMenuTrigger>
    Selecciona este texto...
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Cut</ContextMenuItem>
    <ContextMenuItem>Copy</ContextMenuItem>
    <ContextMenuItem>Paste</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuSub>
      <ContextMenuSubTrigger>Format</ContextMenuSubTrigger>
      <ContextMenuSubContent>
        <ContextMenuItem>Bold</ContextMenuItem>
        <ContextMenuItem>Italic</ContextMenuItem>
      </ContextMenuSubContent>
    </ContextMenuSub>
  </ContextMenuContent>
</ContextMenu>`
        },
        {
          title: "Table Row Menu",
          description: "Acciones de fila (Edit, Duplicate, Delete)",
          preview: (
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Click derecho en esta fila
              </ContextMenuTrigger>
              <ContextMenuContent>
                <ContextMenuItem>Edit Row</ContextMenuItem>
                <ContextMenuItem>Duplicate Row</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>Insert Row Above</ContextMenuItem>
                <ContextMenuItem>Insert Row Below</ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem className="text-red-600">Delete Row</ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          ),
          code: `<ContextMenu>
  <ContextMenuTrigger>
    Click derecho en esta fila
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>Edit Row</ContextMenuItem>
    <ContextMenuItem>Duplicate Row</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem className="text-red-600">Delete Row</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`
        }
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API completa del componente Context Menu</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onOpenChange</code></td>
                    <td className="p-2">(open: boolean) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback ejecutado cuando cambia el estado de apertura</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">modal</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">true</td>
                    <td className="p-2">Si el menú debe renderizarse como modal</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">disabled</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Deshabilita un ContextMenuItem</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">inset</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Añade indentación al item</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onSelect</code></td>
                    <td className="p-2">(event: Event) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback cuando se selecciona un item</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Context Menu</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📁 Gestores de Archivos</h4>
                  <p className="text-sm text-muted-foreground">
                    Acciones sobre archivos y carpetas (abrir, renombrar, eliminar, propiedades)
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Tablas de Datos</h4>
                  <p className="text-sm text-muted-foreground">
                    Menú contextual en filas con opciones de editar, duplicar, eliminar registros
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎨 Editores Visuales</h4>
                  <p className="text-sm text-muted-foreground">
                    Acciones sobre elementos (copiar, pegar, agrupar, ordenar capas)
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📝 Editores de Texto</h4>
                  <p className="text-sm text-muted-foreground">
                    Menú con cortar, copiar, pegar, formato y opciones de texto seleccionado
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🗂️ Listas y Cards</h4>
                  <p className="text-sm text-muted-foreground">
                    Acciones rápidas en items de listas (ver, compartir, archivar, eliminar)
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🌐 Navegadores y Mapas</h4>
                  <p className="text-sm text-muted-foreground">
                    Opciones contextuales en links, imágenes y elementos interactivos
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del Context Menu</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa Context Menu para acciones secundarias o alternativas a botones visibles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye ContextMenuShortcut para mostrar atajos de teclado y educar usuarios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrupa acciones relacionadas con ContextMenuSeparator para claridad visual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Marca items disabled cuando no estén disponibles según el contexto actual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa ContextMenuSub para anidar opciones relacionadas sin saturar el menú principal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Coloca acciones destructivas (eliminar) al final con estilos distintivos (text-red-600)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En móviles, proporciona alternativa táctil (long-press) o botón visible para accesibilidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Limita el menú a 8-10 items para evitar scroll; usa submenús para más opciones</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}