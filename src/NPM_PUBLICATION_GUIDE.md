# 🚀 GUÍA COMPLETA: Publicación NPM y Setup en Repositorio

## 📋 ÍNDICE

1. [Preparación del Proyecto](#1-preparación-del-proyecto)
2. [Setup del Repositorio Git](#2-setup-del-repositorio-git)
3. [Publicación en NPM](#3-publicación-en-npm)
4. [Implementación en Otros Proyectos](#4-implementación-en-otros-proyectos)
5. [Mantenimiento y Actualizaciones](#5-mantenimiento-y-actualizaciones)

---

## 1. PREPARACIÓN DEL PROYECTO

### ✅ Checklist Pre-Publicación

Antes de publicar, verifica que TODO esté en orden:

```bash
# 1. Verificar que compile sin errores
npm run build

# 2. Verificar la estructura de archivos
ls -la

# 3. Verificar que package.json tenga todo correcto
cat package.json
```

### 📦 Estructura de Carpetas Actual

Tu proyecto debería verse así:

```
financio-design-system/
├── components/              # 189 componentes organizados
│   ├── ui/                  # Shadcn/ui base (44 componentes)
│   ├── advanced/            # Componentes avanzados (17)
│   ├── business/            # Componentes de negocio (21)
│   ├── patterns/            # Patrones (10)
│   └── core/                # Core components
├── styles/
│   └── globals.css          # Design tokens y estilos globales
├── guidelines/              # Documentación del sistema
│   ├── Guidelines.md
│   ├── CORE.md
│   ├── TOKENS.md
│   ├── COMPONENTS.md
│   ├── EXAMPLES.md
│   ├── UXWRITING.md
│   └── PROMPT_GUIDE.md
├── npm-package/
│   ├── index.ts             # Export barrel (189 componentes)
│   └── README.md            # Documentación para NPM
├── dist/                    # Generado por npm run build
│   ├── index.js             # CommonJS
│   ├── index.mjs            # ES Modules
│   ├── index.d.ts           # TypeScript types
│   └── styles.css           # CSS compilado
├── package.json             # Metadata del paquete
├── tsconfig.json            # TypeScript config
├── tsup.config.ts           # Build config
├── tailwind.config.example.js  # Configuración de referencia
├── LICENSE.md               # MIT License
├── INSTALLATION_GUIDE.md    # Guía de instalación
└── .gitignore               # Archivos a ignorar
```

### 📝 Archivos Críticos para NPM

**package.json** debe tener:

```json
{
  "name": "@biomahd-creator/financio-design-system",
  "version": "1.0.0",
  "description": "Design System completo para aplicaciones de Factoring con Shadcn/ui y Tailwind CSS",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./styles": "./dist/styles.css"
  },
  "files": [
    "dist",
    "styles",
    "guidelines",
    "LICENSE.md",
    "tailwind.config.example.js"
  ],
  "scripts": {
    "build": "tsup npm-package/index.ts --format cjs,esm --dts",
    "build:css": "tailwindcss -i ./styles/globals.css -o ./dist/styles.css --minify"
  },
  "keywords": [
    "design-system",
    "factoring",
    "shadcn-ui",
    "tailwindcss",
    "react",
    "typescript",
    "financio"
  ],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/financio-design-system.git"
  },
  "homepage": "https://github.com/YOUR_USERNAME/financio-design-system#readme",
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/financio-design-system/issues"
  }
}
```

**IMPORTANTE**: Actualiza estos campos antes de publicar:
- `author`
- `repository.url`
- `homepage`
- `bugs.url`

---

## 2. SETUP DEL REPOSITORIO GIT

### 🔧 Paso 1: Crear .gitignore

```bash
# .gitignore
node_modules/
dist/
.DS_Store
.env
.env.local
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
.idea/
.vscode/
*.swp
*.swo
*~
.cache/
coverage/
.turbo/
```

### 🔧 Paso 2: Inicializar Git (si no está inicializado)

```bash
# Inicializar repositorio
git init

# Configurar tu nombre y email (si es la primera vez)
git config user.name "Tu Nombre"
git config user.email "tu.email@example.com"

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "feat: Initial commit - Design System v1.0.0 con 189 componentes"
```

### 🔧 Paso 3: Crear Repositorio en GitHub

1. **Ve a GitHub.com** y haz login
2. **Click en "New Repository"** (botón verde)
3. **Configura el repositorio**:
   - **Name**: `financio-design-system`
   - **Description**: `Design System completo para aplicaciones de Factoring con 189 componentes`
   - **Visibility**: 
     - ✅ **Public** (recomendado para NPM público)
     - ⚠️ **Private** (si quieres NPM privado o control total)
   - **NO inicialices con README, .gitignore, o license** (ya los tienes)

4. **Click "Create Repository"**

### 🔧 Paso 4: Conectar Repositorio Local con GitHub

GitHub te mostrará comandos. Usa estos:

```bash
# Agregar origin remoto
git remote add origin https://github.com/YOUR_USERNAME/financio-design-system.git

# O si usas SSH:
git remote add origin git@github.com:YOUR_USERNAME/financio-design-system.git

# Renombrar branch a main (si es necesario)
git branch -M main

# Push inicial
git push -u origin main
```

### 🔧 Paso 5: Verificar que se subió correctamente

```bash
# Ver el estado
git status

# Ver branches remotos
git branch -a

# Ver el log
git log --oneline
```

Ve a `https://github.com/YOUR_USERNAME/financio-design-system` y verifica que todos los archivos estén ahí.

---

## 3. PUBLICACIÓN EN NPM

### 🔧 Paso 1: Crear Cuenta en NPM (si no tienes)

1. Ve a **https://www.npmjs.com/signup**
2. Crea tu cuenta
3. **IMPORTANTE**: Verifica tu email

### 🔧 Paso 2: Login desde Terminal

```bash
# Login en NPM
npm login

# Te pedirá:
# - Username
# - Password
# - Email
# - One-time password (si tienes 2FA activado)

# Verificar que estás logueado
npm whoami
# Debería mostrar tu username
```

### 🔧 Paso 3: Verificar Nombre del Paquete

```bash
# Verificar si el nombre está disponible
npm search @biomahd-creator/financio-design-system

# Si NO aparece nada, está disponible ✅
# Si aparece, necesitas cambiar el nombre ❌
```

**Si necesitas cambiar el nombre**, edita `package.json`:

```json
{
  "name": "@tu-username/financio-design-system",
  // ...
}
```

### 🔧 Paso 4: Build Final

```bash
# Limpiar dist anterior (si existe)
rm -rf dist

# Build completo
npm run build

# Verificar que dist/ se creó correctamente
ls -la dist/

# Deberías ver:
# - index.js (CommonJS)
# - index.mjs (ES Modules)
# - index.d.ts (TypeScript types)
# - styles.css (opcional, si tienes build:css)
```

### 🔧 Paso 5: Verificar Contenido del Paquete

```bash
# Ver qué archivos se incluirán en NPM
npm pack --dry-run

# Esto muestra:
# - Tamaño total del paquete
# - Lista de archivos incluidos
# - Advertencias (si hay)
```

**Ejemplo de output esperado**:

```
npm notice 
npm notice 📦  @biomahd-creator/financio-design-system@1.0.0
npm notice === Tarball Contents === 
npm notice 1.2kB  LICENSE.md                       
npm notice 3.5kB  README.md                        
npm notice 1.1MB  dist/index.js                    
npm notice 1.0MB  dist/index.mjs                   
npm notice 45kB   dist/index.d.ts                  
npm notice 120kB  dist/styles.css                  
npm notice 8.5kB  guidelines/Guidelines.md         
npm notice 12kB   guidelines/CORE.md               
npm notice 15kB   guidelines/TOKENS.md             
npm notice 25kB   guidelines/COMPONENTS.md         
npm notice 18kB   guidelines/EXAMPLES.md           
npm notice 9kB    guidelines/UXWRITING.md          
npm notice 11kB   guidelines/PROMPT_GUIDE.md       
npm notice 2.3kB  tailwind.config.example.js       
npm notice 5.6kB  package.json                     
npm notice === Tarball Details === 
npm notice name:          @biomahd-creator/financio-design-system
npm notice version:       1.0.0
npm notice filename:      biomahd-creator-financio-design-system-1.0.0.tgz
npm notice package size:  400.5 kB
npm notice unpacked size: 2.5 MB
npm notice shasum:        a1b2c3d4e5f6...
npm notice integrity:     sha512-xyz...
npm notice total files:   15
```

### 🔧 Paso 6: Crear Paquete Local (Testing)

```bash
# Crear el archivo .tgz localmente
npm pack

# Esto crea: biomahd-creator-financio-design-system-1.0.0.tgz

# Verificar el contenido
tar -tzf biomahd-creator-financio-design-system-1.0.0.tgz | head -20
```

### 🔧 Paso 7: PUBLICAR EN NPM 🚀

```bash
# OPCIÓN 1: Publicación pública (recomendado)
npm publish --access public

# OPCIÓN 2: Publicación privada (solo para cuentas PRO)
npm publish --access restricted
```

**Output esperado**:

```
npm notice 
npm notice 📦  @biomahd-creator/financio-design-system@1.0.0
npm notice === Tarball Details === 
npm notice name:          @biomahd-creator/financio-design-system
npm notice version:       1.0.0
npm notice filename:      biomahd-creator-financio-design-system-1.0.0.tgz
npm notice package size:  400.5 kB
npm notice unpacked size: 2.5 MB
npm notice shasum:        a1b2c3d4e5f6...
npm notice integrity:     sha512-xyz...
npm notice total files:   15
npm notice 
npm notice Publishing to https://registry.npmjs.org/ with tag latest and access public
+ @biomahd-creator/financio-design-system@1.0.0
```

### 🔧 Paso 8: Verificar Publicación

```bash
# Ver info del paquete
npm info @biomahd-creator/financio-design-system

# O visita:
# https://www.npmjs.com/package/@biomahd-creator/financio-design-system
```

---

## 4. IMPLEMENTACIÓN EN OTROS PROYECTOS

### 🎯 Opción A: Proyecto Nuevo (Vite + React + TypeScript)

```bash
# 1. Crear proyecto
npm create vite@latest my-factoring-app -- --template react-ts
cd my-factoring-app

# 2. Instalar el Design System
npm install @biomahd-creator/financio-design-system

# 3. Instalar peer dependencies
npm install react react-dom tailwindcss
npm install @radix-ui/react-accordion @radix-ui/react-alert-dialog @radix-ui/react-aspect-ratio @radix-ui/react-avatar @radix-ui/react-checkbox @radix-ui/react-collapsible @radix-ui/react-context-menu @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-hover-card @radix-ui/react-label @radix-ui/react-menubar @radix-ui/react-navigation-menu @radix-ui/react-popover @radix-ui/react-progress @radix-ui/react-radio-group @radix-ui/react-scroll-area @radix-ui/react-select @radix-ui/react-separator @radix-ui/react-slider @radix-ui/react-slot @radix-ui/react-switch @radix-ui/react-tabs @radix-ui/react-toast @radix-ui/react-toggle @radix-ui/react-toggle-group @radix-ui/react-tooltip

# 4. Instalar optional dependencies (si necesitas)
npm install driver.js xlsx

# 5. Instalar otras dependencias
npm install lucide-react class-variance-authority clsx tailwind-merge recharts react-day-picker date-fns
```

### 📝 Setup de Tailwind CSS

**1. Crear `tailwind.config.js`**:

```bash
# Copiar configuración de ejemplo del paquete
cp node_modules/@biomahd-creator/financio-design-system/tailwind.config.example.js tailwind.config.js
```

O crear manualmente:

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@biomahd-creator/financio-design-system/dist/**/*.{js,mjs}",
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
  plugins: [],
}
```

**2. Crear `postcss.config.js`**:

```javascript
// postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

**3. Importar estilos en `src/index.css`**:

```css
/* src/index.css */
@import '@biomahd-creator/financio-design-system/styles';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 📝 Usar Componentes en tu App

**src/App.tsx**:

```tsx
import { useState } from 'react';
import { Button } from '@biomahd-creator/financio-design-system';
import { Card, CardHeader, CardTitle, CardContent } from '@biomahd-creator/financio-design-system';
import { Badge } from '@biomahd-creator/financio-design-system';
import { Bell, Plus } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Mi App de Factoring</h1>
          <Badge variant="secondary">v1.0.0</Badge>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Panel de Control</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Bienvenido a tu aplicación construida con Financio Design System
            </p>
            
            <div className="flex gap-2">
              <Button onClick={() => setCount(count + 1)}>
                <Plus className="h-4 w-4 mr-2" />
                Incrementar: {count}
              </Button>
              
              <Button variant="outline">
                <Bell className="h-4 w-4 mr-2" />
                Notificaciones
              </Button>
              
              <Button variant="ghost">
                Cancelar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default App;
```

### 🎨 Dark Mode Toggle

**src/components/ThemeToggle.tsx**:

```tsx
import { Moon, Sun } from 'lucide-react';
import { Button } from '@biomahd-creator/financio-design-system';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}
```

### 🚀 Ejecutar

```bash
npm run dev
```

---

### 🎯 Opción B: Proyecto Existente

```bash
# 1. Instalar el Design System
npm install @biomahd-creator/financio-design-system

# 2. Instalar peer dependencies (solo las que no tengas)
npm install <missing-dependencies>

# 3. Configurar Tailwind (seguir pasos anteriores)

# 4. Importar estilos
# En tu index.css o App.css:
# @import '@biomahd-creator/financio-design-system/styles';
```

---

## 5. MANTENIMIENTO Y ACTUALIZACIONES

### 📦 Publicar Nueva Versión

```bash
# 1. Hacer cambios en el código

# 2. Commit los cambios
git add .
git commit -m "feat: Agregado nuevo componente X"

# 3. Actualizar versión (elige uno)
npm version patch   # 1.0.0 → 1.0.1 (bugfixes)
npm version minor   # 1.0.0 → 1.1.0 (nuevas features)
npm version major   # 1.0.0 → 2.0.0 (breaking changes)

# 4. Build
npm run build

# 5. Push a GitHub
git push origin main --tags

# 6. Publicar a NPM
npm publish --access public
```

### 📝 Semantic Versioning (SemVer)

```
MAJOR.MINOR.PATCH
  │     │     │
  │     │     └─── Bugfixes, pequeñas correcciones
  │     └─────────── Nuevas features (sin romper compatibilidad)
  └───────────────── Breaking changes (incompatible con versión anterior)
```

**Ejemplos**:

- `1.0.0` → `1.0.1`: Corrección de bug en Button
- `1.0.1` → `1.1.0`: Agregado nuevo componente DataTable
- `1.1.0` → `2.0.0`: Cambio de props en Card (breaking)

### 📋 CHANGELOG.md

Crea un archivo `CHANGELOG.md` para documentar cambios:

```markdown
# Changelog

## [1.0.1] - 2026-01-23
### Fixed
- Corrección en tooltip de charts
- Botones ghost y outline ahora visibles en dark mode

## [1.0.0] - 2026-01-23
### Added
- Lanzamiento inicial con 189 componentes
- 44 componentes shadcn/ui
- 17 componentes avanzados
- 21 componentes de negocio
- 10 patrones de diseño
- Sistema completo de design tokens
```

### 🔄 Workflow Recomendado

```bash
# Branch para nueva feature
git checkout -b feature/nuevo-componente

# Hacer cambios
# ...

# Commit
git add .
git commit -m "feat: Agregado nuevo componente DataGrid"

# Push a GitHub
git push origin feature/nuevo-componente

# Crear Pull Request en GitHub
# Revisar y mergear

# Volver a main
git checkout main
git pull

# Actualizar versión y publicar
npm version minor
npm run build
git push origin main --tags
npm publish --access public
```

---

## 🎯 RESUMEN RÁPIDO

### Para Publicar por Primera Vez:

```bash
# 1. Setup GitHub
git init
git add .
git commit -m "feat: Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/financio-design-system.git
git push -u origin main

# 2. Build
npm run build

# 3. Publicar NPM
npm login
npm publish --access public
```

### Para Usar en Otro Proyecto:

```bash
# 1. Instalar
npm install @biomahd-creator/financio-design-system

# 2. Instalar peer deps
npm install react react-dom tailwindcss @radix-ui/... lucide-react

# 3. Configurar Tailwind
# (copiar tailwind.config.example.js)

# 4. Importar estilos
# @import '@biomahd-creator/financio-design-system/styles';

# 5. Usar componentes
import { Button } from '@biomahd-creator/financio-design-system';
```

### Para Actualizar:

```bash
# 1. Hacer cambios
# 2. npm version patch/minor/major
# 3. npm run build
# 4. git push origin main --tags
# 5. npm publish --access public
```

---

## 🆘 TROUBLESHOOTING

### Error: "Package name taken"

```bash
# Cambiar nombre en package.json
{
  "name": "@tu-username-unico/financio-design-system"
}
```

### Error: "You do not have permission to publish"

```bash
# Asegúrate de estar logueado
npm whoami

# Re-login si es necesario
npm logout
npm login
```

### Error: "Module not found" al importar

```bash
# Verificar que se instaló correctamente
npm list @biomahd-creator/financio-design-system

# Reinstalar si es necesario
npm install @biomahd-creator/financio-design-system --force
```

### Estilos no se aplican

```bash
# 1. Verificar que importaste los estilos
# @import '@biomahd-creator/financio-design-system/styles';

# 2. Verificar tailwind.config.js content
content: [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@biomahd-creator/financio-design-system/dist/**/*.{js,mjs}",
]

# 3. Reiniciar dev server
npm run dev
```

---

## 📚 RECURSOS

- **NPM Docs**: https://docs.npmjs.com/
- **GitHub Docs**: https://docs.github.com/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Shadcn/ui**: https://ui.shadcn.com/
- **Radix UI**: https://www.radix-ui.com/

---

**Última actualización**: Enero 23, 2026  
**Versión de esta guía**: 1.0.0
