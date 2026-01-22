# PROMPT GUIDE FOR AI GENERATION

## ESTRATEGIA DE PROMPTS
Para obtener los mejores resultados de la IA, utiliza esta estructura de prompt:

1.  **Rol**: "Actúa como un desarrollador experto en React + Tailwind + shadcn/ui."
2.  **Contexto**: Referencia los archivos `CORE.md`, `TOKENS.md` y `COMPONENTS.md`.
3.  **Tarea**: Describe la pantalla o componente a crear.
4.  **Restricciones**: Lista las prohibiciones (Next.js, estilos inline, dark: classes, etc.).

## CHECKLIST DE GENERACIÓN
Antes de pedir código, verifica:
- [ ] ¿El componente ya existe en `COMPONENTS.md`?
- [ ] ¿Es una página completa o un fragmento?
- [ ] ¿Requiere estado complejo o backend (Supabase)?
- [ ] ¿Usaste clases semánticas en lugar de `dark:`?
- [ ] ¿Especificaste color de texto con `bg-muted`?

---

## 🌗 **REGLAS CRÍTICAS DE DARK MODE**

### ⚠️ **NUNCA USAR CLASES `dark:` DE TAILWIND**
Las clases `dark:` de Tailwind **NO FUNCIONAN** en este entorno. Siempre usar clases semánticas de `/styles/globals.css`.

### ✅ **USAR CLASES SEMÁNTICAS**

#### **Para Colores de Texto:**
```tsx
// ❌ INCORRECTO
<span className="text-green-600 dark:text-green-400">+15%</span>

// ✅ CORRECTO
<span className="text-success">+15%</span>
```

**Clases disponibles:**
- `.text-success` → Verde (valores positivos)
- `.text-warning` → Amarillo (advertencias)
- `.text-info` → Azul (información)
- `.text-danger` → Rojo (errores)
- `.text-orange` → Naranja (en proceso)
- `.text-purple` → Púrpura (estados especiales)

#### **Para Alertas:**
```tsx
// ❌ INCORRECTO
<Alert className="bg-green-50 dark:bg-green-900/20">...</Alert>

// ✅ CORRECTO
<Alert className="alert-success border">
  <AlertCircle className="h-4 w-4 alert-success-icon" />
  <AlertDescription className="alert-success-text">...</AlertDescription>
</Alert>
```

**Variantes:** `.alert-success`, `.alert-warning`, `.alert-info`, `.alert-danger`

#### **Para Estados de Operaciones:**
```tsx
// ❌ INCORRECTO
<Badge className="bg-blue-500/10 text-blue-600 dark:text-blue-400">Creada</Badge>

// ✅ CORRECTO
<Badge className="status-created border">Creada</Badge>
<Badge className="status-processing border">En Proceso</Badge>
<Badge className="status-endorsed border">Endosada</Badge>
```

#### **Para Elementos con bg-muted:**
```tsx
// ❌ INCORRECTO (falta color de texto)
<div className="bg-muted">...</div>

// ✅ CORRECTO (siempre especificar color de texto)
<div className="bg-muted text-muted-foreground">...</div>
```

### 📋 **Checklist de Dark Mode (OBLIGATORIO):**
- [ ] ¿Usé `.text-success`, `.text-warning`, etc. en lugar de `dark:`?
- [ ] ¿Usé `.alert-success`, `.alert-warning`, etc. para alertas?
- [ ] ¿Usé `.status-created`, `.status-processing`, etc. para badges?
- [ ] ¿Todos los `bg-muted` tienen `text-muted-foreground`?
- [ ] ¿NO usé ninguna clase `dark:` de Tailwind?

---

## PLANTILLA DE PROMPT "CREAR PANTALLA"

> "Genera una pantalla de 'Dashboard de Ventas' usando el sistema de diseño actual.
>
> REQUISITOS:
> - Usa el componente `SidebarNew` para el layout.
> - Usa `StatsDashboard` pattern para los KPIs superiores.
> - Usa `Chart` (recharts) para una gráfica de ventas mensual.
> - Usa `Table` de shadcn para los últimos pedidos.
> - Estilos: Usa tokens de `TOKENS.md` (Primary: Lime, Secondary: Dark Blue).
> - Tipografía: Satoshi (clases `font-sans`).
>
> REGLAS DE DARK MODE:
> - ❌ NO uses clases `dark:` de Tailwind (no funcionan).
> - ✅ USA clases semánticas: `.text-success`, `.text-warning`, `.text-info`, `.text-danger`.
> - ✅ Para alertas: `.alert-success`, `.alert-warning`, `.alert-info`, `.alert-danger`.
> - ✅ Para badges: `.status-created`, `.status-processing`, `.status-endorsed`.
> - ✅ Con `bg-muted` siempre usa `text-muted-foreground`.
>
> REGLAS GENERALES:
> - No uses estilos inline.
> - No inventes colores hex.
> - Usa componentes de `/components/ui`."

