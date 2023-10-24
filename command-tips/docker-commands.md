# Docker

## Comandos Básicos

```
docker run <image>: Crear contenedor
docker run --name <name> <image>: Crear contenedor con nombre
docker run --name <name> <image:version>: Crear contenedor con nombre y versión
docker rename <name> <new-name>: Renombrar contenedor
docker rm <name>: Eliminar contenedor
docker rm -f <name>: Detiene y elimina contenedor
docker container prune: Eliminar todos los contenedores inactivos
```


## Procesos

```
docker ps: Listar contenedores activos
docker ps -a: Listar todos los contenedores
docker run -d <image:version>: Ejecutar contenedor en segundo plano
docker run -d <image:version> tail -f /dev/null: Ejecutar contenedor en segundo plano (con diferente main process)
docker stop <name>: Detener contenedor
```

## Puertos

```
docker run -p <host-port>:<container-port> <image>: Mapear puertos
docker run -p <host-port>:<container-port> -d <image>: Mapear puertos en segundo plano
docker run -p <host-port>:<container-port> -d <image> tail -f /dev/null: Mapear puertos en segundo plano (con diferente main process)
```

## Bind Mounts (Acceso directo al filesystem del host)

```
docker run -d --name <name> -v <host-path>:<container-path> <image>: Cargar directorio (puede cargar datos dependiendo el contenido de host-path)
- host-path: Ruta absoluta del directorio en el host (donde guardamos o sacamos los datos)
- container-path: Ruta absoluta del directorio en el contenedor (donde sacamos los datos)

```

## Volumes (Acceso solo al docker area)

```
docker volume create <name>: Crear volumen
docker volume ls: Listar volumenes
docker run -d --name <name> -v <volume-name>:<container-path> <image>: Crear contenedor con volumen (datos persistentes)
```	

## Images
```
docker images: Listar imágenes
docker pull <image:version>: Descargar imagen
docker push <image:version>: Subir imagen (requiere login docker hub)
docker build -t <image> <dockerfile-path>: Construir imagen
docker tag <image>:<version> <dockerhub-user>/<image>:<version>: Renombrar imagen
docker history <image>:<version>: Ver historial de imagen (layers)
```

## CP
```
docker cp <origen> <destino>: Copiar archivos entre contenedores
docker cp <host-path> <container-name>:<container-path>: Copiar archivos de host a contenedor
docker cp <container-name>:<container-path> <host-path>: Copiar archivos de contenedor a host
```


## Logs

```
docker logs <name>: Ver logs de contenedor
docker logs -f <name>: Ver logs de contenedor en tiempo real
docker logs -f --tail <n> <name>: Ver los últimos n logs de contenedor en tiempo real
```
