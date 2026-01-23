#!/usr/bin/env node

/**
 * Reporte de Diagnóstico Completo del DSM
 * Identifica todos los problemas antes del build
 */

const fs = require('fs');
const path = require('path');

const RESET = '\x1b[0m';
const RED = '\x1b[31m';
const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const BLUE = '\x1b[36m';
const BOLD = '\x1b[1m';

console.log(`${BLUE}${BOLD}╔════════════════════════════════════════════════════════════════╗${RESET}`);
console.log(`${BLUE}${BOLD}║  🔍 REPORTE DE DIAGNÓSTICO - FINANCIO DESIGN SYSTEM          ║${RESET}`);
console.log(`${BLUE}${BOLD}╚════════════════════════════════════════════════════════════════╝${RESET}\n`);

const issues = {
  versionedImports: [],
  missingComponents: [],
  configIssues: [],
  warnings: []
};

// 1. Verificar archivos de configuración
console.log(`${BOLD}📋 1. Verificando Archivos de Configuración...${RESET}\n`);

const configFiles = [
  'package.json',
  'tsconfig.json',
  'tsup.config.ts',
  '.npmignore',
  'LICENSE',
  'README.md'
];

configFiles.forEach(file => {
  const filePath = path.join(__dirname, '..', file);
  if (fs.existsSync(filePath)) {
    console.log(`   ${GREEN}✅${RESET} ${file}`);
  } else {
    console.log(`   ${RED}❌${RESET} ${file} - FALTANTE`);
    issues.configIssues.push(file);
  }
});

// 2. Verificar imports con versiones
console.log(`\n${BOLD}📦 2. Verificando Imports con Versiones...${RESET}\n`);

function findVersionedImports(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (!['node_modules', 'dist', '.git', 'scripts'].includes(file)) {
        findVersionedImports(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(filePath, 'utf-8');
      const versionedImportRegex = /from\s+['"]([^'"]+@[\d.]+)['"]/g;
      let match;
      
      while ((match = versionedImportRegex.exec(content)) !== null) {
        const relativePath = path.relative(path.join(__dirname, '..'), filePath);
        issues.versionedImports.push({
          file: relativePath,
          import: match[1]
        });
      }
    }
  });
}

findVersionedImports(path.join(__dirname, '..', 'components'));
findVersionedImports(path.join(__dirname, '..', 'npm-package'));

if (issues.versionedImports.length > 0) {
  console.log(`   ${RED}❌ Encontrados ${issues.versionedImports.length} imports con versiones${RESET}`);
  console.log(`   ${YELLOW}   Mostrando primeros 10...${RESET}\n`);
  
  issues.versionedImports.slice(0, 10).forEach(item => {
    console.log(`   📄 ${item.file}`);
    console.log(`      ↳ ${RED}${item.import}${RESET}\n`);
  });
  
  if (issues.versionedImports.length > 10) {
    console.log(`   ${YELLOW}   ... y ${issues.versionedImports.length - 10} más${RESET}\n`);
  }
} else {
  console.log(`   ${GREEN}✅ No se encontraron imports con versiones${RESET}\n`);
}

// 3. Verificar componentes exportados
console.log(`${BOLD}🧩 3. Verificando Componentes Exportados...${RESET}\n`);

const indexPath = path.join(__dirname, '..', 'npm-package', 'index.ts');
if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf-8');
  const importRegex = /} from ['"](.+?)['"]/g;
  let match;
  let totalImports = 0;
  let foundImports = 0;
  
  while ((match = importRegex.exec(indexContent)) !== null) {
    totalImports++;
    const importPath = match[1];
    const fullPath = path.join(__dirname, '..', importPath);
    
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    let found = false;
    
    for (const ext of extensions) {
      if (fs.existsSync(fullPath + ext)) {
        found = true;
        foundImports++;
        break;
      }
    }
    
    if (!found) {
      issues.missingComponents.push(importPath);
    }
  }
  
  console.log(`   Total de imports: ${totalImports}`);
  console.log(`   ${GREEN}Encontrados: ${foundImports}${RESET}`);
  console.log(`   ${issues.missingComponents.length > 0 ? RED : GREEN}Faltantes: ${issues.missingComponents.length}${RESET}\n`);
  
  if (issues.missingComponents.length > 0) {
    console.log(`   ${RED}❌ Componentes faltantes:${RESET}\n`);
    issues.missingComponents.forEach(comp => {
      console.log(`   - ${comp}`);
    });
    console.log('');
  }
} else {
  console.log(`   ${RED}❌ npm-package/index.ts no encontrado${RESET}\n`);
  issues.configIssues.push('npm-package/index.ts');
}

// 4. Verificar estructura de /dist si existe
console.log(`${BOLD}📂 4. Verificando Build Anterior...${RESET}\n`);

