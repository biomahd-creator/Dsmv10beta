# 📚 Documentación Completa

### Guidelines
- **[Guidelines.md](./guidelines/Guidelines.md)** - Índice maestro del sistema de diseño
- **[CORE.md](./guidelines/CORE.md)** - Stack tecnológico y arquitectura
- **[TOKENS.md](./guidelines/TOKENS.md)** - Design tokens y sistema de colores
- **[COMPONENTS.md](./guidelines/COMPONENTS.md)** - Catálogo de 48 componentes
- **[EXAMPLES.md](./guidelines/EXAMPLES.md)** - Ejemplos de código y best practices
- **[PROMPT_GUIDE.md](./guidelines/PROMPT_GUIDE.md)** - Guía para generación con IA
- **[UXWRITING.md](./guidelines/UXWRITING.md)** - Redacción UX en español (LATAM)

### Arquitectura
- **[ATOMIC_DESIGN_ARCHITECTURE.md](./components/atomic/ATOMIC_DESIGN_ARCHITECTURE.md)** - Sistema Atomic Design
- **[BUSINESS_COMPONENTS_ARCHITECTURE.md](./components/business/BUSINESS_COMPONENTS_ARCHITECTURE.md)** - Componentes de negocio

### Auditorías y Reportes
- **[AUDITORIA_2026.md](./AUDITORIA_2026.md)** - Auditoría completa del proyecto
- **[AUDITORIA_GUIDELINES_2026.md](./AUDITORIA_GUIDELINES_2026.md)** - Auditoría de guidelines

### Exportación y Distribución
- **[EXPORT_SYSTEM_GUIDE.md](./EXPORT_SYSTEM_GUIDE.md)** - Guía completa para exportar como paquete NPM
- **[NPM_SETUP_GUIDE.md](./NPM_SETUP_GUIDE.md)** - Tutorial detallado paso a paso para NPM
- **[QUICK_START.md](./QUICK_START.md)** - ⚡ Publicar en NPM en 5 minutos

---

## ⚠️ ANTES DE HACER CAMBIOS - LEER PRIMERO

### Documentación Crítica por Módulo:

| Módulo | Documento | ¿Cuándo leerlo? |
|--------|-----------|-----------------| 
| **DSM Principal** | [`/DSM_ARCHITECTURE.md`](/DSM_ARCHITECTURE.md) | Antes de modificar App.tsx, SidebarNew.tsx o PageRenderer.tsx |
| **Atomic Design** | [`/components/atomic/ATOMIC_DESIGN_ARCHITECTURE.md`](/components/atomic/ATOMIC_DESIGN_ARCHITECTURE.md) | Antes de crear/modificar componentes atómicos |
| **Business Components** | [`/components/business/BUSINESS_COMPONENTS_ARCHITECTURE.md`](/components/business/BUSINESS_COMPONENTS_ARCHITECTURE.md) | Antes de crear Business Patterns o Modules |

---

## 📁 ESTRUCTURA DEL PROYECTO

```
/
├── App.tsx                          # ⚠️ CORE - Router principal (DSM/Factoring)
├── DSM_ARCHITECTURE.md              # 📖 Arquitectura completa del DSM
├── README.md                        # 📖 Este archivo
├── Guidelines.md                    # 📖 Guía oficial del sistema (PROVIDED BY USER)
│
├── /components/
│   ├── SidebarNew.tsx               # ⚠️ CRITICAL - Navegación principal
│   ├── PageRenderer.tsx             # ⚠️ CRITICAL - Enrutador de páginas (107+ casos)
│   │
│   ├── /pages/                      # 80+ páginas de componentes
│   ├── /ui/                         # 43 componentes shadcn/ui
│   │
│   ├── /atomic/                     # Sistema de Atomic Design
│   │   ├── ATOMIC_DESIGN_ARCHITECTURE.md
│   │   ├── /molecules/
│   │   ├── /organisms/
│   │   ├── /templates/
│   │   └── /pages/
│   │
│   ├── /business/                   # Business Patterns
│   │   ├── BUSINESS_COMPONENTS_ARCHITECTURE.md
│   │   └── StatusKPICard.tsx
│   │
│   └─ /accessibility/              # Componentes WCAG
│
└── /styles/
    └── globals.css                  # Tokens, tipografía Satoshi, temas
```

---

## 🚀 INICIO RÁPIDO

### 1. Instalación

```bash
npm install
# o
yarn install
```

### 2. Desarrollo

```bash
npm run dev
# o
yarn dev
```

### 3. Navegar por el DSM

- **Inicio:** Dashboard principal con métricas
- **Sidebar:** 10 categorías de componentes
- **Buscar:** Input de búsqueda en el sidebar
- **Business Modules:** Aplicaciones completas (Factoring, Onboarding, etc.)

