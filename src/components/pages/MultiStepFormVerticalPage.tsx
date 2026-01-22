import { ComponentShowcase } from "../ui/component-showcase";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Check, User, Briefcase, FileText, Mail } from "lucide-react";
import { cn } from "../ui/utils";

interface Step {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

const steps: Step[] = [
  { id: 1, title: "Información Personal", icon: <User className="h-5 w-5" />, description: "Datos básicos" },
  { id: 2, title: "Información Laboral", icon: <Briefcase className="h-5 w-5" />, description: "Datos profesionales" },
  { id: 3, title: "Documentos", icon: <FileText className="h-5 w-5" />, description: "Carga de archivos" },
  { id: 4, title: "Confirmación", icon: <Mail className="h-5 w-5" />, description: "Revisión final" },
];

function MultiStepFormVerticalDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const isStepCompleted = (stepId: number) => stepId < currentStep;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="grid md:grid-cols-[280px,1fr] gap-6 w-full max-w-4xl">
      {/* Vertical Stepper */}
      <Card className="h-fit">
        <CardHeader>
          <CardTitle className="text-lg">Progreso</CardTitle>
          <CardDescription>Paso {currentStep} de {steps.length}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {steps.map((step, index) => {
            const isActive = step.id === currentStep;
            const isCompleted = isStepCompleted(step.id);
            const isLast = index === steps.length - 1;

            return (
              <div key={step.id} className="relative">
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0",
                      isCompleted && "step-icon-completed",
                      isActive && !isCompleted && "step-icon-active border-2",
                      !isActive && !isCompleted && "step-icon-inactive"
                    )}
                  >
                    {isCompleted ? <Check className="h-5 w-5" /> : step.icon}
                  </div>
                  <div className="flex-1">
                    <p className={cn("font-medium text-sm", isActive && "text-primary")}>{step.title}</p>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                </div>
                {!isLast && <div className={cn("absolute left-5 top-12 w-0.5 h-8", isCompleted ? "bg-primary" : "bg-border")} />}
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Form Content */}
      <Card>
        <CardHeader>
          <CardTitle>{steps[currentStep - 1].title}</CardTitle>
          <CardDescription>{steps[currentStep - 1].description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Nombres</Label>
                  <Input placeholder="Juan" />
                </div>
                <div className="space-y-2">
                  <Label>Apellidos</Label>
                  <Input placeholder="Pérez" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="juan@example.com" />
              </div>
              <div className="space-y-2">
                <Label>Teléfono</Label>
                <Input type="tel" placeholder="+57 300 123 4567" />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Empresa</Label>
                <Input placeholder="Acme Corp" />
              </div>
              <div className="space-y-2">
                <Label>Cargo</Label>
                <Input placeholder="Gerente" />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Adjunte los documentos requeridos...</p>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Revise la información antes de enviar...</p>
            </div>
          )}

