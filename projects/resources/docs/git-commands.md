# Commands Git

## VCS (Version Control System) - SCM (System Control Management)

### **Basics**

```
git init: crea un repositorio.
git init --initial-branch=<name-branch>: crea un repositorio con rama por defecto.
git init -b <name-branch>: crea un repositorio con rama por defecto.
git clone: crea una copia del repositorio en local.
git add (archivo o ruta): agrega archivo(s) a Staging.
git add -A: trackea todos los archivos.
git commit -m "mensaje": guarda cambios de manera local con un mensaje.
git commit -am "mensaje": fusión de add y commit -m (solo archivos que ya han sido trackeados).
git commit -a -m "mensaje": fusión de add y commit.
git commit -m "mensaje" <archivo>: guarda cambios y agrega archivo (omite el -a).
```

### **Branchs**

```
git branch: muestra las ramas y en cuál nos encontramos.
git branch (nombre_rama): crear una nueva rama.
git checkout (nombre_rama): moverse entre ramas.
git checkout -b (nombre_rama): fusión de branch y checkout.
git checkout -- <archivo>: recuperar archivo borrado.
git branch -d (nombre_rama): Borra la rama.
git symbolic-ref HEAD refs/heads/main: hacer que HEAD apunte a otra rama.
git branch --set-upstream-to origin/main: establecer por defecto la rama main de origin.
```

### **Remote**

```
git remote -v: muestra el origin del repositorio (fetch - push)
git remote rm (nombre): borramos el origin.
git remote add (nombre) (origin): agregamos origin.
git request-pull -p <origin/branch>: solicitud de incorporación de cambios.
git fetch: traemos cambios del servidor remoto al repo local.
git merge (nombre_rama): fusión de ramas con mensaje (nos ubicamos en la rama donde queremos sumarle los cambios)
git merge --abort: detenemos merge.
git pull (remoto) (local): fetch y merge al mismo tiempo.
git push (remoto) (local): mandar cambios al repositorio remoto.
```

### **Reset**

```
git reset (ID commit) --soft: regresamos a ese commit pero mantenemos los nuevos cambios en Staging.
git reset (ID commit) --hard: regresamos a ese commit (no recomendado).
git reset (ID commit / HEAD) <archivo>: recupera archivo de cierto commit.
git reset HEAD: saca los cambios de Staging, pero no los borra. Opuesto a git add.
git rm <archivo>: elimina archivo (no podemos recuperarlo con git checkout, solo regresando entre commits).
git rm: elimina los archivos, pero no su historial. Si queremos recuperar algo, solo hay que regresar entre commits, se debe usar con especificaciones.
    --cached: elimina los archivos en Staging pero los mantiene en el disco duro.
    --force: elimina los archivos de git y del disco duro.
```

### **Status**

```
git status: estado de archivos en el repositorio.
git log: historia entera del repositorio.
git log --stat: cambios específicos en el archivo a partir de un commit.
git log --oneline: Te muestra el id commit y el título del commit.
git log -(cantidad): Mostramos una cantidad exacta de commits.
git show: cambios históricos y específicos hechos en un archivo.
git diff "ID commit 1" "ID commit 2": comparar cambios entre versiones.
git diff: comparar directorio con Staging.
```

### **Logs y Otros**

```
git log --decorate: Te muestra donde se encuentra el head point en el log.
git log -p: Explica el número de líneas que se cambiaron y te muestra que se cambió en el contenido.
git shortlog: Indica que commits ha realizado un usuario, mostrando el usuario y el título de sus commits.
git log --author="Name Author": Commits hechos por autor que cumplan exactamente con el nombre.
git log --grep="INVIE": Busca los commits que cumplan tal cual está escrito entre las comillas.
git log --grep="INVIE" –i: Busca los commits que cumplan sin importar mayúsculas o minúsculas.
git log – index.html: Busca los commits en un archivo en específico.
git log -S "Por contenido": Buscar los commits con el contenido dentro del archivo.

Localizar commits por fechas:
git log --after="2018-1-2"
git log --after="today" y
git log --after="2018-1-2" --before="today"
```

### **Ayuda**

```
git help: ayuda de comandos.
git help <comando>: ayuda de un comando en específico.
git help tutorial: ayuda interactiva de comandos.
```
