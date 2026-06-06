# ChangaMas - Django + React + PostgreSQL

Proyecto full stack con:
- Backend: Django (API REST)
- Frontend: React
- Base de datos: PostgreSQL

---

#Cómo instalar en otra PC

## 1. Clonar el proyecto
git clone https://github.com/TU_USUARIO/changamas.git

cd changamas

---

## 2. Backend (Django)

### Crear entorno virtual
python -m venv venv-changamas

### Activar entorno
venv-changamas\Scripts\activate

### Instalar dependencias
pip install -r requirements.txt

### Migrar base de datos
python manage.py migrate

### Iniciar servidor
python manage.py runserver

Backend corre en:
http://127.0.0.1:8000

---

## 3. Frontend (React)

cd react-changamas

npm install

npm start

Frontend corre en:
http://localhost:3000

---

#  IMPORTANTE

- No subir `venv`
- No subir `node_modules`
- Configurar PostgreSQL en settings.py
- Instalar django-cors-headers si hay errores CORS

---

#  Tecnologías

- Django
- React
- PostgreSQL
- REST API
