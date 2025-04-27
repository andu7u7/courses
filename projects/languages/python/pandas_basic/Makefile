VENV = .venv
PYTHON = python3
PIP = $(PYTHON) -m pip
MAIN_FILE = main.py

.PHONY: install update run clean help

# Objetivo por defecto
help:
	@echo "Usage:"
	@echo "  make install    - Crear entorno virtual e instalar dependencias"
	@echo "  make update     - Actualizar requirements.txt con las dependencias actuales"
	@echo "  make run        - Ejecutar la aplicación"
	@echo "  make clean      - Eliminar archivos generados y entorno virtual"

# Instalar dependencias
install:
	@echo "📦 Instalando dependencias..."
	@test -d $(VENV) || $(PYTHON) -m venv $(VENV)
	@. $(VENV)/bin/activate && $(PIP) install --upgrade pip
	@. $(VENV)/bin/activate && $(PIP) install -r requirements.txt
	@echo "✅ Instalación completada"

# Actualizar requirements.txt
update:
	@echo "🔄 Actualizando requirements.txt..."
	@test -d $(VENV) || (echo "❌ Ejecute 'make install' primero" && exit 1)
	@echo -n "⚠️  Esta acción sobrescribirá su requirements.txt actual. ¿Continuar? [y/N] " && read CONFIRM && [ "$${CONFIRM}" = "y" -o "$${CONFIRM}" = "Y" ] || (echo "❌ Operación cancelada" && exit 1)
	@. $(VENV)/bin/activate && $(PIP) freeze > requirements.txt
	@echo "✅ requirements.txt actualizado"

# Ejecutar aplicación
run:
	@test -d $(VENV) || (echo "❌ Ejecute 'make install' primero" && exit 1)
	@echo "🚀 Ejecutando $(MAIN_FILE)..."
	@. $(VENV)/bin/activate && $(PYTHON) -B $(MAIN_FILE)

# Limpiar proyecto
clean:
	@echo "🧹 Limpiando proyecto..."
	@rm -rf __pycache__ .pytest_cache .coverage htmlcov
	@rm -rf $(VENV)
	@echo "✅ Limpieza completada"
