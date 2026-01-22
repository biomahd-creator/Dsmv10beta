import { ComponentShowcase } from "../ui/component-showcase";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Separator } from "../ui/separator";
import { Badge } from "../ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Button } from "../ui/button";
import { AlertTriangle, Trash2, LogOut, Info } from "lucide-react";

export function AlertDialogPage() {
  return (
    <ComponentShowcase
      title="Alert Dialog"
      description="Modal dialog para interrupciones importantes que requieren confirmación del usuario"
      badges={[
        { text: "Feedback", variant: "secondary" }
      ]}
      previewComponent={
        <div className="w-full max-w-md">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">
                <Trash2 className="h-4 w-4 mr-2" />
                Eliminar Cuenta
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
                <AlertDialogDescription>
                  Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta
                  y removerá todos tus datos de nuestros servidores.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction className="button-destructive">
                  Sí, eliminar cuenta
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      }
      codeBlock={`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">
          <Trash2 className="h-4 w-4 mr-2" />
          Eliminar Cuenta
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás absolutamente seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Esto eliminará permanentemente tu cuenta
            y removerá todos tus datos de nuestros servidores.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction className="button-destructive">
            Sí, eliminar cuenta
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`}
      examplesSection={
        <div className="space-y-8">
          {/* Different Alert Types */}
          <Card>
            <CardHeader>
              <CardTitle>Tipos de Alert Dialog</CardTitle>
              <CardDescription>Diferentes contextos de uso</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Warning Alert */}
                <div className="p-4 border rounded-lg space-y-3 bg-card">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 alert-warning-icon" />
                    <h4 className="font-medium">Advertencia</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Alert dialog con tono de advertencia</p>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <AlertTriangle className="h-4 w-4 mr-2" />
                        Ver Advertencia
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 alert-warning-icon" />
                          Cambios sin guardar
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Tienes cambios sin guardar. Si continúas, perderás todos los cambios
                          realizados en este documento.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction>Continuar sin guardar</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>

                {/* Logout Confirmation */}
                <div className="p-4 border rounded-lg space-y-3 bg-card">
                  <div className="flex items-center gap-2">
                    <LogOut className="h-5 w-5 text-primary" />
                    <h4 className="font-medium">Cerrar Sesión</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Confirmación de cierre de sesión</p>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <LogOut className="h-4 w-4 mr-2" />
                        Cerrar Sesión
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>¿Cerrar sesión?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Vas a cerrar tu sesión. Deberás iniciar sesión nuevamente para
                          acceder a tu cuenta.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction>Cerrar Sesión</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>

                {/* Info Alert */}
                <div className="p-4 border rounded-lg space-y-3 bg-card">
                  <div className="flex items-center gap-2">
                    <Info className="h-5 w-5 alert-info-icon" />
                    <h4 className="font-medium">Información</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Alert dialog informativo</p>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <Info className="h-4 w-4 mr-2" />
                        Ver Información
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="flex items-center gap-2">
                          <Info className="h-5 w-5 alert-info-icon" />
                          Actualización Disponible
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Hay una nueva versión disponible con mejoras de rendimiento y
                          correcciones de bugs. Te recomendamos actualizar ahora.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Más tarde</AlertDialogCancel>
                        <AlertDialogAction>Actualizar Ahora</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>

                {/* Delete Item */}
                <div className="p-4 border rounded-lg space-y-3 bg-card">
                  <div className="flex items-center gap-2">
                    <Trash2 className="h-5 w-5 alert-danger-icon" />
                    <h4 className="font-medium">Eliminar Item</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">Confirmación de eliminación</p>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive" className="w-full">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Eliminar Proyecto
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>¿Eliminar proyecto "Website Redesign"?</AlertDialogTitle>
                        <AlertDialogDescription>
                          Esta acción no se puede deshacer. El proyecto y todos sus archivos
                          serán eliminados permanentemente.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>No, mantener</AlertDialogCancel>
                        <AlertDialogAction className="button-destructive">
                          Sí, eliminar
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Composición</CardTitle>
              <CardDescription>Componentes shadcn/ui utilizados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm">
                  <Badge variant="outline" className="mr-2">AlertDialog</Badge>
                  Contenedor principal del dialog
                </p>
                <p className="text-sm">
                  <Badge variant="outline" className="mr-2">AlertDialogTrigger</Badge>
                  Botón que abre el dialog
                </p>
                <p className="text-sm">
                  <Badge variant="outline" className="mr-2">AlertDialogContent</Badge>
                  Contenido del modal
                </p>
                <p className="text-sm">
                  <Badge variant="outline" className="mr-2">AlertDialogHeader/Footer</Badge>
                  Secciones del dialog
                </p>
                <p className="text-sm">
                  <Badge variant="outline" className="mr-2">AlertDialogAction/Cancel</Badge>
                  Botones de acción
                </p>
                <Separator className="my-3" />
                <p className="text-xs text-muted-foreground">
                  Alert Dialog está construido sobre Radix UI Alert Dialog con estilos de shadcn/ui.
                  Incluye gestión de foco, accesibilidad y animaciones predefinidas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      }
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Componentes de Alert Dialog</CardTitle>
              <CardDescription>Subcomponentes disponibles para estructurar el dialog</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">AlertDialog</h4>
                  <p className="text-sm text-muted-foreground">
                    Contenedor principal del dialog. Gestiona el estado abierto/cerrado.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">AlertDialogTrigger</h4>
                  <p className="text-sm text-muted-foreground">
                    Botón que abre el dialog. Usa asChild para aplicar funcionalidad a un botón existente.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">AlertDialogContent</h4>
                  <p className="text-sm text-muted-foreground">
                    Contenido del modal. Incluye overlay oscuro y gestión de foco.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">AlertDialogHeader / AlertDialogFooter</h4>
                  <p className="text-sm text-muted-foreground">
                    Secciones del dialog para organizar título/descripción y acciones respectivamente.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">AlertDialogTitle / AlertDialogDescription</h4>
                  <p className="text-sm text-muted-foreground">
                    Título y descripción del dialog con semántica ARIA apropiada.
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium font-mono text-sm">AlertDialogAction / AlertDialogCancel</h4>
                  <p className="text-sm text-muted-foreground">
                    Botones de acción. Action para confirmar, Cancel para rechazar o cerrar.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle>♿ Accesibilidad</CardTitle>
              <CardDescription>Características de accesibilidad incluidas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>✓ <strong>Role="alertdialog"</strong> - ARIA role apropiado</p>
              <p>✓ <strong>Focus trap</strong> - El foco se mantiene dentro del dialog</p>
              <p>✓ <strong>Escape key</strong> - Cierra el dialog al presionar Escape</p>
              <p>✓ <strong>aria-describedby</strong> - Descripción accesible</p>
              <p>✓ <strong>Tab navigation</strong> - Navegación por teclado entre acciones</p>
              <p>✓ <strong>Focus restoration</strong> - Restaura el foco al trigger al cerrar</p>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}