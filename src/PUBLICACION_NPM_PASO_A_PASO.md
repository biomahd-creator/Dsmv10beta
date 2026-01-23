# 🚀 PUBLICACIÓN NPM - PASO A PASO

> Guía completa para publicar @biomahd-creator/financio-design-system en NPM

---

## ✅ CHECKLIST PRE-PUBLICACIÓN

Antes de empezar, verifica que tienes:

- [ ] Node.js v18+ instalado (`node --version`)
- [ ] NPM v8+ instalado (`npm --version`)
- [ ] Cuenta en npmjs.com creada
- [ ] Token NPM revocado (el que compartiste públicamente)
- [ ] Acceso a tu terminal/consola

---

## 📋 PASO 1: VERIFICAR CONFIGURACIÓN LOCAL

### 1.1 Navega a la carpeta del proyecto

```bash
cd "Dsmv10beta-main 2"
```

### 1.2 Verifica que tienes el package.json correcto

```bash
cat package.json | grep "name"
```

✅ Deberías ver: `"name": "@biomahd-creator/financio-design-system"`

### 1.3 Verifica la versión

```bash
cat package.json | grep "version"
```

✅ Deberías ver: `"version": "1.0.1"`

---

## 🔐 PASO 2: AUTENTICACIÓN EN NPM

### 2.1 Verificar si ya estás logueado

```bash
npm whoami
```

**Si muestra tu usuario:**
- ✅ Ya estás logueado, pasa al PASO 3

**Si muestra error:**
- ⚠️ Necesitas hacer login

### 2.2 Hacer login en NPM

```bash
npm login
```

Te pedirá:

```
Username: tu-usuario-npm
Password: [escribe tu contraseña - no se verá]
Email: (this IS public) tu@email.com
```

**Si tienes 2FA activado**, te pedirá:

```
Enter one-time password: 123456
```

Abre tu app de autenticación (Google Authenticator, Authy, etc.) y escribe el código.

### 2.3 Verificar login exitoso

```bash
npm whoami
```

✅ Deberías ver tu nombre de usuario

---

## 🏢 PASO 3: VERIFICAR ORGANIZACIÓN

Tu paquete usa `@biomahd-creator` como scope. Necesitas verificar que esta organización existe.

### 3.1 Verificar organización

```bash
npm org ls @biomahd-creator
```

**Si muestra tu usuario:**
- ✅ La organización existe, continúa

**Si muestra error "no such package available":**
- ⚠️ Necesitas crear la organización

### 3.2 Crear organización (si es necesario)

**Opción A: Desde terminal**

```bash
npm org create @biomahd-creator
```

Te preguntará si quieres una organización gratuita (public) o de pago (private).

- Elige "Free" si quieres paquetes públicos
- Todos los paquetes públicos son gratis

**Opción B: Desde web**

1. Ve a: https://www.npmjs.com/org/create
2. Escribe: `biomahd-creator`
3. Selecciona "Unlimited public packages (Free)"
4. Haz clic en "Create"

---

## 🛠️ PASO 4: INSTALAR DEPENDENCIAS

### 4.1 Instalar todas las dependencias

```bash
npm install
```

⏳ Esto puede tomar 2-5 minutos

✅ Verás algo como:

```
added 500 packages in 3m
```

---

## 🔨 PASO 5: BUILD DEL PAQUETE

### 5.1 Ejecutar el build

```bash
npm run build
```

⏳ Esto tardará 30 segundos - 1 minuto

✅ Verás:

```
CLI v4.1.18
Done in 456ms
```

### 5.2 Verificar que se creó la carpeta /dist

```bash
ls -la dist/
```

✅ Deberías ver archivos como:

```
index.js
index.mjs
index.d.ts
styles.css
```

---

## 🔍 PASO 6: VERIFICAR EL PAQUETE (Simulación)

### 6.1 Hacer un dry-run

```bash
npm pack --dry-run
```

✅ Verás una lista de archivos que se incluirán:

```
npm notice 📦  @biomahd-creator/financio-design-system@1.0.1
npm notice === Tarball Contents ===
npm notice 1.2kB  LICENSE.md
npm notice 8.9kB  README.md
npm notice 2.4kB  package.json
npm notice 45kB   dist/index.js
npm notice 43kB   dist/index.mjs
npm notice 120kB  dist/index.d.ts
npm notice 89kB   dist/styles.css
npm notice 1.5kB  tailwind.config.example.js
npm notice === Tarball Details ===
npm notice name:          @biomahd-creator/financio-design-system
npm notice version:       1.0.1
npm notice filename:      biomahd-creator-financio-design-system-1.0.1.tgz
npm notice package size:  XX kB
npm notice unpacked size: XX kB
npm notice total files:   XX
```

