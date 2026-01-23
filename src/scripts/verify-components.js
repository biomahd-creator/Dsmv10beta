#!/usr/bin/env node

/**
 * Script de verificación de componentes
 * Verifica que todos los componentes exportados en npm-package/index.ts existan
 */

const fs = require('fs');
const path = require('path');

const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[36m';

console.log(`${BLUE}🔍 Verificando componentes del Design System...${RESET}\n`);

// Leer el archivo index.ts
const indexPath = path.join(__dirname, '../npm-package/index.ts');
const indexContent = fs.readFileSync(indexPath, 'utf-8');

// Extraer todas las importaciones
const importRegex = /} from ['"](.+?)['"]/g;
const imports = [];
let match;

while ((match = importRegex.exec(indexContent)) !== null) {
  imports.push(match[1]);
}

// Verificar cada archivo
let totalFiles = 0;
let existingFiles = 0;
let missingFiles = 0;
const missingList = [];

console.log('Verificando archivos...\n');

imports.forEach(importPath => {
  totalFiles++;
  
  // Convertir ruta relativa a absoluta
  const fullPath = path.join(__dirname, '..', importPath);
  
  // Intentar diferentes extensiones
  const extensions = ['.ts', '.tsx', '.js', '.jsx'];
  let found = false;
  
  for (const ext of extensions) {
    const fileToCheck = fullPath + ext;
    if (fs.existsSync(fileToCheck)) {
      console.log(`${GREEN}✅${RESET} ${importPath}${ext}`);
      existingFiles++;
      found = true;
      break;
    }
  }
  
  if (!found) {
    console.log(`${RED}❌${RESET} ${importPath} - NO ENCONTRADO`);
    missingFiles++;
    missingList.push(importPath);
  }
});

// Resumen
console.log('\n' + '='.repeat(60));
console.log(`${BLUE}📊 Resumen:${RESET}`);
console.log('='.repeat(60));
console.log(`Total de archivos: ${totalFiles}`);
console.log(`${GREEN}Encontrados: ${existingFiles}${RESET}`);
console.log(`${RED}Faltantes: ${missingFiles}${RESET}`);
console.log('='.repeat(60));

if (missingFiles > 0) {
  console.log(`\n${RED}❌ Archivos faltantes:${RESET}`);
  missingList.forEach(file => console.log(`   - ${file}`));
  process.exit(1);
} else {
  console.log(`\n${GREEN}✅ ¡Todos los componentes existen!${RESET}`);
  process.exit(0);
}
