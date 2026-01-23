# 🪟 COMANDOS PARA WINDOWS

> Si estás en Windows y los comandos bash no funcionan, usa estos comandos equivalentes

---

## COMANDOS BÁSICOS

### Navegar a la carpeta

**PowerShell / CMD:**
```cmd
cd "Dsmv10beta-main 2"
```

### Ver contenido de package.json

**PowerShell:**
```powershell
Get-Content package.json | Select-String "name"
Get-Content package.json | Select-String "version"
```

**CMD:**
```cmd
type package.json | findstr "name"
type package.json | findstr "version"
```

### Listar archivos

**PowerShell:**
```powershell
Get-ChildItem
```

**CMD:**
```cmd
dir
```

### Ver contenido de carpeta dist

**PowerShell:**
```powershell
Get-ChildItem dist
```

**CMD:**
```cmd
dir dist
```

---

## COMANDOS NPM (Funcionan igual en todos los sistemas)

```cmd
# Login
npm login

# Verificar usuario
npm whoami

# Instalar dependencias
npm install

# Build
npm run build

# Verificar paquete (dry-run)
npm pack --dry-run

# Publicar
npm publish --access public
```

---

## CREAR CARPETA DE PRUEBA

**PowerShell / CMD:**
```cmd
mkdir test-financio-dsm
cd test-financio-dsm
npm init -y
npm install @biomahd-creator/financio-design-system
```

---

## VERIFICAR INSTALACIÓN

**PowerShell:**
```powershell
New-Item test.js
Add-Content test.js "const pkg = require('@biomahd-creator/financio-design-system'); console.log('✅ Package imported!');"
node test.js
```

**CMD:**
```cmd
echo const pkg = require('@biomahd-creator/financio-design-system'); console.log('Package imported!'); > test.js
node test.js
```

---

## LIMPIAR Y REINSTALAR (Si hay errores)

```cmd
# Eliminar node_modules y dist
rmdir /s /q node_modules
rmdir /s /q dist

# Reinstalar
npm install
npm run build
```

**PowerShell:**
```powershell
Remove-Item -Recurse -Force node_modules, dist
npm install
npm run build
```

---

## SCRIPT DE VERIFICACIÓN PARA WINDOWS

Guarda esto como `verificar.ps1`:

```powershell
# verificar.ps1 - Script de verificación para Windows

Write-Host "🔍 VERIFICACIÓN PRE-PUBLICACIÓN NPM" -ForegroundColor Cyan
Write-Host "======================================" -ForegroundColor Cyan
Write-Host ""

# 1. Node.js
Write-Host "1️⃣  Verificando Node.js..." -ForegroundColor Yellow
if (Get-Command node -ErrorAction SilentlyContinue) {
    $nodeVersion = node --version
    Write-Host "✅ Node.js instalado: $nodeVersion" -ForegroundColor Green
} else {
    Write-Host "❌ Node.js NO instalado" -ForegroundColor Red
}

# 2. NPM
Write-Host "`n2️⃣  Verificando NPM..." -ForegroundColor Yellow
if (Get-Command npm -ErrorAction SilentlyContinue) {
    $npmVersion = npm --version
    Write-Host "✅ NPM instalado: $npmVersion" -ForegroundColor Green
} else {
    Write-Host "❌ NPM NO instalado" -ForegroundColor Red
}

# 3. Login NPM
Write-Host "`n3️⃣  Verificando autenticación..." -ForegroundColor Yellow
$npmUser = npm whoami 2>&1
if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Logueado como: $npmUser" -ForegroundColor Green
} else {
    Write-Host "❌ NO estás logueado" -ForegroundColor Red
    Write-Host "   Ejecuta: npm login" -ForegroundColor Yellow
}

