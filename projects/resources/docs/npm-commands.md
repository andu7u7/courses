# Commands NPM - Paquetes y Dependencias

### **Basics**

```
npm init: crea archivo package.json.
npm init -y: omite cuestionario.
```

### **Install**

```
npm i: instala todas las dependencias del archivo package.json de un proyecto (crea node_modules y package-lock.json).
npm ci:
    - instala dependencias exactas del archivo package-lock.json (no crea node_modules).
    - se usa en entornos de integración continua (CI).
    - borra node_modules.
npm i (package_name): instala dependencia en el proyecto en ambos entornos (producción y desarrollo).
npm uninstall (package_name): desinstala dependencia del proyecto (debemos eliminar node_modules y correr npm i).
npm i (package_name) --save: instala dependencia en entorno de producción.
npm i (package_name) -S: instala dependencia en entorno de producción.
npm i (package_name) --save-dev: instala dependencia en entorno de desarrollo.
npm i (package_name) -D: instala dependencia en entorno de desarrollo.
npm i -g (package_name): instala dependencia de manera global (independiente del proyecto).
npm i (package_name) -o: instala dependencia opcional. 
npm i (package_name) --dry-run: simula instalación para verificar comportamiento
npm i (package_name)@(version): instala dependencia con versión específica. 
npm i (package_name)@latest: instala dependencia con última versión.
```

### **List**

```
npm list: muestra todas las dependencias del proyecto.
npm list -g: muestra todas las dependencias globales.
```

### **Scripts**
```
npm run (script_name): ejecuta script definido en package.json.
npm run build: compila todo el proyecto (lo prepara para producción).
npm run build --dd: muestra info más robusta de lo que le sucede al proyecto .
npx (package_name): ejecuta paquete sin instalarlo (realiza todo automático).
```

### **Manage**

```
npm outdate: muestra todas las dependencias, de quien dependen y si hay actualizaciones.
npm audit: muestra dependencias con vulnerabilidades.
npm audit --json: muestra dependencias con vulnerabilidades en formato json.
npm audit fix: actualiza dependencias con vulnerabilidades.
npm audit fix --force: actualiza dependencias con vulnerabilidades forzando actualización.
```

### **Publish**

```
Para crear uno propio:
    - Verificamos que no exista un paquete con el mismo nombre en npm.
    - Creamos repositorio en github con el nombre exacto del paquete.
    - Ejecutamos npm init -y.
    - Creamos directorio src y dentro index.js.
    - Creamos directorio bin y dentro global.js.
    - En el archivo index.js escribimos el código del paquete y exportamos las funciones con module.exports:
        module.exports = { funcion }
    - En el archivo global.js escribimos el código para ejecutar el paquete de manera global:
        !/usr/bin/env node // (Instrucción que indica que se ejecutará con nodejs)
        let result = require('../src/index.js');
        result.funcion();
    - Modificamos el archivo package.json:
        "bin": { nombre_paquete: "./ruta" }
        "preferGlobal": true
    - Ejecutamos *npm link* para crear un enlace simbólico en el sistema (verifica que todo esté correcto).
    - Ejecutamos npm i -g (ruta) para instalar el paquete de manera global.
    - Ejecutamos nombre_paquete (lo que colocamos en bin) para ejecutar el paquete.
    - Crea tu cuenta en npm.
    - Inicia sesión con *npm adduser*
    - Ejecutamos *npm publish*.
```

### **Version**
    

```
- Se necesita buena documentación en README.md.
- Ejecutamos git add y commit.
- Subimos cambios al repo remoto.
- Ejecutamos *npm version (patch.minor.major)*: actualiza versión del proyecto (coloca nueva versión dependiendo el nivel de cambio que hayas realizado).
- Ejecutamos *npm publish*.

SEMANTICO (M.M.P):
    Major: breaking change.
    Minor: new feature.
    Patch: bug fix.

SIMBOLOS:
    Caret (^): Permite actualizar las versiones minor y patch
    Tilde (~): Permite actualizar las versiones patch

Ejm: ^1.2.3: Actualiza a 1.3.0
```