const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  const distFiles = [
    'index.js',
    'index.mjs',
    'index.d.ts',
    'index.d.mts',
    'styles.css'
  ];
  
  let allFound = true;
  distFiles.forEach(file => {
    const filePath = path.join(distPath, file);
    if (fs.existsSync(filePath)) {
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      console.log(`   ${GREEN}✅${RESET} ${file} (${sizeKB} KB)`);
    } else {
      console.log(`   ${RED}❌${RESET} ${file} - FALTANTE`);
      allFound = false;
    }
  });
  
  if (!allFound) {
    issues.warnings.push('Build incompleto - faltan archivos en /dist');
  }
  console.log('');
} else {
  console.log(`   ${YELLOW}⚠️  No existe /dist - necesitas ejecutar build${RESET}\n`);
  issues.warnings.push('No existe directorio /dist');
}

// 5. Verificar package.json
console.log(`${BOLD}⚙️  5. Verificando package.json...${RESET}\n`);

const pkgPath = path.join(__dirname, '..', 'package.json');
if (fs.existsSync(pkgPath)) {
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
  
  // Verificar campos importantes
  const requiredFields = {
    'name': pkg.name,
    'version': pkg.version,
    'main': pkg.main,
    'module': pkg.module,
    'types': pkg.types,
    'exports': pkg.exports,
    'files': pkg.files,
    'scripts.build': pkg.scripts?.build,
    'peerDependencies': pkg.peerDependencies
  };
  
  Object.entries(requiredFields).forEach(([field, value]) => {
    if (value) {
      console.log(`   ${GREEN}✅${RESET} ${field}`);
    } else {
      console.log(`   ${RED}❌${RESET} ${field} - FALTANTE`);
      issues.configIssues.push(`package.json: ${field}`);
    }
  });
  console.log('');
}

// RESUMEN FINAL
console.log(`${BLUE}${BOLD}╔════════════════════════════════════════════════════════════════╗${RESET}`);
console.log(`${BLUE}${BOLD}║  📊 RESUMEN DEL DIAGNÓSTICO                                   ║${RESET}`);
console.log(`${BLUE}${BOLD}╚════════════════════════════════════════════════════════════════╝${RESET}\n`);

const totalIssues = 
  issues.versionedImports.length +
  issues.missingComponents.length +
  issues.configIssues.length;

if (totalIssues === 0 && issues.warnings.length === 0) {
  console.log(`${GREEN}${BOLD}   ✅ ¡TODO PERFECTO!${RESET}`);
  console.log(`${GREEN}   No se encontraron problemas.${RESET}`);
  console.log(`${GREEN}   El proyecto está listo para build y publicación.${RESET}\n`);
} else {
  console.log(`${RED}${BOLD}   ⚠️  SE ENCONTRARON PROBLEMAS${RESET}\n`);
  
  if (issues.versionedImports.length > 0) {
    console.log(`   ${RED}❌ Imports con versiones: ${issues.versionedImports.length}${RESET}`);
    console.log(`      Solución: ${YELLOW}npm run fix:imports${RESET}\n`);
  }
  
  if (issues.missingComponents.length > 0) {
    console.log(`   ${RED}❌ Componentes faltantes: ${issues.missingComponents.length}${RESET}`);
    console.log(`      Solución: ${YELLOW}Revisar npm-package/index.ts${RESET}\n`);
  }
  
  if (issues.configIssues.length > 0) {
    console.log(`   ${RED}❌ Archivos de configuración: ${issues.configIssues.length}${RESET}`);
    console.log(`      Solución: ${YELLOW}Crear archivos faltantes${RESET}\n`);
  }
  
  if (issues.warnings.length > 0) {
    console.log(`   ${YELLOW}⚠️  Advertencias: ${issues.warnings.length}${RESET}`);
    issues.warnings.forEach(w => console.log(`      - ${w}`));
    console.log('');
  }
}

// Recomendaciones
console.log(`${BLUE}${BOLD}╔════════════════════════════════════════════════════════════════╗${RESET}`);
console.log(`${BLUE}${BOLD}║  🚀 PRÓXIMOS PASOS RECOMENDADOS                               ║${RESET}`);
console.log(`${BLUE}${BOLD}╚════════════════════════════════════════════════════════════════╝${RESET}\n`);

if (issues.versionedImports.length > 0) {
  console.log(`   ${BOLD}1. Corregir imports con versiones:${RESET}`);
  console.log(`      ${YELLOW}npm run fix:imports${RESET}\n`);
}

if (issues.missingComponents.length > 0) {
  console.log(`   ${BOLD}2. Revisar componentes exportados:${RESET}`);
  console.log(`      ${YELLOW}npm run verify${RESET}\n`);
}

console.log(`   ${BOLD}3. Ejecutar build completo:${RESET}`);
console.log(`      ${YELLOW}npm run build${RESET}\n`);

console.log(`   ${BOLD}4. Verificar paquete:${RESET}`);
console.log(`      ${YELLOW}npm pack --dry-run${RESET}\n`);

if (totalIssues === 0) {
  console.log(`   ${BOLD}5. Publicar:${RESET}`);
  console.log(`      ${GREEN}npm login${RESET}`);
  console.log(`      ${GREEN}npm publish --access public${RESET}\n`);
}

console.log(`${BLUE}═══════════════════════════════════════════════════════════════${RESET}\n`);

// Exit code
process.exit(totalIssues > 0 ? 1 : 0);
