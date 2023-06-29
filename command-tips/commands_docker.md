# Docker

## Comandos Básicos

- Construir imagen

```
docker build -t uceda:latest .
// Nota: La ruta apunta al docker file
```

- Conocer procesos:

```
docker-compose ps
```

- Levantar contenedores - (Necesario Docker Compose):

```
docker-compose up -d database
docker_compose up -d web
// Nota: puedes levantar varios  al mismo tiempo
```

- Conectarse al contenedor - Terminal:

```
docker exec -it ucedaschool_database_1 bash
```
