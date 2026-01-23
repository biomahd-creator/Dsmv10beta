# COMPONENT CATALOG

## 1. SHADCN/UI (OFFICIAL)
Base del sistema. Ubicados en `/components/ui/`.
**Total**: 51 componentes implementados.

- **Actions**: Button, Toggle, Toggle Group.
- **Forms**: Input, Input File, Input OTP, Textarea, Textarea Autoresize, Select, Multi-Select, Checkbox, Radio Group, Switch, Slider, Form, Label, Calendar, Date Range Picker, Command.
- **Navigation**: Tabs, Breadcrumb, Dropdown Menu, Context Menu, Menubar, Navigation Menu, Pagination, Sidebar, Sheet.
- **Data Display**: Card, Table, Badge, Avatar, Separator, Hover Card, Aspect Ratio, Chart.
- **Feedback**: Alert, Alert Dialog, Dialog, Popover, Tooltip, Progress, Toast (Vanilla), Toast (Sonner), Toaster, Drawer, Skeleton.
- **Layout**: Accordion, Carousel, Collapsible, Scroll Area, Resizable.
- **Utility**: Icon Grid, Code Block, Component Showcase, Grid Showcase, use-mobile, use-toast, utils.

## 2. ATOMIC DESIGN
Componentes jerárquicos en `/components/atomic/`.
**Total**: 18 componentes.

- **Molecules** (6): ActionButton, FilterChip, FormField, SearchBar, StatCard, TimelineItem.
- **Organisms** (5): FilterBar, InvoiceTable, LoginForm, NavigationBar, StatsGrid.
- **Templates** (3): AuthTemplate, DashboardTemplate, ListPageTemplate.
- **Pages** (4): DashboardPage, FactoringSelectionPage, InvoiceListPage, LoginPage.

## 3. COMPOSED PATTERNS
Patrones de UX reutilizables en `/components/patterns/`.
**Total**: 29 patrones implementados.

### Dashboard & Metrics (3)
- CFDashboard
- FactoringDashboard
- StatsDashboard

### Wizards & Flows (4)
- ApprovalFlowWizard
- MultiStepWizard
- OnboardingWizard
- ApprovalTimeline

### Data Operations (4)
- DataTableAdvanced
- EditableTable
- OperationsList
- AdvancedFilterPanel

### Business Logic (5)
- FactoringCalculator
- LiquidityCalculator
- CupoValidator
- PaymentForm
- UploadZone

### Admin & Tools (3)
- AdminPortal
- NotificationCenter
- QuickActionToolbar

### UI Patterns (10)
- EmptyState
- ErrorBoundary
- LoadingStates
- SearchResults
- PricingTable
- ComparisonTable
- CommentThread
- ActivityFeed
- NotificationDropdown
- UserProfileCard

## 4. ADVANCED COMPONENTS
Componentes de alta complejidad en `/components/advanced/`.
**Total**: 37 componentes implementados.

### Charts & Visualizations (12)
- ChartShowcase
- FunnelChart
- GaugeChart
- Heatmap
- Sparkline
- TreemapChart
- RadarChart
- AreaChart
- OrgChart
- SankeyDiagram
- GanttChart

### Data Management (5)
- DataTable
- PivotTable
- TreeTable
- ExportData
- KanbanBoard

### Forms (5)
- ConditionalForm
- FormBuilder
- MultiColumnForm
- FileUploader
- RichTextEditor

### Pickers & Selection (5)
- ColorPicker
- Combobox
- DatePickerWithPresets
- DateRangePicker
- MultiSelect

### Lists & Navigation (3)
- VirtualizedList
- InfiniteScroll
- TransferList

### UI Components (7)
- StepIndicator
- Timeline
- InvoiceGenerator
- RatingComponent
- SplitButton
- FloatingActionButton
- BottomSheet
- MasonryGrid

## 5. BUSINESS COMPONENTS
Componentes específicos del dominio de factoring en `/components/business/`.
**Total**: 23 componentes implementados.

### Charts & Metrics (4)
- BarChart
- ChartLegendItem
- ProgressBar
- StatusKPICard

### Design System Tools (6)
- ColorBox
- ColorPresetButton
- ColorSwatch
- ContrastPreview
- GridSystemPreview
- SpacingPreview

### Business Features (7)
- AuditLogViewer
- BookingCalendar
- ContactForm
- OperationDetailCard
- StatusAlert
- TestimonialsCarousel

### Factoring Specific (6)
- InvoiceCard
- PayorCard
- RiskIndicator
- CashFlowProjection
- LiquidityMeter
- FactoringRateDisplay
- DocumentVerificationStatus
- CollectionTimeline

## 6. ACCESSIBILITY COMPONENTS
Herramientas invisibles en `/components/accessibility/`.
**Total**: 3 componentes.

- **SkipLink**: Navegación teclado.
- **LiveRegion**: Anuncios para screen readers.
- **FocusTrap**: Gestión de foco en modales.

## 7. HELP SYSTEM
Sistema de ayuda contextual en `/components/help/`.
**Total**: 5 componentes.

- ContextualHelp
- HelpButton
- HelpCenter
- HelpProvider
- ProductTour

## 8. LAYOUT & CORE
Infraestructura base en `/components/layout/` y `/components/core/`.
**Total**: 4 componentes.

- Logo
- SidebarNew
- PageRenderer
- ThemeProvider

---

## RESUMEN TOTAL

| Categoría | Cantidad |
|-----------|----------|
| **Shadcn/UI Base** | 51 |
| **Atomic Design** | 18 |
| **Patterns** | 29 |
| **Advanced** | 37 |
| **Business** | 23 |
| **Accessibility** | 3 |
| **Help System** | 5 |
| **Layout & Core** | 4 |
| **TOTAL** | **170+** |

---

🚨 **REGLA CRÍTICA**: Antes de crear un componente:
1. Buscar en shadcn/ui oficial.
2. Buscar en Advanced o Atomic.
3. Buscar en Patterns.
4. Solo si no existe, crear uno nuevo (preferiblemente como Pattern).

## DOCUMENTATION COMPONENTS
Infraestructura para el Design System Manager (DSM).
- **ComponentShowcase**: Plantilla estándar para documentar componentes (Tabs: Preview, Code, Usage, Props).
- **CodeBlock**: Bloque de código con resaltado de sintaxis y botón de copia.
- **PropsTable**: Tabla estandarizada para documentar props de componentes.