          <div className="flex justify-between pt-4 border-t">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
              Anterior
            </Button>
            <Button onClick={handleNext}>
              {currentStep === steps.length ? "Enviar" : "Siguiente"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function MultiStepFormVerticalPage() {
  return (
    <ComponentShowcase
      title="Multi-Step Form (Vertical)"
      description="Formulario multi-paso con stepper vertical a un lado para mejor organización visual."
      badges={[{ text: "Patterns", variant: "secondary" }]}
      previewComponent={<MultiStepFormVerticalDemo />}
      codeBlock={`import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Personal", description: "Datos básicos" },
  { id: 2, title: "Laboral", description: "Información profesional" },
  { id: 3, title: "Documentos", description: "Archivos" },
  { id: 4, title: "Confirmación", description: "Revisión" },
];

export function VerticalForm() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="grid md:grid-cols-[280px,1fr] gap-6">
      {/* Stepper */}
      <Card>
        <CardHeader>
          <CardTitle>Progreso</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {steps.map((step) => (
            <div key={step.id} className="flex items-center gap-3">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                step.id < currentStep && "bg-primary text-white",
                step.id === currentStep && "border-2 border-primary"
              )}>
                {step.id < currentStep ? <Check /> : step.id}
              </div>
              <div>
                <p className="font-medium">{step.title}</p>
                <p className="text-xs text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Form */}
      <Card>
        <CardHeader>
          <CardTitle>{steps[currentStep - 1].title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Campo</Label>
              <Input placeholder="Ingresa valor" />
            </div>
          </div>
          
          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={() => setCurrentStep(prev => prev - 1)}>
              Anterior
            </Button>
            <Button onClick={() => setCurrentStep(prev => prev + 1)}>
              Siguiente
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}`}
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Características</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Diseño vertical optimizado para formularios largos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Indicadores visuales de progreso en cada paso</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Navegación simple con botones Anterior/Siguiente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Estados claros: completado, activo, pendiente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Responsive: se adapta a pantallas móviles</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg bg-card">
                  <h4 className="font-medium mb-2">📝 Registro de Usuarios</h4>
                  <p className="text-sm text-muted-foreground">
                    Formularios de registro con múltiples secciones
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-card">
                  <h4 className="font-medium mb-2">💼 Solicitudes</h4>
                  <p className="text-sm text-muted-foreground">
                    Aplicaciones para créditos, seguros, o servicios
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-card">
                  <h4 className="font-medium mb-2">🛒 Checkout</h4>
                  <p className="text-sm text-muted-foreground">
                    Proceso de compra dividido en etapas
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-card">
                  <h4 className="font-medium mb-2">👤 Perfiles Completos</h4>
                  <p className="text-sm text-muted-foreground">
                    Creación de perfiles con múltiples categorías de información
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-card">
                  <h4 className="font-medium mb-2">🏦 Onboarding Bancario</h4>
                  <p className="text-sm text-muted-foreground">
                    Proceso de apertura de cuentas con validación de identidad y documentos
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-card">
                  <h4 className="font-medium mb-2">📊 Encuestas Complejas</h4>
                  <p className="text-sm text-muted-foreground">
                    Cuestionarios largos divididos en secciones temáticas
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Propiedades Detalladas</CardTitle>
              <CardDescription>API del componente Multi-Step Form Vertical</CardDescription>
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
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">steps</code></td>
                    <td className="p-2">Step[]</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Array de pasos con id, title y description</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">currentStep</code></td>
                    <td className="p-2">number</td>
                    <td className="p-2">1</td>
                    <td className="p-2">Paso activo actual del formulario</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onStepChange</code></td>
                    <td className="p-2">(step: number) =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback al cambiar de paso</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">onComplete</code></td>
                    <td className="p-2">() =&gt; void</td>
                    <td className="p-2">-</td>
                    <td className="p-2">Callback al completar todos los pasos</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-2"><code className="px-2 py-1 bg-muted text-foreground rounded">allowSkip</code></td>
                    <td className="p-2">boolean</td>
                    <td className="p-2">false</td>
                    <td className="p-2">Permite saltar pasos sin completar</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Mejores Prácticas</CardTitle>
              <CardDescription>Recomendaciones para Multi-Step Form Vertical</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Usa layout vertical para formularios de más de 4 pasos - mejora la navegación visual</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra iconos de check en pasos completados y números en pasos pendientes para claridad</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye descripción breve bajo cada título de paso para dar contexto adicional</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Valida cada paso antes de permitir avanzar - deshabilita botón "Siguiente" si hay errores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Permite regresar a pasos anteriores para editar - nunca bloquees navegación hacia atrás</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Guarda progreso automáticamente en localStorage para evitar pérdida de datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>En mobile, convierte stepper vertical en horizontal collapse para mejor uso del viewport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Agrupa campos relacionados lógicamente en cada paso - máximo 5-7 campos por pantalla</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}