# ⚡ Inicio Rápido: Publicar en NPM en 5 Minutos

> **Objetivo:** Publicar `@financio/design-system` en GitHub Packages en 5 minutos.

---

## 🎯 OPCIÓN 1: GitHub Packages (RECOMENDADO - Más Fácil)

### ✅ Pre-requisitos
- [ ] Cuenta de GitHub
- [ ] Node.js instalado
- [ ] Git configurado

---

## 📝 PASO 1: Crear Token de GitHub (2 minutos)

### 1.1 Ve a GitHub Settings
```
GitHub.com → Click tu foto (arriba derecha) → Settings
```

### 1.2 Navega a Developer Settings
```
Settings → Developer settings (abajo izquierda) → Personal access tokens → Tokens (classic)
```

### 1.3 Genera Nuevo Token
1. Click **"Generate new token (classic)"**
2. **Note:** `NPM_PUBLISH_TOKEN`
3. **Expiration:** `No expiration` (o 1 año)
4. **Select scopes:** Marca estas 2 casillas:
   - ✅ `write:packages`
   - ✅ `read:packages`
5. Click **"Generate token"** (abajo)

### 1.4 Copia el Token
```
ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```
⚠️ **¡IMPORTANTE!** Guarda este token, no lo verás de nuevo.

---

## 🔧 PASO 2: Configurar NPM (1 minuto)

### 2.1 Crear archivo .npmrc en tu HOME

**En Windows:**
```bash
# Abrir PowerShell o CMD
echo @TU_USUARIO_GITHUB:registry=https://npm.pkg.github.com >> %USERPROFILE%\.npmrc
echo //npm.pkg.github.com/:_authToken=TU_TOKEN_AQUI >> %USERPROFILE%\.npmrc
```

**En Mac/Linux:**
```bash
# Abrir Terminal
echo "@TU_USUARIO_GITHUB:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=TU_TOKEN_AQUI" >> ~/.npmrc
```

**Ejemplo real:**
```bash
# Si tu usuario de GitHub es "juanperez" y tu token es "ghp_abc123..."
echo "@juanperez:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=ghp_abc123..." >> ~/.npmrc
```

### 2.2 Verificar configuración
```bash
cat ~/.npmrc
# Debe mostrar:
# @juanperez:registry=https://npm.pkg.github.com
# //npm.pkg.github.com/:_authToken=ghp_abc123...
```

---

## 📦 PASO 3: Configurar package.json (30 segundos)

### 3.1 Abrir package.json
El archivo ya existe en la raíz del proyecto.

### 3.2 Cambiar el nombre del paquete
```json
{
  "name": "@TU_USUARIO_GITHUB/financio-design-system",
  ...
}
```

**Ejemplo:**
```json
{
  "name": "@juanperez/financio-design-system",
  "version": "5.4.0",
  ...
}
```

### 3.3 Actualizar publishConfig
```json
{
  "publishConfig": {
    "@TU_USUARIO_GITHUB:registry": "https://npm.pkg.github.com"
  }
}
```

**Ejemplo:**
```json
{
  "publishConfig": {
    "@juanperez:registry": "https://npm.pkg.github.com"
  }
}
```

---

## 🚀 PASO 4: Publicar (1 minuto)

### 4.1 Instalar dependencias
```bash
npm install
```

### 4.2 Build del paquete
```bash
npm run build:package
```

Deberías ver:
```
✓ Build success in XXms
CLI Building entry: npm-package/index.ts
CLI Using tsup config: tsup.config.ts
...
```

### 4.3 Verificar que se creó dist/
```bash
ls dist/
# Debes ver: index.js, index.mjs, index.d.ts
```

### 4.4 Publicar
```bash
npm publish
```

Deberías ver:
```
npm notice 📦  @juanperez/financio-design-system@5.4.0
npm notice === Tarball Contents ===
npm notice Xkb dist/index.js
npm notice Xkb dist/index.mjs
npm notice Xkb dist/index.d.ts
...
+ @juanperez/financio-design-system@5.4.0
```

---

## ✅ PASO 5: Verificar (30 segundos)

### 5.1 Ve a tu repositorio en GitHub
```
https://github.com/TU_USUARIO/financio-design-system
```

### 5.2 Click en "Packages" (arriba a la derecha)
Deberías ver:
```
📦 financio-design-system
   v5.4.0 - Published X seconds ago
```

---

## 🎉 ¡LISTO! Ahora puedes instalarlo

### En cualquier proyecto:

```bash
# 1. Crear .npmrc en el proyecto
echo "@TU_USUARIO:registry=https://npm.pkg.github.com" > .npmrc

# 2. Instalar
npm install @TU_USUARIO/financio-design-system
```

### Usar en código:

```tsx
import { Button, Card } from '@TU_USUARIO/financio-design-system';
import '@TU_USUARIO/financio-design-system/styles';

function App() {
  return (
    <Card>
      <Button>¡Funciona! 🎉</Button>
    </Card>
  );
}
```

---

## 🔄 Actualizar Versión

Cuando hagas cambios:

```bash
# 1. Incrementar versión
npm version patch   # 5.4.0 → 5.4.1

# 2. Build
npm run build:package

# 3. Publicar
npm publish
```

---

## 🎯 OPCIÓN 2: NPM Público (Si prefieres público)

### Paso 1: Crear cuenta en npmjs.com
```
https://www.npmjs.com/signup
```

### Paso 2: Login desde terminal
```bash
npm login
# Username: tu_usuario
# Password: tu_password
# Email: tu_email
```

### Paso 3: Cambiar nombre en package.json
```json
{
  "name": "@tu-usuario/financio-design-system"
}
```

### Paso 4: Publicar
```bash
npm run build:package
npm publish --access public
```

---

## ❓ Troubleshooting

### Error: "You must be logged in"
```bash
npm whoami
# Si da error, hacer login de nuevo:
npm login
```

### Error: "Package name too similar"
Cambia el nombre en package.json:
```json
{
  "name": "@tu-usuario/financio-ds"
}
```

### Error: "ENOENT: no such file or directory, open 'dist/index.js'"
Olvidaste el build:
```bash
npm run build:package
```

### Error: "402 Payment Required"
Si usas scope (@financio/...) en npm público, debes publicar como público:
```bash
npm publish --access public
```

---

## 📊 Checklist Final

Antes de publicar, verifica:

- [ ] ✅ Token de GitHub creado
- [ ] ✅ ~/.npmrc configurado
- [ ] ✅ package.json con nombre correcto
- [ ] ✅ `npm install` ejecutado
- [ ] ✅ `npm run build:package` exitoso
- [ ] ✅ Carpeta `dist/` existe
- [ ] ✅ `npm whoami` funciona

---

## 📚 Próximos Pasos

Una vez publicado:

1. ✅ **Documenta la instalación** en tu README
2. ✅ **Agrega CI/CD** para publicar automáticamente
3. ✅ **Crea ejemplos** de uso
4. ✅ **Comparte** con tu equipo

---

## 🆘 ¿Necesitas Ayuda?

Si tienes problemas, consulta:
- **Guía Completa:** `/NPM_SETUP_GUIDE.md`
- **Exportación Avanzada:** `/EXPORT_SYSTEM_GUIDE.md`
- **GitHub Docs:** https://docs.github.com/en/packages

---

**¡Felicidades! 🎉 Tu Design System está en NPM.**

*Creado por Financio Design System Team - Enero 2026*
