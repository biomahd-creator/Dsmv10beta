# 🔍 AUDITORÍA DE DARK MODE - DESIGN SYSTEM MANAGER

**Fecha:** 22 de Enero de 2026  
**Objetivo:** Identificar y documentar problemas de dark mode en todo el sitio

---

## 📋 RESUMEN EJECUTIVO

### Problemas Encontrados:
1. ✅ **RESUELTO**: Tabs inactivos sin hover visible
2. ✅ **RESUELTO**: Botones outline/ghost blancos en dark mode
3. ✅ **RESUELTO**: Avatar con texto blanco sobre blanco
4. ⚠️ **CRÍTICO**: 100+ instancias de clases `dark:` que NO funcionan en Figma Make
   - ✅ **RESUELTO (Fase 1)**: Componentes de Alerta (46+ instancias corregidas)
   - ⚠️ **PENDIENTE**: Componentes de Negocio y Patterns (55+ instancias)
5. ⚠️ **MEDIO**: 50+ instancias de `bg-muted` sin color de texto explícito

---

## 🚨 PROBLEMA CRÍTICO: Clases `dark:` de Tailwind

### ¿Por qué es un problema?
Las clases `dark:` de Tailwind CSS **NO FUNCIONAN** en el entorno de Figma Make. Necesitamos usar clases CSS personalizadas que respondan a `.dark` en el HTML root.

### Archivos Afectados (101+ instancias):

#### **PÁGINAS (Mayor Prioridad)**
| Archivo | Instancias | Severidad |
|---------|-----------|-----------|
| `AlertPage.tsx` | 30+ | 🔴 ALTA |
| `AlertDialogPage.tsx` | 12+ | 🔴 ALTA |
| `MultiStepFormPage.tsx` | 8+ | 🟡 MEDIA |
| `InvoiceUploadPage.tsx` | 2+ | 🟢 BAJA |
| `ProgressPage.tsx` | 2+ | 🟢 BAJA |
| `SidebarShowcasePage.tsx` | 1+ | 🟢 BAJA |

#### **COMPONENTES PATTERNS**
| Archivo | Instancias | Severidad |
|---------|-----------|-----------|
| `AdminPortal.tsx` | 12+ | 🟡 MEDIA |
| `CFDashboard.tsx` | 8+ | 🟡 MEDIA |
| `OperationsList.tsx` | 8+ | 🟡 MEDIA |
| `FactoringCalculator.tsx` | 4+ | 🟡 MEDIA |
| `LiquidityCalculator.tsx` | 6+ | 🟡 MEDIA |
| `ApprovalFlowWizard.tsx` | 4+ | 🟡 MEDIA |
| `CupoValidator.tsx` | 2+ | 🟢 BAJA |
| `OnboardingWizard.tsx` | 4+ | 🟢 BAJA |
| `PaymentForm.tsx` | 1+ | 🟢 BAJA |

#### **COMPONENTES BUSINESS**
| Archivo | Instancias | Severidad |
|---------|-----------|-----------|
| `StatusAlert.tsx` | 4+ | 🔴 ALTA |
| `StatusKPICard.tsx` | 2+ | 🟡 MEDIA |

#### **COMPONENTES ADVANCED**
| Archivo | Instancias | Severidad |
|---------|-----------|-----------|
| `PivotTable.tsx` | 3+ | 🟡 MEDIA |
| `RichTextEditor.tsx` | 1+ | 🟢 BAJA |

#### **SECCIONES**
| Archivo | Instancias | Severidad |
|---------|-----------|-----------|
| `ShadcnOfficialComparison.tsx` | 1+ | 🟢 BAJA |

---

## ⚠️ PROBLEMA MEDIO: bg-muted sin color de texto

### ¿Por qué es un problema?
El uso de `bg-muted` sin especificar `text-muted-foreground` puede causar problemas de contraste en dark mode, similar al bug del Avatar que acabamos de resolver.

### Archivos Afectados (50+ instancias):

#### **Componentes con Riesgo ALTO**
Estos componentes usan `bg-muted` en elementos con texto:
- `FormBuilder.tsx` - Select disabled
- `InvoiceGenerator.tsx` - Input disabled
- `PivotTable.tsx` - TableRow y TableCell
- `AuditLogViewer.tsx` - TableRow alternado
- `StatusKPICard.tsx` - Badges

#### **Componentes con Riesgo MEDIO**
Estos componentes usan `bg-muted` en elementos decorativos pero podrían contener texto:
- `FileUploader.tsx` - Área de drag
- `AnimationsPage.tsx` - Cards de ejemplo
- `HelpCenter.tsx` - Fondo de sección
- `TestimonialsCarousel.tsx` - Indicador de dots

#### **Componentes con Riesgo BAJO**
Estos componentes usan `bg-muted` solo para elementos visuales sin texto:
- `StepIndicator.tsx` - Líneas de progreso
- `ProgressPage.tsx` - Barras de progreso
- `TreeTable.tsx` - Hover background
- `SpacingPreview.tsx` - Hover background

---

## 🎯 PATRONES PROBLEMÁTICOS IDENTIFICADOS

