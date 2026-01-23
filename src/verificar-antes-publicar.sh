#!/bin/bash

# Script de verificación antes de publicar a NPM
# Ejecutar: bash verificar-antes-publicar.sh

echo "🔍 VERIFICACIÓN PRE-PUBLICACIÓN NPM"
echo "======================================"
echo ""

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Contador de errores
ERRORS=0
WARNINGS=0

# 1. Verificar Node.js
echo "1️⃣  Verificando Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}✅ Node.js instalado: $NODE_VERSION${NC}"
else
    echo -e "${RED}❌ Node.js NO está instalado${NC}"
    ((ERRORS++))
fi
echo ""

# 2. Verificar NPM
echo "2️⃣  Verificando NPM..."
if command -v npm &> /dev/null; then
    NPM_VERSION=$(npm --version)
    echo -e "${GREEN}✅ NPM instalado: $NPM_VERSION${NC}"
else
    echo -e "${RED}❌ NPM NO está instalado${NC}"
    ((ERRORS++))
fi
echo ""

# 3. Verificar login NPM
echo "3️⃣  Verificando autenticación NPM..."
NPM_USER=$(npm whoami 2>&1)
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Logueado como: $NPM_USER${NC}"
else
    echo -e "${RED}❌ NO estás logueado en NPM${NC}"
    echo -e "${YELLOW}   Ejecuta: npm login${NC}"
    ((ERRORS++))
fi
echo ""

# 4. Verificar package.json
echo "4️⃣  Verificando package.json..."
if [ -f "package.json" ]; then
    PACKAGE_NAME=$(grep -o '"name":[[:space:]]*"[^"]*"' package.json | cut -d'"' -f4)
    PACKAGE_VERSION=$(grep -o '"version":[[:space:]]*"[^"]*"' package.json | cut -d'"' -f4)
    
    echo -e "${GREEN}✅ package.json encontrado${NC}"
    echo "   Nombre: $PACKAGE_NAME"
    echo "   Versión: $PACKAGE_VERSION"
    
    # Verificar nombre válido
    if [[ $PACKAGE_NAME =~ ^@[a-z0-9-]+/[a-z0-9-]+$ ]]; then
        echo -e "${GREEN}   ✅ Nombre válido${NC}"
    else
        echo -e "${RED}   ❌ Nombre inválido (debe ser: @scope/nombre-en-minusculas)${NC}"
        ((ERRORS++))
    fi
else
    echo -e "${RED}❌ package.json NO encontrado${NC}"
    ((ERRORS++))
fi
echo ""

# 5. Verificar node_modules
echo "5️⃣  Verificando dependencias..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✅ node_modules existe${NC}"
else
    echo -e "${YELLOW}⚠️  node_modules NO existe${NC}"
    echo -e "${YELLOW}   Ejecuta: npm install${NC}"
    ((WARNINGS++))
fi
echo ""

# 6. Verificar archivos críticos
echo "6️⃣  Verificando archivos críticos..."

critical_files=("README.md" "LICENSE.md" "tsup.config.ts" ".npmignore")
for file in "${critical_files[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}   ✅ $file${NC}"
    else
        echo -e "${RED}   ❌ $file NO encontrado${NC}"
        ((ERRORS++))
    fi
done
echo ""

# 7. Verificar carpeta dist (si existe)
echo "7️⃣  Verificando build..."
if [ -d "dist" ]; then
    echo -e "${GREEN}✅ Carpeta dist/ existe${NC}"
    
    # Verificar archivos en dist
    if [ -f "dist/index.js" ] || [ -f "dist/index.mjs" ]; then
        echo -e "${GREEN}   ✅ Archivos de build encontrados${NC}"
    else
        echo -e "${YELLOW}   ⚠️  Archivos de build incompletos${NC}"
        echo -e "${YELLOW}   Ejecuta: npm run build${NC}"
        ((WARNINGS++))
    fi
else
    echo -e "${YELLOW}⚠️  Carpeta dist/ NO existe${NC}"
    echo -e "${YELLOW}   Ejecuta: npm run build${NC}"
    ((WARNINGS++))
fi
echo ""

# 8. Simular empaquetado
echo "8️⃣  Simulando empaquetado (dry-run)..."
if npm pack --dry-run &> /dev/null; then
    echo -e "${GREEN}✅ Empaquetado exitoso${NC}"
    
    # Mostrar tamaño estimado
    echo ""
    echo "📦 Contenido del paquete:"
    npm pack --dry-run 2>&1 | grep -E "package size|unpacked size|total files"
else
    echo -e "${RED}❌ Error en empaquetado${NC}"
    ((ERRORS++))
fi
echo ""

# 9. Verificar organización
echo "9️⃣  Verificando organización NPM..."
if [[ $PACKAGE_NAME =~ ^@([^/]+)/ ]]; then
    ORG_NAME="${BASH_REMATCH[1]}"
    
    if npm org ls "@$ORG_NAME" &> /dev/null; then
        echo -e "${GREEN}✅ Organización @$ORG_NAME existe${NC}"
    else
        echo -e "${YELLOW}⚠️  Organización @$ORG_NAME NO encontrada${NC}"
        echo -e "${YELLOW}   Créala: npm org create @$ORG_NAME${NC}"
        echo -e "${YELLOW}   O en: https://www.npmjs.com/org/create${NC}"
        ((WARNINGS++))
    fi
fi
echo ""

# Resumen final
echo "======================================"
echo "📊 RESUMEN"
echo "======================================"

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✅ TODO LISTO PARA PUBLICAR${NC}"
    echo ""
    echo "Ejecuta:"
    echo "  npm publish --access public"
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠️  HAY $WARNINGS ADVERTENCIAS${NC}"
    echo ""
    echo "Puedes publicar, pero se recomienda resolver las advertencias primero."
    echo ""
    echo "Para continuar:"
    echo "  npm publish --access public"
else
    echo -e "${RED}❌ HAY $ERRORS ERRORES QUE DEBEN RESOLVERSE${NC}"
    echo ""
    echo "No publiques hasta resolver los errores."
fi

echo ""
echo "======================================"

exit $ERRORS
