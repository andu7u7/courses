# Apuntes

## **INSTALL**

```
- Instalar node.js
- Ejecutar npm i typescript
```
## **CONFIG**
- Crear archivo tsconfig.json
### **COMMANDS**

    npx tsc --init: 
        - Crea un archivo tsconfig.json con la configuración por defecto.

## **GENERAL**
- Colocar //@ts-check en file.js nos dará feedback temprano sobre errores.
- Node y el navegador solo ejecuta archivos .js, por lo que debemos transformar nuestros archivos .ts a .js mediante transpilación.

## **TRANSPILACIÓN**

- Proceso de convertir código de un lenguaje a otro.
### **COMMANDS**
    
    npx tsc (file.ts): 
        - Genera un archivo .js con la versión de js que tengamos en el proyecto.
        - Ej: npx tsc index.ts
    npx tsc (file.ts) --target (es-version): 
        - Genera un archivo .js con una versión de js específica (por defecto es3).
        - Ej: npx tsc index.ts --target es6
    npx tsc (file.ts) --outDir (./folder): 
        - Genera un archivo .js en una carpeta específica.
        - Ej: npx tsc index.ts --outDir dist
    npx tsc (file.ts) --watch:
        - Genera un archivo .js y se queda escuchando cambios en el archivo .ts.