---

## 📊 COMPONENTES DEL SISTEMA

### Por Categoría:

| Categoría | Count | Ubicación |
|-----------|-------|-----------|
| **shadcn/ui base** | 43 | `/components/ui/` |
| **Páginas DSM** | 80+ | `/components/pages/` |
| **Atomic Design** | 23 | `/components/atomic/` |
| **Business Patterns** | 10+ | `/components/business/` + `/components/pages/` |
| **Accesibilidad** | 3 | `/components/accessibility/` |
| **TOTAL** | **160+** | - |

### Por Tipo:

- ✅ **Actions** (3): Button, Toggle, Toggle Group
- ✅ **Forms** (18): Input, Select, Checkbox, Radio, Calendar, etc.
- ✅ **Navigation** (9): Tabs, Breadcrumb, Command, Dropdown, etc.
- ✅ **Data Display** (6): Card, Table, Badge, Avatar, etc.
- ✅ **Feedback** (11): Alert, Dialog, Toast, Tooltip, Progress, etc.
- ✅ **Layout** (6): Accordion, Carousel, Collapsible, Scroll Area, etc.
- ✅ **Business Patterns** (13): Invoice Generator, Multi-Step Wizard, etc.
- ✅ **Business Modules** (11): Factoring App, Approval Flow, etc.
- ✅ **Atomic Design** (5 niveles): Atoms, Molecules, Organisms, Templates, Pages
- ✅ **Advanced** (12): Charts, Kanban, File Uploader, Data Table, etc.

**Total: 107+ PageIds documentados** ✅

---

## 🗺️ FLUJO DE NAVEGACIÓN

```
Usuario → Sidebar (SidebarNew.tsx)
            ↓
        onPageChange(pageId)
            ↓
        App.tsx actualiza activePage
            ↓
        PageRenderer recibe pageId
            ↓
        Switch statement → Componente
            ↓
        Pantalla renderizada
```

**Ver detalles completos:** [`/DSM_ARCHITECTURE.md`](/DSM_ARCHITECTURE.md)

---

## 🚨 REGLAS CRÍTICAS (NO ROMPER)

### ❌ NUNCA:

1. **Eliminar un PageId sin buscar referencias** (Ctrl+F en proyecto)
2. **Modificar App.tsx sin leer** [`/DSM_ARCHITECTURE.md`](/DSM_ARCHITECTURE.md)
3. **Cambiar SidebarNew.tsx sin actualizar** PageRenderer.tsx
4. **Eliminar imports en PageRenderer.tsx** sin eliminar el caso del switch
5. **Crear Business Pattern** que no sea reutilizable

### ✅ SIEMPRE:

1. **Leer la documentación** del módulo antes de modificarlo
2. **Usar el checklist** correspondiente (en cada ARCHITECTURE.md)
3. **Actualizar la documentación** después de cambios (sección Historial)
4. **Probar navegación completa** después de cambios críticos
5. **Seguir la jerarquía** de Atomic Design al crear componentes

---

## 📖 GUÍAS Y DOCUMENTACIÓN

### Arquitectura por Módulo:

1. **[DSM_ARCHITECTURE.md](/DSM_ARCHITECTURE.md)** - Arquitectura completa del DSM
   - App.tsx, SidebarNew.tsx, PageRenderer.tsx
   - 107+ PageIds documentados
   - Flujos de navegación
   - Debugging común

2. **[ATOMIC_DESIGN_ARCHITECTURE.md](/components/atomic/ATOMIC_DESIGN_ARCHITECTURE.md)** - Sistema Atomic Design
   - 5 niveles jerárquicos
   - 23 componentes documentados
   - Metodología Brad Frost
   - Reglas de composición

3. **[BUSINESS_COMPONENTS_ARCHITECTURE.md](/components/business/BUSINESS_COMPONENTS_ARCHITECTURE.md)** - Business Components
   - 10 Business Patterns
   - 11 Business Modules
   - Diferencias Pattern vs Module
   - Ejemplos de uso

### Guías Generales:

- **[Guidelines.md](/Guidelines.md)** - Guía oficial del sistema (PROVIDED BY USER)
- **[DSM_IMPLEMENTATION_GUIDE.md](/DSM_IMPLEMENTATION_GUIDE.md)** - Guía de implementación
- **[LINK_VERIFICATION.md](/LINK_VERIFICATION.md)** - Verificación de enlaces

---

## 🔧 AGREGAR NUEVOS COMPONENTES

### Para agregar un componente shadcn/ui:

```bash
npx shadcn-ui@latest add [component-name]
```