# 4. package.json
Write-Host "`n4️⃣  Verificando package.json..." -ForegroundColor Yellow
if (Test-Path "package.json") {
    Write-Host "✅ package.json encontrado" -ForegroundColor Green
    
    $packageJson = Get-Content "package.json" -Raw | ConvertFrom-Json
    Write-Host "   Nombre: $($packageJson.name)"
    Write-Host "   Versión: $($packageJson.version)"
} else {
    Write-Host "❌ package.json NO encontrado" -ForegroundColor Red
}

# 5. node_modules
Write-Host "`n5️⃣  Verificando dependencias..." -ForegroundColor Yellow
if (Test-Path "node_modules") {
    Write-Host "✅ node_modules existe" -ForegroundColor Green
} else {
    Write-Host "⚠️  node_modules NO existe" -ForegroundColor Yellow
    Write-Host "   Ejecuta: npm install" -ForegroundColor Yellow
}

# 6. Archivos críticos
Write-Host "`n6️⃣  Verificando archivos críticos..." -ForegroundColor Yellow
$files = @("README.md", "LICENSE.md", "tsup.config.ts", ".npmignore")
foreach ($file in $files) {
    if (Test-Path $file) {
        Write-Host "   ✅ $file" -ForegroundColor Green
    } else {
        Write-Host "   ❌ $file NO encontrado" -ForegroundColor Red
    }
}

# 7. Build
Write-Host "`n7️⃣  Verificando build..." -ForegroundColor Yellow
if (Test-Path "dist") {
    Write-Host "✅ Carpeta dist/ existe" -ForegroundColor Green
    
    if ((Test-Path "dist/index.js") -or (Test-Path "dist/index.mjs")) {
        Write-Host "   ✅ Archivos de build encontrados" -ForegroundColor Green
    } else {
        Write-Host "   ⚠️  Build incompleto" -ForegroundColor Yellow
        Write-Host "   Ejecuta: npm run build" -ForegroundColor Yellow
    }
} else {
    Write-Host "⚠️  Carpeta dist/ NO existe" -ForegroundColor Yellow
    Write-Host "   Ejecuta: npm run build" -ForegroundColor Yellow
}

Write-Host "`n======================================" -ForegroundColor Cyan
Write-Host "✅ Verificación completa" -ForegroundColor Green
Write-Host "======================================" -ForegroundColor Cyan
```

**Para ejecutarlo:**

```powershell
# Si da error de permisos, ejecuta primero:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Luego ejecuta el script:
.\verificar.ps1
```

---

## RESUMEN DE PASOS PARA WINDOWS

1. **Abrir PowerShell o CMD**
2. **Navegar al proyecto:**
   ```cmd
   cd "Dsmv10beta-main 2"
   ```

3. **Login NPM:**
   ```cmd
   npm login
   ```

4. **Instalar dependencias:**
   ```cmd
   npm install
   ```

5. **Build:**
   ```cmd
   npm run build
   ```

6. **Verificar:**
   ```cmd
   npm pack --dry-run
   ```

7. **Publicar:**
   ```cmd
   npm publish --access public
   ```

---

## NOTAS PARA USUARIOS DE WINDOWS

### Git Bash (Recomendado)

Si tienes Git instalado, puedes usar **Git Bash** que soporta comandos Unix/Linux:

1. Clic derecho en la carpeta del proyecto
2. Selecciona "Git Bash Here"
3. Usa los comandos normales de Linux

### WSL (Windows Subsystem for Linux)

Si tienes WSL instalado, puedes usar Ubuntu en Windows:

1. Abre "Ubuntu" desde el menú inicio
2. Navega a tu proyecto:
   ```bash
   cd /mnt/c/Users/TuUsuario/Downloads/Dsmv10beta-main\ 2/
   ```
3. Usa comandos Linux normales

---

**¿Preguntas?**

Si algún comando no funciona, indica:
- ¿Qué sistema operativo usas? (Windows 10, 11, etc.)
- ¿Qué terminal usas? (CMD, PowerShell, Git Bash)
- ¿Qué error te aparece?
