🌦️ Weather App

Una aplicación moderna y ligera para consultar el clima actual y el pronóstico de cualquier ciudad del mundo, desarrollada con React, TypeScript, Vite y TailwindCSS.
La app obtiene datos en tiempo real desde la API de Open-Meteo y muestra información precisa de temperatura, humedad, sensación térmica, velocidad del viento y más.

✨ Características
🌍 Búsqueda de ciudades por nombre
☀️ Clima actual con temperatura real y aparente
🕒 Conversión automática de zona horaria con Luxon
💧 Humedad, velocidad del viento y condiciones del clima
📅 Pronóstico diario y horario
💡 Interfaz moderna y responsive con TailwindCSS
⚡ Desarrollada con Vite para un rendimiento superior

🛠️ Tecnologías
React 19
Vite
TypeScript
TailwindCSS 4
Luxon
Open-Meteo API
Lucide React
🚀 Instalación y uso

Clona el repositorio:

git clone https://github.com/tuusuario/weather-app.git


Entra al directorio:

cd weather-app


Instala las dependencias:

npm install


Inicia el servidor de desarrollo:

npm run dev


Abre la app en tu navegador:

http://localhost:5173


📁 Estructura del proyecto
src/
 ├─ components/       # Componentes reutilizables de UI
 ├─ hooks/            # Hooks personalizados
 ├─ utils/            # Funciones auxiliares (ej. formateo de tiempo)
 ├─ assets/           # Iconos e imágenes
 ├─ App.tsx           # Componente principal
 └─ main.tsx          # Punto de entrada

🧠 Aprendizajes / Enfoque técnico


Este proyecto se centra en:

Manejo de datos asíncronos desde APIs públicas
Control de zonas horarias usando Luxon
Diseño responsive con utilidades de Tailwind
Arquitectura limpia y componentes reutilizables en React
