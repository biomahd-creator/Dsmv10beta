# 🔄 DIAGRAMAS DE FLUJO - Publicación e Implementación

## 📊 FLUJO COMPLETO: Del Código a la Producción

```
┌─────────────────────────────────────────────────────────────────┐
│                     TU DESIGN SYSTEM LOCAL                      │
│                                                                 │
│  ├── components/ (189 componentes)                             │
│  ├── styles/ (globals.css)                                     │
│  ├── npm-package/ (index.ts + README)                          │
│  ├── package.json                                              │
│  └── tsup.config.ts                                            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ npm run build
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                        DIST/ COMPILADO                          │
│                                                                 │
│  ├── index.js (CommonJS - para Node.js)                        │
│  ├── index.mjs (ES Modules - para bundlers modernos)           │
│  ├── index.d.ts (TypeScript types - para IntelliSense)         │
│  └── styles.css (CSS compilado - opcional)                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ git init + git push
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      GITHUB REPOSITORY                          │
│                                                                 │
│  https://github.com/YOUR_USERNAME/financio-design-system        │
│                                                                 │
│  ✅ Código fuente versionado                                    │
│  ✅ Historial de cambios (commits)                              │
│  ✅ Colaboración con equipo                                     │
│  ✅ Issues y Pull Requests                                      │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ npm publish --access public
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                       NPM REGISTRY                              │
│                                                                 │
│  https://npmjs.com/package/@biomahd-creator/financio-ds         │
│                                                                 │
│  ✅ Paquete disponible para instalación                         │
│  ✅ Versionado semántico (1.0.0, 1.1.0, 2.0.0)                  │
│  ✅ Documentación visible (README)                              │
│  ✅ Download stats y métricas                                   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ npm install @biomahd-creator/financio-ds
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   PROYECTO DEL CONSUMIDOR                       │
│                                                                 │
│  my-factoring-app/                                             │
│  ├── node_modules/                                             │
│  │   └── @biomahd-creator/financio-design-system/              │
│  │       ├── dist/                                             │
│  │       │   ├── index.js                                      │
│  │       │   ├── index.mjs                                     │
│  │       │   ├── index.d.ts                                    │
│  │       │   └── styles.css                                    │
│  │       ├── guidelines/                                       │
│  │       ├── LICENSE.md                                        │
│  │       └── package.json                                      │
│  ├── src/                                                      │
│  │   ├── App.tsx                                               │
│  │   └── index.css (@import design-system/styles)              │
│  ├── tailwind.config.js                                        │
│  └── package.json                                              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ import { Button } from '@biomahd-creator/...'
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                     APLICACIÓN EN PRODUCCIÓN                    │
│                                                                 │
│  ✅ Componentes funcionando                                     │
│  ✅ Estilos aplicados                                           │
│  ✅ TypeScript IntelliSense                                     │
│  ✅ Dark mode funcionando                                       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🔀 FLUJO 1: Primera Publicación

```
START
  │
  ├─► [1] Verificar package.json
  │    ├─ name: "@biomahd-creator/financio-design-system"
  │    ├─ version: "1.0.0"
  │    ├─ main: "./dist/index.js"
  │    ├─ types: "./dist/index.d.ts"
  │    ├─ files: ["dist", "styles", "guidelines"]
  │    └─ repository: "github.com/..."
  │
  ├─► [2] Build del proyecto
  │    │
  │    ├─ npm run build
  │    │   └─► tsup compila TS → JS/MJS + types
  │    │
  │    └─ Verificar dist/
  │         ├─ index.js ✓
  │         ├─ index.mjs ✓
  │         └─ index.d.ts ✓
  │
  ├─► [3] Setup Git + GitHub
  │    │
  │    ├─ git init
  │    ├─ git add .
  │    ├─ git commit -m "feat: Initial commit"
  │    ├─ Crear repo en GitHub
  │    ├─ git remote add origin <url>
  │    └─ git push -u origin main
  │
  ├─► [4] Login NPM
  │    │
  │    ├─ npm login
  │    │   ├─ Username: ________
  │    │   ├─ Password: ********
  │    │   └─ Email: ___________
  │    │
  │    └─ npm whoami
  │         └─► "tu-username" ✓
  │
  ├─► [5] Verificar contenido
  │    │
  │    ├─ npm pack --dry-run
  │    │   └─► Lista de archivos a publicar
  │    │
  │    └─ Verificar tamaño (~400 KB) ✓
  │
  ├─► [6] PUBLICAR 🚀
  │    │
  │    └─ npm publish --access public
  │         │
  │         └─► ✅ Publicado en NPM
  │              https://npmjs.com/package/@biomahd-creator/...
  │