### Para agregar una página DSM:

1. Crear archivo en `/components/pages/NombrePage.tsx`
2. Exportar en `/components/pages/index.tsx`
3. Agregar PageId en `SidebarNew.tsx` (type PageId)
4. Agregar import en `PageRenderer.tsx`
5. Agregar caso en switch de `PageRenderer.tsx`
6. Agregar item en `menuSections` de `SidebarNew.tsx`
7. Actualizar `/DSM_ARCHITECTURE.md` (tabla de PageIds)

### Para agregar un Business Pattern:

1. Identificar si es Pattern (componente) o Module (app completa)
2. Crear en `/components/business/` o `/components/pages/`
3. Seguir guía de "Para agregar una página DSM" (si es página)
4. Documentar en `/components/business/BUSINESS_COMPONENTS_ARCHITECTURE.md`

### Para agregar un componente Atomic:

1. Identificar nivel: Molécula, Organismo, Template o Page
2. Crear en `/components/atomic/[nivel]/NombreComponente.tsx`
3. Respetar jerarquía de composición
4. Documentar en `/components/atomic/ATOMIC_DESIGN_ARCHITECTURE.md`

**Ver guías detalladas en cada ARCHITECTURE.md**

---

## 🐛 TROUBLESHOOTING

### "Página no se muestra"

1. ¿PageId existe en `SidebarNew.tsx` (type PageId)?
2. ¿Hay caso en `PageRenderer.tsx` switch?
3. ¿Import del componente está correcto?
4. ¿Componente existe en `/components/pages/`?

**Ver más:** [`/DSM_ARCHITECTURE.md`](/DSM_ARCHITECTURE.md) sección "DEBUGGING COMÚN"

### "Se perdió una funcionalidad"

1. Revisar historial de cambios en ARCHITECTURE.md
2. Buscar PageId faltante en `SidebarNew.tsx`
3. Restaurar caso en `PageRenderer.tsx`
4. Restaurar botón en sidebar

**Ver más:** [`/DSM_ARCHITECTURE.md`](/DSM_ARCHITECTURE.md) sección "DEBUGGING COMÚN"

### "No sé si es Pattern o Module"

- ¿Un solo componente reutilizable? → **Business Pattern**
- ¿App con navegación interna? → **Business Module**

**Ver más:** [`/components/business/BUSINESS_COMPONENTS_ARCHITECTURE.md`](/components/business/BUSINESS_COMPONENTS_ARCHITECTURE.md)

---

## ✅ CHECKLIST ANTES DE CAMBIOS

### Para modificar archivos core (App, SidebarNew, PageRenderer):

- [ ] Leí la documentación correspondiente (15-20 min)
- [ ] Identifiqué qué archivos voy a modificar
- [ ] Busqué todas las referencias con Ctrl+F
- [ ] Verifiqué dependencias entre archivos
- [ ] Tengo un plan de rollback si algo falla

### Para agregar/eliminar PageId:

- [ ] Actualicé type PageId en SidebarNew.tsx
- [ ] Actualicé PageRenderer.tsx (import + case)
- [ ] Actualicé menuSections en SidebarNew.tsx
- [ ] Actualicé DSM_ARCHITECTURE.md (tabla de PageIds)
- [ ] Probé la navegación manualmente

### Para modificar Business Module:

- [ ] Leí ARCHITECTURE.md del módulo
- [ ] Verifiqué tabla de vistas/flujos
- [ ] Busqué referencias en el código
- [ ] Actualicé el historial de cambios
- [ ] Probé todos los flujos afectados

---

## 📊 MÉTRICAS DEL PROYECTO

### Componentes:
- **Total:** 170+ componentes
- **shadcn/ui:** 48 componentes base
- **DSM Pages:** 70 páginas documentadas con gold standard (100% completado) ✅
- **Atomic Design:** 23 componentes jerárquicos
- **Business:** 21+ patterns y modules

### Navegación:
- **PageIds:** 107+ identificadores únicos
- **Categorías:** 10 secciones en sidebar
- **Enlaces:** 107+ enlaces verificados (100% funcionales)

### Documentación:
- **Componentes documentados:** 70/70 (100%) ✅
- **Props documentadas:** 350+
- **Casos de uso:** 420+ (mínimo 6 por componente)
- **Mejores prácticas:** 560+ (mínimo 8 por componente)
- **Gold Standard aplicado:** 100% en todos los componentes

### Accesibilidad:
- **WCAG 2.1:** Nivel AA (98% cumplimiento)
- **Contraste:** Todos los elementos cumplen AA mínimo
- **Navegación por teclado:** Completamente funcional
- **Screen readers:** Compatible con ARIA labels

