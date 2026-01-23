# 🛠️ Scripts de Diagnóstico y Reparación

Scripts automatizados para diagnosticar y corregir problemas comunes en el DSM antes de publicar a NPM.

---

## 📋 Scripts Disponibles

### 1. `diagnostic-report.js` - Diagnóstico Completo

**Propósito:** Genera un reporte completo del estado del proyecto

**Ejecutar:**
```bash
npm run diagnostic
```

**Qué verifica:**
- ✅ Archivos de configuración (package.json, tsconfig.json, etc.)
- ✅ Imports con versiones específicas
- ✅ Componentes exportados vs archivos existentes
- ✅ Archivos generados en /dist
- ✅ Configuración de package.json

**Output:**
```
╔════════════════════════════════════════════════════════════════╗
║  🔍 REPORTE DE DIAGNÓSTICO - FINANCIO DESIGN SYSTEM          ║
╚════════════════════════════════════════════════════════════════╝

📋 1. Verificando Archivos de Configuración...
   ✅ package.json
   ✅ tsconfig.json
   ✅ tsup.config.ts
   ...

📦 2. Verificando Imports con Versiones...
   ✅ No se encontraron imports con versiones

🧩 3. Verificando Componentes Exportados...
   Total de imports: 150
   Encontrados: 150
   Faltantes: 0

📂 4. Verificando Build Anterior...
   ✅ index.js (180.45 KB)
   ✅ index.mjs (162.33 KB)
   ✅ index.d.ts (47.21 KB)
   ✅ index.d.mts (47.19 KB)
   ✅ styles.css (10.24 KB)

⚙️  5. Verificando package.json...
   ✅ name
   ✅ version
   ✅ main
   ...

╔════════════════════════════════════════════════════════════════╗
║  📊 RESUMEN DEL DIAGNÓSTICO                                   ║
╚════════════════════════════════════════════════════════════════╝

   ✅ ¡TODO PERFECTO!
   No se encontraron problemas.
   El proyecto está listo para build y publicación.
```

---

### 2. `fix-imports.js` - Corrección Automática de Imports

**Propósito:** Elimina versiones específicas de los imports

**Ejecutar:**
```bash
npm run fix:imports
```

**Qué hace:**
- Busca todos los archivos `.ts` y `.tsx`
- Encuentra imports con formato `from "package@version"`
- Los reemplaza con `from "package"`
- Muestra reporte de archivos modificados

**Antes:**
```typescript
import { toast } from "sonner@2.0.3";
import { ChevronDownIcon } from "lucide-react@0.487.0";
```

**Después:**
```typescript
import { toast } from "sonner";
import { ChevronDownIcon } from "lucide-react";
```

**Output:**
```
🔧 Corrigiendo imports con versiones específicas...

Procesando 250 archivos...

✅ components/ui/accordion.tsx
✅ components/ui/alert-dialog.tsx
✅ components/ui/sonner.tsx
...

════════════════════════════════════════════════════════════
📊 Resumen:
════════════════════════════════════════════════════════════
Archivos procesados: 250
Archivos modificados: 80
Archivos sin cambios: 170
════════════════════════════════════════════════════════════

✅ ¡Imports corregidos exitosamente!

⚠️  Próximo paso: Ejecuta 'npm run build' para verificar
```

---

### 3. `verify-components.js` - Verificación de Componentes

**Propósito:** Verifica que todos los componentes exportados existan

**Ejecutar:**
```bash
npm run verify
```

**Qué hace:**
- Lee `npm-package/index.ts`
- Extrae todos los paths de importación
- Verifica que cada archivo exista
- Reporta componentes faltantes

**Output:**
```
🔍 Verificando componentes del Design System...

Verificando archivos...

✅ lib/utils.ts
✅ components/ui/use-mobile.ts
✅ components/ui/accordion.tsx
✅ components/ui/alert.tsx
...

════════════════════════════════════════════════════════════
📊 Resumen:
════════════════════════════════════════════════════════════
Total de archivos: 150
Encontrados: 150
Faltantes: 0
════════════════════════════════════════════════════════════

✅ ¡Todos los componentes existen!
```

**Si hay componentes faltantes:**
```
❌ Archivos faltantes:
   - components/ui/non-existent-component
   - components/advanced/missing-component
```

---

### 4. `build-and-verify.sh` - Build con Verificación

**Propósito:** Ejecuta build completo y verifica outputs

**Ejecutar:**
```bash
bash scripts/build-and-verify.sh
```

**Qué hace:**
1. Limpia builds anteriores (`rm -rf dist`)
2. Instala dependencias si faltan
3. Ejecuta `npm run build`
4. Verifica que todos los archivos se generaron
5. Calcula tamaño del paquete
6. Simula empaquetado (`npm pack --dry-run`)
7. Verifica exports en index.ts

