# ✅ CHECKLIST FINAL ANTES DE PUBLICAR

> Marca cada ítem antes de ejecutar `npm publish`

---

## 🔐 SEGURIDAD Y ACCESO

- [ ] He creado mi cuenta en [npmjs.com](https://npmjs.com)
- [ ] He activado 2FA (autenticación de dos factores) recomendado
- [ ] He revocado el token NPM que compartí públicamente
- [ ] Entiendo que NUNCA debo compartir tokens NPM

---

## 💻 ENTORNO LOCAL

- [ ] Tengo Node.js v18+ instalado (`node --version`)
- [ ] Tengo NPM v8+ instalado (`npm --version`)
- [ ] He descargado el proyecto desde Figma Make
- [ ] Estoy en la carpeta correcta del proyecto

---

## 🔑 AUTENTICACIÓN NPM

- [ ] He ejecutado `npm login`
- [ ] `npm whoami` muestra mi usuario correctamente
- [ ] He creado/verificado la organización `@biomahd-creator`

**Comando para verificar organización:**
```bash
npm org ls @biomahd-creator
```

**Si no existe, crear con:**
```bash
npm org create @biomahd-creator
```

---

## 📦 CONFIGURACIÓN DEL PROYECTO

### package.json

- [ ] El nombre es: `"@biomahd-creator/financio-design-system"`
- [ ] La versión es válida (semver): `"1.0.1"`
- [ ] Tiene `"publishConfig": { "access": "public" }`
- [ ] Tiene `"main"`, `"module"`, `"types"` definidos
- [ ] Tiene `"files"` array con `["dist", "README.md", "LICENSE.md", "guidelines"]`

### Archivos requeridos

- [ ] Existe `README.md`
- [ ] Existe `LICENSE.md`
- [ ] Existe `.npmignore`
- [ ] Existe `tsup.config.ts`
- [ ] Existe `tailwind.config.example.js`

---

## 🔨 BUILD Y DEPENDENCIAS

- [ ] He ejecutado `npm install` sin errores
- [ ] He ejecutado `npm run build` exitosamente
- [ ] Existe la carpeta `dist/` con archivos:
  - [ ] `index.js`
  - [ ] `index.mjs`
  - [ ] `index.d.ts`
  - [ ] `styles.css`

---

## 🔍 VERIFICACIÓN PRE-PUBLICACIÓN

- [ ] He ejecutado `npm pack --dry-run`
- [ ] He verificado que solo se incluyen archivos necesarios
- [ ] NO se incluye `src/`
- [ ] NO se incluye `components/pages/`
- [ ] NO se incluye `App.tsx` ni `main.tsx`
- [ ] SÍ se incluye `dist/`
- [ ] SÍ se incluye `README.md` y `LICENSE.md`

**Comando:**
```bash
npm pack --dry-run
```

---

## 📖 DOCUMENTACIÓN

- [ ] He leído `PUBLICACION_NPM_PASO_A_PASO.md`
- [ ] He leído `RESUMEN_CAMBIOS.md`
- [ ] Sé cómo actualizar el paquete en el futuro

---

## 🚀 PUBLICACIÓN

### Comandos finales en orden:

```bash
# 1. Última verificación
npm whoami

# 2. Build final
npm run build

# 3. Dry-run
npm pack --dry-run

# 4. Publicar
npm publish --access public
```

- [ ] He ejecutado los comandos de arriba
- [ ] He visto el mensaje: `+ @biomahd-creator/financio-design-system@1.0.1`
- [ ] No hubo errores durante la publicación

---

## ✨ POST-PUBLICACIÓN

- [ ] He verificado en npmjs.com que el paquete está publicado:
      **https://www.npmjs.com/package/@biomahd-creator/financio-design-system**

- [ ] He probado instalarlo en otro proyecto:
      ```bash
      npm install @biomahd-creator/financio-design-system
      ```

- [ ] He verificado que los componentes se importan correctamente:
      ```tsx
      import { Button } from '@biomahd-creator/financio-design-system';
      ```

---

## 🎉 ÉXITO

Si marcaste TODOS los ítems de arriba, **¡FELICIDADES!** 

Tu paquete está publicado en NPM y listo para usar. 🚀

---

## 📝 PRÓXIMOS PASOS (Opcional)

### Publicar en GitHub

- [ ] Crear repositorio en GitHub
- [ ] Push del código:
      ```bash
      git init
      git add .
      git commit -m "feat: initial release v1.0.1"
      git remote add origin https://github.com/biomahd-creator/financio-design-system.git
      git push -u origin main
      ```

### Configurar CI/CD

- [ ] Agregar GitHub Actions workflow (ver `/workflows/publish.yml`)
- [ ] Agregar NPM_TOKEN a GitHub Secrets
- [ ] Probar release automático

### Marketing

- [ ] Compartir en redes sociales
- [ ] Escribir artículo/blog post
- [ ] Agregar a listas de Design Systems

---

## 🔄 ACTUALIZACIONES FUTURAS

Para publicar nuevas versiones:

```bash
# 1. Hacer cambios en el código

# 2. Actualizar versión
npm version patch   # 1.0.1 → 1.0.2 (bug fixes)
npm version minor   # 1.0.1 → 1.1.0 (nuevas features)
npm version major   # 1.0.1 → 2.0.0 (breaking changes)

# 3. Build
npm run build

# 4. Publicar
npm publish --access public

# 5. Push a Git (si usas)
git push && git push --tags
```

---

## 📞 SOPORTE

### Documentación
- NPM: https://docs.npmjs.com/
- Shadcn/ui: https://ui.shadcn.com/
- Tailwind CSS: https://tailwindcss.com/

### Recursos del proyecto
- README: `/README.md`
- Guía de instalación: `/INSTALLATION_GUIDE.md`
- Guía de exportación: `/EXPORT_SYSTEM_GUIDE.md`
- Changelog: `/CHANGELOG.md`

---

## ⚠️ TROUBLESHOOTING RÁPIDO

| Error | Solución |
|-------|----------|
| "Invalid name" | Ya resuelto. Verifica que estás en la carpeta correcta |
| "You must be logged in" | `npm login` |
| "403 Forbidden" | Verificar organización: `npm org ls @biomahd-creator` |
| "Package already exists" | El nombre ya está tomado. Cambiar en `package.json` |
| Build falla | `rm -rf node_modules dist && npm install && npm run build` |

---

## 🎯 RESUMEN ULTRA-RÁPIDO

Si tienes prisa, ejecuta esto:

```bash
# Setup
npm login
npm whoami
npm org create @biomahd-creator  # Solo si no existe

# Build y publicar
npm install
npm run build
npm publish --access public

# Verificar
# Ve a: https://www.npmjs.com/package/@biomahd-creator/financio-design-system
```

---

**¡Buena suerte!** 🍀

Si todo sale bien, tu paquete estará disponible para todo el mundo en minutos. 🌍
