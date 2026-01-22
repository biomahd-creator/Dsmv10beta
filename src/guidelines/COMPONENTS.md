# COMPONENT CATALOG

## 1. SHADCN/UI (OFFICIAL)
Base del sistema. Ubicados en `/components/ui/`.
**Total**: 48 componentes implementados.

- **Actions**: Button, Toggle, Toggle Group.
- **Forms**: Input, Select, Checkbox, Radio, Switch, Slider, Form, Label, Textarea, Input OTP, Input File, Calendar, Date Picker.
- **Navigation**: Tabs, Breadcrumb, Command, Dropdown Menu, Pagination, Menubar, Navigation Menu, Context Menu.
- **Data Display**: Card, Table, Badge, Avatar, Separator, Hover Card, Aspect Ratio.
- **Feedback**: Alert, Alert Dialog, Dialog, Popover, Tooltip, Progress, Sheet, Toast (Sonner), Drawer, Skeleton.
- **Layout**: Accordion, Carousel, Collapsible, Scroll Area, Resizable, Sidebar.

## 2. ATOMIC DESIGN
Componentes jerárquicos en `/components/atomic/`.

- **Atoms**: Elementos indivisibles (Button, Input).
- **Molecules**: SearchBar, StatCard, FormField.
- **Organisms**: NavigationBar, LoginForm, FilterBar.
- **Templates**: DashboardTemplate, AuthTemplate.
- **Pages**: Implementaciones finales.

## 3. COMPOSED PATTERNS
Patrones de UX reutilizables en `/components/patterns/`.
Son composiciones estrictas de componentes shadcn, NO componentes nuevos.
- Login Form
- Stats Dashboard
- Empty State
- Modal Form
- Sidebar Layout

## 4. ADVANCED COMPONENTS
Componentes de alta complejidad en `/components/advanced/`.
- **Charts**: Recharts integration (Line, Bar, Pie).
- **StepIndicator**: Wizard multi-paso con validación.
- **KanbanBoard**: Drag & drop (react-dnd).
- **DateRangePicker**: Selección avanzada de fechas.
- **ColorPicker**: Selector custom.

## 5. ACCESSIBILITY COMPONENTS
Herramientas invisibles en `/components/accessibility/`.
- **SkipLink**: Navegación teclado.
- **LiveRegion**: Anuncios para screen readers.
- **FocusTrap**: Gestión de foco en modales.

🚨 **REGLA CRÍTICA**: Antes de crear un componente:
1. Buscar en shadcn/ui oficial.
2. Buscar en Advanced o Atomic.
3. Buscar en Patterns.
4. Solo si no existe, crear uno nuevo (preferiblemente como Pattern).

## 6. DOCUMENTATION COMPONENTS
Infraestructura para el Design System Manager (DSM).
- **ComponentShowcase**: Plantilla estándar para documentar componentes (Tabs: Preview, Code, Usage, Props).
- **CodeBlock**: Bloque de código con resaltado de sintaxis y botón de copia.
- **PropsTable**: Tabla estandarizada para documentar props de componentes.