### 1️⃣ **Colores de Texto con `dark:`**
```tsx
// ❌ NO FUNCIONA en Figma Make
className="text-green-600 dark:text-green-400"

// ✅ SOLUCIÓN
// Crear clase CSS personalizada:
.text-success-emphasis {
  color: #16a34a; /* green-600 */
}
.dark .text-success-emphasis {
  color: #4ade80; /* green-400 */
}
```

### 2️⃣ **Fondos con `dark:`**
```tsx
// ❌ NO FUNCIONA
className="bg-green-50 dark:bg-green-900/20"

// ✅ SOLUCIÓN
.bg-success-subtle {
  background-color: #f0fdf4; /* green-50 */
}
.dark .bg-success-subtle {
  background-color: rgba(20, 83, 45, 0.2); /* green-900/20 */
}
```

### 3️⃣ **Borders con `dark:`**
```tsx
// ❌ NO FUNCIONA
className="border-green-200 dark:border-green-800"

// ✅ SOLUCIÓN
.border-success-subtle {
  border-color: #bbf7d0; /* green-200 */
}
.dark .border-success-subtle {
  border-color: #166534; /* green-800 */
}
```

### 4️⃣ **bg-muted sin texto**
```tsx
// ⚠️ RIESGO DE BAJO CONTRASTE
<div className="bg-muted">
  <span>Texto aquí</span>
</div>

// ✅ SOLUCIÓN
<div className="bg-muted text-muted-foreground">
  <span>Texto aquí</span>
</div>
```

---

## 💡 SOLUCIONES IMPLEMENTADAS

### ✅ **Tabs (Resuelto)**
**Archivo:** `/styles/globals.css`
```css
.tabs-trigger-inactive:not([data-state="active"]):hover {
  background-color: rgba(226, 232, 240, 0.5);
  color: #1e293b;
}

.dark .tabs-trigger-inactive:not([data-state="active"]):hover {
  background-color: rgba(71, 85, 105, 0.6);
  color: #e2e8f0;
}
```

### ✅ **Buttons (Resuelto)**
**Archivo:** `/styles/globals.css`
```css
.button-outline:hover {
  background-color: hsl(var(--accent));
  color: hsl(var(--accent-foreground));
}

.dark .button-outline:hover {
  background-color: rgba(51, 65, 85, 0.5);
}
```

### ✅ **Avatar (Resuelto)**
**Archivo:** `/styles/globals.css` + `/components/ui/avatar.tsx`
```css
.avatar-fallback {
  background-color: #f4f4f5;
  color: #52525b;
}

.dark .avatar-fallback {
  background-color: #475569;
  color: #cbd5e1;
}
```

---

## 📝 PLAN DE ACCIÓN RECOMENDADO

### **FASE 1: Componentes de Alerta (ALTA PRIORIDAD)**
1. Crear clases CSS para variantes de color:
   - `.alert-success` / `.alert-info` / `.alert-warning` / `.alert-danger`
   - Aplicar a `AlertPage.tsx`, `AlertDialogPage.tsx`, `StatusAlert.tsx`

### **FASE 2: Componentes de Negocio (MEDIA PRIORIDAD)**
1. Crear clases para colores semánticos:
   - `.text-success-emphasis` / `.text-warning-emphasis` / `.text-info-emphasis`
   - `.bg-success-subtle` / `.bg-warning-subtle` / `.bg-info-subtle`
   - Aplicar a componentes patterns y business

### **FASE 3: Correcciones bg-muted (MEDIA PRIORIDAD)**
1. Auditar cada uso de `bg-muted`
2. Agregar `text-muted-foreground` donde sea necesario
3. Crear variantes específicas si se requieren

### **FASE 4: Páginas y Ejemplos (BAJA PRIORIDAD)**
1. Corregir páginas de showcase
2. Actualizar ejemplos en documentación

---

## 🎨 CLASES CSS SUGERIDAS PARA CREAR

### **Alerts y Notificaciones**
```css
/* Success */
.alert-success { /* bg + border + text */ }
.dark .alert-success { /* dark variant */ }

/* Info */
.alert-info { /* bg + border + text */ }
.dark .alert-info { /* dark variant */ }

/* Warning */
.alert-warning { /* bg + border + text */ }
.dark .alert-warning { /* dark variant */ }

/* Danger */
.alert-danger { /* bg + border + text */ }
.dark .alert-danger { /* dark variant */ }
```

### **Textos Semánticos**
```css
/* Success Text */
.text-success-emphasis { color: #16a34a; }
.dark .text-success-emphasis { color: #4ade80; }

/* Warning Text */
.text-warning-emphasis { color: #ca8a04; }
.dark .text-warning-emphasis { color: #facc15; }

/* Info Text */
.text-info-emphasis { color: #2563eb; }
.dark .text-info-emphasis { color: #60a5fa; }

/* Danger Text */
.text-danger-emphasis { color: #dc2626; }
.dark .text-danger-emphasis { color: #f87171; }
```