**Output:**
```
🚀 Financio Design System - Build & Verification
==================================================

🧹 Paso 1: Limpiando builds anteriores...
✅ Directorio dist limpiado

📦 Paso 2: Dependencias ya instaladas (skip)

🔨 Paso 3: Ejecutando build...
✅ Build completado exitosamente

🔍 Paso 4: Verificando archivos generados...
✅ dist/index.js (180K)
✅ dist/index.mjs (162K)
✅ dist/index.d.ts (47K)
✅ dist/index.d.mts (47K)
✅ dist/styles.css (10K)

📊 Paso 5: Tamaño del paquete...
Tamaño total de dist/: 1.1M

📦 Paso 6: Simulando empaquetado NPM...
✅ Pack dry-run exitoso

🔍 Paso 7: Verificando exports...
✅ 542 exports encontrados en index.ts

📋 Resumen Final:
==================================================
Build Status:      ✅ EXITOSO
CommonJS:          ✅ index.js
ES Modules:        ✅ index.mjs
TypeScript Types:  ✅ index.d.ts
CSS Compilado:     ✅ styles.css
Tamaño Total:      1.1M
==================================================

🎉 ¡Todo listo para publicar!

Próximos pasos:
1. Revisar PRE_PUBLISH_CHECKLIST.md
2. Ejecutar: npm login
3. Ejecutar: npm publish --access public
```

---

## 🚀 Workflows Recomendados

### Workflow 1: Primera Vez (Diagnóstico Completo)

```bash
# 1. Diagnóstico inicial
npm run diagnostic

# 2. Si hay problemas, corregir imports
npm run fix:imports

# 3. Verificar componentes
npm run verify

# 4. Build completo
npm run build

# 5. Diagnóstico final
npm run diagnostic
```

### Workflow 2: Corrección Rápida

```bash
# Todo en uno: corregir, verificar y buildear
npm run audit:full
```

### Workflow 3: Pre-Publicación

```bash
# 1. Auditoría completa
npm run audit:full

# 2. Diagnóstico final
npm run diagnostic

# 3. Test de empaquetado
npm pack --dry-run

# 4. Si todo OK, publicar
npm publish --access public
```

---

## 📊 Códigos de Salida

Todos los scripts retornan códigos de salida estándar:

- **0**: Éxito, sin problemas
- **1**: Errores encontrados

Puedes usarlos en scripts de CI/CD:

```bash
npm run diagnostic && echo "OK" || echo "FAIL"
```

---

## 🔧 Personalización

### Agregar verificaciones personalizadas

Edita `diagnostic-report.js` para agregar más checks:

```javascript
// Ejemplo: Verificar tamaño de bundle
const maxBundleSize = 200 * 1024; // 200 KB
const bundleSize = fs.statSync('dist/index.js').size;

if (bundleSize > maxBundleSize) {
  issues.warnings.push(`Bundle muy grande: ${bundleSize} bytes`);
}
```

### Ignorar archivos en fix-imports

Edita `fix-imports.js`:

```javascript
// Ignorar archivos específicos
const ignoredFiles = [
  'legacy-component.tsx',
  'deprecated-feature.ts'
];

if (ignoredFiles.some(f => filePath.includes(f))) {
  return false; // Skip
}
```

---

## 🐛 Troubleshooting

### Script no ejecuta

**Problema:** `permission denied`

**Solución:**
```bash
chmod +x scripts/*.sh
chmod +x scripts/*.js
```

### Node no encontrado

**Problema:** `node: command not found`

**Solución:**
```bash
# Verificar instalación de Node
node --version

# Si no está instalado, instalar Node 18+
# macOS: brew install node
# Linux: apt install nodejs
```

### Scripts en Windows

Los scripts `.sh` no funcionan directamente en Windows. Usa Git Bash o WSL, o ejecuta los comandos manualmente:

```bash
# En lugar de bash scripts/build-and-verify.sh
# Ejecuta paso a paso:
rm -rf dist
npm install
npm run build
```

---

## 📝 Notas

- Los scripts son **non-destructive** por defecto
- `fix-imports.js` SÍ modifica archivos (hace backup recomendado)
- Todos los scripts muestran output colorizado para mejor legibilidad
- Los scripts ignoran automáticamente `node_modules` y `dist`

---

## 🎯 Mantenimiento

### Actualizar scripts

Cuando agregues nuevos componentes:

1. No necesitas actualizar `fix-imports.js` (automático)
2. No necesitas actualizar `verify-components.js` (lee index.ts)
3. Actualiza `diagnostic-report.js` si agregas nuevos archivos de configuración

### Testing de scripts

```bash
# Test individual
node scripts/diagnostic-report.js
node scripts/fix-imports.js
node scripts/verify-components.js

# Test workflow completo
npm run audit:full
```

---

**Creado:** 23 de Enero, 2026  
**Versión:** 1.0.0  
**Última actualización:** 23 de Enero, 2026
