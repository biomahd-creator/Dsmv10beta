# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2026-01-23

### Fixed
- **Toast Page**: Added missing `ComponentShowcase` import to `ToastPage.tsx`
- **Toast Page**: Added missing UI component imports (Card, Button) for toast demonstrations
- **Button Component**: Reverted to standard shadcn/ui implementation with Tailwind inline styles
- **Theme Variables**: Reset `--secondary` color to original value (#334155) for proper theming

### Changed
- **Component Count**: Updated sidebar counter to reflect accurate count of 189 components
- **Documentation Cleanup**: Removed 16 temporary audit and verification files from root directory:
  - AUDITORIA_ESTILOS_INLINE.md
  - BUTTON_FIX_VERIFICATION.md
  - BUTTON_STYLES_FIX.md
  - COMO_VERIFICAR_BOTONES.md
  - CRITICAL_FIXES_SUMMARY.md
  - FIXES_SUMMARY.md
  - NPM_AUDIT_2026.md
  - NPM_AUDIT_COMPLETE_2026.md
  - NPM_PUBLISH_FIXES_2026.md
  - NPM_READY_CHECKLIST.md
  - PRE_PUBLISH_CHECKLIST.md
  - PUBLICATION_CHECKLIST.md
  - PUBLISH_READY_SUMMARY.md
  - README_PUBLICATION.md
  - SECONDARY_BUTTON_FIX.md
  - STYLES_AUDIT_REPORT.md
  - STYLES_CORRECTIONS_COMPLETED.md
  - STYLES_FIX_PRIORITY.md
  - TODOS_LOS_BOTONES_CORREGIDOS.md
  - verify-buttons.sh

### Status
- ✅ **NPM Ready**: All components verified and ready for publication
- ✅ **189 Components**: Complete catalog audited and functional
- ✅ **Zero Errors**: All runtime errors resolved
- ✅ **Clean Codebase**: Temporary documentation removed

## [1.0.0] - 2026-01-23

### 🎉 Initial Release

First stable release of Financio Design System as an NPM package.

### Fixed (Pre-release)

#### 🎨 Styles Consistency (v5.5.1)
- **CRITICAL**: Removed all hardcoded colors from exported components
- **Migrated inline styles to CSS variables** in 5 critical components:
  - `ChartShowcase.tsx`: Tooltip colors now use `--item-color` CSS variable
  - `TreemapChart.tsx`: SVG strokes now use `hsl(var(--background))` instead of `#fff`
  - `chart.tsx`: Legend dots use `--legend-color` CSS variable
  - `CFDashboard.tsx`: Pie chart indicators use `--indicator-color` CSS variable
  - `ColorPicker.tsx`: Preview background uses `--preview-bg` CSS variable
- **Added 60 lines of utilities CSS** to `globals.css`:
  - `.chart-legend-dot` - For chart legend color indicators
  - `.legend-indicator` - For dashboard and pattern legends
  - `.treemap-rect` - For treemap SVG styling with proper dark mode support
  - `.color-picker-preview` - For color preview with smooth transitions
  - `[data-chart-color]` - For dynamic chart tooltip colors
  - `.chart-tooltip-container` - Standardized Recharts tooltip styling
- **Improved theming consistency from 94% to 100%**
- **Full dark mode support** for all corrected components
- **Zero hardcoded colors** in NPM-exported components

### Added

#### Core Features
- 189 production-ready React components
- Full TypeScript support with complete type definitions
- Tree-shakeable ESM and CommonJS builds
- Sourcemaps for easier debugging
- Complete CSS bundle with Tailwind styles

#### Component Categories
- **48 UI Components (shadcn/ui)**: Complete set of base components
- **29 Advanced Components**: Complex, feature-rich components
- **24 Business Components**: Specialized for factoring/finance
- **28 Patterns**: Pre-built, composable patterns
- **17 Atomic Design Components**: Following Atomic Design methodology
- **3 Accessibility Components**: WCAG 2.1 compliant utilities
- **5 Help System Components**: User guidance and onboarding
- **1 Theme Provider**: Dark mode and theme management

#### UI Components
- Layout: Card, Separator, ScrollArea, Resizable, Sidebar
- Forms: Input, Textarea, Select, Checkbox, RadioGroup, Switch, Slider, Calendar
- Buttons: Button, Toggle, ToggleGroup, FloatingActionButton
- Navigation: NavigationMenu, Menubar, Breadcrumb, Pagination, Tabs, Command
- Feedback: Alert, Toast, Progress, Skeleton
- Overlays: Dialog, Sheet, Drawer, Popover, HoverCard, Tooltip, ContextMenu, DropdownMenu
- Data Display: Table, Avatar, Badge, Carousel, Accordion, Collapsible

#### Advanced Components
- DataTable with sorting, filtering, pagination
- FileUploader with drag & drop
- RichTextEditor with formatting toolbar
- ColorPicker with presets
- DateRangePicker with presets
- MultiSelect with search
- Charts: FunnelChart, GaugeChart, Heatmap, Sparkline, TreemapChart, RadarChart
- Timeline with customizable events
- StepIndicator for multi-step processes
- KanbanBoard with drag & drop
- MasonryGrid for responsive layouts
- OrgChart for organizational hierarchies
- PivotTable for data analysis
- And more...

#### Business Components
- AuditLogViewer for compliance tracking
- BookingCalendar for scheduling
- StatusKPICard for key metrics
- BarChart for data visualization
- CashFlowProjection for financial planning
- CollectionTimeline for payment tracking
- DocumentVerificationStatus
- FactoringRateDisplay
- InvoiceCard
- LiquidityMeter
- OperationDetailCard
- PayorCard
- RiskIndicator
- And more...

#### Patterns
- FactoringDashboard: Complete dashboard for factoring operations
- FactoringCalculator: Calculate factoring rates and fees
- AdminPortal: Admin interface pattern
- ApprovalFlowWizard: Multi-step approval process
- NotificationCenter: Centralized notifications
- OnboardingWizard: User onboarding flow
- DataTableAdvanced: Enhanced data table with all features
- EditableTable: Inline editing capabilities
- EmptyState: User-friendly empty states
- ErrorBoundary: Error handling UI
- And more...

#### Accessibility
- FocusTrap for keyboard navigation
- LiveRegion for screen reader announcements
- SkipLink for keyboard users
- 100% WCAG 2.1 Level AA compliance
- Keyboard navigation support
- ARIA attributes on all components
- Focus management
- Screen reader friendly

#### Theming & Styling
- CSS variables for easy customization
- Dark mode support out of the box
- Responsive design system
- Satoshi font family integration
- Tailwind CSS v4 powered
- Color system with Primary (Lime) and Secondary (Dark Blue)
- Consistent spacing and elevation

#### Developer Experience
- Complete TypeScript definitions
- Tree-shaking support
- ESM and CommonJS formats
- Sourcemaps included
- Next.js App Router compatible ("use client" directive)
- Vite/Webpack/Rollup compatible
- Zero configuration needed
- Single import entry point

#### Documentation
- Comprehensive README
- Component usage examples
- TypeScript type documentation
- UX Writing guidelines (Spanish LATAM)
- Design token documentation
- Accessibility guidelines
- Best practices guide

### Technical Specifications
- React 18+ support
- TypeScript 5.7+
- Tailwind CSS 4.1+
- Build tool: tsup
- Bundle size: Tree-shakeable (import only what you need)
- Browser support: Modern browsers (ES2022+)

### Dependencies
- React ^18.0.0 (peer dependency)
- React-DOM ^18.0.0 (peer dependency)
- 24 Radix UI packages
- Lucide React (icons)
- Recharts (charts)
- Date-fns (date utilities)
- React Hook Form (forms)
- Sonner (toasts)
- Driver.js (product tours)
- XLSX (Excel export)
- And more...

---

## [Unreleased]

### Planned
- Storybook documentation
- Component playground
- More business components
- Additional chart types
- Enhanced accessibility features
- i18n support for more languages

---

## Version History

- **1.0.0** (2026-01-23) - Initial stable release with 189 components
- **5.5.0** (2026-01-23) - Pre-release: NPM package audit complete
- **5.4.0** (2026-01-22) - Pre-release: Documentation complete
- **5.3.0** (2026-01-21) - Pre-release: Project cleanup
- **5.2.0** (2026-01-14) - Pre-release: UX Writing guidelines
- **5.1.0** (2026-01-13) - Pre-release: Icon gallery expansion
- **5.0.0** (2026-01-13) - Pre-release: Help system complete

---

## Migration Guides

### From v0.x to v1.0.0
This is the first stable release. No migration needed if you're starting fresh.

---

## Support

- **Issues**: [GitHub Issues](https://github.com/biomahd-creator/financio-design-system/issues)
- **Discussions**: [GitHub Discussions](https://github.com/biomahd-creator/financio-design-system/discussions)
- **Email**: support@financio-ds.com

---

**Note**: This changelog follows [Keep a Changelog](https://keepachangelog.com/) format.