---

## 🎨 STACK TECNOLÓGICO

- **React:** 18.x
- **Tailwind CSS:** 4.0
- **shadcn/ui:** Componentes base
- **Radix UI:** Primitivos accesibles
- **Lucide React:** Iconos
- **Recharts:** Gráficos
- **Tipografía:** Satoshi (única fuente permitida - NO usar otras fuentes)
- **Tema:** Dark/Light mode con ThemeProvider
- **Color Primario:** #84cc16 (verde lima - accesibilidad WCAG AA)

---

## ⚠️ REGLAS DE TIPOGRAFÍA

### Fuente Única: Satoshi

**OBLIGATORIO:**
- ✅ Usar SOLO la fuente Satoshi en todo el sistema
- ✅ Satoshi está configurada en `/styles/globals.css`
- ✅ Se aplica automáticamente a todos los elementos

**PROHIBIDO:**
- ❌ NO usar ninguna otra fuente (Inter, Roboto, Arial, etc.)
- ❌ NO agregar imports de otras fuentes
- ❌ NO usar `font-family` inline o en CSS custom

**Configuración Actual:**
```css
body {
  font-family: 'Satoshi', sans-serif;
}
```

**Si necesitas especificar fuente en código:**
```typescript
// ✅ CORRECTO
font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, sans-serif;

// ❌ INCORRECTO
font-family: 'Inter', sans-serif;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

**Ver documentación completa de tipografía:** `/styles/globals.css` (líneas 158-191)

---

## 🔗 LINKS ÚTILES

### Documentación Interna:
- [DSM Architecture](/DSM_ARCHITECTURE.md) - Arquitectura completa
- [Atomic Design Architecture](/components/atomic/ATOMIC_DESIGN_ARCHITECTURE.md) - Sistema atómico
- [Business Components Architecture](/components/business/BUSINESS_COMPONENTS_ARCHITECTURE.md) - Componentes de negocio

### Guías Rápidas:
- (ninguna guía rápida adicional por ahora)

### Documentación Externa:
- [shadcn/ui](https://ui.shadcn.com/) - Componentes base
- [Radix UI](https://www.radix-ui.com/) - Primitivos
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/) - Guía de accesibilidad

---

## 🆘 SOPORTE

### Si necesitas ayuda:

1. **Lee la documentación** del módulo correspondiente
2. **Usa el checklist** antes de hacer cambios
3. **Verifica los flujos** de navegación documentados
4. **Consulta la sección de debugging** en cada ARCHITECTURE.md
5. **Revisa el historial de cambios** para contexto

### Si algo se rompió:

1. Consulta sección "DEBUGGING COMÚN" en ARCHITECTURE.md
2. Verifica dependencias entre archivos
3. Revisa historial de cambios para restaurar
4. Usa Git para ver qué cambió

---

## 📝 CONTRIBUIR

### Workflow recomendado:

1. **Crear rama** para tu feature/fix
2. **Leer documentación** del módulo que vas a modificar
3. **Hacer cambios** siguiendo las reglas
4. **Actualizar documentación** (sección Historial)
5. **Probar exhaustivamente** los flujos afectados
6. **Commit con mensaje descriptivo**
7. **Pull request** con descripción detallada

---

## 📅 HISTORIAL DE CAMBIOS GLOBAL

### 2026-01-22
- ✅ **Completada documentación al 100%** - 70/70 componentes documentados con gold standard
- ✅ **Auditoría completa del proyecto** - estructura, duplicados, redundancias
- ✅ **Limpieza de archivos obsoletos** - eliminados 4 archivos MD de sprint temporales
- ✅ **README actualizado** - métricas finales y estado 100% completado
- ✅ **Creado AUDITORIA_2026.md** - reporte completo de salud del proyecto

### 2025-01-12
- ✅ Creada documentación completa de arquitectura (4 documentos)
- ✅ Agregados comentarios protectores en archivos críticos
- ✅ Restaurado proceso de Vinculación en Factoring App
- ✅ Creado sistema de prevención de cambios destructivos

### 2025-01-XX (Anterior)
- Sistema completo de DSM implementado
- 110+ componentes creados
- Atomic Design implementado
- Business Modules agregados
- WCAG AA alcanzado (98%)

---

## 📜 LICENCIA

Este proyecto está construido con tecnologías open source:
- React (MIT)
- Tailwind CSS (MIT)
- shadcn/ui (MIT)
- Radix UI (MIT)

---

**¿Listo para empezar?**  
👉 Lee [`/DSM_ARCHITECTURE.md`](/DSM_ARCHITECTURE.md) para entender el sistema completo.

**¡Happy coding!** 🚀