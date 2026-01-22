# @financio/design-system

> Production-ready React component library built with shadcn/ui and Tailwind CSS

[![Version](https://img.shields.io/npm/v/@financio/design-system.svg)](https://www.npmjs.com/package/@financio/design-system)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 🎯 Características

- ✅ **70+ componentes** listos para producción
- ✅ **Totalmente tipado** con TypeScript
- ✅ **Accesibilidad WCAG 2.1 AA** (98% compliance)
- ✅ **Dark mode** nativo
- ✅ **Tree-shakeable** para bundles optimizados
- ✅ **Personalizable** con Tailwind CSS
- ✅ **Documentación completa** con ejemplos

## 📦 Instalación

```bash
npm install @financio/design-system
# o
yarn add @financio/design-system
# o
pnpm add @financio/design-system
```

### Peer Dependencies

Asegúrate de tener instaladas las siguientes dependencias:

```bash
npm install react react-dom tailwindcss
```

## 🚀 Uso Rápido

### 1. Importar Estilos

```tsx
// En tu archivo principal (main.tsx o App.tsx)
import '@financio/design-system/styles';
```

### 2. Configurar Tailwind CSS

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@financio/design-system/dist/**/*.{js,mjs}'
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### 3. Agregar CSS Variables

```css
/* src/index.css o src/globals.css */
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;
    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;
    --primary: 84 81% 44%; /* Lime #84cc16 */
    --primary-foreground: 0 0% 100%;
    --secondary: 205 43% 17%; /* Dark Blue #1C2D3A */
    --secondary-foreground: 0 0% 100%;
    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;
    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 84 81% 44%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;
    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;
    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;
    --primary: 84 81% 44%;
    --primary-foreground: 0 0% 100%;
    --secondary: 205 43% 17%;
    --secondary-foreground: 0 0% 100%;
    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;
    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;
    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 84 81% 44%;
  }
}
```

### 4. Usar Componentes

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@financio/design-system';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Mi Primera Card</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Click aquí</Button>
      </CardContent>
    </Card>
  );
}
```

## 📚 Componentes Disponibles

### UI Base (shadcn/ui)

```tsx
import {
  Accordion,
  Alert,
  AlertDialog,
  Avatar,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Carousel,
  Checkbox,
  Collapsible,
  Command,
  ContextMenu,
  Dialog,
  Drawer,
  DropdownMenu,
  Form,
  HoverCard,
  Input,
  InputOTP,
  Label,
  Menubar,
  NavigationMenu,
  Pagination,
  Popover,
  Progress,
  RadioGroup,
  ResizablePanel,
  ScrollArea,
  Select,
  Separator,
  Sheet,
  Skeleton,
  Slider,
  Switch,
  Table,
  Tabs,
  Textarea,
  Toast,
  Toggle,
  ToggleGroup,
  Tooltip,
} from '@financio/design-system';
```

### Componentes Avanzados

```tsx
import {
  AmountInput,
  CurrencyBadge,
  CurrencySelector,
  DataTable,
  DateRangePicker,
  DocViewer,
  FileUpload,
  FormWizard,
  InvoiceCard,
  InvoiceStatus,
  KPICard,
  NotificationBadge,
  PasswordInput,
  PhoneInput,
  RateDisplay,
  RiskBadge,
  SearchBar,
  StatCard,
  StatusBadge,
  StepIndicator,
  Timeline,
} from '@financio/design-system';
```

### Patterns

```tsx
import {
  EmptyState,
  ErrorState,
  LoadingState,
  PageHeader,
} from '@financio/design-system';
```

## 🎨 Ejemplos

### Formulario de Login

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent, Input, Label } from '@financio/design-system';

function LoginForm() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Iniciar Sesión</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="tu@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" type="password" />
        </div>
        <Button className="w-full">Entrar</Button>
      </CardContent>
    </Card>
  );
}
```

### Dashboard con KPIs

```tsx
import { KPICard, StatCard } from '@financio/design-system';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

function Dashboard() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <KPICard
        title="Ingresos Totales"
        value="$125,430"
        change="+12.5%"
        trend="up"
        icon={<DollarSign />}
      />
      <KPICard
        title="Usuarios Activos"
        value="1,234"
        change="+5.2%"
        trend="up"
        icon={<Users />}
      />
      <KPICard
        title="Conversión"
        value="23.4%"
        change="-2.1%"
        trend="down"
        icon={<TrendingUp />}
      />
    </div>
  );
}
```

### DataTable con filtros

```tsx
import { DataTable, Input, Select } from '@financio/design-system';

const columns = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Nombre' },
  { accessorKey: 'email', header: 'Email' },
  { accessorKey: 'status', header: 'Estado' },
];

const data = [
  { id: 1, name: 'Juan Pérez', email: 'juan@example.com', status: 'Activo' },
  { id: 2, name: 'María García', email: 'maria@example.com', status: 'Inactivo' },
];

function UsersTable() {
  return <DataTable columns={columns} data={data} />;
}
```

## 🎯 Dark Mode

El sistema incluye soporte nativo para dark mode:

```tsx
import { Button } from '@financio/design-system';
import { Moon, Sun } from 'lucide-react';

function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </Button>
  );
}
```

## 🔧 Utilidades

### cn() - Class Name Utility

```tsx
import { cn } from '@financio/design-system';

// Combina clases de Tailwind inteligentemente
<div className={cn('px-4 py-2', isActive && 'bg-primary', className)} />
```

## 📖 Documentación Completa

Para ver la documentación completa con todos los componentes, props y ejemplos, visita:

- **Design System Manager:** [Tu URL aquí]
- **Storybook:** [Tu URL aquí]
- **GitHub:** [https://github.com/tu-usuario/financio-design-system](https://github.com/tu-usuario/financio-design-system)

## 🛠️ Desarrollo

### Requisitos

- Node.js >= 18
- npm/yarn/pnpm

### Setup Local

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/financio-design-system.git

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Build del paquete
npm run build:package
```

## 📝 Changelog

Ver [CHANGELOG.md](./CHANGELOG.md) para el historial completo de versiones.

### v5.4.0 (Latest)

- ✅ 70/70 componentes documentados
- ✅ Auditoría completa del proyecto
- ✅ 98% WCAG compliance
- ✅ Production ready

## 🤝 Contribuir

Las contribuciones son bienvenidas! Por favor lee [CONTRIBUTING.md](./CONTRIBUTING.md) para detalles.

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver [LICENSE](./LICENSE) para más detalles.

## 🙏 Créditos

- **shadcn/ui** - Sistema base de componentes
- **Radix UI** - Primitivos accesibles
- **Tailwind CSS** - Framework de estilos
- **Lucide Icons** - Iconos

## 📞 Soporte

- **Issues:** [GitHub Issues](https://github.com/tu-usuario/financio-design-system/issues)
- **Email:** support@financio.com
- **Slack:** [Únete a nuestro Slack](https://financio.slack.com)

---

Hecho con ❤️ por el equipo de Financio Design System
