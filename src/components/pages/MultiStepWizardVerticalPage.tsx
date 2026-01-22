import { ComponentShowcase } from "../ui/component-showcase";
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Progress } from "../ui/progress";
import { Check, User, Building2, CreditCard, FileCheck } from "lucide-react";
import { cn } from "../ui/utils";

interface WizardStep {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const wizardSteps: WizardStep[] = [
  { id: 1, title: "Cuenta", subtitle: "Información básica", icon: <User className="h-4 w-4" /> },
  { id: 2, title: "Empresa", subtitle: "Datos de la empresa", icon: <Building2 className="h-4 w-4" /> },
  { id: 3, title: "Facturación", subtitle: "Configuración de factoring", icon: <CreditCard className="h-4 w-4" /> },
  { id: 4, title: "Verificación", subtitle: "Revisión y confirmación", icon: <FileCheck className="h-4 w-4" /> },
];

function MultiStepWizardVerticalDemo() {
  const [currentStep, setCurrentStep] = useState(1);
  const isStepCompleted = (stepId: number) => stepId < currentStep;
  const isStepAccessible = (stepId: number) => stepId <= currentStep;
  const progress = (currentStep / wizardSteps.length) * 100;

  const handleNext = () => {
    if (currentStep < wizardSteps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="grid md:grid-cols-[320px,1fr] gap-6 w-full max-w-5xl">
      {/* Vertical Stepper */}
      <div className="space-y-4">
        <Card>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between mb-2">
              <CardTitle className="text-lg">Configuración</CardTitle>
              <Badge variant="outline" className="text-xs">
                {currentStep}/{wizardSteps.length}
              </Badge>
            </div>
            <Progress value={progress} className="h-2" />
            <CardDescription className="mt-2">
              {Math.round(progress)}% completado
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardContent className="p-4 space-y-2">
            {wizardSteps.map((step, index) => {
              const isActive = step.id === currentStep;
              const isCompleted = isStepCompleted(step.id);
              const isAccessible = isStepAccessible(step.id);
              const isLast = index === wizardSteps.length - 1;

              return (
                <div key={step.id} className="relative">
                  <button
                    onClick={() => isAccessible && setCurrentStep(step.id)}
                    disabled={!isAccessible}
                    className={cn(
                      "w-full text-left p-3 rounded-lg transition-all flex items-center gap-3",
                      isActive && "bg-primary/10 border-2 border-primary",
                      !isActive && isAccessible && "hover:bg-muted/50 border-2 border-transparent",
                      !isAccessible && "opacity-50 cursor-not-allowed border-2 border-transparent"
                    )}
                  >
                    <div
                      className={cn(
                        "flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-medium",
                        isCompleted && "step-icon-completed",
                        isActive && !isCompleted && "step-icon-active border-2",
                        !isActive && !isCompleted && isAccessible && "step-icon-inactive"
                      )}
                    >
                      {isCompleted ? <Check className="h-5 w-5" /> : <span className="text-sm">{step.id}</span>}
                    </div>

                    <div className="flex-1">
                      <p className={cn("text-sm font-medium", isActive && "text-primary font-bold")}>
                        {step.title}
                      </p>
                      <p className="text-xs text-muted-foreground">{step.subtitle}</p>
                    </div>
                  </button>

                  {!isLast && (
                    <div className={cn("absolute left-8 top-[58px] w-0.5 h-6", isCompleted ? "bg-primary" : "bg-border")} />
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Wizard Content */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              {wizardSteps[currentStep - 1].icon}
            </div>
            <div>
              <CardTitle>{wizardSteps[currentStep - 1].title}</CardTitle>
              <CardDescription>{wizardSteps[currentStep - 1].subtitle}</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentStep === 1 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Nombre de Usuario</Label>
                <Input placeholder="usuario123" />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="email@empresa.com" />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Razón Social</Label>
                <Input placeholder="Empresa S.A.S." />
              </div>
              <div className="space-y-2">
                <Label>NIT</Label>
                <Input placeholder="900.123.456-7" />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Configure los parámetros de factoring...</p>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Revise la información antes de finalizar...</p>
            </div>
          )}

          <div className="flex justify-between pt-4">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
              Anterior
            </Button>
            <Button onClick={handleNext} disabled={currentStep === wizardSteps.length}>
              {currentStep === wizardSteps.length ? "Finalizar" : "Siguiente"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function MultiStepWizardVerticalPage() {
  return (
    <ComponentShowcase
      title="Multi-Step Wizard (Vertical)"
      description="Wizard avanzado con validación de pasos y stepper vertical a un lado para procesos complejos."
      badges={[{ text: "Patterns", variant: "secondary" }]}
      previewComponent={<MultiStepWizardVerticalDemo />}
      codeBlock={`import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  { id: 1, title: "Cuenta", subtitle: "Información básica" },
  { id: 2, title: "Empresa", subtitle: "Datos de la empresa" },
  { id: 3, title: "Facturación", subtitle: "Configuración" },
  { id: 4, title: "Verificación", subtitle: "Revisión final" },
];

export function VerticalWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const progress = (currentStep / steps.length) * 100;

  return (
    <div className="grid md:grid-cols-[320px,1fr] gap-6">
      {/* Stepper Vertical */}
      <Card>
        <CardHeader>
          <Badge>{currentStep}/{steps.length}</Badge>
          <Progress value={progress} />
        </CardHeader>
        <CardContent className="space-y-2">
          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setCurrentStep(step.id)}
              className={cn(
                "w-full p-3 rounded-lg flex items-center gap-3",
                step.id === currentStep && "bg-primary/10"
              )}
            >
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center",
                step.id < currentStep && "bg-primary text-white"
              )}>
                {step.id < currentStep ? <Check /> : step.id}
              </div>
              <div>
                <p className="font-medium">{step.title}</p>
                <p className="text-xs text-muted-foreground">{step.subtitle}</p>
              </div>
            </button>
          ))}
        </CardContent>
      </Card>

      {/* Content */}
      <Card>
        <CardHeader>
          <CardTitle>{steps[currentStep - 1].title}</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Step content here */}
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
                  <span>Stepper vertical en sidebar para mejor aprovechamiento del espacio</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Navegación clickeable entre pasos completados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Barra de progreso y porcentaje de completitud</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Estados visuales claros: activo, completado, pendiente</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Validación por paso antes de avanzar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Responsive: se adapta a pantallas pequeñas</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg bg-card">
                  <h4 className="font-medium mb-2">Onboarding de Empresas</h4>
                  <p className="text-sm text-muted-foreground">
                    Registro completo con múltiples etapas de verificación
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-card">
                  <h4 className="font-medium mb-2">Solicitudes Complejas</h4>
                  <p className="text-sm text-muted-foreground">
                    Factoring, créditos, o cualquier proceso con múltiples secciones
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-card">
                  <h4 className="font-medium mb-2">Configuración de Cuenta</h4>
                  <p className="text-sm text-muted-foreground">
                    Setup inicial de usuarios o perfiles empresariales
                  </p>
                </div>
                <div className="p-4 border rounded-lg bg-card">
                  <h4 className="font-medium mb-2">Procesos de Aprobación</h4>
                  <p className="text-sm text-muted-foreground">
                    Workflows que requieren revisión por etapas
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