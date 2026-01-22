# IMPLEMENTATION EXAMPLES

---

## DARK MODE: CLASES SEMÁNTICAS

### 📊 **KPIs y Métricas**

#### ❌ **Incorrecto** (Usar dark:)
```tsx
// NO FUNCIONA en este entorno
<div className="text-3xl font-bold text-green-600 dark:text-green-400">
  +15.2%
</div>
<p className="text-sm text-yellow-600 dark:text-yellow-400">
  Pendiente
</p>
```

#### ✅ **Correcto** (Clases semánticas)
```tsx
// Funciona perfectamente en light y dark mode
<div className="text-3xl font-bold text-success">
  +15.2%
</div>
<p className="text-sm text-warning">
  Pendiente
</p>
```

**Clases disponibles:**
- `.text-success` → Verde (valores positivos, éxito)
- `.text-warning` → Amarillo (advertencias, pendientes)
- `.text-info` → Azul (información, valores neutros)
- `.text-danger` → Rojo (errores, valores negativos)
- `.text-orange` → Naranja (en proceso)
- `.text-purple` → Púrpura (estados especiales)

---

### 🚨 **Alertas y Notificaciones**

#### ❌ **Incorrecto** (Colores inline con dark:)
```tsx
<Alert className="bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800">
  <AlertCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
  <AlertDescription className="text-green-800 dark:text-green-200">
    Operación completada con éxito
  </AlertDescription>
</Alert>
```

#### ✅ **Correcto** (Clases semánticas de alerta)
```tsx
<Alert className="alert-success border">
  <AlertCircle className="h-4 w-4 alert-success-icon" />
  <AlertDescription className="alert-success-text">
    Operación completada con éxito
  </AlertDescription>
</Alert>
```

**Variantes disponibles:**
```tsx
// Success (Verde)
<Alert className="alert-success border">...</Alert>

// Warning (Amarillo)
<Alert className="alert-warning border">...</Alert>

// Info (Azul)
<Alert className="alert-info border">...</Alert>

// Danger (Rojo)
<Alert className="alert-danger border">...</Alert>
```

**Beneficio:** Contraste garantizado WCAG AA en ambos modos automáticamente.

---

### 🏷️ **Badges de Estado**

#### ❌ **Incorrecto** (Estilos complejos inline)
```tsx
<Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20">
  Creada
</Badge>
<Badge className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20">
  En Proceso
</Badge>
```

#### ✅ **Correcto** (Clases de estado)
```tsx
<Badge className="status-created border">Creada</Badge>
<Badge className="status-processing border">En Proceso</Badge>
<Badge className="status-negotiated border">Negociada</Badge>
<Badge className="status-endorsed border">Endosada</Badge>
<Badge className="status-rejected border">Rechazada</Badge>
```

**Beneficio:** 70% menos código, estados visuales consistentes.

---

### 🎨 **Función de Color Dinámica**

#### ❌ **Incorrecto** (Retornar dark: inline)
```tsx
const getScoreColor = (score: number) => {
  if (score >= 80) return 'text-green-600 dark:text-green-400';
  if (score >= 60) return 'text-yellow-600 dark:text-yellow-400';
  return 'text-red-600 dark:text-red-400';
};
```

#### ✅ **Correcto** (Retornar clases semánticas)
```tsx
const getScoreColor = (score: number) => {
  if (score >= 80) return 'text-success';
  if (score >= 60) return 'text-warning';
  return 'text-danger';
};
```

**Uso:**
```tsx
<span className={`text-2xl font-bold ${getScoreColor(85)}`}>
  85 puntos
</span>
```

---

### 📋 **Estados de Operaciones en Tablas**

#### ❌ **Incorrecto** (Map con dark: inline)
```tsx
const getStatusColor = (status: string) => {
  const colors = {
    Creada: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    "En Proceso": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
    Endosada: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  };
  return colors[status];
};
```

#### ✅ **Correcto** (Map con clases semánticas)
```tsx
const getStatusColor = (status: string) => {
  const colors = {
    Creada: "status-created border",
    "En Proceso": "status-processing border",
    Negociada: "status-negotiated border",
    Endosada: "status-endorsed border",
    Rechazada: "status-rejected border",
  };
  return colors[status] || "";
};
```

**Uso en tabla:**
```tsx
{operations.map((op) => (
  <TableRow key={op.id}>
    <TableCell>
      <Badge className={getStatusColor(op.status)}>
        {op.status}
      </Badge>
    </TableCell>
  </TableRow>
))}
```

---

### 🔘 **Elementos con bg-muted**

#### ❌ **Incorrecto** (Sin color de texto)
```tsx
// Contraste no garantizado
<div className="bg-muted p-4">
  <p>Texto aquí</p>
</div>

<select disabled className="bg-muted">
  <option>Seleccionar...</option>
</select>
```

#### ✅ **Correcto** (Con color de texto explícito)
```tsx
// Contraste garantizado
<div className="bg-muted text-muted-foreground p-4">
  <p>Texto aquí</p>
</div>

<select disabled className="bg-muted text-muted-foreground">
  <option>Seleccionar...</option>
</select>
```

**Regla:** SIEMPRE especificar `text-muted-foreground` o `text-foreground` con `bg-muted`.

---

## CASO DE ESTUDIO: MULTI-STEP FORMS

### ❌ Incorrecto (Manual)
```tsx
// Código duplicado y difícil de mantener
<div className="flex">
  <div className="w-10 h-10 rounded-full bg-primary">1</div>
  <div className="w-10 h-10 rounded-full bg-muted">2</div>
</div>
```

### ✅ Correcto (Componente Avanzado)
```tsx
import { StepIndicator } from "../advanced/StepIndicator";

<StepIndicator
  steps={steps}
  currentStep={currentStep}
  orientation="horizontal"
  variant="default"
  onStepClick={handleStep}
/>
```
**Beneficio**: 82% menos código, accesible y consistente.

---

## USO DEL DSM (COMPONENT SHOWCASE)

Para documentar un nuevo componente en el sistema:

```tsx
import { ComponentShowcase } from "../ui/component-showcase";
import { MyComponent } from "../ui/my-component";

export function MyComponentPage() {
  return (
    <ComponentShowcase
      title="My Component"
      description="Componente para acciones principales."
      category="Actions"
      preview={<MyComponent variant="default" />}
      code={`<MyComponent variant="default" />`}
      props={[
        { name: "variant", type: "string", default: "default", description: "Estilo visual" }
      ]}
    />
  );
}
```

## MIGRACIÓN DE DUPLICADOS
Si encuentras un componente repetido (ej: un Card custom):
1. Importar `Card`, `CardHeader`, `CardContent` de shadcn.
2. Reemplazar la estructura HTML plana.
3. Verificar que los estilos usen tokens (`bg-card`, `text-card-foreground`).