# 🚀 Guía Práctica: Publicar Design System en NPM

**Fecha:** 22 de Enero de 2026  
**Versión:** 1.0.0  
**Tiempo estimado:** 30-45 minutos

---

## 📋 ÍNDICE

1. [Decisión Inicial: ¿Qué tipo de NPM usar?](#decisión-inicial)
2. [Opción A: GitHub Packages (RECOMENDADO - GRATIS)](#opción-a-github-packages)
3. [Opción B: NPM Registry Público (GRATIS pero público)](#opción-b-npm-registry-público)
4. [Opción C: Verdaccio (GRATIS - Auto-hospedado)](#opción-c-verdaccio)
5. [Preparar el Paquete](#preparar-el-paquete)
6. [Publicar y Probar](#publicar-y-probar)

---

## 🎯 DECISIÓN INICIAL

Primero, decide qué tipo de NPM registry usar:

| Opción | Costo | Privacidad | Dificultad | Recomendado Si... |
|--------|-------|------------|------------|-------------------|
| **GitHub Packages** | ✅ GRATIS | ✅ Privado | ⭐⭐ | Tienes GitHub (más común) |
| **NPM Público** | ✅ GRATIS | ❌ Público | ⭐ | Quieres compartir con todos |
| **NPM Privado** | 💰 $7/mes | ✅ Privado | ⭐ | Presupuesto disponible |
| **Verdaccio** | ✅ GRATIS | ✅ Privado | ⭐⭐⭐ | Tienes servidor propio |

**MI RECOMENDACIÓN:** Comienza con **GitHub Packages** (Opción A) - es gratis, privado y fácil de configurar.

---

## 🎁 OPCIÓN A: GITHUB PACKAGES (RECOMENDADO)

### Paso 1: Crear Repositorio en GitHub

```bash
# Si no tienes repositorio, créalo
git init
git remote add origin https://github.com/TU_USUARIO/financio-design-system.git
git add .
git commit -m "Initial commit"
git push -u origin main
```

### Paso 2: Crear Token de Acceso Personal (PAT)

1. Ve a GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Nombre: `NPM_PUBLISH_TOKEN`
4. Permisos necesarios:
   - ✅ `write:packages` (publicar paquetes)
   - ✅ `read:packages` (leer paquetes)
   - ✅ `delete:packages` (opcional - eliminar versiones)
5. Click "Generate token"
6. **¡COPIA EL TOKEN AHORA!** (no lo verás de nuevo)

### Paso 3: Configurar NPM localmente

```bash
# Crear archivo .npmrc en tu HOME (~/.npmrc)
echo "@TU_USUARIO:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=TU_TOKEN_AQUI" >> ~/.npmrc
```

**Ejemplo real:**
```bash
# Si tu usuario de GitHub es "juanperez"
echo "@juanperez:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=ghp_xxxxxxxxxxxxxxxxxxxx" >> ~/.npmrc
```

### Paso 4: Configurar package.json

El archivo ya está listo en `/package.json` (generado automáticamente).

Verifica que tenga:
```json
{
  "name": "@TU_USUARIO/financio-design-system",
  "publishConfig": {
    "@TU_USUARIO:registry": "https://npm.pkg.github.com"
  }
}
```

### Paso 5: Publicar

```bash
# Build del paquete
npm run build:package

# Publicar
npm publish
```

### Paso 6: Instalar en otros proyectos

```bash
# En el proyecto que usará el Design System

# 1. Crear .npmrc en el proyecto
echo "@TU_USUARIO:registry=https://npm.pkg.github.com" > .npmrc
echo "//npm.pkg.github.com/:_authToken=${NPM_TOKEN}" >> .npmrc

# 2. Instalar
npm install @TU_USUARIO/financio-design-system
```

**IMPORTANTE:** Cada persona que use el paquete necesita su propio token de GitHub.

---

## 🌐 OPCIÓN B: NPM REGISTRY PÚBLICO

### ⚠️ ADVERTENCIA
El paquete será **PÚBLICO** - cualquiera podrá verlo e instalarlo.

### Paso 1: Crear cuenta en npmjs.com

1. Ve a https://www.npmjs.com/signup
2. Crea tu cuenta
3. Verifica tu email

### Paso 2: Login desde terminal

```bash
npm login
# Username: tu_usuario
# Password: tu_password
# Email: tu_email
```

### Paso 3: Verificar nombre disponible

```bash
# Buscar si el nombre existe
npm search financio-design-system
```

Si existe, cambia el nombre en `package.json`:
```json
{
  "name": "@tu-usuario/financio-design-system"
}
```

### Paso 4: Publicar

```bash
# Build
npm run build:package

# Publicar
npm publish --access public
```

### Paso 5: Instalar en otros proyectos

```bash
npm install @tu-usuario/financio-design-system
```

---

## 🏠 OPCIÓN C: VERDACCIO (AUTO-HOSPEDADO)

### Ventajas
- ✅ 100% gratis
- ✅ Privado
- ✅ Control total
- ✅ Funciona sin internet (red local)

### Desventajas
- ❌ Necesitas un servidor/PC siempre encendido
- ❌ Configuración más compleja

### Paso 1: Instalar Verdaccio

```bash
# Opción A: Instalación global
npm install -g verdaccio

# Opción B: Docker (recomendado para producción)
docker pull verdaccio/verdaccio
docker run -d --name verdaccio -p 4873:4873 verdaccio/verdaccio
```

### Paso 2: Iniciar Verdaccio

```bash
# Si instalaste globalmente
verdaccio

# Se ejecutará en http://localhost:4873
```

### Paso 3: Crear usuario

```bash
npm adduser --registry http://localhost:4873
# Username: admin
# Password: tu_password
# Email: admin@localhost
```

### Paso 4: Configurar package.json

```json
{
  "publishConfig": {
    "registry": "http://localhost:4873"
  }
}
```

### Paso 5: Publicar

```bash
npm run build:package
npm publish --registry http://localhost:4873
```

### Paso 6: Instalar en otros proyectos

```bash
# Opción A: Por proyecto (crear .npmrc)
echo "registry=http://localhost:4873" > .npmrc
npm install @financio/design-system

# Opción B: Global
npm set registry http://localhost:4873
npm install @financio/design-system
```

### Paso 7: Acceso desde otros equipos (red local)

```bash
# En lugar de localhost, usa la IP del servidor
npm set registry http://192.168.1.100:4873
npm install @financio/design-system
```

---

## 📦 PREPARAR EL PAQUETE

### Archivos ya creados automáticamente:

✅ `/package.json` - Configuración del paquete  
✅ `/tsup.config.ts` - Configuración de build  
✅ `/npm-package/` - Carpeta con archivos a exportar  

### Estructura que se publicará:

```
@financio/design-system/
├── dist/
│   ├── index.js         # CommonJS
│   ├── index.mjs        # ES Modules
│   ├── index.d.ts       # TypeScript types
│   ├── components/      # Componentes compilados
│   └── styles.css       # Estilos compilados
├── package.json
└── README.md
```

### Build del paquete

```bash
# Build completo
npm run build:package

# Resultado en /dist
```

### Verificar antes de publicar

```bash
# Ver qué archivos se publicarán
npm pack --dry-run

# Crear tarball local para probar
npm pack
# Genera: financio-design-system-5.4.0.tgz
```

---

## 🧪 PUBLICAR Y PROBAR

### 1. Primera publicación

```bash
# Verificar login
npm whoami --registry=TU_REGISTRY

# Build
npm run build:package

# Publicar versión 5.4.0
npm publish
```

### 2. Verificar publicación

**GitHub Packages:**
- Ve a tu repo → Packages → Deberías ver el paquete

**NPM Público:**
- Ve a https://www.npmjs.com/package/@tu-usuario/financio-design-system

**Verdaccio:**
- Ve a http://localhost:4873 → Busca tu paquete

### 3. Probar instalación

Crea un proyecto de prueba:

```bash
# Crear proyecto nuevo
mkdir test-design-system
cd test-design-system
npm init -y
npm install react react-dom

# Configurar .npmrc si usas GitHub Packages o Verdaccio
echo "@TU_USUARIO:registry=https://npm.pkg.github.com" > .npmrc

# Instalar tu paquete
npm install @TU_USUARIO/financio-design-system
```

### 4. Probar en código

```tsx
// test.tsx
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

### 5. Actualizar versión

Cuando hagas cambios:

```bash
# Incrementar versión (automáticamente actualiza package.json)
npm version patch   # 5.4.0 → 5.4.1 (bug fixes)
npm version minor   # 5.4.0 → 5.5.0 (nuevas features)
npm version major   # 5.4.0 → 6.0.0 (breaking changes)

# Build y publicar
npm run build:package
npm publish
```

---

## 🔒 SEGURIDAD

### .gitignore

Asegúrate de tener en `.gitignore`:

```
# Nunca subir tokens
.npmrc

# Build artifacts
dist/
*.tgz
```

### Variables de entorno (para CI/CD)

```bash
# GitHub Actions
# Agrega en Settings → Secrets → Actions
NPM_TOKEN=tu_token_de_github
```

Ejemplo de GitHub Action:

```yaml
# .github/workflows/publish.yml
name: Publish to GitHub Packages

on:
  release:
    types: [created]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          registry-url: 'https://npm.pkg.github.com'
      
      - run: npm ci
      - run: npm run build:package
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## ❓ TROUBLESHOOTING

### Error: "You must be logged in to publish packages"

```bash
# Verifica que estás logueado
npm whoami

# Si no, login de nuevo
npm login
```

### Error: "Package name too similar to existing package"

Cambia el nombre en `package.json`:
```json
{
  "name": "@tu-usuario/financio-ds"
}
```

### Error: "402 Payment Required"

Estás intentando publicar un paquete scoped (@financio/...) como privado en NPM público.

**Solución 1:** Publica como público:
```bash
npm publish --access public
```

**Solución 2:** Usa GitHub Packages (gratis)

### Error: "ENOENT: no such file or directory, open 'dist/index.js'"

Olvidaste hacer el build:
```bash
npm run build:package
```

### Los estilos no se aplican en el proyecto consumidor

```tsx
// Asegúrate de importar los estilos
import '@financio/design-system/styles';
```

Y configura Tailwind:
```javascript
// tailwind.config.js
content: [
  './src/**/*.{js,jsx,ts,tsx}',
  './node_modules/@financio/design-system/dist/**/*.{js,mjs}'
]
```

---

## ✅ CHECKLIST FINAL

Antes de publicar, verifica:

- [ ] ✅ `package.json` tiene el nombre correcto
- [ ] ✅ `package.json` tiene la versión correcta
- [ ] ✅ Repositorio Git configurado (si usas GitHub Packages)
- [ ] ✅ Token de acceso creado y configurado
- [ ] ✅ `.npmrc` configurado localmente
- [ ] ✅ `.npmrc` en `.gitignore`
- [ ] ✅ Build exitoso (`npm run build:package`)
- [ ] ✅ `dist/` contiene todos los archivos
- [ ] ✅ README.md actualizado
- [ ] ✅ Probaste `npm pack --dry-run`
- [ ] ✅ Logged in en el registry (`npm whoami`)

---

## 🎉 PRÓXIMOS PASOS

Una vez publicado:

1. **Documentación:** Actualiza README.md con instrucciones de instalación
2. **CHANGELOG:** Mantén un historial de versiones
3. **CI/CD:** Automatiza publicación con GitHub Actions
4. **Testing:** Agrega tests antes de publicar (`prepublishOnly`)
5. **Storybook:** Crea documentación visual (opcional)

---

## 📚 COMANDOS ÚTILES

```bash
# Ver versión actual
npm view @financio/design-system version

# Ver todas las versiones publicadas
npm view @financio/design-system versions

# Descargar paquete sin instalarlo
npm pack @financio/design-system

# Ver info del paquete
npm info @financio/design-system

# Deprecar una versión
npm deprecate @financio/design-system@5.4.0 "Use 5.4.1 instead"

# Eliminar versión (solo primeras 72 horas)
npm unpublish @financio/design-system@5.4.0
```

---

## 🚀 RESUMEN: RUTA RÁPIDA (5 PASOS)

Si solo quieres publicar rápido en **GitHub Packages**:

```bash
# 1. Crear token en GitHub (Settings → Developer settings → Tokens)

# 2. Configurar .npmrc
echo "@TU_USUARIO:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=TU_TOKEN" >> ~/.npmrc

# 3. Actualizar package.json con tu usuario
# "name": "@TU_USUARIO/financio-design-system"

# 4. Build y publicar
npm run build:package
npm publish

# 5. Instalar en otro proyecto
npm install @TU_USUARIO/financio-design-system
```

**¡Listo! Tu Design System está en NPM.** 🎉

---

*Creado por Financio Design System Team - Enero 2026*
