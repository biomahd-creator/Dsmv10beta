import { ComponentShowcase } from "../ui/component-showcase";
import { Separator } from "../ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function SeparatorPage() {
  return (
    <ComponentShowcase
      title="Separator"
      description="Visually or semantically separates content"
      badges={[
        { text: "Data Display", variant: "secondary" }
      ]}
      previewComponent={
        <div className="w-full">
          <p className="text-sm">Content above separator</p>
          <Separator className="my-4" />
          <p className="text-sm">Content below separator</p>
        </div>
      }
      codeBlock={`import { Separator } from "@/components/ui/separator";

export function SeparatorDemo() {
  return (
    <div>
      <p className="text-sm">Content above separator</p>
      <Separator className="my-4" />
      <p className="text-sm">Content below separator</p>
    </div>
  );
}`}
      examplesSection={
        <div className="space-y-8">
          {/* Vertical Separator */}
          <Card>
            <CardHeader>
              <CardTitle>Vertical Separator</CardTitle>
              <CardDescription>
                Vertical divider for inline content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex h-20 items-center space-x-4">
                <div className="text-sm">Item 1</div>
                <Separator orientation="vertical" />
                <div className="text-sm">Item 2</div>
                <Separator orientation="vertical" />
                <div className="text-sm">Item 3</div>
              </div>
            </CardContent>
          </Card>

          {/* With Content Sections */}
          <Card>
            <CardHeader>
              <CardTitle>With Content Sections</CardTitle>
              <CardDescription>
                Separator in a real layout with multiple sections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 w-full">
                <div>
                  <h3 className="font-semibold">Section Title</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    This is some content in the first section.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold">Another Section</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    This is content in the second section.
                  </p>
                </div>
                <Separator />
                <div>
                  <h3 className="font-semibold">Final Section</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    And this is the last section.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* In Navigation */}
          <Card>
            <CardHeader>
              <CardTitle>In Navigation Menu</CardTitle>
              <CardDescription>
                Separating navigation groups
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 max-w-sm">
                <div className="px-3 py-2 text-sm hover:bg-muted rounded cursor-pointer">
                  Dashboard
                </div>
                <div className="px-3 py-2 text-sm hover:bg-muted rounded cursor-pointer">
                  Analytics
                </div>
                <Separator className="my-2" />
                <div className="px-3 py-2 text-sm hover:bg-muted rounded cursor-pointer">
                  Settings
                </div>
                <div className="px-3 py-2 text-sm hover:bg-muted rounded cursor-pointer">
                  Help
                </div>
                <Separator className="my-2" />
                <div className="px-3 py-2 text-sm hover:bg-muted rounded cursor-pointer text-destructive">
                  Logout
                </div>
              </div>
            </CardContent>
          </Card>

          {/* In Cards */}
          <Card>
            <CardHeader>
              <CardTitle>In Card Layout</CardTitle>
              <CardDescription>
                Separating card sections
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Card>
                <CardHeader>
                  <CardTitle>Invoice #INV-2024-001</CardTitle>
                  <CardDescription>Issued on January 22, 2026</CardDescription>
                </CardHeader>
                <Separator />
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>$1,000.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax (19%)</span>
                      <span>$190.00</span>
                    </div>
                  </div>
                </CardContent>
                <Separator />
                <CardContent className="pt-6">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>$1,190.00</span>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>

          {/* With Spacing Variants */}
          <Card>
            <CardHeader>
              <CardTitle>Spacing Variants</CardTitle>
              <CardDescription>
                Different spacing configurations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <p className="text-sm mb-2">Tight spacing (my-2)</p>
                  <Separator className="my-2" />
                  <p className="text-sm">Next content</p>
                </div>

                <div>
                  <p className="text-sm mb-4">Medium spacing (my-4)</p>
                  <Separator className="my-4" />
                  <p className="text-sm">Next content</p>
                </div>

                <div>
                  <p className="text-sm mb-6">Large spacing (my-6)</p>
                  <Separator className="my-6" />
                  <p className="text-sm">Next content</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Toolbar Vertical Separators */}
          <Card>
            <CardHeader>
              <CardTitle>Toolbar with Vertical Separators</CardTitle>
              <CardDescription>
                Button groups separated vertically
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 p-2 border rounded-md w-fit">
                <button className="px-3 py-1.5 text-sm hover:bg-muted rounded">
                  Bold
                </button>
                <button className="px-3 py-1.5 text-sm hover:bg-muted rounded">
                  Italic
                </button>
                <Separator orientation="vertical" className="h-6" />
                <button className="px-3 py-1.5 text-sm hover:bg-muted rounded">
                  Left
                </button>
                <button className="px-3 py-1.5 text-sm hover:bg-muted rounded">
                  Center
                </button>
                <Separator orientation="vertical" className="h-6" />
                <button className="px-3 py-1.5 text-sm hover:bg-muted rounded">
                  Link
                </button>
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
              <CardDescription>API del componente Separator</CardDescription>
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
                      <td className="p-2 font-mono">orientation</td>
                      <td className="p-2">"horizontal" | "vertical"</td>
                      <td className="p-2">"horizontal"</td>
                      <td className="p-2">La orientación del separador</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">decorative</td>
                      <td className="p-2">boolean</td>
                      <td className="p-2">true</td>
                      <td className="p-2">Si true, el separador es solo decorativo (aria-hidden)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">className</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Clases CSS adicionales para personalizar el separador</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones del componente Separator</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📄 Secciones de Contenido</h4>
                  <p className="text-sm text-muted-foreground">
                    Dividir secciones en páginas, artículos o documentos largos
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">🎛️ Toolbars</h4>
                  <p className="text-sm text-muted-foreground">
                    Separar grupos de botones o controles en barras de herramientas
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📋 Menús</h4>
                  <p className="text-sm text-muted-foreground">
                    Agrupar opciones relacionadas en menús de navegación
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">💳 Cards</h4>
                  <p className="text-sm text-muted-foreground">
                    Separar header, body y footer en tarjetas y paneles
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📊 Dashboards</h4>
                  <p className="text-sm text-muted-foreground">
                    Dividir widgets y secciones en tableros de control
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📑 Forms</h4>
                  <p className="text-sm text-muted-foreground">
                    Separar grupos de campos relacionados en formularios largos
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
                  <span>Usa separadores para dividir contenido lógicamente relacionado pero distinto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Ajusta el spacing (my-2, my-4, my-6) según la jerarquía visual deseada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa orientation="vertical" con altura explícita (h-6, h-8) para separadores verticales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén decorative={true} (default) para separadores puramente visuales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>No abuses de separadores - demasiados pueden fragmentar el contenido</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Considera usar whitespace (espacio en blanco) en lugar de separadores cuando sea apropiado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En toolbars, usa separadores verticales para agrupar acciones relacionadas</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}