---

## PLANTILLA DE PROMPT "CREAR COMPONENTE DE NEGOCIO"

> "Crea un componente 'KPICard' para mostrar métricas financieras.
>
> REQUISITOS:
> - Usar `Card`, `CardHeader`, `CardContent` de shadcn.
> - Mostrar: título, valor numérico grande, porcentaje de cambio, icono.
> - Props: `title`, `value`, `change` (positivo/negativo), `icon`.
>
> DARK MODE (CRÍTICO):
> - ❌ NO usar `text-green-600 dark:text-green-400`.
> - ✅ USA `.text-success` para cambios positivos.
> - ✅ USA `.text-danger` para cambios negativos.
> - ✅ USA `.text-info` para valores neutros.
>
> EJEMPLO:
> ```tsx
> <p className=\"text-3xl font-bold text-success\">
>   {formatCurrency(value)}
> </p>
> <span className=\"text-sm text-success\">+{change}%</span>
> ```"

---

## PLANTILLA DE PROMPT "CREAR TABLA CON ESTADOS"

> "Crea una tabla de operaciones con estados visuales.
>
> REQUISITOS:
> - Usar `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableCell` de shadcn.
> - Columnas: ID, Cliente, Monto, Estado, Fecha.
> - Estados: Creada, En Proceso, Negociada, Endosada, Rechazada.
>
> DARK MODE (CRÍTICO):
> - ❌ NO crear función que retorne clases `dark:`.
> - ✅ USA clases de estado: `.status-created`, `.status-processing`, etc.
>
> FUNCIÓN DE COLOR:
> ```tsx
> const getStatusColor = (status: string) => {
>   const colors = {
>     Creada: \"status-created border\",
>     \"En Proceso\": \"status-processing border\",
>     Negociada: \"status-negotiated border\",
>     Endosada: \"status-endorsed border\",
>     Rechazada: \"status-rejected border\",
>   };
>   return colors[status] || \"\";
> };
> ```
>
> USO:
> ```tsx
> <Badge className={getStatusColor(operation.status)}>
>   {operation.status}
> </Badge>
> ```"

---

## FORMATO DE SALIDA ESPERADO
La IA debe entregar:
1. Imports correctos (`from "@/components/ui/..."`).
2. Componente funcional exportado por defecto.
3. Uso de `PageRenderer` si es una página nueva para añadir al routing.
4. **SIN CLASES `dark:`** - Solo clases semánticas de `/styles/globals.css`.

---

## PROHIBICIONES ESTRICTAS (RECORDATORIO)
- ❌ No Next.js / App Router.
- ❌ No CSS Modules / Styled Components.
- ❌ No crear componentes UI base nuevos (usar shadcn).
- ❌ **NO usar clases `dark:` de Tailwind (no funcionan en este entorno)**.
- ❌ NO usar `bg-muted` sin especificar color de texto.
- ❌ NO usar colores hex hardcoded (#16a34a, #DEFB49, etc.).

---

## ✅ BUENAS PRÁCTICAS OBLIGATORIAS

### **1. Colores Semánticos**
```tsx
// ✅ CORRECTO
<div className="text-success">Aprobado</div>
<div className="text-warning">Pendiente</div>
<div className="text-danger">Rechazado</div>
```

### **2. Alertas Consistentes**
```tsx
// ✅ CORRECTO
<Alert className="alert-success border">
  <AlertCircle className="h-4 w-4 alert-success-icon" />
  <AlertDescription className="alert-success-text">
    Mensaje de éxito
  </AlertDescription>
</Alert>
```

### **3. Estados con Badges**
```tsx
// ✅ CORRECTO
<Badge className="status-processing border">En Proceso</Badge>
```

### **4. Funciones de Color**
```tsx
// ✅ CORRECTO
const getScoreColor = (score: number) => {
  if (score >= 80) return 'text-success';
  if (score >= 60) return 'text-warning';
  return 'text-danger';
};
```

---

## 📚 REFERENCIAS OBLIGATORIAS

Antes de generar código, consultar:
1. `/guidelines/TOKENS.md` - Clases semánticas disponibles
2. `/guidelines/EXAMPLES.md` - Ejemplos correctos de dark mode
3. `/guidelines/COMPONENTS.md` - Componentes disponibles
4. `/DARK_MODE_AUDIT_COMPLETE_FINAL.md` - Guía completa de dark mode