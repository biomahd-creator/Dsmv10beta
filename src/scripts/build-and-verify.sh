#!/bin/bash

# Financio Design System - Build and Verification Script
# Este script ejecuta el build completo y verifica que todo esté listo para publicar

set -e  # Exit on error

echo "🚀 Financio Design System - Build & Verification"
echo "=================================================="
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Clean previous builds
echo "🧹 Paso 1: Limpiando builds anteriores..."
rm -rf dist
echo -e "${GREEN}✅ Directorio dist limpiado${NC}"
echo ""

# Step 2: Install dependencies (if needed)
if [ ! -d "node_modules" ]; then
    echo "📦 Paso 2: Instalando dependencias..."
    npm install
    echo -e "${GREEN}✅ Dependencias instaladas${NC}"
else
    echo "📦 Paso 2: Dependencias ya instaladas (skip)"
fi
echo ""

# Step 3: Run build
echo "🔨 Paso 3: Ejecutando build..."
npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build completado exitosamente${NC}"
else
    echo -e "${RED}❌ Error en el build${NC}"
    exit 1
fi
echo ""

# Step 4: Verify build outputs
echo "🔍 Paso 4: Verificando archivos generados..."

FILES=(
    "dist/index.js"
    "dist/index.mjs"
    "dist/index.d.ts"
    "dist/index.d.mts"
    "dist/styles.css"
)

ALL_OK=true
for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        SIZE=$(ls -lh "$file" | awk '{print $5}')
        echo -e "${GREEN}✅${NC} $file (${SIZE})"
    else
        echo -e "${RED}❌${NC} $file - NO ENCONTRADO"
        ALL_OK=false
    fi
done
echo ""

if [ "$ALL_OK" = false ]; then
    echo -e "${RED}❌ Algunos archivos no se generaron correctamente${NC}"
    exit 1
fi

# Step 5: Check package size
echo "📊 Paso 5: Tamaño del paquete..."
DIST_SIZE=$(du -sh dist | awk '{print $1}')
echo "Tamaño total de dist/: ${DIST_SIZE}"
echo ""

# Step 6: Dry run pack
echo "📦 Paso 6: Simulando empaquetado NPM..."
npm pack --dry-run > pack-output.txt 2>&1

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Pack dry-run exitoso${NC}"
    echo "Archivos que se incluirán en el paquete:"
    grep "npm notice" pack-output.txt | head -20
    rm pack-output.txt
else
    echo -e "${RED}❌ Error en pack dry-run${NC}"
    cat pack-output.txt
    rm pack-output.txt
    exit 1
fi
echo ""

# Step 7: Verify exports
echo "🔍 Paso 7: Verificando exports..."
if grep -q "export" npm-package/index.ts; then
    EXPORT_COUNT=$(grep -c "^export" npm-package/index.ts)
    echo -e "${GREEN}✅${NC} ${EXPORT_COUNT} exports encontrados en index.ts"
else
    echo -e "${RED}❌${NC} No se encontraron exports en index.ts"
    exit 1
fi
echo ""

# Step 8: Summary
echo "📋 Resumen Final:"
echo "=================================================="
echo -e "Build Status:      ${GREEN}✅ EXITOSO${NC}"
echo -e "CommonJS:          ${GREEN}✅ index.js${NC}"
echo -e "ES Modules:        ${GREEN}✅ index.mjs${NC}"
echo -e "TypeScript Types:  ${GREEN}✅ index.d.ts${NC}"
echo -e "CSS Compilado:     ${GREEN}✅ styles.css${NC}"
echo -e "Tamaño Total:      ${DIST_SIZE}"
echo "=================================================="
echo ""

echo -e "${GREEN}🎉 ¡Todo listo para publicar!${NC}"
echo ""
echo "Próximos pasos:"
echo "1. Revisar PRE_PUBLISH_CHECKLIST.md"
echo "2. Ejecutar: npm login"
echo "3. Ejecutar: npm publish --access public"
echo ""
