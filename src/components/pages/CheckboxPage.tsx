import { ComponentShowcase } from "../ui/component-showcase";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function CheckboxPage() {
  return (
    <ComponentShowcase
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
      badges={[
        { text: "Forms", variant: "secondary" }
      ]}
      previewComponent={
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms1" />
            <Label htmlFor="terms1">Accept terms and conditions</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox id="marketing1" defaultChecked />
            <Label htmlFor="marketing1">Send me marketing emails</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox id="disabled1" disabled />
            <Label htmlFor="disabled1" className="text-muted-foreground">Disabled checkbox</Label>
          </div>
        </div>
      }
      codeBlock={`import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}`}
      examplesSection={
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Multiple Checkboxes</CardTitle>
              <CardDescription>Grupo de checkboxes relacionados</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="email2" defaultChecked />
                <Label htmlFor="email2">Email notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="sms2" />
                <Label htmlFor="sms2">SMS notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="push2" defaultChecked />
                <Label htmlFor="push2">Push notifications</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="desktop2" />
                <Label htmlFor="desktop2">Desktop notifications</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>With Description</CardTitle>
              <CardDescription>Checkbox con label y texto descriptivo</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox id="analytics" className="mt-1" defaultChecked />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="analytics">Use Analytics Cookies</Label>
                  <p className="text-sm text-muted-foreground">
                    Allow us to collect anonymous usage data to improve the product.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox id="marketing2" className="mt-1" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="marketing2">Marketing Communications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive emails about new features, updates, and offers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>In a Form</CardTitle>
              <CardDescription>Checkboxes integrados en un formulario completo</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-3">
                  <Label>Preferences</Label>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="notifications" defaultChecked />
                    <Label htmlFor="notifications">Enable notifications</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="auto-save" />
                    <Label htmlFor="auto-save">Auto-save drafts</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="dark-mode" />
                    <Label htmlFor="dark-mode">Dark mode</Label>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="agree" required />
                  <Label htmlFor="agree">I agree to the terms and conditions *</Label>
                </div>
                <Button type="submit">Save Preferences</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Checkbox List</CardTitle>
              <CardDescription>Lista de opciones con checkboxes (multi-select)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Label>Select your interests</Label>
              <div className="grid gap-2 border rounded-md p-4">
                {['Technology', 'Design', 'Business', 'Science', 'Health & Fitness'].map((interest, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Checkbox id={`interest-${i}`} defaultChecked={i < 2} />
                    <Label htmlFor={`interest-${i}`} className="font-normal">{interest}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inline Checkboxes</CardTitle>
              <CardDescription>Checkboxes alineados horizontalmente</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Label>Size</Label>
              <div className="flex flex-wrap gap-4">
                {['Small', 'Medium', 'Large', 'X-Large'].map((size, i) => (
                  <div key={i} className="flex items-center space-x-2">
                    <Checkbox id={`size-${i}`} defaultChecked={i === 1} />
                    <Label htmlFor={`size-${i}`}>{size}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      }
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API del componente Checkbox</CardDescription>
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
                      <td className="p-2 font-mono">checked</td>
                      <td className="p-2">boolean | "indeterminate"</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Estado controlado del checkbox</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">defaultChecked</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Estado inicial (no controlado)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onCheckedChange</td>
                      <td className="p-2">(checked) =&gt; void</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Callback cuando cambia el estado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">disabled</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Deshabilita el checkbox</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">required</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Marca como requerido</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones del componente Checkbox</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">✅ Términos y Condiciones</h4>
                  <p className="text-sm text-muted-foreground">Aceptación de políticas, términos de servicio, consentimientos</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🔔 Preferencias</h4>
                  <p className="text-sm text-muted-foreground">Configuración de notificaciones, opciones de usuario</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📋 Selección Múltiple</h4>
                  <p className="text-sm text-muted-foreground">Listas de items, filtros, categorías, intereses</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">✓ Tareas</h4>
                  <p className="text-sm text-muted-foreground">To-do lists, completar pasos, marcar como leído</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🎛️ Configuraciones</h4>
                  <p className="text-sm text-muted-foreground">Habilitar/deshabilitar funcionalidades, opciones avanzadas</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📊 Filtros</h4>
                  <p className="text-sm text-muted-foreground">Filtrar datos por múltiples criterios, facetas de búsqueda</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para uso efectivo</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Siempre usa Label:</strong> Asocia cada checkbox con un label usando htmlFor para mejor accesibilidad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Texto descriptivo:</strong> Usa labels claros que expliquen qué hace el checkbox</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Helper text:</strong> Agrega descripciones adicionales para opciones complejas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Estados visuales:</strong> Indica claramente estados disabled con text-muted-foreground</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Agrupación lógica:</strong> Agrupa checkboxes relacionados visualmente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Orden vertical:</strong> Usa layout vertical para listas largas, horizontal solo para 2-4 opciones</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}
