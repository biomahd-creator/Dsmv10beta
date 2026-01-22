import { ComponentShowcase } from "../ui/component-showcase";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Switch } from "../ui/switch";
import { Textarea } from "../ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { InfoIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export function LabelPage() {
  return (
    <ComponentShowcase
      title="Label"
      description="Renders an accessible label associated with form controls. Essential for accessibility and user experience."
      badges={[
        { text: "Forms", variant: "secondary" }
      ]}
      previewComponent={
        <div className="w-full max-w-md space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email address</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms" className="cursor-pointer">
              I accept the terms and conditions
            </Label>
          </div>
        </div>
      }
      codeBlock={`import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export function LabelDemo() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email address</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="cursor-pointer">
          I accept the terms and conditions
        </Label>
      </div>
    </div>
  );
}`}
      examplesSection={
        <div className="space-y-8">
          {/* With Input */}
          <Card>
            <CardHeader>
              <CardTitle>With Input</CardTitle>
              <CardDescription>
                Label básico asociado a un input
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full max-w-md space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
            </CardContent>
          </Card>

          {/* Required Field Indicator */}
          <Card>
            <CardHeader>
              <CardTitle>Required Field Indicator</CardTitle>
              <CardDescription>
                Label con asterisco para campos requeridos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full max-w-md space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email-req">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input id="email-req" type="email" placeholder="required@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password-req">
                    Password <span className="text-destructive">*</span>
                  </Label>
                  <Input id="password-req" type="password" placeholder="••••••••" required />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* With Helper Text */}
          <Card>
            <CardHeader>
              <CardTitle>With Helper Text</CardTitle>
              <CardDescription>
                Label con texto de ayuda adicional
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full max-w-md space-y-2">
                <Label htmlFor="bio">Biography</Label>
                <Textarea id="bio" placeholder="Tell us about yourself..." rows={4} />
                <p className="text-sm text-muted-foreground">
                  Brief description for your profile. Max 500 characters.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* With Checkbox */}
          <Card>
            <CardHeader>
              <CardTitle>With Checkbox</CardTitle>
              <CardDescription>
                Label clickeable asociado a checkbox
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full max-w-md space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="notifications" />
                  <Label htmlFor="notifications" className="cursor-pointer">
                    Enable email notifications
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="marketing" />
                  <Label htmlFor="marketing" className="cursor-pointer">
                    Receive marketing emails
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* With Radio Group */}
          <Card>
            <CardHeader>
              <CardTitle>With Radio Group</CardTitle>
              <CardDescription>
                Labels asociados a radio buttons
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full max-w-md">
                <Label className="mb-3 block">Choose a plan</Label>
                <RadioGroup defaultValue="pro">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="basic" id="basic-plan" />
                    <Label htmlFor="basic-plan" className="cursor-pointer">
                      Basic - $9/month
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="pro" id="pro-plan" />
                    <Label htmlFor="pro-plan" className="cursor-pointer">
                      Pro - $29/month
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="enterprise" id="enterprise-plan" />
                    <Label htmlFor="enterprise-plan" className="cursor-pointer">
                      Enterprise - Custom pricing
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>

          {/* With Switch */}
          <Card>
            <CardHeader>
              <CardTitle>With Switch</CardTitle>
              <CardDescription>
                Labels para controles de switch
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full max-w-md space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="dark-mode">Dark Mode</Label>
                    <p className="text-sm text-muted-foreground">
                      Enable dark theme
                    </p>
                  </div>
                  <Switch id="dark-mode" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="auto-save">Auto-save</Label>
                    <p className="text-sm text-muted-foreground">
                      Automatically save changes
                    </p>
                  </div>
                  <Switch id="auto-save" defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* With Tooltip */}
          <Card>
            <CardHeader>
              <CardTitle>With Tooltip</CardTitle>
              <CardDescription>
                Label con tooltip informativo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full max-w-md space-y-2">
                <div className="flex items-center gap-2">
                  <Label htmlFor="api-key">API Key</Label>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <InfoIcon className="h-3 w-3 text-muted-foreground cursor-help" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Your unique API key for authentication</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <Input id="api-key" type="password" placeholder="sk_test_..." />
              </div>
            </CardContent>
          </Card>

          {/* Disabled Label */}
          <Card>
            <CardHeader>
              <CardTitle>Disabled Label</CardTitle>
              <CardDescription>
                Label para controles deshabilitados
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full max-w-md space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="disabled-input" className="text-muted-foreground">
                    Disabled Field
                  </Label>
                  <Input id="disabled-input" disabled placeholder="Cannot edit" />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="disabled-check" disabled />
                  <Label htmlFor="disabled-check" className="text-muted-foreground">
                    Disabled option
                  </Label>
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
              <CardDescription>API del componente Label</CardDescription>
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
                      <td className="p-2 font-mono">htmlFor</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">ID del control de formulario asociado (requerido para accesibilidad)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">children</td>
                      <td className="p-2">ReactNode</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Contenido del label</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">className</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Clases CSS adicionales</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">asChild</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Renderiza como hijo del label (Slot pattern)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas de Accesibilidad</CardTitle>
              <CardDescription>Recomendaciones para uso correcto de labels</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Siempre usa htmlFor:</strong> Vincula el label al control con el atributo htmlFor para permitir click-to-focus</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Cursor pointer:</strong> Agrega className="cursor-pointer" para checkboxes y radios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Indica campos requeridos:</strong> Usa asterisco rojo para campos obligatorios</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Texto descriptivo:</strong> Usa labels claros y específicos, no genéricos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Helper text:</strong> Agrega texto de ayuda debajo del control cuando sea necesario</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Estados visuales:</strong> Usa text-muted-foreground para labels deshabilitados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Tooltips informativos:</strong> Agrega tooltips con InfoIcon para campos complejos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>No omitir labels:</strong> Nunca usar placeholder como sustituto del label</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones del componente Label</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📝 Formularios</h4>
                  <p className="text-sm text-muted-foreground">
                    Inputs de texto, email, password - todos necesitan labels claros
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">☑️ Checkboxes</h4>
                  <p className="text-sm text-muted-foreground">
                    Términos y condiciones, preferencias, opciones múltiples
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🔘 Radio Buttons</h4>
                  <p className="text-sm text-muted-foreground">
                    Selección única de opciones, planes de pago, configuraciones
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🔄 Switches</h4>
                  <p className="text-sm text-muted-foreground">
                    Configuraciones on/off, preferencias de usuario, toggles
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📄 Textareas</h4>
                  <p className="text-sm text-muted-foreground">
                    Comentarios, descripciones, biografías, notas extensas
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📋 Selects</h4>
                  <p className="text-sm text-muted-foreground">
                    Dropdowns, comboboxes, selección de país, categoría
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}
