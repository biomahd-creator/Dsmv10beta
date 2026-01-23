# 📖 Guía de Instalación Completa - Financio Design System

Esta guía cubre todos los escenarios de instalación y configuración del Design System.

---

## 📋 Tabla de Contenidos

1. [Instalación Básica](#1-instalación-básica)
2. [Configuración de Tailwind CSS](#2-configuración-de-tailwind-css)
3. [Configuración de Fuentes](#3-configuración-de-fuentes)
4. [Dependencias Opcionales](#4-dependencias-opcionales)
5. [Resolución de Problemas](#5-resolución-de-problemas)

---

## 1. Instalación Básica

### Paso 1: Instalar el paquete

```bash
npm install @biomahd-creator/financio-design-system
```

### Paso 2: Instalar React (Peer Dependencies)

```bash
npm install react react-dom
```

### Paso 3: Instalar Radix UI (Peer Dependencies)

El Design System requiere todas las primitivas de Radix UI. Instálalas con un solo comando:

```bash
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip
```

**⚠️ Importante**: Si omites alguna de estas dependencias, los componentes que las requieran fallarán en runtime.

---

## 2. Configuración de Tailwind CSS

### Paso 1: Instalar Tailwind CSS

Si no lo tienes instalado:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Paso 2: Configurar `tailwind.config.js`

Copia este contenido a tu archivo de configuración:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // ⚠️ CRÍTICO: Incluye los componentes del Design System
    "./node_modules/@biomahd-creator/financio-design-system/dist/**/*.{js,mjs}"
  ],
  darkMode: ["class"],
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
  plugins: [],
};
```

### Paso 3: Importar los estilos del Design System

En tu archivo principal (`main.tsx` o `App.tsx`):

```tsx
// PRIMERO importa los estilos del Design System
import '@biomahd-creator/financio-design-system/styles';

// Luego tus estilos personalizados si los tienes
import './index.css';
```

---

## 3. Configuración de Fuentes

El Design System usa la fuente **Satoshi**. Tienes dos opciones:

### Opción A: CDN (Rápido, para desarrollo)

Agrega esto a tu `index.html`:

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Fuente Satoshi desde CDN -->
    <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/satoshi" />
    
    <title>Mi App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Opción B: Self-hosted (Recomendado para producción)

1. **Descarga la fuente Satoshi**:
   - Visita: https://www.fontshare.com/fonts/satoshi
   - Descarga los archivos `.woff2`

2. **Crea carpeta de fuentes**:
   ```
   src/
   └── fonts/
       ├── Satoshi-Light.woff2
       ├── Satoshi-Regular.woff2
       ├── Satoshi-Medium.woff2
       ├── Satoshi-Bold.woff2
       └── Satoshi-Black.woff2
   ```

3. **Importa en tu CSS** (`src/index.css`):
   ```css
   @font-face {
     font-family: 'Satoshi';
     src: url('./fonts/Satoshi-Light.woff2') format('woff2');
     font-weight: 300;
     font-style: normal;
     font-display: swap;
   }

   @font-face {
     font-family: 'Satoshi';
     src: url('./fonts/Satoshi-Regular.woff2') format('woff2');
     font-weight: 400;
     font-style: normal;
     font-display: swap;
   }

   @font-face {
     font-family: 'Satoshi';
     src: url('./fonts/Satoshi-Medium.woff2') format('woff2');
     font-weight: 500;
     font-style: normal;
     font-display: swap;
   }

   @font-face {
     font-family: 'Satoshi';
     src: url('./fonts/Satoshi-Bold.woff2') format('woff2');
     font-weight: 700;
     font-style: normal;
     font-display: swap;
   }

   @font-face {
     font-family: 'Satoshi';
     src: url('./fonts/Satoshi-Black.woff2') format('woff2');
     font-weight: 900;
     font-style: normal;
     font-display: swap;
   }

   body {
     font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
   }
   ```

---

## 4. Dependencias Opcionales

Algunos componentes avanzados requieren dependencias adicionales. **Solo instálalas si usarás estos componentes**.

### ProductTour (Guided Walkthroughs)

**Componente**: `ProductTour` en `/components/help/`

```bash
npm install driver.js
```

**Uso**:
```tsx
import { ProductTour } from '@biomahd-creator/financio-design-system';

// Este componente ahora funcionará
<ProductTour steps={mySteps} />
```

### ExportData (Excel Export)

**Componente**: `ExportData` en `/components/advanced/`

```bash
npm install xlsx
```

**Uso**:
```tsx
import { ExportData } from '@biomahd-creator/financio-design-system';

// Este componente ahora funcionará
<ExportData data={myData} availableColumns={columns} />
```

**⚠️ Nota**: Si intentas usar estos componentes sin instalar las dependencias, verás errores como:
```
Error: Cannot find module 'driver.js'
Error: Cannot find module 'xlsx'
```

---

## 5. Resolución de Problemas

### ❌ Error: "Cannot resolve @radix-ui/react-..."

**Causa**: Falta instalar peer dependencies de Radix UI.

**Solución**: Ejecuta el comando de instalación masiva del paso 3.

---

### ❌ Los estilos de Tailwind no funcionan

**Causa**: Falta incluir el Design System en `content` de Tailwind.

**Solución**: Verifica que tu `tailwind.config.js` incluya:
```js
content: [
  "./node_modules/@biomahd-creator/financio-design-system/dist/**/*.{js,mjs}"
]
```

---

### ❌ La fuente Satoshi no se carga

**Causa**: CDN bloqueado o fuente no configurada.

**Solución**:
1. Verifica que el `<link>` esté en `index.html`
2. O usa la Opción B (self-hosted)
3. Si el CDN está bloqueado por CSP, usa self-hosted

---

### ❌ Error: "driver.js" or "xlsx" not found

**Causa**: Intentas usar `ProductTour` o `ExportData` sin las dependencias opcionales.

**Solución**: Instala la dependencia correspondiente:
```bash
npm install driver.js  # Para ProductTour
npm install xlsx       # Para ExportData
```

---

### ❌ Componentes se ven sin estilos

**Causa**: No importaste los estilos del Design System.

**Solución**: Agrega al inicio de `main.tsx`:
```tsx
import '@biomahd-creator/financio-design-system/styles';
```

---

### ❌ TypeScript no reconoce los tipos

**Causa**: Faltan las definiciones de tipos.

**Solución**: El paquete incluye tipos automáticamente. Si no funciona:
```bash
# Reinstala el paquete
npm install @biomahd-creator/financio-design-system --force
```

---

## ✅ Checklist de Instalación Completa

Usa esta checklist para verificar que todo esté configurado:

- [ ] ✅ Instalado `@biomahd-creator/financio-design-system`
- [ ] ✅ Instalado `react` y `react-dom`
- [ ] ✅ Instalados todos los paquetes de `@radix-ui/react-*`
- [ ] ✅ Configurado `tailwind.config.js` con content paths correctos
- [ ] ✅ Importados los estilos en `main.tsx` o `App.tsx`
- [ ] ✅ Configurada la fuente Satoshi (CDN o self-hosted)
- [ ] ✅ (Opcional) Instalado `driver.js` si usas ProductTour
- [ ] ✅ (Opcional) Instalado `xlsx` si usas ExportData

---

## 🎉 ¡Listo!

Tu proyecto ahora está configurado para usar el Financio Design System. Empieza importando componentes:

```tsx
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from '@biomahd-creator/financio-design-system';

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>¡Funciona!</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Mi primer botón</Button>
      </CardContent>
    </Card>
  );
}
```

---

**¿Tienes problemas?** Abre un issue en: https://github.com/biomahd-creator/financio-design-system/issues
