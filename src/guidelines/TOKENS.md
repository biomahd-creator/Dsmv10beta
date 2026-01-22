# DESIGN TOKENS & THEME

## TIPOGRAFÍA
- **Fuente Única**: `Satoshi`
- **Configuración**: Definida en `/styles/globals.css` vía `@font-face`.
- **Escala**:
  - Headings: `text-4xl`, `text-3xl`, `font-semibold`
  - Body: `text-base`, `text-sm`, `leading-relaxed`
  - Small: `text-xs`, `font-medium`

## COLORES (TOKENS)
Todos los colores deben usarse a través de variables CSS o clases de Tailwind.

### Brand Colors
- **Primary**: `#84cc16` (Lime-500) - Para CTAs y estados activos.
- **Secondary**: `#1C2D3A` (Azul Oscuro) - Para texto principal y fondos oscuros.

### Modo Claro (Light Mode)
- **Background**: `#ffffff`
- **Foreground**: `#1C2D3A`
- **Muted**: `#f4f4f5`
- **Border**: `#e4e4e7`

### Modo Oscuro (Dark Mode)
- **Background**: `#0f172a` (Slate-900) - 🚫 NO usar negro puro (#000000).
- **Foreground**: `#f8fafc`
- **Card**: `#1e293b`
- **Border**: `#334155`

---

## CLASES SEMÁNTICAS PARA DARK MODE

⚠️ **IMPORTANTE**: Las clases `dark:` de Tailwind NO funcionan en este entorno. Usar siempre las clases semánticas personalizadas definidas en `/styles/globals.css`.

### **Colores Semánticos de Texto**
Usar para KPIs, métricas, estados y feedback visual:

| Clase | Light Mode | Dark Mode | Uso Recomendado |
|-------|-----------|-----------|-----------------|
| `.text-success` | `#16a34a` (green-600) | `#4ade80` (green-400) | Éxito, valores positivos, incrementos |
| `.text-warning` | `#ca8a04` (yellow-600) | `#facc15` (yellow-400) | Advertencias, estados pendientes |
| `.text-info` | `#2563eb` (blue-600) | `#60a5fa` (blue-400) | Información general, valores neutros |
| `.text-danger` | `#dc2626` (red-600) | `#f87171` (red-400) | Errores, valores negativos, rechazos |
| `.text-orange` | `#ea580c` (orange-600) | `#fb923c` (orange-400) | Estados en proceso, prioridad media |
| `.text-purple` | `#9333ea` (purple-600) | `#c084fc` (purple-400) | Estados especiales, negociaciones |

**Ejemplo de uso:**
```tsx
// ✅ CORRECTO
<span className="text-success">+15%</span>
<span className="text-warning">Pendiente</span>
<span className="text-danger">Error</span>

// ❌ INCORRECTO - NO FUNCIONA
<span className="text-green-600 dark:text-green-400">+15%</span>
```

---

### **Clases de Alerta (Alert Components)**

Sistema completo de alertas semánticas con background, border y text colors:

#### **Success Alert**
```tsx
<Alert className="alert-success border">
  <AlertCircle className="h-4 w-4 alert-success-icon" />
  <AlertDescription className="alert-success-text">
    Operación completada exitosamente
  </AlertDescription>
</Alert>
```

#### **Warning Alert**
```tsx
<Alert className="alert-warning border">
  <AlertTriangle className="h-4 w-4 alert-warning-icon" />
  <AlertDescription className="alert-warning-text">
    Esta acción requiere confirmación
  </AlertDescription>
</Alert>
```

#### **Info Alert**
```tsx
<Alert className="alert-info border">
  <Info className="h-4 w-4 alert-info-icon" />
  <AlertDescription className="alert-info-text">
    Información importante sobre el proceso
  </AlertDescription>
</Alert>
```

#### **Danger Alert**
```tsx
<Alert className="alert-danger border">
  <XCircle className="h-4 w-4 alert-danger-icon" />
  <AlertDescription className="alert-danger-text">
    Error: No se pudo completar la operación
  </AlertDescription>
</Alert>
```

**Clases disponibles:**
- `.alert-success`, `.alert-success-text`, `.alert-success-icon`
- `.alert-warning`, `.alert-warning-text`, `.alert-warning-icon`
- `.alert-info`, `.alert-info-text`, `.alert-info-icon`
- `.alert-danger`, `.alert-danger-text`, `.alert-danger-icon`

---

### **Estados de Operaciones (Status Badges)**

Para badges de estados de operaciones de factoring:

| Clase | Estado | Color | Uso |
|-------|--------|-------|-----|
| `.status-created` | Creada | Blue | Operación recién creada |
| `.status-processing` | En Proceso | Yellow | En análisis o revisión |
| `.status-negotiated` | Negociada | Purple | Términos negociados |
| `.status-endorsed` | Endosada | Green | Operación aprobada y endosada |
| `.status-rejected` | Rechazada | Red | Operación rechazada |

**Ejemplo de uso:**
```tsx
<Badge className="status-created border">Creada</Badge>
<Badge className="status-processing border">En Proceso</Badge>
<Badge className="status-endorsed border">Endosada</Badge>
<Badge className="status-rejected border">Rechazada</Badge>

// ❌ INCORRECTO - NO usar dark: inline
<Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400">
  Creada
</Badge>
```

---

### **Clases de Componentes UI**

Clases especiales para componentes base del sistema:

#### **Tabs**
```css
.tabs-list-bg          /* Background de TabsList */
.tabs-trigger-inactive /* Tabs inactivos con hover visible */
```

#### **Buttons**
```css
.button-outline        /* Variante outline con contraste */
.button-ghost          /* Variante ghost con hover visible */
.button-destructive    /* Variante destructive con rojo intenso */
```

#### **Avatar**
```css
.avatar-fallback       /* Fallback de Avatar con contraste */
```

#### **Iconos y Badges Especiales**
```css
.icon-info-bg          /* Background para iconos info */
.icon-info             /* Color para iconos info */
.badge-success-small   /* Badge pequeño de éxito */
.bg-showcase           /* Background para showcase/demo */
```

---

## REGLAS DE USO DE DARK MODE

### ✅ **HACER (DO):**
1. Usar SIEMPRE las clases semánticas de `/styles/globals.css`
2. Para colores de texto semánticos: `.text-success`, `.text-warning`, etc.
3. Para alertas: `.alert-success`, `.alert-warning`, etc.
4. Para estados: `.status-created`, `.status-processing`, etc.
5. Especificar color de texto cuando uses `bg-muted`: `bg-muted text-muted-foreground`

### ❌ **NO HACER (DON'T):**
1. ❌ **NUNCA** usar clases `dark:` de Tailwind (no funcionan en este entorno)
2. ❌ **NUNCA** usar `bg-muted` sin especificar color de texto
3. ❌ **NUNCA** usar colores hex hardcoded: `#DEFB49`, `#16a34a`, etc.
4. ❌ **NUNCA** usar colores inline con dark: `text-green-600 dark:text-green-400`

### 📋 **Checklist de Dark Mode:**
- [ ] ¿Usé clases semánticas en lugar de `dark:`?
- [ ] ¿Todos los `bg-muted` tienen color de texto?
- [ ] ¿Los colores funcionan en light Y dark mode?
- [ ] ¿El contraste es WCAG AA compliant (4.5:1)?

---

## ACCESIBILIDAD (WCAG 2.1 AA)
- **Contraste Mínimo**: 4.5:1 para texto normal.
- **Primary Color**: Cumple contraste sobre Secondary.
- **Dark Mode**: Optimizado para reducir fatiga visual (paleta Slate).
- **Clases Semánticas**: Garantizan contraste automáticamente en ambos modos.

## TAILWIND CONFIGURATION
- **Spacing**: Estándar (p-4, gap-6, m-8).
- **Radius**: Configurable via tokens (`--radius`).
- **Variables**: Definidas en `:root` y `.dark`.

⚠️ **REGLA DE ORO**: Nunca usar valores hex hardcoded (ej: `#DEFB49`) en los componentes. Usar siempre clases de utilidad (`bg-primary`, `text-secondary`, `border-muted`) o clases semánticas (`.text-success`, `.alert-warning`, `.status-processing`).