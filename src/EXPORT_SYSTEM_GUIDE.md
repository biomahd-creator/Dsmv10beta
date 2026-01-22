# 📦 Guía Completa de Exportación del Design System

**Versión:** 1.0.0  
**Fecha:** 22 de Enero de 2026  
**Autor:** Design System Manager Team

---

## 🎯 OBJETIVO

Este documento proporciona métodos detallados para **replicar, distribuir y exportar** el Financio Design System como paquete NPM reutilizable en otros proyectos.

---

## 📋 TABLA DE CONTENIDOS

1. [Métodos de Distribución](#métodos-de-distribución)
2. [Método 1: Paquete NPM Privado](#método-1-paquete-npm-privado)
3. [Método 2: Monorepo con Workspaces](#método-2-monorepo-con-workspaces)
4. [Método 3: Git Submodule](#método-3-git-submodule)
5. [Método 4: Exportación Manual (Copy-Paste)](#método-4-exportación-manual-copy-paste)
6. [Comparativa de Métodos](#comparativa-de-métodos)
7. [Configuración Recomendada](#configuración-recomendada)
8. [Estructura del Paquete](#estructura-del-paquete)
9. [Testing y Versionado](#testing-y-versionado)
10. [Troubleshooting](#troubleshooting)

---

## 🔄 MÉTODOS DE DISTRIBUCIÓN

Existen 4 métodos principales para replicar el Design System:

| Método | Complejidad | Escalabilidad | Mantenimiento | Recomendado Para |
|--------|-------------|---------------|---------------|------------------|
| **NPM Privado** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | Empresas con múltiples proyectos |
| **Monorepo** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | Proyectos grandes con CI/CD |
| **Git Submodule** | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | Equipos pequeños |
| **Copy-Paste** | ⭐ | ⭐ | ⭐ | Prototipos rápidos |

---

## 📦 MÉTODO 1: PAQUETE NPM PRIVADO

### ⭐ **Recomendado para equipos medianos/grandes**

Este método convierte el Design System en un paquete NPM que puede instalarse en cualquier proyecto.

### 1.1 Preparación del Proyecto

Crea un nuevo directorio para el paquete:

```bash
mkdir financio-design-system
cd financio-design-system
npm init -y
```

### 1.2 Configuración de package.json

```json
{
  "name": "@financio/design-system",
  "version": "5.4.0",
  "description": "Financio Design System - shadcn/ui + Tailwind CSS",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": "./dist/styles.css",
    "./components/*": "./dist/components/*.js"
  },
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  "scripts": {
    "build": "tsup src/index.ts --format cjs,esm --dts",
    "dev": "tsup src/index.ts --format cjs,esm --dts --watch",
    "prepublishOnly": "npm run build",
    "test": "vitest"
  },
  "peerDependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  },
  "dependencies": {
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-alert-dialog": "^1.0.5",
    "@radix-ui/react-avatar": "^1.0.4",
    "@radix-ui/react-checkbox": "^1.0.4",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-dropdown-menu": "^2.0.6",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-popover": "^1.0.7",
    "@radix-ui/react-progress": "^1.0.3",
    "@radix-ui/react-radio-group": "^1.1.3",
    "@radix-ui/react-select": "^2.0.0",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slider": "^1.1.2",
    "@radix-ui/react-switch": "^1.0.3",
    "@radix-ui/react-tabs": "^1.0.4",
    "@radix-ui/react-toast": "^1.1.5",
    "@radix-ui/react-tooltip": "^1.0.7",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.300.0",
    "tailwind-merge": "^2.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "tsup": "^8.0.1",
    "typescript": "^5.3.0",
    "vitest": "^1.0.0"
  },
  "keywords": [
    "design-system",
    "shadcn-ui",
    "tailwindcss",
    "react",
    "components",
    "ui-library"
  ],
  "author": "Financio Team",
  "license": "MIT"
}
```

### 1.3 Estructura de Archivos

```
financio-design-system/
├── src/
│   ├── components/
│   │   ├── ui/           # Todos los componentes shadcn/ui
│   │   ├── advanced/     # Componentes avanzados
│   │   ├── atomic/       # Atomic design components
│   │   └── patterns/     # Composed patterns
│   ├── styles/
│   │   └── globals.css   # Estilos base del sistema
│   ├── lib/
│   │   └── utils.ts      # Utilidades (cn, etc.)
│   └── index.ts          # Punto de entrada principal
├── dist/                 # Build output (generado)
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

### 1.4 Archivo src/index.ts

```typescript
// Export all UI components
export * from './components/ui/button';
export * from './components/ui/card';
export * from './components/ui/input';
export * from './components/ui/label';
export * from './components/ui/select';
export * from './components/ui/checkbox';
export * from './components/ui/radio-group';
export * from './components/ui/switch';
export * from './components/ui/slider';
export * from './components/ui/tabs';
export * from './components/ui/accordion';
export * from './components/ui/alert';
export * from './components/ui/alert-dialog';
export * from './components/ui/avatar';
export * from './components/ui/badge';
export * from './components/ui/breadcrumb';
export * from './components/ui/calendar';
export * from './components/ui/carousel';
export * from './components/ui/collapsible';
export * from './components/ui/command';
export * from './components/ui/context-menu';
export * from './components/ui/dialog';
export * from './components/ui/dropdown-menu';
export * from './components/ui/hover-card';
export * from './components/ui/menubar';
export * from './components/ui/navigation-menu';
export * from './components/ui/pagination';
export * from './components/ui/popover';
export * from './components/ui/progress';
export * from './components/ui/scroll-area';
export * from './components/ui/separator';
export * from './components/ui/sheet';
export * from './components/ui/skeleton';
export * from './components/ui/sonner';
export * from './components/ui/table';
export * from './components/ui/textarea';
export * from './components/ui/toggle';
export * from './components/ui/toggle-group';
export * from './components/ui/tooltip';

// Export advanced components
export * from './components/advanced/StepIndicator';
export * from './components/advanced/DataTable';
export * from './components/advanced/Timeline';
// ... etc

// Export utilities
export * from './lib/utils';
```

### 1.5 Build del Paquete

```bash
# Instalar dependencias
npm install

# Build del paquete
npm run build

# Resultado en /dist:
# - index.js (CommonJS)
# - index.mjs (ES Modules)
# - index.d.ts (TypeScript types)
# - styles.css (Estilos compilados)
```

### 1.6 Publicación

#### Opción A: NPM Registry Privado

```bash
# Configurar registry privado
npm config set @financio:registry https://npm.tuempresa.com

# Login
npm login --registry=https://npm.tuempresa.com

# Publicar
npm publish
```

#### Opción B: GitHub Packages

```bash
# Configurar en package.json
{
  "name": "@tuempresa/financio-design-system",
  "repository": {
    "type": "git",
    "url": "https://github.com/tuempresa/financio-design-system.git"
  },
  "publishConfig": {
    "@tuempresa:registry": "https://npm.pkg.github.com"
  }
}

# Autenticar
npm login --scope=@tuempresa --registry=https://npm.pkg.github.com

# Publicar
npm publish
```

#### Opción C: Verdaccio (Self-hosted)

```bash
# Instalar Verdaccio globalmente
npm install -g verdaccio

# Iniciar servidor
verdaccio

# Agregar usuario
npm adduser --registry http://localhost:4873

# Publicar
npm publish --registry http://localhost:4873
```

### 1.7 Instalación en Proyectos

```bash
# En el proyecto que usará el Design System
npm install @financio/design-system
```

### 1.8 Uso en Proyectos

```tsx
// app.tsx
import { Button, Card, Input } from '@financio/design-system';
import '@financio/design-system/styles';

function App() {
  return (
    <Card>
      <Input placeholder="Email" />
      <Button>Submit</Button>
    </Card>
  );
}
```

### 1.9 Configuración de Tailwind en el Proyecto Consumidor

```javascript
// tailwind.config.js del proyecto consumidor
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@financio/design-system/dist/**/*.{js,mjs}'
  ],
  theme: {
    extend: {
      // Importar tokens del Design System
    },
  },
  plugins: [],
}
```

---

## 🏗️ MÉTODO 2: MONOREPO CON WORKSPACES

### ⭐ **Recomendado para proyectos grandes con múltiples aplicaciones**

Usa **pnpm workspaces**, **Yarn workspaces** o **npm workspaces** para gestionar el Design System y las aplicaciones en un solo repositorio.

### 2.1 Estructura del Monorepo

```
financio-monorepo/
├── packages/
│   ├── design-system/     # El Design System
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── web-app/           # Aplicación web principal
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── mobile-app/        # Aplicación móvil (React Native)
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── admin-portal/      # Portal de administración
│       ├── src/
│       ├── package.json
│       └── tsconfig.json
├── pnpm-workspace.yaml
├── package.json
└── turbo.json             # Si usas Turborepo
```

### 2.2 Configuración de pnpm Workspaces

```yaml
# pnpm-workspace.yaml
packages:
  - 'packages/*'
```

```json
// package.json (raíz)
{
  "name": "financio-monorepo",
  "private": true,
  "workspaces": [
    "packages/*"
  ],
  "devDependencies": {
    "turbo": "^1.11.0"
  },
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test"
  }
}
```

### 2.3 package.json del Design System

```json
// packages/design-system/package.json
{
  "name": "@financio/design-system",
  "version": "5.4.0",
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "exports": {
    ".": "./src/index.ts",
    "./components/*": "./src/components/*"
  }
}
```

### 2.4 Uso en Aplicaciones del Monorepo

```json
// packages/web-app/package.json
{
  "name": "@financio/web-app",
  "dependencies": {
    "@financio/design-system": "workspace:*"
  }
}
```

```tsx
// packages/web-app/src/App.tsx
import { Button, Card } from '@financio/design-system';

function App() {
  return (
    <Card>
      <Button>Click me</Button>
    </Card>
  );
}
```

### 2.5 Turborepo para Build Optimization

```json
// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "test": {
      "dependsOn": ["^build"]
    }
  }
}
```

---

## 🔗 MÉTODO 3: GIT SUBMODULE

### ⭐ **Recomendado para equipos pequeños**

Usa Git Submodules para incluir el Design System como un submódulo de Git.

### 3.1 Agregar Submodule

```bash
# En el proyecto principal
cd mi-proyecto
git submodule add https://github.com/tuempresa/financio-design-system.git src/design-system

# Inicializar y actualizar
git submodule update --init --recursive
```

### 3.2 Actualizar Submodule

```bash
# Actualizar a la última versión
cd src/design-system
git pull origin main

# Volver al proyecto principal
cd ../..
git add src/design-system
git commit -m "Update design system to latest version"
```

### 3.3 Clonar Proyecto con Submodules

```bash
# Clonar con submodules
git clone --recurse-submodules https://github.com/tuempresa/mi-proyecto.git

# O si ya clonaste sin submodules
git submodule update --init --recursive
```

### 3.4 Uso en el Proyecto

```tsx
// Importar directamente desde el submodule
import { Button } from '../design-system/src/components/ui/button';
import { Card } from '../design-system/src/components/ui/card';
```

---

## 📋 MÉTODO 4: EXPORTACIÓN MANUAL (COPY-PASTE)

### ⭐ **Recomendado para prototipos rápidos o proyectos únicos**

Simplemente copiar los archivos necesarios al proyecto.

### 4.1 Archivos a Copiar

```
mi-proyecto/
├── src/
│   ├── components/
│   │   └── ui/          # Copiar desde /components/ui/
│   ├── lib/
│   │   └── utils.ts     # Copiar desde /lib/utils.ts
│   └── styles/
│       └── globals.css  # Copiar desde /styles/globals.css
└── tailwind.config.js   # Configurar con los tokens del DS
```

### 4.2 Script de Exportación

```bash
#!/bin/bash
# export-design-system.sh

SOURCE_DIR="../financio-design-system"
TARGET_DIR="./src"

# Copiar componentes UI
cp -r "$SOURCE_DIR/components/ui" "$TARGET_DIR/components/"

# Copiar utilidades
cp -r "$SOURCE_DIR/lib" "$TARGET_DIR/"

# Copiar estilos
cp "$SOURCE_DIR/styles/globals.css" "$TARGET_DIR/styles/"

echo "✅ Design System exported successfully!"
```

### 4.3 Actualización Manual

Cuando haya cambios en el Design System, volver a ejecutar el script de exportación.

---

## 📊 COMPARATIVA DE MÉTODOS

| Característica | NPM Privado | Monorepo | Git Submodule | Copy-Paste |
|----------------|-------------|----------|---------------|------------|
| **Instalación** | `npm install` | Automático | `git submodule` | Script manual |
| **Versionado** | Semver estricto | Workspace sync | Git commits | Sin versionado |
| **Actualizaciones** | `npm update` | `pnpm update` | `git pull` | Re-copiar |
| **CI/CD** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Aislamiento** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Múltiples proyectos** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐ |
| **Desarrollo local** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Tree-shaking** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **TypeScript** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |

---

## 🎯 CONFIGURACIÓN RECOMENDADA

### Por Tamaño de Equipo

- **1-3 personas**: Método 4 (Copy-Paste) o Método 3 (Git Submodule)
- **4-10 personas**: Método 3 (Git Submodule) o Método 1 (NPM Privado)
- **10+ personas**: Método 2 (Monorepo) o Método 1 (NPM Privado)

### Por Número de Proyectos

- **1 proyecto**: Método 4 (Copy-Paste)
- **2-3 proyectos**: Método 3 (Git Submodule) o Método 1 (NPM Privado)
- **4+ proyectos**: Método 2 (Monorepo) o Método 1 (NPM Privado)

### Por Infraestructura

- **Sin registry privado**: Método 2 (Monorepo) o Método 3 (Git Submodule)
- **Con GitHub/GitLab**: Método 1 (GitHub Packages)
- **Con infraestructura propia**: Método 1 (Verdaccio)

---

## 📦 ESTRUCTURA DEL PAQUETE

### Exports Recomendados

```json
{
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./components/ui/*": "./dist/components/ui/*.js",
    "./components/advanced/*": "./dist/components/advanced/*.js",
    "./components/patterns/*": "./dist/components/patterns/*.js",
    "./styles": "./dist/styles.css",
    "./tailwind-config": "./tailwind.config.js",
    "./tokens": "./dist/tokens.js"
  }
}
```

### Tree-shaking Optimization

```typescript
// src/index.ts - NO hacer esto (importa todo)
export * from './components/ui';

// src/index.ts - SÍ hacer esto (tree-shakeable)
export { Button } from './components/ui/button';
export { Card, CardHeader, CardContent } from './components/ui/card';
export { Input } from './components/ui/input';
// ... etc
```

---

## 🧪 TESTING Y VERSIONADO

### Semantic Versioning

Seguir [Semver](https://semver.org/):

- **MAJOR** (5.x.x): Breaking changes (cambios en API, props removidos)
- **MINOR** (x.4.x): Nuevos componentes, nuevas features
- **PATCH** (x.x.1): Bug fixes, mejoras de estilo

### Changelog Automation

```bash
# Instalar conventional-changelog
npm install -D conventional-changelog-cli

# Generar changelog
npx conventional-changelog -p angular -i CHANGELOG.md -s
```

### Testing antes de Publicar

```json
{
  "scripts": {
    "prepublishOnly": "npm run test && npm run build",
    "test": "vitest run",
    "test:watch": "vitest",
    "test:coverage": "vitest run --coverage"
  }
}
```

---

## 🔧 TROUBLESHOOTING

### Problema: "Cannot find module '@financio/design-system'"

**Solución:**
```bash
# Verificar instalación
npm ls @financio/design-system

# Reinstalar
npm install @financio/design-system --force

# Limpiar cache
npm cache clean --force
```

### Problema: Estilos no se aplican

**Solución:**
```tsx
// Asegurarse de importar los estilos
import '@financio/design-system/styles';

// Y configurar Tailwind correctamente
// tailwind.config.js
content: [
  './src/**/*.{js,jsx,ts,tsx}',
  './node_modules/@financio/design-system/dist/**/*.{js,mjs}'
]
```

### Problema: TypeScript no encuentra tipos

**Solución:**
```json
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@financio/design-system": ["./node_modules/@financio/design-system/dist"]
    }
  }
}
```

### Problema: Conflictos de versión de Tailwind

**Solución:**
```json
// package.json
{
  "peerDependencies": {
    "tailwindcss": "^3.4.0"
  },
  "peerDependenciesMeta": {
    "tailwindcss": {
      "optional": false
    }
  }
}
```

---

## 📚 RECURSOS ADICIONALES

### Herramientas Recomendadas

- **Build:** [tsup](https://tsup.egoist.dev/), [unbuild](https://github.com/unjs/unbuild)
- **Monorepo:** [Turborepo](https://turbo.build/), [Nx](https://nx.dev/)
- **Registry:** [Verdaccio](https://verdaccio.org/), [GitHub Packages](https://github.com/features/packages)
- **Testing:** [Vitest](https://vitest.dev/), [Testing Library](https://testing-library.com/)
- **Docs:** [Storybook](https://storybook.js.org/), [Docusaurus](https://docusaurus.io/)

### Scripts Útiles

```json
{
  "scripts": {
    "dev": "tsup --watch",
    "build": "tsup",
    "test": "vitest",
    "lint": "eslint src",
    "format": "prettier --write src",
    "prepublishOnly": "npm run test && npm run build",
    "version": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md"
  }
}
```

---

## ✅ CHECKLIST DE EXPORTACIÓN

Antes de publicar el paquete:

- [ ] ✅ package.json configurado correctamente
- [ ] ✅ Build exitoso (dist/ generado)
- [ ] ✅ TypeScript types incluidos (.d.ts)
- [ ] ✅ README.md completo con ejemplos
- [ ] ✅ CHANGELOG.md actualizado
- [ ] ✅ Tests pasando (100% coverage recomendado)
- [ ] ✅ Estilos CSS incluidos
- [ ] ✅ Tailwind config exportado
- [ ] ✅ Peer dependencies especificadas
- [ ] ✅ Tree-shaking habilitado
- [ ] ✅ Versión semver correcta
- [ ] ✅ LICENSE file incluido
- [ ] ✅ .npmignore configurado
- [ ] ✅ Documentación de migración (si hay breaking changes)

---

## 🎉 CONCLUSIÓN

Este sistema de diseño está **listo para ser distribuido** de múltiples formas según las necesidades de tu equipo u organización.

**Recomendación principal:** Para la mayoría de casos, **Método 1 (NPM Privado)** o **Método 2 (Monorepo)** ofrecen el mejor balance entre flexibilidad, mantenibilidad y escalabilidad.

---

*Guía creada por el equipo de Financio Design System Manager*  
*Versión 1.0.0 - Enero 2026*
