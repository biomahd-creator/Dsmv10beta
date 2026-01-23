#!/usr/bin/env node

/**
 * Script para remover versiones específicas de los imports
 * Ejemplo: from "sonner@2.0.3" → from "sonner"
 */

const fs = require('fs');
const path = require('path');

const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[36m';

console.log(`${BLUE}🔧 Corrigiendo imports con versiones específicas...${RESET}\n`);

// Función para procesar un archivo
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const original = content;
  
  // Regex para encontrar imports con versiones
  // Ejemplo: from "package@1.2.3" → from "package"
  const versionedImportRegex = /from\s+(['"])([^'"]+)@[\d.]+\1/g;
  
  let modified = content.replace(versionedImportRegex, (match, quote, packageName) => {
    return `from ${quote}${packageName}${quote}`;
  });
  
  if (modified !== original) {
    fs.writeFileSync(filePath, modified, 'utf-8');
    return true;
  }
  
  return false;
}

// Función para buscar archivos recursivamente
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Ignorar node_modules y dist
      if (!['node_modules', 'dist', '.git'].includes(file)) {
        findFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Procesar todos los archivos
const rootDir = path.join(__dirname, '..');
const files = findFiles(rootDir);

let modifiedCount = 0;
let totalCount = 0;

console.log(`Procesando ${files.length} archivos...\n`);

files.forEach(filePath => {
  totalCount++;
  const relativePath = path.relative(rootDir, filePath);
  
  if (processFile(filePath)) {
    console.log(`${GREEN}✅${RESET} ${relativePath}`);
    modifiedCount++;
  } else {
    // Solo mostrar los primeros 10 no modificados para no saturar
    if (modifiedCount === 0 && totalCount <= 10) {
      console.log(`${YELLOW}⏭${RESET}  ${relativePath} (sin cambios)`);
    }
  }
});

// Resumen
console.log('\n' + '='.repeat(60));
console.log(`${BLUE}📊 Resumen:${RESET}`);
console.log('='.repeat(60));
console.log(`Archivos procesados: ${totalCount}`);
console.log(`${GREEN}Archivos modificados: ${modifiedCount}${RESET}`);
console.log(`Archivos sin cambios: ${totalCount - modifiedCount}`);
console.log('='.repeat(60));

if (modifiedCount > 0) {
  console.log(`\n${GREEN}✅ ¡Imports corregidos exitosamente!${RESET}`);
  console.log(`\n${YELLOW}⚠️  Próximo paso: Ejecuta 'npm run build' para verificar${RESET}`);
} else {
  console.log(`\n${BLUE}ℹ️  No se encontraron imports con versiones específicas${RESET}`);
}
