import { ComponentShowcase } from "../ui/component-showcase";
import { ContextualHelp } from "../help/ContextualHelp";
import { ProductTour } from "../help/ProductTour";
import { vinculacionTourSteps } from "../help/tourSteps";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { useState } from "react";

export function HelpSystemDemoPage() {
  const [taxId, setTaxId] = useState("");

  return (
    <ComponentShowcase
      title="Help System"
      description="Interactive help system including Contextual Help (tooltips/popovers), Product Tours, and Help Center integration."
      category="Patterns"
      
      // Main Preview: Contextual Help
      preview={
        <div className="w-full max-w-md space-y-6">
           <div id="tour-step-nit">
            <div className="flex items-center gap-2 mb-2">
              <Label htmlFor="tax-id">Company Tax ID (NIT)</Label>
              <ContextualHelp
                quickHelp="Enter without verification digit"
                detailedHelp="The Tax Identification Number (NIT) is a unique identifier assigned to your company. Enter only the numbers without the verification digit."
                title="About Tax ID (NIT)"
              />
            </div>
            <Input
              id="tax-id"
              placeholder="900123456"
              value={taxId}
              onChange={(e) => setTaxId(e.target.value)}
            />
            <p className="text-xs text-muted-foreground mt-1">
              9 digits without verification digit
            </p>
          </div>
          
          <div className="flex items-center gap-2">
            <Label>Read-only Field</Label>
            <ContextualHelp
              quickHelp="This field cannot be edited"
              tooltipOnly
            />
          </div>
          
          <div className="flex items-center gap-2">
             <Label>Complex Term</Label>
             <ContextualHelp
                title="What is this?"
                detailedHelp="Detailed explanation about this complex term that requires more space than a tooltip."
                popoverOnly
             />
          </div>
        </div>
      }
      
      // Code
      code={`import { ContextualHelp } from "@/components/help/ContextualHelp";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function HelpDemo() {
  return (
    <div className="flex items-center gap-2 mb-2">
      <Label htmlFor="tax-id">Company Tax ID</Label>
      <ContextualHelp
        quickHelp="Enter without verification digit"
        detailedHelp="The Tax Identification Number is a unique identifier..."
        title="About Tax ID"
      />
    </div>
  );
}`}
      
      // Usage
      usage="El sistema de ayuda contextual combina Tooltip (para pistas rápidas al hover) y Popover (para explicaciones detalladas al click). Usa el componente `ContextualHelp` junto a Labels o encabezados."
      
      props={[
        {
          name: "quickHelp",
          type: "string",
          description: "Texto corto mostrado en el Tooltip (hover)",
        },
        {
          name: "detailedHelp",
          type: "string | ReactNode",
          description: "Contenido detallado mostrado en el Popover (click)",
        },
        {
          name: "title",
          type: "string",
          description: "Título del Popover",
        },
        {
          name: "tooltipOnly",
          type: "boolean",
          default: "false",
          description: "Si es true, solo muestra el tooltip",
        },
        {
          name: "popoverOnly",
          type: "boolean",
          default: "false",
          description: "Si es true, solo muestra el popover (icono ?)",
        },
      ]}
      
      examples={[
        {
          title: "Product Tour",
          description: "Guía paso a paso interactiva usando driver.js. Los pasos se vinculan a IDs de elementos en el DOM.",
          preview: (
            <div className="space-y-4">
              <div className="p-4 border rounded-lg bg-card">
                <h4 className="font-semibold mb-2">Tour Controller</h4>
                <ProductTour
                  steps={vinculacionTourSteps}
                  tourId="demo-tour"
                  showButton={true}
                  buttonText="Start Demo Tour"
                  buttonVariant="default"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Click "Start Demo Tour" to highlight the elements in the main preview above (ensure "Company Tax ID" is visible).
              </p>
            </div>
          ),
          code: `import { ProductTour } from "@/components/help/ProductTour";
import { vinculacionTourSteps } from "@/components/help/tourSteps";

<ProductTour
  steps={vinculacionTourSteps}
  tourId="my-tour"
  showButton={true}
  buttonText="Start Tour"
/>`
        },
        {
          title: "Help Center",
          description: "Centro de ayuda centralizado (Docs, FAQs, Videos).",
          preview: (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">📚 FAQs</h3>
                  <p className="text-sm text-muted-foreground">Searchable frequently asked questions.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">🎥 Videos</h3>
                  <p className="text-sm text-muted-foreground">Video tutorials for visual learners.</p>
                </CardContent>
              </Card>
            </div>
          ),
          code: `// The Help Center is typically a modal or dedicated page accessed via the global header.`
        }
      ]}

      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades de ContextualHelp</CardTitle>
              <CardDescription>API completa del componente de ayuda contextual</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">quickHelp</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Texto corto mostrado en tooltip al hacer hover</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">detailedHelp</code></td>
                    <td className="p-2">string | ReactNode</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Contenido detallado mostrado en popover al hacer click</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">title</code></td>
                    <td className="p-2">string</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Título del popover de ayuda detallada</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">tooltipOnly</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Si true, solo muestra tooltip (icono ⓘ)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">popoverOnly</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Si true, solo muestra popover (icono ?)</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones del sistema de ayuda contextual</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">📝 Formularios Complejos</h4>
                  <p className="text-sm text-muted-foreground">
                    Ayuda contextual en campos de formularios con terminología técnica o reglas de validación específicas
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🏦 Onboarding Bancario</h4>
                  <p className="text-sm text-muted-foreground">
                    Product Tours guiados para procesos de vinculación y apertura de cuentas empresariales
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">💼 Dashboards Empresariales</h4>
                  <p className="text-sm text-muted-foreground">
                    Tooltips en KPIs y métricas complejas para explicar cálculos y fórmulas
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">⚙️ Configuraciones Avanzadas</h4>
                  <p className="text-sm text-muted-foreground">
                    Popovers con documentación detallada en opciones técnicas y configuraciones del sistema
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🎓 Funcionalidades Nuevas</h4>
                  <p className="text-sm text-muted-foreground">
                    Tours interactivos para presentar features nuevos a usuarios existentes
                  </p>
                </div>
                <div className="p-4 border border-border rounded-lg space-y-2">
                  <h4 className="font-medium text-foreground">🔐 Campos de Seguridad</h4>
                  <p className="text-sm text-muted-foreground">
                    Ayuda contextual en campos sensibles explicando requisitos de seguridad y mejores prácticas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para diseño de sistemas de ayuda efectivos</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa tooltip para hints rápidos (max 1-2 líneas) y popover para explicaciones detalladas con ejemplos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Coloca ContextualHelp siempre a la derecha del Label - nunca antes ni debajo del campo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Limita Product Tours a 4-6 pasos máximo - tours largos tienen tasas de abandono altas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Haz tours opcionales y repetibles - nunca fuerces al usuario a completarlos en primer acceso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa iconos consistentes: ⓘ para tooltips simples, ? para popovers con documentación extensa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Prioriza ayuda contextual en campos obligatorios con validaciones complejas o formato específico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye ejemplos concretos en detailedHelp - "Ejemplo: 900123456" es más útil que texto abstracto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Vincula tours a IDs de elementos DOM estables - usa id="tour-step-name" para robustez</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}