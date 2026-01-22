import { ComponentShowcase } from "../ui/component-showcase";
import { MultiSelect, MultiSelectOption } from "../ui/multi-select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { useState } from "react";
import { ListChecks } from "lucide-react";

const frameworks: MultiSelectOption[] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
  { label: "Svelte", value: "svelte" },
  { label: "Next.js", value: "nextjs" },
  { label: "Nuxt.js", value: "nuxtjs" },
  { label: "Remix", value: "remix" },
  { label: "Astro", value: "astro" },
];

const countries: MultiSelectOption[] = [
  { label: "España", value: "es" },
  { label: "México", value: "mx" },
  { label: "Argentina", value: "ar" },
  { label: "Colombia", value: "co" },
  { label: "Chile", value: "cl" },
  { label: "Perú", value: "pe" },
];

const departments: MultiSelectOption[] = [
  { label: "Desarrollo", value: "dev" },
  { label: "Diseño", value: "design" },
  { label: "Marketing", value: "marketing" },
  { label: "Ventas", value: "sales" },
  { label: "Recursos Humanos", value: "hr" },
];

function MultiSelectPreview() {
  const [selected1, setSelected1] = useState<string[]>([]);
  const [selected2, setSelected2] = useState<string[]>(["react", "nextjs"]);
  const [selected3, setSelected3] = useState<string[]>([]);
  const [selected4, setSelected4] = useState<string[]>([]);

  return (
    <div className="space-y-8">
      {/* Preview Principal */}
      <div className="space-y-2">
        <label className="text-foreground font-medium">Selecciona frameworks</label>
        <MultiSelect
          options={frameworks}
          selected={selected1}
          onChange={setSelected1}
          placeholder="Selecciona uno o más frameworks..."
        />
        {selected1.length > 0 && (
          <p className="text-muted-foreground text-sm">
            Seleccionados: {selected1.join(", ")}
          </p>
        )}
      </div>

      {/* Variantes */}
      <Card>
        <CardHeader>
          <CardTitle>Variantes</CardTitle>
          <CardDescription>
            Diferentes estados y configuraciones
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Con valores por defecto */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Con valores por defecto</label>
            <p className="text-muted-foreground text-sm">
              Multi Select con opciones preseleccionadas.
            </p>
            <MultiSelect
              options={frameworks}
              selected={selected2}
              onChange={setSelected2}
              placeholder="Selecciona frameworks..."
            />
          </div>

          {/* Opciones diferentes */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Países</label>
            <p className="text-muted-foreground text-sm">
              Multi Select con diferentes opciones.
            </p>
            <MultiSelect
              options={countries}
              selected={selected3}
              onChange={setSelected3}
              placeholder="Selecciona países..."
            />
          </div>

          {/* En formulario */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Departamentos</label>
            <p className="text-muted-foreground text-sm">
              Multi Select integrado en un formulario.
            </p>
            <MultiSelect
              options={departments}
              selected={selected4}
              onChange={setSelected4}
              placeholder="Selecciona departamentos..."
            />
          </div>

          {/* Deshabilitado */}
          <div className="space-y-2">
            <label className="text-foreground font-medium">Deshabilitado</label>
            <p className="text-muted-foreground text-sm">
              Estado deshabilitado del componente.
            </p>
            <MultiSelect
              options={frameworks}
              selected={["react", "vue"]}
              onChange={() => {}}
              disabled
              placeholder="Multi Select deshabilitado"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function MultiSelectPage() {
  return (
    <ComponentShowcase
      title="Multi Select"
      description="Componente de selección múltiple con búsqueda, badges para elementos seleccionados y soporte para teclado. Ideal para formularios con opciones múltiples."
      badges={[
        { text: "Forms", variant: "secondary" },
        { text: "NEW", variant: "outline", icon: <ListChecks className="size-3" /> }
      ]}
      previewComponent={<MultiSelectPreview />}
      codeBlock={`import { MultiSelect, MultiSelectOption } from "@/components/ui/multi-select";
import { useState } from "react";

const options: MultiSelectOption[] = [
  { label: "React", value: "react" },
  { label: "Vue", value: "vue" },
  { label: "Angular", value: "angular" },
];

export function MyForm() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleSubmit = () => {
    console.log("Seleccionados:", selected);
  };

  return (
    <div>
      <label>Frameworks</label>
      <MultiSelect
        options={options}
        selected={selected}
        onChange={setSelected}
        placeholder="Selecciona uno o más..."
      />
      <button onClick={handleSubmit}>
        Enviar
      </button>
    </div>
  );
}`}
      additionalSections={
        <>
          {/* Props */}
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API del componente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Prop</th>
                      <th className="text-left p-2">Tipo</th>
                      <th className="text-left p-2">Default</th>
                      <th className="text-left p-2">Descripción</th>
                    </tr>
                  </thead>
                  <tbody className="text-muted-foreground text-sm">
                    <tr className="border-b">
                      <td className="p-2 font-mono">options *</td>
                      <td className="p-2">MultiSelectOption[]</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Array de opciones disponibles</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">selected *</td>
                      <td className="p-2">string[]</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Array de valores seleccionados</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onChange *</td>
                      <td className="p-2">(selected: string[]) =&gt; void</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Callback cuando cambia la selección</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">placeholder</td>
                      <td className="p-2">string</td>
                      <td className="p-2">"Selecciona opciones..."</td>
                      <td className="p-2">Texto cuando no hay selección</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">disabled</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Deshabilita el componente</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">className</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Clases CSS adicionales</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-muted/50 mt-4 rounded-md p-4">
                <p className="text-foreground mb-2 font-medium">MultiSelectOption Type:</p>
                <pre className="text-sm">
                  <code>{`interface MultiSelectOption {
  label: string;  // Texto visible
  value: string;  // Valor único
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          {/* Características */}
          <Card>
            <CardHeader>
              <CardTitle>Características</CardTitle>
              <CardDescription>Funcionalidades incluidas</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Búsqueda en tiempo real de opciones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Badges visuales para elementos seleccionados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Eliminar elementos con botón X individual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Checkbox visual en cada opción</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Navegación completa por teclado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Popover con Command para búsqueda rápida</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Auto-ajuste de altura según elementos seleccionados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Accesible con ARIA labels y roles</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Casos de Uso */}
          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Multi Select</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🏷️ Tags y Categorías</h4>
                  <p className="text-sm text-muted-foreground">
                    Asignar múltiples etiquetas o categorías a artículos, productos o contenido
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔍 Filtros Avanzados</h4>
                  <p className="text-sm text-muted-foreground">
                    Permitir filtrado por múltiples criterios en búsquedas o listados
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">👥 Asignación de Usuarios</h4>
                  <p className="text-sm text-muted-foreground">
                    Asignar tareas o proyectos a múltiples miembros del equipo
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📧 Destinatarios de Email</h4>
                  <p className="text-sm text-muted-foreground">
                    Seleccionar múltiples destinatarios para correos o notificaciones
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🛠️ Configuración de Permisos</h4>
                  <p className="text-sm text-muted-foreground">
                    Seleccionar múltiples permisos o roles para usuarios y grupos
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Selección de Métricas</h4>
                  <p className="text-sm text-muted-foreground">
                    Elegir múltiples KPIs o métricas para visualizar en dashboards
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mejores Prácticas */}
          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo de Multi Select</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Limita la lista de opciones a menos de 50 items para mejor rendimiento y UX</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa labels descriptivos y únicos en cada opción para evitar confusión</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra los elementos seleccionados como badges debajo del input para visibilidad clara</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye búsqueda cuando hay más de 10 opciones disponibles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa <code className="px-1.5 py-0.5 bg-muted text-foreground rounded text-xs">placeholder</code> descriptivo del contenido ("Selecciona países", "Elige frameworks")</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Valida que al menos 1 elemento esté seleccionado si el campo es requerido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Provee feedback visual cuando se alcanza un límite máximo de selecciones (si aplica)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Ordena las opciones alfabéticamente o por relevancia para facilitar la búsqueda</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}