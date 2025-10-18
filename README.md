🌦️ Weather App

Una aplicación moderna y ligera para consultar el clima actual y el pronóstico de cualquier ciudad del mundo, desarrollada con React, TypeScript, Vite y TailwindCSS.
La app obtiene datos en tiempo real desde la API de Open-Meteo y muestra información precisa de temperatura, humedad, sensación térmica, velocidad del viento y más.

✨ Características <br>
🌍 Búsqueda de ciudades por nombre <br>
☀️ Clima actual con temperatura real y aparente <br>
🕒 Conversión automática de zona horaria con Luxon <br>
💧 Humedad, velocidad del viento y condiciones del clima <br>
📅 Pronóstico diario y horario <br>
💡 Interfaz moderna y responsive con TailwindCSS <br>
⚡ Desarrollada con Vite para un rendimiento superior <br>

🛠️ Tecnologías<br>
React 19<br>
Vite<br>
TypeScript<br>
TailwindCSS 4<br>
Luxon<br>
Open-Meteo API<br>
Lucide React<br>

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
src/<br>
 ├─ components/       # Componentes reutilizables de UI<br>
 ├─ hooks/            # Hooks personalizados<br>
 ├─ utils/            # Funciones auxiliares (ej. formateo de tiempo)<br>
 ├─ assets/           # Iconos e imágenes<br>
 ├─ pages/            # Paginas<br>
 ├─ types/            # Interfaces y types<br>
 ├─ services          # Implementacion de la api<br>
 └─ main.tsx          # Punto de entrada<br>

🧠 Aprendizajes / Enfoque técnico

Este proyecto se centra en:

Manejo de datos asíncronos desde APIs públicas<br>
Control de zonas horarias usando Luxon<br>
Diseño responsive con utilidades de Tailwind<br>
Arquitectura limpia y componentes reutilizables en React<br>
