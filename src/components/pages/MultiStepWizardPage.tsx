import { ComponentShowcase } from "../ui/component-showcase";
import { MultiStepWizard } from "../patterns/MultiStepWizard";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { ListOrdered, Sparkles } from "lucide-react";

export function MultiStepWizardPage() {
  return (
    <ComponentShowcase
      title="Multi-Step Wizard"
      description="Formulario de múltiples pasos para procesos complejos como solicitudes de factoring."
      badges={[
        { text: "Patterns", variant: "secondary" }
      ]}
      previewComponent={
        <div className="w-full max-w-3xl">
          <MultiStepWizard />
        </div>
      }
      codeBlock={`import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function MultiStepWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      {/* Step Indicator */}
      <div className="p-6 pb-4">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4].map((step) => (
            <div
              key={step}
              className={\`flex items-center justify-center w-10 h-10 rounded-full \${
                step === currentStep
                  ? "bg-primary text-primary-foreground"
                  : step < currentStep
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }\`}
            >
              {step}
            </div>
          ))}
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Step Content */}
      <div className="p-6">
        {currentStep === 1 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Información General</h3>
            <div className="space-y-2">
              <Label>Nombre de la Empresa</Label>
              <Input placeholder="Ingrese el nombre" />
            </div>
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Datos Financieros</h3>
            <div className="space-y-2">
              <Label>Ingresos Anuales</Label>
              <Input type="number" placeholder="$0" />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Documentación</h3>
            <p className="text-muted-foreground">
              Adjunte los documentos requeridos...
            </p>
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Resumen</h3>
            <p className="text-muted-foreground">
              Revise la información antes de enviar...
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex justify-between p-6 pt-0">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 1}
        >
          Anterior
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentStep === totalSteps}
        >
          {currentStep === totalSteps ? "Enviar" : "Siguiente"}
        </Button>
      </div>
    </Card>
  );
}`}
      additionalSections={
        <>
          <Card>
            <CardHeader>
              <CardTitle>Características Principales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium flex items-center gap-2">
                    <ListOrdered className="h-4 w-4 text-primary" />
                    Navegación Estructurada
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                    <li>• Indicador de pasos visual con estado (activo, completado)</li>
                    <li>• Barra de progreso porcentual</li>
                    <li>• Navegación Anterior/Siguiente</li>
                    <li>• Validación antes de avanzar</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Experiencia de Usuario
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground ml-6">
                    <li>• Transiciones suaves entre pasos</li>
                    <li>• Resumen final antes de enviar</li>
                    <li>• Inputs específicos por contexto</li>
                    <li>• Feedback visual claro en cada etapa</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Casos de Uso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📝 Solicitudes de Factoring</h4>
                  <p className="text-sm text-muted-foreground">
                    Proceso completo de solicitud con info empresarial, financiera y documentos
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">🏢 Onboarding Empresarial</h4>
                  <p className="text-sm text-muted-foreground">
                    Registro de nuevas empresas con validación por etapas
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">💳 Configuración de Pagos</h4>
                  <p className="text-sm text-muted-foreground">
                    Setup de cuentas bancarias y métodos de pago
                  </p>
                </div>

                <div className="p-4 border rounded-lg space-y-2 bg-card">
                  <h4 className="font-medium">📊 Evaluación de Crédito</h4>
                  <p className="text-sm text-muted-foreground">
                    Proceso de evaluación crediticia paso a paso
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Divide procesos largos en 3-6 pasos manejables</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Muestra progreso visual con barra e indicadores</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Valida cada paso antes de permitir avanzar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Incluye un resumen final antes de enviar</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Permite navegación hacia atrás para corregir</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <span>Guarda progreso automáticamente</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </>
      }
    />
  );
}