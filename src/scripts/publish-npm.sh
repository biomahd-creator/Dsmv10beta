#!/bin/bash

# ============================================================================
# Script de Publicación NPM - Financio Design System
# ============================================================================
# Uso: ./scripts/publish-npm.sh [patch|minor|major]
# Ejemplo: ./scripts/publish-npm.sh patch
# ============================================================================

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Version type (default: patch)
VERSION_TYPE=${1:-patch}

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}   Financio Design System - NPM Publisher${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# ============================================================================
# Step 1: Pre-flight checks
# ============================================================================
echo -e "${YELLOW}[1/7] 🔍 Verificando pre-requisitos...${NC}"

# Check if logged in to npm
if ! npm whoami &> /dev/null; then
    echo -e "${RED}❌ Error: No estás logueado en npm${NC}"
    echo -e "${YELLOW}Ejecuta: npm login${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Usuario npm: $(npm whoami)${NC}"

# Check if git is clean
if [[ -n $(git status -s) ]]; then
    echo -e "${RED}❌ Error: Tienes cambios sin commitear${NC}"
    echo -e "${YELLOW}Ejecuta: git add . && git commit -m 'mensaje'${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Git working directory limpio${NC}"
echo ""

# ============================================================================
# Step 2: Run tests (if available)
# ============================================================================
echo -e "${YELLOW}[2/7] 🧪 Ejecutando tests...${NC}"

if grep -q "\"test\"" package.json; then
    npm test || {
        echo -e "${RED}❌ Tests fallaron${NC}"
        exit 1
    }
    echo -e "${GREEN}✅ Tests pasaron${NC}"
else
    echo -e "${YELLOW}⚠️  No se encontraron tests${NC}"
fi
echo ""

# ============================================================================
# Step 3: Bump version
# ============================================================================
echo -e "${YELLOW}[3/7] 📦 Actualizando versión ($VERSION_TYPE)...${NC}"

CURRENT_VERSION=$(node -p "require('./package.json').version")
echo -e "Versión actual: ${BLUE}v$CURRENT_VERSION${NC}"

npm version $VERSION_TYPE --no-git-tag-version

NEW_VERSION=$(node -p "require('./package.json').version")
echo -e "${GREEN}✅ Nueva versión: v$NEW_VERSION${NC}"
echo ""

# ============================================================================
# Step 4: Build package
# ============================================================================
echo -e "${YELLOW}[4/7] 🏗️  Compilando paquete...${NC}"

npm run build:package || {
    echo -e "${RED}❌ Build falló${NC}"
    exit 1
}

echo -e "${GREEN}✅ Build exitoso${NC}"
echo ""

# ============================================================================
# Step 5: Test package locally (dry run)
# ============================================================================
echo -e "${YELLOW}[5/7] 🔬 Verificando contenido del paquete...${NC}"

npm pack --dry-run > /tmp/npm-pack-output.txt

echo -e "${BLUE}Archivos que se publicarán:${NC}"
cat /tmp/npm-pack-output.txt | grep -v "npm notice" | head -20
echo ""

# Check if dist/ exists
if [ ! -d "dist" ]; then
    echo -e "${RED}❌ Error: Carpeta dist/ no existe${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Contenido del paquete verificado${NC}"
echo ""

# ============================================================================
# Step 6: Confirmation
# ============================================================================
echo -e "${YELLOW}[6/7] ⚠️  Confirmación requerida${NC}"
echo -e "Estás a punto de publicar:"
echo -e "  Paquete: ${BLUE}@financio/design-system${NC}"
echo -e "  Versión: ${BLUE}v$NEW_VERSION${NC}"
echo -e "  Registry: ${BLUE}$(npm config get registry)${NC}"
echo ""
read -p "¿Continuar? (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${RED}❌ Publicación cancelada${NC}"
    
    # Revert version bump
    git checkout package.json
    echo -e "${YELLOW}⚠️  Versión revertida a v$CURRENT_VERSION${NC}"
    exit 1
fi

# ============================================================================
# Step 7: Publish to npm
# ============================================================================
echo -e "${YELLOW}[7/7] 🚀 Publicando a NPM...${NC}"

# Publish (remove --dry-run to actually publish)
npm publish || {
    echo -e "${RED}❌ Publicación falló${NC}"
    
    # Revert version bump
    git checkout package.json
    echo -e "${YELLOW}⚠️  Versión revertida a v$CURRENT_VERSION${NC}"
    exit 1
}

echo -e "${GREEN}✅ Paquete publicado exitosamente${NC}"
echo ""

# ============================================================================
# Step 8: Git commit and tag
# ============================================================================
echo -e "${YELLOW}[8/7] 🏷️  Creando tag de git...${NC}"

git add package.json
git commit -m "chore: bump version to v$NEW_VERSION"
git tag -a "v$NEW_VERSION" -m "Release v$NEW_VERSION"
git push origin main
git push origin "v$NEW_VERSION"

echo -e "${GREEN}✅ Tag creado y pusheado${NC}"
echo ""

# ============================================================================
# Success
# ============================================================================
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}   🎉 ¡Publicación Exitosa!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "Versión: ${BLUE}v$NEW_VERSION${NC}"
echo -e "Paquete: ${BLUE}@financio/design-system${NC}"
echo ""
echo -e "${YELLOW}Para instalar en otros proyectos:${NC}"
echo -e "${BLUE}npm install @financio/design-system@$NEW_VERSION${NC}"
echo ""
echo -e "${YELLOW}Para ver en npm:${NC}"
echo -e "${BLUE}https://www.npmjs.com/package/@financio/design-system${NC}"
echo ""
