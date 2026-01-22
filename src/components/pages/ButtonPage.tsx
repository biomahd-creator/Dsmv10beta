import { ComponentShowcase } from "../ui/component-showcase";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Mail, Loader2, Download, Plus, X, Settings, ChevronRight } from "lucide-react";

export function ButtonPage() {
  return (
    <ComponentShowcase
      title="Button"
      description="Displays a button or a component that looks like a button."
      badges={[
        { text: "Actions", variant: "secondary" }
      ]}
      previewComponent={
        <div className="flex flex-wrap gap-4">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
          <Button>
            <Mail className="mr-2 h-4 w-4" /> Login with Email
          </Button>
        </div>
      }
      codeBlock={`import { Button } from "@/components/ui/button";
import { Mail, Loader2 } from "lucide-react";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button disabled>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Please wait
      </Button>
      <Button>
        <Mail className="mr-2 h-4 w-4" /> Login with Email
      </Button>
    </div>
  );
}`}
      examplesSection={
        <div className="space-y-8">
          {/* Variantes */}
          <Card>
            <CardHeader>
              <CardTitle>Variantes</CardTitle>
              <CardDescription>
                Diferentes estilos visuales para distintos contextos
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </CardContent>
          </Card>

          {/* Tamaños */}
          <Card>
            <CardHeader>
              <CardTitle>Tamaños</CardTitle>
              <CardDescription>
                Diferentes tamaños para distintas jerarquías visuales
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Con Iconos */}
          <Card>
            <CardHeader>
              <CardTitle>Con Iconos</CardTitle>
              <CardDescription>
                Botones con iconos para mayor claridad visual
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button>
                  <Mail className="mr-2 h-4 w-4" />
                  Email
                </Button>
                <Button variant="secondary">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button variant="outline">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
                <Button variant="destructive">
                  <X className="mr-2 h-4 w-4" />
                  Delete
                </Button>
                <Button variant="ghost">
                  Continue
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Solo Iconos */}
          <Card>
            <CardHeader>
              <CardTitle>Solo Iconos</CardTitle>
              <CardDescription>
                Botones compactos con solo iconos usando size="icon"
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="secondary">
                  <Download className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="destructive">
                  <X className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="ghost">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Estados */}
          <Card>
            <CardHeader>
              <CardTitle>Estados</CardTitle>
              <CardDescription>
                Botones en diferentes estados (loading, disabled)
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button disabled>Disabled</Button>
                <Button disabled variant="secondary">Disabled</Button>
                <Button disabled variant="outline">Disabled</Button>
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading
                </Button>
                <Button>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Ancho Completo */}
          <Card>
            <CardHeader>
              <CardTitle>Ancho Completo</CardTitle>
              <CardDescription>
                Botones que ocupan todo el ancho disponible
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full">Full Width Button</Button>
              <Button className="w-full" variant="secondary">
                <Mail className="mr-2 h-4 w-4" />
                Continue with Email
              </Button>
            </CardContent>
          </Card>

          {/* Grupos de Botones */}
          <Card>
            <CardHeader>
              <CardTitle>Grupos de Botones</CardTitle>
              <CardDescription>
                Botones agrupados para acciones relacionadas
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">Cancel</Button>
                <Button className="flex-1">Save</Button>
              </div>
              <div className="flex gap-2">
                <Button variant="outline">Previous</Button>
                <Button variant="outline" className="flex-1">Skip</Button>
                <Button>Next</Button>
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
              <CardDescription>API del componente Button</CardDescription>
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
                      <td className="p-2 font-mono">variant</td>
                      <td className="p-2">"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"</td>
                      <td className="p-2">"default"</td>
                      <td className="p-2">El estilo visual del botón</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">size</td>
                      <td className="p-2">"default" | "sm" | "lg" | "icon"</td>
                      <td className="p-2">"default"</td>
                      <td className="p-2">El tamaño del botón</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">asChild</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Si true, fusiona sus props con el hijo inmediato (Slot)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">disabled</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">false</td>
                      <td className="p-2">Deshabilita la interacción del botón</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones comunes del componente Button</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">✅ Acciones Primarias</h4>
                  <p className="text-sm text-muted-foreground">
                    Guardar, enviar, confirmar - acciones principales del flujo
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🔄 Acciones Secundarias</h4>
                  <p className="text-sm text-muted-foreground">
                    Cancelar, cerrar, volver - acciones de soporte
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">⚠️ Acciones Destructivas</h4>
                  <p className="text-sm text-muted-foreground">
                    Eliminar, rechazar - acciones irreversibles o peligrosas
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">🔗 Navegación</h4>
                  <p className="text-sm text-muted-foreground">
                    Links con apariencia de botón para navegación clara
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">📋 Formularios</h4>
                  <p className="text-sm text-muted-foreground">
                    Envío de formularios y validación de datos
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2">
                  <h4 className="font-medium">⚡ Acciones Rápidas</h4>
                  <p className="text-sm text-muted-foreground">
                    Botones de iconos para acciones contextuales
                  </p>
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
                  <span>Usa variant="default" para la acción principal del contexto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa variant="destructive" solo para acciones irreversibles</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Limita a un botón primario visible por sección</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa iconos solo cuando aporten claridad (no por decoración)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra estado de loading para operaciones asíncronas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa textos claros y verbos de acción (Guardar, Enviar, Eliminar)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Coloca el botón primario a la derecha en diálogos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa disabled para prevenir acciones hasta completar requisitos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}
