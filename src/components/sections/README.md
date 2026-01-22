# 📂 Sections - Agrupaciones de Navegación

## Propósito

Esta carpeta contiene componentes de **agrupación visual** para el sistema de navegación del DSM. No son componentes reutilizables de UI, sino **vistas de organización** que agrupan múltiples componentes relacionados para su presentación en el showcase.

## Diferencia con otras carpetas

| Carpeta | Propósito | Reutilizable |
|---------|-----------|--------------|
| `/ui/` | Componentes base de shadcn/ui | ✅ Sí |
| `/patterns/` | Patterns compuestos de negocio | ✅ Sí |
| `/pages/` | Páginas individuales de componentes | ❌ No (showcase) |
| **`/sections/`** | **Agrupaciones visuales de navegación** | **❌ No (navegación)** |

## Componentes en esta carpeta

Cada archivo representa una **sección temática** del sidebar de navegación:

### 📋 Lista de Sections

1. **ActionsSection.tsx** - Agrupación de componentes de acción (Button, Toggle, etc.)
2. **AdvancedComponentsSection.tsx** - Componentes avanzados (Charts, DataTable, etc.)
3. **AtomicDesignSection.tsx** - Vista del sistema de Atomic Design
4. **ComposedPatternsSection.tsx** - Patterns compuestos de negocio
5. **DataDisplaySection.tsx** - Componentes de visualización de datos (Card, Table, Badge, etc.)
6. **FeedbackSection.tsx** - Componentes de feedback (Alert, Dialog, Toast, etc.)
7. **FormsSection.tsx** - Componentes de formularios (Input, Select, Checkbox, etc.)
8. **LayoutSection.tsx** - Componentes de layout (Accordion, Carousel, etc.)
9. **NavigationSection.tsx** - Componentes de navegación (Tabs, Breadcrumb, etc.)
10. **ShadcnOfficialComparison.tsx** - Comparación con componentes oficiales de shadcn/ui

## Cuándo usar esta carpeta

### ✅ SÍ usar `/sections/` cuando:
- Necesitas crear una **vista de múltiples componentes agrupados** para navegación
- Quieres organizar el sidebar por categorías temáticas
- Estás creando una **página de overview** de una familia de componentes

### ❌ NO usar `/sections/` cuando:
- Estás creando un componente reutilizable → Usa `/ui/` o `/patterns/`
- Estás creando una página individual de componente → Usa `/pages/`
- Estás creando un componente de negocio → Usa `/business/`

## Estructura típica de un Section

```tsx
// components/sections/ExampleSection.tsx
import { ComponentA } from "../pages/ComponentAPage";
import { ComponentB } from "../pages/ComponentBPage";
import { ComponentC } from "../pages/ComponentCPage";

export function ExampleSection() {
  return (
    <div className="space-y-8">
      <div>
        <h2>Categoría de Componentes</h2>
        <p>Descripción de la categoría...</p>
      </div>
      
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
  );
}
```

## Relación con SidebarNew.tsx

Los **sections** NO están vinculados directamente al sidebar actual. El sidebar utiliza `PageId` para navegar a páginas individuales de componentes (`/pages/`).

Históricamente, estas sections se usaron para agrupar componentes en vistas de categoría, pero el sistema ha evolucionado hacia navegación individual por componente.

## Migración futura (Opcional)

Si en el futuro se desea simplificar la navegación:

1. **Opción A - Eliminar sections**: Si solo se usa navegación individual
2. **Opción B - Usar sections como vistas de categoría**: Crear páginas tipo "Ver todos los Forms"
3. **Opción C - Renombrar a `/category-views/`**: Para mayor claridad

## Notas importantes

- ⚠️ **No confundir con patterns**: Los patterns son componentes reutilizables, las sections son vistas de agrupación
- ⚠️ **No son páginas del PageRenderer**: PageRenderer usa `/pages/`, no `/sections/`
- ✅ **Son vistas de organización**: Solo para agrupar componentes relacionados visualmente

---

**Última actualización:** Enero 2026  
**Versión DSM:** 5.9.3  
**Relacionado con:** [CORE.md](../../guidelines/CORE.md), [COMPONENTS.md](../../guidelines/COMPONENTS.md)