END
```

---

## 🔀 FLUJO 2: Implementación en Proyecto Nuevo

```
START: Crear nueva app
  │
  ├─► [1] Crear proyecto
  │    │
  │    └─ npm create vite@latest my-app -- --template react-ts
  │         └─► Proyecto base creado ✓
  │
  ├─► [2] Instalar Design System
  │    │
  │    └─ npm install @biomahd-creator/financio-design-system
  │         │
  │         └─► node_modules/@biomahd-creator/financio-design-system/
  │              ├─ dist/
  │              ├─ guidelines/
  │              └─ tailwind.config.example.js
  │
  ├─► [3] Instalar Peer Dependencies
  │    │
  │    ├─ npm install react react-dom tailwindcss
  │    ├─ npm install @radix-ui/react-* (28 packages)
  │    └─ npm install lucide-react recharts date-fns
  │
  ├─► [4] Configurar Tailwind
  │    │
  │    ├─ Crear tailwind.config.js
  │    │   ├─ darkMode: ["class"]
  │    │   ├─ content: ["./src/**", "./node_modules/@biomahd-creator/..."]
  │    │   └─ theme.extend: { colors, borderRadius }
  │    │
  │    └─ Crear postcss.config.js
  │         └─ plugins: { tailwindcss, autoprefixer }
  │
  ├─► [5] Importar Estilos
  │    │
  │    └─ src/index.css:
  │         ├─ @import '@biomahd-creator/financio-design-system/styles';
  │         ├─ @tailwind base;
  │         ├─ @tailwind components;
  │         └─ @tailwind utilities;
  │
  ├─► [6] Usar Componentes
  │    │
  │    └─ src/App.tsx:
  │         import { Button, Card } from '@biomahd-creator/...';
  │         
  │         function App() {
  │           return (
  │             <Card>
  │               <Button>Click me</Button>
  │             </Card>
  │           );
  │         }
  │
  ├─► [7] Ejecutar
  │    │
  │    └─ npm run dev
  │         └─► http://localhost:5173
  │              ✅ Componentes renderizando
  │              ✅ Estilos aplicados
  │              ✅ Dark mode funcionando
  │
END: App funcionando ✓
```

---

## 🔀 FLUJO 3: Actualización de Versión

```
START: Hacer cambios
  │
  ├─► [1] Crear Branch
  │    │
  │    └─ git checkout -b feature/nuevo-componente
  │
  ├─► [2] Hacer Cambios
  │    │
  │    ├─ Agregar nuevo componente
  │    ├─ Corregir bugs
  │    └─ Actualizar docs
  │
  ├─► [3] Commit
  │    │
  │    ├─ git add .
  │    └─ git commit -m "feat: Agregado DataGrid"
  │
  ├─► [4] Push y PR
  │    │
  │    ├─ git push origin feature/nuevo-componente
  │    ├─ Crear Pull Request en GitHub
  │    ├─ Code review
  │    └─ Merge a main
  │
  ├─► [5] Actualizar Versión
  │    │
  │    ├─ Tipo de cambio?
  │    │   ├─► Bugfix → npm version patch (1.0.0 → 1.0.1)
  │    │   ├─► Feature → npm version minor (1.0.0 → 1.1.0)
  │    │   └─► Breaking → npm version major (1.0.0 → 2.0.0)
  │    │
  │    └─► package.json actualizado
  │         Git tag creado (v1.1.0)
  │
  ├─► [6] Build
  │    │
  │    └─ npm run build
  │         └─► dist/ actualizado ✓
  │
  ├─► [7] Push Tags
  │    │
  │    └─ git push origin main --tags
  │         └─► Tag v1.1.0 en GitHub ✓
  │
  ├─► [8] Publicar Nueva Versión
  │    │
  │    └─ npm publish --access public
  │         │
  │         └─► ✅ v1.1.0 publicada en NPM
  │
  └─► [9] Usuarios Actualizan
       │
       └─ En proyectos consumidores:
            │
            ├─ npm update @biomahd-creator/financio-design-system
            │   └─► 1.0.0 → 1.1.0 ✓
            │
            └─ Nuevos features disponibles ✓
