import { ComponentShowcase } from "../ui/component-showcase";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Terminal, AlertCircle, Info, CheckCircle2, AlertTriangle } from "lucide-react";

export function AlertPage() {
  return (
    <ComponentShowcase
      title="Alert"
      description="Displays a callout for user attention."
      badges={[
        { text: "Feedback", variant: "secondary" }
      ]}
      previewComponent={
        <div className="w-full max-w-xl space-y-4">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
          
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </div>
      }
      codeBlock={`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, AlertCircle } from "lucide-react";

export function AlertDemo() {
  return (
    <div className="space-y-4">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
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
                Diferentes estilos para distintos tipos de mensajes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Información</AlertTitle>
                <AlertDescription>
                  Esta es una alerta informativa con el estilo por defecto.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Esta es una alerta de error para notificar problemas críticos.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Con Diferentes Iconos */}
          <Card>
            <CardHeader>
              <CardTitle>Con Diferentes Iconos</CardTitle>
              <CardDescription>
                Alerts con iconos que refuerzan el tipo de mensaje
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="alert-success">
                <CheckCircle2 className="h-4 w-4 alert-success-icon" />
                <AlertTitle className="alert-success-text">Éxito</AlertTitle>
                <AlertDescription className="alert-success-text">
                  La operación se completó exitosamente.
                </AlertDescription>
              </Alert>

              <Alert className="alert-info">
                <Info className="h-4 w-4 alert-info-icon" />
                <AlertTitle className="alert-info-text">Información</AlertTitle>
                <AlertDescription className="alert-info-text">
                  Nueva actualización disponible para instalar.
                </AlertDescription>
              </Alert>

              <Alert className="alert-warning">
                <AlertTriangle className="h-4 w-4 alert-warning-icon" />
                <AlertTitle className="alert-warning-text">Advertencia</AlertTitle>
                <AlertDescription className="alert-warning-text">
                  Esta acción no se puede deshacer. Procede con precaución.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error Crítico</AlertTitle>
                <AlertDescription>
                  No se pudo conectar con el servidor. Intenta nuevamente más tarde.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Sin Título */}
          <Card>
            <CardHeader>
              <CardTitle>Sin Título</CardTitle>
              <CardDescription>
                Alerts que solo contienen descripción
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Este es un mensaje simple sin título, ideal para notificaciones breves.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Error al procesar la solicitud. Por favor, verifica los datos e intenta nuevamente.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Con Contenido Rico */}
          <Card>
            <CardHeader>
              <CardTitle>Con Contenido Rico</CardTitle>
              <CardDescription>
                Alerts con listas, enlaces u otro contenido estructurado
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Requisitos del Sistema</AlertTitle>
                <AlertDescription className="space-y-2">
                  <p>Para continuar, asegúrate de cumplir con los siguientes requisitos:</p>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>Conexión a Internet estable</li>
                    <li>Navegador actualizado (Chrome, Firefox, Safari)</li>
                    <li>JavaScript habilitado</li>
                  </ul>
                </AlertDescription>
              </Alert>

              <Alert className="border-yellow-500/50 bg-yellow-500/10">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <AlertTitle className="text-yellow-600">Mantenimiento Programado</AlertTitle>
                <AlertDescription className="text-yellow-600 space-y-2">
                  <p>El sistema estará en mantenimiento:</p>
                  <div className="mt-2 space-y-1">
                    <p className="font-medium">📅 Fecha: Sábado 25 de enero, 2026</p>
                    <p className="font-medium">⏰ Horario: 02:00 AM - 06:00 AM</p>
                    <p className="font-medium">⏱️ Duración estimada: 4 horas</p>
                  </div>
                  <p className="mt-2">Durante este período, el acceso al sistema no estará disponible.</p>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Casos de Uso en Factoring */}
          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso en Factoring</CardTitle>
              <CardDescription>
                Ejemplos aplicados a sistemas de factoring
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="alert-success">
                <CheckCircle2 className="h-4 w-4 alert-success-icon" />
                <AlertTitle className="alert-success-text">Factura Aprobada</AlertTitle>
                <AlertDescription className="alert-success-text">
                  La factura #F-2024-001 ha sido aprobada. El adelanto se procesará en las próximas 24 horas.
                </AlertDescription>
              </Alert>

              <Alert className="alert-info">
                <Info className="h-4 w-4 alert-info-icon" />
                <AlertTitle className="alert-info-text">Documentación Pendiente</AlertTitle>
                <AlertDescription className="alert-info-text">
                  Para completar la operación de factoring, es necesario adjuntar la copia del RUT de la empresa.
                </AlertDescription>
              </Alert>

              <Alert className="alert-warning">
                <AlertTriangle className="h-4 w-4 alert-warning-icon" />
                <AlertTitle className="alert-warning-text">Límite de Crédito Cercano</AlertTitle>
                <AlertDescription className="alert-warning-text">
                  Has utilizado el 85% de tu línea de crédito aprobada. Considera solicitar un aumento.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Factura Rechazada</AlertTitle>
                <AlertDescription>
                  La factura #F-2024-003 fue rechazada debido a inconsistencias en los datos del cliente. 
                  Por favor, revisa y reenvía la documentación correcta.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      }
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Componentes de Alert</CardTitle>
              <CardDescription>Subcomponentes disponibles para estructurar alertas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">Alert</h4>
                  <p className="text-sm text-muted-foreground">
                    Contenedor principal de la alerta. Aplica bordes, padding y estilos base. Acepta variant prop para cambiar el estilo.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">AlertTitle</h4>
                  <p className="text-sm text-muted-foreground">
                    Título de la alerta con estilos de encabezado. Es opcional y puede omitirse para alertas simples.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">AlertDescription</h4>
                  <p className="text-sm text-muted-foreground">
                    Contenido descriptivo de la alerta. Puede incluir texto plano, listas, enlaces u otro contenido enriquecido.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Propiedades</CardTitle>
              <CardDescription>API del componente Alert</CardDescription>
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
                      <td className="p-2">"default" | "destructive"</td>
                      <td className="p-2">"default"</td>
                      <td className="p-2">El estilo visual de la alerta</td>
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
              <CardDescription>Aplicaciones del componente Alert</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">✅ Confirmaciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Notificar operaciones exitosas: facturas aprobadas, pagos procesados.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">ℹ️ Información</h4>
                  <p className="text-sm text-muted-foreground">
                    Comunicar actualizaciones, requisitos o instrucciones importantes.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">⚠️ Advertencias</h4>
                  <p className="text-sm text-muted-foreground">
                    Alertar sobre límites cercanos, acciones que requieren atención.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">❌ Errores</h4>
                  <p className="text-sm text-muted-foreground">
                    Reportar fallos en operaciones, validaciones fallidas, problemas técnicos.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📋 Requisitos</h4>
                  <p className="text-sm text-muted-foreground">
                    Listar documentación pendiente, pasos necesarios para continuar.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">🔔 Notificaciones</h4>
                  <p className="text-sm text-muted-foreground">
                    Mantenimiento programado, cambios de políticas, nuevas funcionalidades.
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
                  <span>Usa iconos apropiados que refuercen el tipo de mensaje</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén los mensajes concisos y accionables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa variant="destructive" solo para errores críticos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Coloca las alertas cerca del contexto relevante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Considera usar AlertTitle para mensajes largos o complejos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Evita múltiples alertas apiladas - agrupa información relacionada</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye acciones sugeridas cuando sea apropiado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Mantén consistencia de colores con el sistema de diseño</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}