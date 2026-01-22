import { ComponentShowcase } from "../ui/component-showcase";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { AlertTriangle, Calendar, Clock, AlertCircle } from "lucide-react";

export function ProgressPage() {
  const getProgressColor = (value: number) => {
    if (value >= 90) return "[&_[data-slot=progress-indicator]]:!bg-red-600";
    if (value >= 75) return "[&_[data-slot=progress-indicator]]:!bg-orange-500";
    return "";
  };

  return (
    <ComponentShowcase
      title="Progress"
      description="Displays an indicator showing the completion progress of a task"
      badges={[
        { text: "Feedback", variant: "secondary" }
      ]}
      previewComponent={
        <div className="w-full space-y-2">
          <Progress value={60} />
        </div>
      }
      codeBlock={`import { Progress } from "@/components/ui/progress";

export function ProgressDemo() {
  return <Progress value={60} />;
}`}
      examplesSection={
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Different Values</CardTitle>
              <CardDescription>Progress bars at various completion levels with labels</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { value: 25, label: 'Loading...' },
                { value: 50, label: 'In Progress' },
                { value: 75, label: 'Almost Done' },
                { value: 100, label: 'Complete' }
              ].map(({ value, label }) => (
                <div key={value} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{value}%</span>
                    <span className="text-muted-foreground">{label}</span>
                  </div>
                  <Progress value={value} />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Deadline Awareness</CardTitle>
              <CardDescription>Progress bars that change color and state as the deadline approaches</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Normal State */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Q1 Project Phase</div>
                    <div className="flex items-center text-xs text-muted-foreground gap-2">
                      <Calendar className="h-3 w-3" />
                      <span>2025-01-01 - 2025-12-31</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium">29%</span>
                </div>
                <Progress value={29} />
              </div>

              {/* Warning State */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="text-sm font-medium">Q4 Marketing Campaign</div>
                    <div className="flex items-center text-xs text-orange-warning gap-2 font-medium">
                      <Clock className="h-3 w-3" />
                      <span>Due soon (2025-10-15)</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-orange-600">79%</span>
                </div>
                <Progress value={79} className={getProgressColor(79)} />
              </div>

              {/* Critical State */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">Year End Closing</span>
                      <Badge variant="destructive" className="h-5 px-1.5 text-xs gap-1 font-medium">
                        <AlertTriangle className="h-3 w-3" />
                        CRITICAL
                      </Badge>
                    </div>
                    <div className="flex items-center text-xs text-destructive gap-2 font-medium">
                      <AlertCircle className="h-3 w-3" />
                      <span>Deadline imminent (2025-12-25)</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-destructive">98%</span>
                </div>
                <Progress value={98} className={getProgressColor(98)} />
                <p className="text-xs text-destructive font-medium pt-1">
                  Warning: Less than 10% of time remaining!
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>File Upload Progress</CardTitle>
              <CardDescription>Simulating file upload with progress indication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">document.pdf</span>
                  <span className="text-muted-foreground">2.4 MB / 3.0 MB</span>
                </div>
                <Progress value={80} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Multi-Step Process</CardTitle>
              <CardDescription>Showing progress through a multi-step process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">Step 3 of 4</span>
                  <span className="text-muted-foreground">Review Information</span>
                </div>
                <Progress value={75} />
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
              <CardDescription>API del componente Progress</CardDescription>
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
                      <td className="p-2">number</td>
                      <td className="p-2">-</td>
                      <td className="p-2">El valor actual del progreso (0-100)</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">max</td>
                      <td className="p-2">number</td>
                      <td className="p-2">100</td>
                      <td className="p-2">El valor máximo del progreso</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2 font-mono">className</td>
                      <td className="p-2">string</td>
                      <td className="p-2">-</td>
                      <td className="p-2">Clases CSS adicionales para personalización</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
              <CardDescription>Aplicaciones del componente Progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📁 Carga de Archivos</h4>
                  <p className="text-sm text-muted-foreground">Mostrar progreso de uploads de documentos, imágenes, videos</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📊 Procesos Multi-Paso</h4>
                  <p className="text-sm text-muted-foreground">Indicar avance en wizards, onboarding, configuraciones</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">⏱️ Plazos y Deadlines</h4>
                  <p className="text-sm text-muted-foreground">Visualizar tiempo transcurrido vs. tiempo total disponible</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">✅ Completación de Tareas</h4>
                  <p className="text-sm text-muted-foreground">Mostrar cuántas tareas se han completado del total</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📈 Objetivos y Metas</h4>
                  <p className="text-sm text-muted-foreground">Indicar progreso hacia KPIs, quotas, targets</p>
                </div>
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">🔄 Procesamiento</h4>
                  <p className="text-sm text-muted-foreground">Mostrar estado de procesos en background, sincronizaciones</p>
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
                  <span><strong>Muestra el porcentaje:</strong> Acompaña el indicador visual con el valor numérico</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Contexto claro:</strong> Explica qué representa el progreso (Step 2 of 5, 2MB / 5MB)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Actualización frecuente:</strong> Actualiza el valor regularmente para feedback continuo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Estados de alerta:</strong> Usa colores para indicar problemas (amarillo/naranja/rojo)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Tiempo estimado:</strong> Si es posible, muestra tiempo restante o estimado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span><strong>Feedback de completación:</strong> Indica claramente cuando llega a 100%</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}