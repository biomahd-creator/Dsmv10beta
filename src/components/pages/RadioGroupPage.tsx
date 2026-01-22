import { ComponentShowcase } from "../ui/component-showcase";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Check, CreditCard, Building2, Wallet } from "lucide-react";

export function RadioGroupPage() {
  return (
    <ComponentShowcase
      title="Radio Group"
      description="A set of checkable buttons where only one option can be selected at a time. Perfect for exclusive choices."
      badges={[
        { text: "Forms", variant: "secondary" }
      ]}
      previewComponent={
        <RadioGroup defaultValue="option-1">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-1" id="r1" />
            <Label htmlFor="r1">Option One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-2" id="r2" />
            <Label htmlFor="r2">Option Two</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-3" id="r3" />
            <Label htmlFor="r3">Option Three</Label>
          </div>
        </RadioGroup>
      }
      codeBlock={`import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="option-1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-1" id="r1" />
        <Label htmlFor="r1">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-2" id="r2" />
        <Label htmlFor="r2">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-3" id="r3" />
        <Label htmlFor="r3">Option Three</Label>
      </div>
    </RadioGroup>
  );
}`}
      examplesSection={
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>With Descriptions</CardTitle>
              <CardDescription>Radio buttons con descripciones adicionales</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="basic" className="space-y-3">
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="basic" id="basic" className="mt-1" />
                  <div className="space-y-1">
                    <Label htmlFor="basic">Basic Plan</Label>
                    <p className="text-sm text-muted-foreground">$9/month - Perfect for individuals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="pro" id="pro" className="mt-1" />
                  <div className="space-y-1">
                    <Label htmlFor="pro">Pro Plan</Label>
                    <p className="text-sm text-muted-foreground">$29/month - Best for small teams</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
                  <div className="space-y-1">
                    <Label htmlFor="enterprise">Enterprise Plan</Label>
                    <p className="text-sm text-muted-foreground">Custom pricing - For large organizations</p>
                  </div>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Card Style Options</CardTitle>
              <CardDescription>Radio buttons dentro de cards para mejor UI</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="card-1" className="grid gap-4">
                <div>
                  <RadioGroupItem value="card-1" id="card-1" className="peer sr-only" />
                  <Label
                    htmlFor="card-1"
                    className="flex flex-col items-start gap-2 rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      <span>Option One</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This is the first option with a card style
                    </p>
                  </Label>
                </div>
                
                <div>
                  <RadioGroupItem value="card-2" id="card-2" className="peer sr-only" />
                  <Label
                    htmlFor="card-2"
                    className="flex flex-col items-start gap-2 rounded-lg border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Check className="h-4 w-4" />
                      <span>Option Two</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This is the second option with a card style
                    </p>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method Selector</CardTitle>
              <CardDescription>Radio group para seleccionar método de pago con iconos</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="card" className="space-y-3">
                {[
                  { value: 'card', label: 'Credit Card', icon: CreditCard },
                  { value: 'bank', label: 'Bank Transfer', icon: Building2 },
                  { value: 'wallet', label: 'Digital Wallet', icon: Wallet }
                ].map(({ value, label, icon: Icon }) => (
                  <div key={value} className="flex items-center space-x-3">
                    <RadioGroupItem value={value} id={value} />
                    <Label htmlFor={value} className="flex items-center gap-2 cursor-pointer">
                      <Icon className="h-4 w-4" />
                      <span>{label}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horizontal Layout</CardTitle>
              <CardDescription>Radio group en disposición horizontal</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="yes" className="flex gap-4">
                {['Yes', 'No', 'Maybe'].map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.toLowerCase()} id={`${option.toLowerCase()}-h`} />
                    <Label htmlFor={`${option.toLowerCase()}-h`}>{option}</Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Form Integration</CardTitle>
              <CardDescription>Radio group dentro de un formulario completo</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-w-md">
                <div className="space-y-2">
                  <Label>Notification Preferences</Label>
                  <RadioGroup defaultValue="all">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="all" id="all-notif" />
                      <Label htmlFor="all-notif">All notifications</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="important" id="important-notif" />
                      <Label htmlFor="important-notif">Important only</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="none" id="none-notif" />
                      <Label htmlFor="none-notif">No notifications</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label>Email Frequency</Label>
                  <RadioGroup defaultValue="daily">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="realtime" id="realtime" />
                      <Label htmlFor="realtime">Real-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="daily" id="daily" />
                      <Label htmlFor="daily">Daily digest</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="weekly" id="weekly" />
                      <Label htmlFor="weekly">Weekly summary</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button>Save Preferences</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
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
              <CardDescription>API del componente RadioGroup</CardDescription>
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
                      <td className="p-2 font-mono">value</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Valor controlado del radio seleccionado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">defaultValue</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Valor inicial no controlado</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">onValueChange</td>
                      <td className="p-2">(value: string) =&gt; void</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Callback cuando cambia la selección</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">disabled</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Deshabilita todo el grupo</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">required</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Campo requerido en formularios</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones del componente RadioGroup</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">💳 Métodos de Pago</h4>
                  <p className="text-sm text-muted-foreground">Seleccionar entre tarjeta, transferencia, wallet digital</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📋 Planes y Precios</h4>
                  <p className="text-sm text-muted-foreground">Escoger plan básico, pro o enterprise</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🔔 Preferencias</h4>
                  <p className="text-sm text-muted-foreground">Configurar notificaciones, frecuencia de emails</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📊 Opciones de Vista</h4>
                  <p className="text-sm text-muted-foreground">Lista, grilla, tabla - un solo modo activo</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🚚 Envío</h4>
                  <p className="text-sm text-muted-foreground">Standard, express, next-day delivery</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">⚙️ Configuración</h4>
                  <p className="text-sm text-muted-foreground">Privacidad, temas, idioma - opciones exclusivas</p>
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
                  <span><strong>Usa para elección exclusiva:</strong> Solo cuando una opción debe estar seleccionada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Labels claros:</strong> Cada opción debe tener un label descriptivo y único</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Orden lógico:</strong> Ordena opciones de forma intuitiva (más común primero, alfabético, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Valor predeterminado:</strong> Usa defaultValue para opciones recomendadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Contexto adicional:</strong> Agrega descripciones para opciones complejas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Vertical preferido:</strong> Layout vertical para 3+ opciones, horizontal solo para 2-3</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}
