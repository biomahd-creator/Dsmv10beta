# 🎨 Financio Design System

[![npm version](https://img.shields.io/npm/v/@biomahd-creator/financio-design-system.svg)](https://www.npmjs.com/package/@biomahd-creator/financio-design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Production-ready React component library built with **shadcn/ui** and **Tailwind CSS**, specifically designed for factoring and financial applications.

## ✨ Features

- 🎯 **189 Components**: Complete UI library from basic to advanced components
- 🎨 **Shadcn/ui Foundation**: Built on top of the popular shadcn/ui component system
- 🌙 **Dark Mode**: Full dark mode support out of the box
- ♿ **Accessible**: WCAG 2.1 compliant components (100% compliance)
- 📱 **Responsive**: Mobile-first design approach
- 🎭 **Customizable**: Easy theming with CSS variables
- 📦 **Tree-shakeable**: Import only what you need
- 🔷 **TypeScript**: Full type safety and IntelliSense support
- 🇪🇸 **Spanish UX Writing**: Professional microcopy in Latin American Spanish
- 🏢 **Business Ready**: Pre-built patterns for factoring and financial apps

## 📦 Installation

```bash
npm install @biomahd-creator/financio-design-system
```

### Peer Dependencies

Make sure you have these installed:

```bash
npm install react react-dom
```

### Required Radix UI Dependencies

The Design System uses Radix UI primitives. Install all required peer dependencies:

```bash
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip
```

### Optional Dependencies

Some advanced components require additional packages. Install only if you plan to use them:

**ProductTour Component** (guided walkthroughs):
```bash
npm install driver.js
```

**ExportData Component** (Excel export):
```bash
npm install xlsx
```

## 🚀 Quick Start

### 1. Import Styles

Add the CSS to your main entry file (`main.tsx` or `App.tsx`):

```tsx
import '@biomahd-creator/financio-design-system/styles';
```

### 2. Configure Tailwind

Copy the example config or update your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // IMPORTANT: Include Design System components
    "./node_modules/@biomahd-creator/financio-design-system/dist/**/*.{js,mjs}"
  ],
  darkMode: ["class"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Setup Typography (Satoshi Font)

The Design System uses the Satoshi font family. Add to your `index.html` or CSS:

**Option A - CDN (Quick Start):**
```html
<link rel="stylesheet" href="https://fonts.cdnfonts.com/css/satoshi" />
```

**Option B - Self-hosted (Recommended for Production):**
Download Satoshi font and add to your `src/fonts/` directory, then import in your CSS:
```css
@font-face {
  font-family: 'Satoshi';
  src: url('./fonts/Satoshi-Variable.woff2') format('woff2');
  font-weight: 300 900;
  font-display: swap;
}
```

### 4. Use Components

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@biomahd-creator/financio-design-system';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bienvenido</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Comenzar</Button>
      </CardContent>
    </Card>
  );
}
```

## 📚 Component Categories

### UI Components (shadcn/ui)
- **Layout**: Card, Separator, ScrollArea, Resizable, Sidebar
- **Forms**: Input, Textarea, Select, Checkbox, RadioGroup, Switch, Slider
- **Buttons**: Button, Toggle, ToggleGroup
- **Navigation**: NavigationMenu, Menubar, Breadcrumb, Pagination, Tabs
- **Feedback**: Alert, Toast (Sonner), Progress, Skeleton
- **Overlays**: Dialog, Sheet, Drawer, Popover, HoverCard, Tooltip, ContextMenu, DropdownMenu, Command
- **Data Display**: Table, Avatar, Badge, Calendar, Carousel
- **Advanced**: Accordion, Collapsible, AspectRatio

### Advanced Components
- DataTable, FileUploader, RichTextEditor
- ColorPicker, DateRangePicker, MultiSelect
- Charts: FunnelChart, GaugeChart, Heatmap, Sparkline, TreemapChart
- Timeline, StepIndicator, KanbanBoard
- And more...

### Business Components
Specialized for factoring applications:
- AuditLogViewer, BookingCalendar, StatusKPICard
- BarChart, ProgressBar, ChartLegendItem
- ContactForm, TestimonialsCarousel

### Patterns
Complete pre-built patterns:
- FactoringDashboard, FactoringCalculator
- AdminPortal, ApprovalFlowWizard
- NotificationCenter, OnboardingWizard
- DataTableAdvanced, EditableTable
- And more...

### Atomic Design
Molecules, Organisms, Templates, and Pages following Atomic Design methodology.

## 🎨 Theming

The design system uses CSS variables for theming. You can customize colors in your CSS:

```css
:root {
  --primary: #your-color;
  --secondary: #your-color;
  --accent: #your-color;
  /* ... more variables */
}
```

## 🌙 Dark Mode

Wrap your app with `ThemeProvider`:

```tsx
import { ThemeProvider } from '@biomahd-creator/financio-design-system';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="app-theme">
      {/* Your app */}
    </ThemeProvider>
  );
}
```

## 📖 Documentation

For detailed documentation, component examples, and guidelines:
- Check the `/guidelines` folder in the source repository
- View the live demo application

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

## 📄 License

MIT © Biomahd Creator

## 🔗 Links

- [GitHub Repository](https://github.com/biomahd-creator/financio-design-system)
- [NPM Package](https://www.npmjs.com/package/@biomahd-creator/financio-design-system)
- [Issue Tracker](https://github.com/biomahd-creator/financio-design-system/issues)

## 🙏 Credits

Built with:
- [shadcn/ui](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Made with ❤️ for the factoring industry**