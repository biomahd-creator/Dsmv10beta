import { ComponentShowcase } from "../ui/component-showcase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function ElevationPage() {
  return (
    <ComponentShowcase
      title="Elevation & Shadows"
      description="System elevation styles designed for depth and hierarchy, adapted for light and dark modes."
      category="Design Tokens"
      
      // Main Preview
      preview={
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-muted/30 rounded-xl border border-dashed">
          {/* Level 1 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-24 w-24 bg-card rounded-xl flex items-center justify-center shadow-elevation-1 transition-all hover:scale-105 duration-300">
              <span className="font-medium text-sm">Level 1</span>
            </div>
            <Badge variant="outline" className="text-[10px]">shadow-elevation-1</Badge>
          </div>

          {/* Level 2 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-24 w-24 bg-card rounded-xl flex items-center justify-center shadow-elevation-2 transition-all hover:scale-105 duration-300">
              <span className="font-medium text-sm">Level 2</span>
            </div>
            <Badge variant="outline" className="text-[10px]">shadow-elevation-2</Badge>
          </div>

          {/* Level 3 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-24 w-24 bg-card rounded-xl flex items-center justify-center shadow-elevation-3 transition-all hover:scale-105 duration-300">
              <span className="font-medium text-sm">Level 3</span>
            </div>
            <Badge variant="outline" className="text-[10px]">shadow-elevation-3</Badge>
          </div>

          {/* Level 4 */}
          <div className="flex flex-col gap-4 items-center">
            <div className="h-24 w-24 bg-card rounded-xl flex items-center justify-center shadow-elevation-4 transition-all hover:scale-105 duration-300">
              <span className="font-medium text-sm">Level 4</span>
            </div>
            <Badge variant="outline" className="text-[10px]">shadow-elevation-4</Badge>
          </div>
        </div>
      }
      
      // Code
      code={`// Tailwind Classes
<div className="shadow-elevation-1">Level 1</div>
<div className="shadow-elevation-2">Level 2</div>
<div className="shadow-elevation-3">Level 3</div>
<div className="shadow-elevation-4">Level 4</div>`}
      
      // Usage
      usage="Usa las clases de utilidad `shadow-elevation-{1-4}` para aplicar sombras consistentes. Las sombras se adaptan automáticamente al modo claro/oscuro y tienen un tinte de color en modo claro para integrarse mejor con la marca."
      
      props={[]}
      
      examples={[
        {
          title: "Interactive Elevation",
          description: "Elevation change on hover to indicate interactivity",
          preview: (
            <Card className="shadow-elevation-1 hover:shadow-elevation-3 transition-shadow duration-300 cursor-pointer border-none w-full max-w-sm">
              <CardHeader>
                <CardTitle>Hover Me</CardTitle>
                <CardDescription>Starts at Level 1, lifts to Level 3</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Provides a tactile feel for clickable cards.
                </p>
              </CardContent>
            </Card>
          ),
          code: `<Card className="shadow-elevation-1 hover:shadow-elevation-3 transition-shadow duration-300 cursor-pointer border-none">
  <CardHeader>
    <CardTitle>Hover Me</CardTitle>
  </CardHeader>
</Card>`
        },
        {
          title: "Static Elevation",
          description: "Fixed elevation for floating elements like Dropdowns or Dialogs",
          preview: (
            <Card className="shadow-elevation-3 border-none w-full max-w-sm">
              <CardHeader>
                <CardTitle>Floating Element</CardTitle>
                <CardDescription>Fixed at Level 3</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Used for modals, drawers, and dropdowns to separate them from the background layer.
                </p>
              </CardContent>
            </Card>
          ),
          code: `<Card className="shadow-elevation-3 border-none">
  <CardHeader>
    <CardTitle>Floating Element</CardTitle>
  </CardHeader>
</Card>`
        }
      ]}
      
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades del Sistema de Elevación</CardTitle>
              <CardDescription>Clases CSS de utilidad para sombras y profundidad</CardDescription>
            </CardHeader>
            <CardContent>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-2 text-foreground">Clase CSS</th>
                    <th className="text-left p-2 text-foreground">Nivel</th>
                    <th className="text-left p-2 text-foreground">Uso Recomendado</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground text-sm">
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">shadow-elevation-1</code></td>
                    <td className="p-2">Nivel 1</td>
                    <td className="p-2">Cards y elementos ligeramente elevados sobre la superficie base</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">shadow-elevation-2</code></td>
                    <td className="p-2">Nivel 2</td>
                    <td className="p-2">Elementos con hover o en estado activo</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">shadow-elevation-3</code></td>
                    <td className="p-2">Nivel 3</td>
                    <td className="p-2">Dropdowns, popovers, y elementos flotantes</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">shadow-elevation-4</code></td>
                    <td className="p-2">Nivel 4</td>
                    <td className="p-2">Modals, dialogs, y elementos de máxima jerarquía</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">elevation-{1-4}</code></td>
                    <td className="p-2">Shorthand</td>
                    <td className="p-2">Alias para shadow-elevation-{1-4}</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones del sistema de elevación</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎴 Cards Interactivas</h4>
                  <p className="text-sm text-muted-foreground">
                    Usa elevation-1 en estado normal y elevation-3 en hover para feedback visual
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📋 Menús Flotantes</h4>
                  <p className="text-sm text-muted-foreground">
                    Dropdowns, select, combobox con elevation-3 para separar del contenido base
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💬 Modales y Dialogs</h4>
                  <p className="text-sm text-muted-foreground">
                    elevation-4 para máxima jerarquía visual sobre overlay oscuro
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">⚙️ Toolbars Flotantes</h4>
                  <p className="text-sm text-muted-foreground">
                    Barras de herramientas sticky con elevation-2 para distinguir del contenido scroll
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔔 Notificaciones y Toasts</h4>
                  <p className="text-sm text-muted-foreground">
                    elevation-3 para toasts que flotan sobre toda la UI temporalmente
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📊 Dashboards y KPIs</h4>
                  <p className="text-sm text-muted-foreground">
                    elevation-1 para cards de métricas que se agrupan visualmente
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo del sistema de elevación</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa elevation-1 como base para cards - mantén jerarquía visual clara y consistente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incrementa elevation en hover/focus (+2 niveles) para feedback interactivo táctil</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Reserva elevation-4 para elementos críticos como modales - evita sobreuso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Combina con transition-shadow duration-300 para animaciones suaves de elevación</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Elimina border cuando uses elevation (border-none) para evitar doble contorno visual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Las sombras se adaptan automáticamente a dark mode - no necesitas clases condicionales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa elevation-3 para popovers y tooltips - separa del contenido sin ser intrusivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén consistencia: mismo nivel de elevation para elementos del mismo tipo en toda la app</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}