END
```

---

## 🔀 FLUJO 4: Resolución de Issues

```
START: Usuario reporta bug
  │
  ├─► [1] Issue en GitHub
  │    │
  │    └─ https://github.com/.../issues/23
  │         "Button ghost no visible en dark mode"
  │
  ├─► [2] Reproducir Bug
  │    │
  │    ├─ Clonar repo
  │    ├─ npm install
  │    ├─ npm run dev
  │    └─► Bug confirmado ✓
  │
  ├─► [3] Crear Branch
  │    │
  │    └─ git checkout -b fix/button-ghost-dark-mode
  │
  ├─► [4] Corregir Bug
  │    │
  │    └─ styles/globals.css:
  │         .dark .button-ghost {
  │           color: hsl(var(--foreground)); /* ✓ Agregado */
  │         }
  │
  ├─► [5] Test Local
  │    │
  │    ├─ npm run build
  │    ├─ Verificar en dev
  │    └─► Bug corregido ✓
  │
  ├─► [6] Commit y PR
  │    │
  │    ├─ git commit -m "fix: Button ghost visible en dark mode"
  │    ├─ git push origin fix/button-ghost-dark-mode
  │    ├─ Crear PR con referencia al issue (#23)
  │    └─ Merge a main
  │
  ├─► [7] Patch Release
  │    │
  │    ├─ npm version patch
  │    │   └─► 1.1.0 → 1.1.1
  │    │
  │    ├─ npm run build
  │    ├─ git push origin main --tags
  │    └─ npm publish --access public
  │
  └─► [8] Notificar Usuario
       │
       └─ Comentar en issue:
            "✅ Corregido en v1.1.1
             npm update @biomahd-creator/financio-design-system"
END: Issue cerrado ✓
```

---

## 📊 ARQUITECTURA: Cómo Funciona el Paquete

```
┌──────────────────────────────────────────────────────────────────┐
│                    PAQUETE EN NPM REGISTRY                       │
└──────────────────────────────────────────────────────────────────┘
                              │
                              │ npm install
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                   NODE_MODULES DEL PROYECTO                      │
│                                                                  │
│  @biomahd-creator/financio-design-system/                       │
│  │                                                               │
│  ├─ dist/                                                        │
│  │  ├─ index.js ────────────┐                                   │
│  │  ├─ index.mjs ───────────┼─► Código compilado (JS)           │
│  │  ├─ index.d.ts ──────────┼─► TypeScript types                │
│  │  └─ styles.css ──────────┘   CSS compilado                   │
│  │                                                               │
│  ├─ guidelines/ ─────────────► Documentación MD                 │
│  ├─ LICENSE.md ──────────────► MIT License                      │
│  ├─ tailwind.config.example.js ─► Config de referencia          │
│  └─ package.json ────────────► Metadata del paquete             │
└──────────────────────────────────────────────────────────────────┘
                              │
                              │ import { Button } from '...'
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                        TU APLICACIÓN                             │
│                                                                  │
│  src/App.tsx:                                                    │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ import { Button } from '@biomahd-creator/financio-ds';     │ │
│  │                                                            │ │
│  │ function App() {                                           │ │
│  │   return <Button>Click</Button>;                           │ │
│  │ }                                                           │ │
│  └────────────────────────────────────────────────────────────┘ │
│                              │                                   │
│                              ▼                                   │
│  BUNDLER (Vite/Webpack):                                        │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ 1. Resuelve import desde node_modules/                    │ │
│  │ 2. Lee dist/index.mjs (ESM)                                │ │
│  │ 3. Obtiene código del Button                              │ │
│  │ 4. Incluye solo lo que usas (tree-shaking)                │ │
│  │ 5. Compila todo a bundle final                            │ │
│  └────────────────────────────────────────────────────────────┘ │
│                              │                                   │
│                              ▼                                   │
│  dist/assets/index-a1b2c3.js ────► Bundle optimizado            │
│  dist/assets/index-x9y8z7.css ───► Estilos compilados           │
└──────────────────────────────────────────────────────────────────┘
                              │
                              │ npm run build
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                      APLICACIÓN DESPLEGADA                       │
│                                                                  │
│  https://mi-app.com/                                            │
│  ├─ index.html                                                  │
│  ├─ assets/index-a1b2c3.js ──► Código JS minificado             │
│  └─ assets/index-x9y8z7.css ─► CSS minificado                   │
│                                                                  │
│  Usuario ve el Button funcionando ✅                             │
└──────────────────────────────────────────────────────────────────┘
```

---

## 🎯 PUNTOS CLAVE

### ✅ GitHub = Código Fuente
- **Para qué**: Versionamiento, colaboración, backup
- **Quién lo usa**: Desarrolladores del Design System
- **Contenido**: Código fuente completo (components/, styles/, etc.)

### ✅ NPM = Paquete Compilado
- **Para qué**: Distribución, instalación fácil
- **Quién lo usa**: Consumidores del Design System
- **Contenido**: Solo dist/, guidelines/, LICENSE

### ✅ node_modules/ = Instalación Local
- **Para qué**: Dependencias del proyecto
- **Quién lo usa**: Bundler (Vite, Webpack)
- **Contenido**: Copia del paquete de NPM

---

## 🔄 RELACIÓN ENTRE REPOSITORIOS

```
┌─────────────────────────────────────────────────────────────┐
│  DESIGN SYSTEM REPO (GitHub)                                │
│  https://github.com/you/financio-design-system              │
│                                                             │
│  ├─ components/ (código fuente)                             │
│  ├─ styles/ (CSS fuente)                                    │
│  ├─ npm-package/ (exports)                                  │
│  ├─ package.json                                            │
│  └─ tsup.config.ts                                          │
│                                                             │
│  👥 Team trabaja aquí ←─┐                                   │
└─────────────────────────┼─────────────────────────────────┬─┘
                          │                                 │
                   git push│                                 │npm publish
                          │                                 │
                          ▼                                 ▼
       ┌──────────────────────────────┐   ┌─────────────────────────────┐
       │  GitHub (Source Control)     │   │  NPM Registry               │
       │  - Code review               │   │  - Distribution             │
       │  - Issues                    │   │  - Versioning               │
       │  - PRs                       │   │  - Download stats           │
       └──────────────────────────────┘   └─────────────────────────────┘
                                                       │
                                                       │npm install
                                                       ▼
                          ┌──────────────────────────────────────────┐
                          │  APP 1                                   │
                          │  node_modules/@biomahd-creator/...       │
                          └──────────────────────────────────────────┘
                          ┌──────────────────────────────────────────┐
                          │  APP 2                                   │
                          │  node_modules/@biomahd-creator/...       │
                          └──────────────────────────────────────────┘
                          ┌──────────────────────────────────────────┐
                          │  APP 3                                   │
                          │  node_modules/@biomahd-creator/...       │
                          └──────────────────────────────────────────┘
                                    
                          👥 Usuarios finales usan las apps
```

---

**Última actualización**: Enero 23, 2026