⚠️ **IMPORTANTE:** Verifica que NO se incluyan:

- ❌ `App.tsx`
- ❌ `main.tsx`
- ❌ carpeta `src/`
- ❌ carpeta `components/pages/`
- ❌ `vite.config.ts`

✅ Solo debe incluir:

- ✅ Carpeta `dist/`
- ✅ `README.md`
- ✅ `LICENSE.md`
- ✅ `package.json`
- ✅ Carpeta `guidelines/`
- ✅ `tailwind.config.example.js`

---

## 🚀 PASO 7: PUBLICAR A NPM

### 7.1 Publicar el paquete

```bash
npm publish --access public
```

⏳ Esto tardará 10-30 segundos

✅ Verás algo como:

```
npm notice 📦  @biomahd-creator/financio-design-system@1.0.1
npm notice === Tarball Contents ===
...
npm notice Publishing to https://registry.npmjs.org/
+ @biomahd-creator/financio-design-system@1.0.1
```

🎉 **¡FELICIDADES! Tu paquete está publicado**

---

## ✨ PASO 8: VERIFICAR PUBLICACIÓN

### 8.1 Ver tu paquete en NPM

Abre tu navegador y ve a:

```
https://www.npmjs.com/package/@biomahd-creator/financio-design-system
```

✅ Deberías ver:

- Nombre del paquete
- Versión 1.0.1
- README completo
- Fecha de publicación
- Botón de instalación

### 8.2 Probar instalación

En otra carpeta (NO en tu proyecto), prueba instalarlo:

```bash
# Crear carpeta de prueba
mkdir test-financio-dsm
cd test-financio-dsm

# Inicializar proyecto
npm init -y

# Instalar tu paquete
npm install @biomahd-creator/financio-design-system
```

✅ Deberías ver:

```
added 1 package in 2s
```

### 8.3 Verificar importación

Crea un archivo `test.js`:

```bash
echo "const pkg = require('@biomahd-creator/financio-design-system'); console.log('✅ Package imported successfully!');" > test.js

node test.js
```

✅ Deberías ver:

```
✅ Package imported successfully!
```

---

## 🎯 RESUMEN DE COMANDOS

```bash
# 1. Login
npm login

# 2. Verificar usuario
npm whoami

# 3. Instalar dependencias
npm install

# 4. Build
npm run build

# 5. Verificar (dry-run)
npm pack --dry-run

# 6. Publicar
npm publish --access public
```

---

## 🔄 ACTUALIZACIONES FUTURAS

### Para publicar una nueva versión:

```bash
# 1. Hacer cambios en el código

# 2. Actualizar versión
npm version patch   # 1.0.1 → 1.0.2 (bug fixes)
# O
npm version minor   # 1.0.1 → 1.1.0 (nuevas features)
# O
npm version major   # 1.0.1 → 2.0.0 (breaking changes)

# 3. Build
npm run build

# 4. Publicar
npm publish --access public

# 5. Si usas Git
git push && git push --tags
```

---

## ❌ SOLUCIÓN DE PROBLEMAS

### Error: "You must be logged in"

```bash
npm logout
npm login
```

### Error: "403 Forbidden"

1. Verifica que estás logueado con el usuario correcto:
   ```bash
   npm whoami
   ```

2. Verifica que la organización existe:
   ```bash
   npm org ls @biomahd-creator
   ```

3. Si no existe, créala:
   ```bash
   npm org create @biomahd-creator
   ```

### Error: "Package name already exists"

Si el nombre ya está tomado por otro usuario, cámbiale el nombre en `package.json`:

```json
{
  "name": "@biomahd-creator/financio-dsm",
  "version": "1.0.1"
}
```

### Error: "Invalid name"

Asegúrate de que el nombre en `package.json`:
- ✅ Esté en minúsculas
- ✅ Use guiones en vez de espacios
- ✅ No tenga caracteres especiales

### Error de build

```bash
# Limpiar y reinstalar
rm -rf node_modules dist
npm install
npm run build
```

---

## 📞 SOPORTE

- **NPM Docs**: https://docs.npmjs.com/
- **Shadcn/ui**: https://ui.shadcn.com/
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## ✅ CHECKLIST FINAL

Antes de publicar, verifica:

- [ ] `npm whoami` muestra tu usuario
- [ ] `npm run build` completa sin errores
- [ ] `npm pack --dry-run` muestra solo archivos necesarios
- [ ] `package.json` tiene nombre válido
- [ ] `package.json` tiene `"publishConfig": { "access": "public" }`
- [ ] La organización `@biomahd-creator` existe
- [ ] Has leído esta guía completa

---

**¡Buena suerte con tu publicación!** 🚀

Si tienes dudas, revisa los logs de error y busca la solución en la sección "SOLUCIÓN DE PROBLEMAS" arriba.