### **Fondos Semánticos**
```css
/* Success Background */
.bg-success-subtle { background-color: #f0fdf4; }
.dark .bg-success-subtle { background-color: rgba(20, 83, 45, 0.2); }

/* Warning Background */
.bg-warning-subtle { background-color: #fefce8; }
.dark .bg-warning-subtle { background-color: rgba(113, 63, 18, 0.2); }

/* Info Background */
.bg-info-subtle { background-color: #eff6ff; }
.dark .bg-info-subtle { background-color: rgba(30, 58, 138, 0.2); }

/* Danger Background */
.bg-danger-subtle { background-color: #fef2f2; }
.dark .bg-danger-subtle { background-color: rgba(127, 29, 29, 0.2); }
```

---

## 📊 ESTADÍSTICAS

- **Total de archivos auditados:** 200+
- **Archivos con clases `dark:`:** 21
- **Total de instancias `dark:`:** 101+
- **Archivos con `bg-muted`:** 21
- **Total de instancias `bg-muted`:** 50+
- **Problemas resueltos:** 3 (tabs, buttons, avatar)
- **Problemas pendientes:** 150+

---

## 🔧 HERRAMIENTAS DE AUDITORÍA USADAS

1. `file_search` con patrón `"dark:"` en archivos `.tsx`
2. `file_search` con patrón `"bg-muted"` en archivos `.tsx`
3. Análisis manual de componentes UI base
4. Revisión de estilos en `/styles/globals.css`

---

## ✅ CHECKLIST DE VALIDACIÓN

Para cada corrección de dark mode:
- [ ] Probado en light mode
- [ ] Probado en dark mode
- [ ] Verificar contraste de color (mínimo 4.5:1)
- [ ] Sin uso de clases `dark:` de Tailwind
- [ ] Usar clases CSS personalizadas `.dark .selector`
- [ ] Documentar en este reporte

---

**Próximos pasos:** ¿Deseas que proceda con la Fase 2 (Componentes de Negocio)?

---

## ✅ FASE 1 COMPLETADA - COMPONENTES DE ALERTA

**Fecha de Completado:** 22 de Enero de 2026

### **Archivos Actualizados:**

#### **1. `/styles/globals.css`**
Creadas clases CSS personalizadas para alertas semánticas:
- ✅ `.alert-success` / `.alert-success-icon` / `.alert-success-text`
- ✅ `.alert-info` / `.alert-info-icon` / `.alert-info-text`
- ✅ `.alert-warning` / `.alert-warning-icon` / `.alert-warning-text`
- ✅ `.alert-danger` / `.alert-danger-icon` / `.alert-danger-text`
- ✅ `.button-destructive` (para AlertDialog)

**Total de líneas CSS agregadas:** ~130 líneas

#### **2. `/components/business/StatusAlert.tsx`**
**Instancias corregidas:** 4
- ❌ Removidas: `text-green-700 dark:text-green-400`
- ✅ Aplicadas: `alert-success-text`
- ❌ Removidas: `text-yellow-700 dark:text-yellow-400`
- ✅ Aplicadas: `alert-warning-text`
- ❌ Removidas: `text-blue-700 dark:text-blue-400`
- ✅ Aplicadas: `alert-info-text`
- ❌ Removidas: `text-red-700 dark:text-red-400`
- ✅ Aplicadas: `alert-danger-text`

#### **3. `/components/pages/AlertPage.tsx`**
**Instancias corregidas:** 30+
- ✅ Sección "Con Diferentes Iconos" - 12 instancias
- ✅ Sección "Casos de Uso en Factoring" - 18 instancias
- ❌ Removidas todas las clases: `dark:text-green-400`, `dark:text-blue-400`, `dark:text-yellow-400`, `dark:bg-green-500/20`, etc.
- ✅ Aplicadas: `alert-success`, `alert-info`, `alert-warning`, `alert-success-icon`, `alert-info-icon`, `alert-warning-icon`, `alert-success-text`, `alert-info-text`, `alert-warning-text`

#### **4. `/components/pages/AlertDialogPage.tsx`**
**Instancias corregidas:** 12+
- ✅ Warning Alert - 2 instancias
- ✅ Info Alert - 2 instancias
- ✅ Delete Item - 2 instancias
- ✅ Botones destructivos - 6 instancias
- ❌ Removidas: `text-yellow-600 dark:text-yellow-400`, `text-blue-600 dark:text-blue-400`, `text-red-600 dark:text-red-400`, `bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800`
- ✅ Aplicadas: `alert-warning-icon`, `alert-info-icon`, `alert-danger-icon`, `button-destructive`

### **Resumen de la Fase 1:**
- ✅ **46+ instancias de `dark:` eliminadas**
- ✅ **4 archivos actualizados**
- ✅ **130+ líneas de CSS personalizadas creadas**
- ✅ **3 componentes de alerta completamente funcionales en dark mode**
- ✅ **0 clases `dark:` de Tailwind en componentes de alerta**

### **Beneficios Logrados:**
1. ✅ Alertas semánticas funcionan correctamente en light y dark mode
2. ✅ Código más mantenible con clases reutilizables
3. ✅ Consistencia visual en todo el sistema
4. ✅ Reducción de 46+ instancias de código problemático
5. ✅ Base sólida para Fase 2 (Componentes de Negocio)