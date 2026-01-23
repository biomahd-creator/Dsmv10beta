import { ComponentShowcase } from "../ui/component-showcase";
import { ErrorBoundary } from "../patterns/ErrorBoundary";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { useState } from "react";

function BuggyComponent() {
  const [shouldThrow, setShouldThrow] = useState(false);
  
  if (shouldThrow) {
    throw new Error("¡Componente falló intencionalmente!");
  }
  
  return (
    <Card className="p-6">
      <h3 className="font-semibold mb-4">Componente Normal</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Este componente funciona correctamente hasta que hacemos click en el botón.
      </p>
      <Button 
        variant="destructive"
        onClick={() => setShouldThrow(true)}
      >
        Provocar Error
      </Button>
    </Card>
  );
}

function ErrorBoundaryDemo() {
  const [key, setKey] = useState(0);
  
  return (
    <div className="space-y-6">
      <Card className="p-6 bg-blue-50 dark:bg-blue-950">
        <p className="text-sm">
          <strong>Nota:</strong> Click en "Provocar Error" para ver cómo ErrorBoundary captura el error y muestra un mensaje amigable.
        </p>
      </Card>

      <ErrorBoundary 
        key={key}
        onReset={() => setKey(k => k + 1)}
      >
        <BuggyComponent />
      </ErrorBoundary>

      <Button variant="outline" onClick={() => setKey(k => k + 1)}>
        Resetear ErrorBoundary
      </Button>
    </div>
  );
}

export function ErrorBoundaryPage() {
  return (
    <ComponentShowcase
      title="Error Boundary"
      description="Captura errores de JavaScript en cualquier parte del árbol de componentes hijos, muestra un mensaje de error amigable y permite recuperación."
      previewComponent={<ErrorBoundaryDemo />}
      codeBlock={`import { ErrorBoundary } from "@biomahd-creator/financio-design-system/patterns";

<ErrorBoundary onReset={() => handleReset()}>
  <YourComponent />
</ErrorBoundary>`}
      usageExample={`// Proteger una sección crítica
<ErrorBoundary>
  <DashboardWidgets />
</ErrorBoundary>`}
    />
  );
}
