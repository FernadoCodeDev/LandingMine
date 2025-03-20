![LandingMineLogo](https://github.com/FernadoCodeDev/LandingMine/blob/main/ImageReadme/LandingMineLogo.webp)

#  ⛏ **LandingMine**

LandingMine es una colección de landing pages con diferentes temáticas, creadas con **React** y **Tailwind CSS**.  
Este proyecto tiene como objetivo mejorar mis habilidades en **Front-End** y Mejorar con el uso de **Tailwind CSS** para desarrollar interfaces modernas y eficientes.

## 🛠 Tecnologías utilizadas

[![My Skills](https://skillicons.dev/icons?i=react,tailwind)](https://skillicons.dev)

 ## 🚀 Instalación y Uso

Para ejecutar **LandingMine**, sigue estos pasos:

1. Clona el repositorio
2. Instala las dependecias
     ```
     npm install
3. Inicia el proyecto desde la terminal con
     ```
     npm start
## ⚡ ¿Por qué usar npm start?
LandingMine está construido con **React**, un framework que requiere un entorno de desarrollo para compilar y ejecutar la aplicación correctamente.
El comando **npm start** ejecuta el servidor de desarrollo de React, permitiendo visualizar los cambios en tiempo real mientras trabajas en el proyecto.

## 🎨 Interfaz y Características
Al ejecutar el proyecto, verás la página principal de LandingMine, donde encontrarás una colección de 18 landing pages de diferentes temáticas.

- ✅ 100% responsive y adaptadas a distintos dispositivos.
- 🎯 Diseños modernos y optimizados con Tailwind CSS.
- ⚡ Desarrolladas con React, lo que permite componentes reutilizables y mejor mantenimiento del código.
  
![imgN1](https://github.com/FernadoCodeDev/LandingMine/blob/main/ImageReadme/imgReadmeN1.webp)

## 🎨 Diseño y Temáticas de las Landing Pages  

Cada landing page en **LandingMine** está diseñada con una temática única y completamente **responsive**, adaptándose a distintos dispositivos y tamaños de pantalla.  
El objetivo principal es explorar y mejorar en **Front-End**, creando interfaces variadas que se ajusten a diferentes industrias y estilos visuales.  

Cada landing tiene su propio diseño y características especiales:  

- 🎭 **Diseño personalizado:** Cada página sigue un estilo acorde a su temática.  
- 🌙 **Modos de color:** Algunas incluyen **Dark Mode** para mejorar la experiencia visual.  
- 🎨 **Interactividad:** Se han agregado efectos de **hover y animaciones** para hacerlas más dinámicas.  

Por ejemplo:  

📌 **DreamHouse** (Landing N°7) - 🏡 *Inmobiliaria*  
 Su diseño está inspirado en el sector inmobiliario, con un header atractivo y una paleta de colores sobria y elegante.  

📚 **CastorBook** (Landing N°17) - 📖 *Librería y editorial*  
 Esta landing incluye un efecto **hover** en los libros, simulando un estante donde al pasar el mouse se revela el contenido de cada uno.  

Cada una de estas páginas permite experimentar con distintos enfoques de diseño y **crear interfaces Front-End adaptadas a diversas necesidades**.  

![imgN2](https://github.com/FernadoCodeDev/LandingMine/blob/main/ImageReadme/imgReadmeN2.webp)
![imgN3](https://github.com/FernadoCodeDev/LandingMine/blob/main/ImageReadme/imgReadmeN3.webp)

## 🗂 Organización del Proyecto  

Para mantener un código limpio y estructurado, cada landing page en **LandingMine** sigue una organización bien definida dentro de la carpeta `src`.  

### 📁 Estructura de archivos  

Dentro de **src**, encontrarás la carpeta **LandingPage,** donde cada landing está organizada en su propia carpeta. Además, hay carpetas de **componentes globales** y **hooks**:  

![imgN4](https://github.com/FernadoCodeDev/LandingMine/blob/main/ImageReadme/imgReadmeN4.webp)

- **LandingPage/** → Contiene todas las landing pages, cada una en su propia carpeta.  
- **GlobalComponents/** → Contiene componentes reutilizables como `DarkMode` y `MenuMovile`.  
- **Hooks/** → Contiene **useScrollTransition.js**, utilizado en la landing N°3 (*Marketing Agency*) para transiciones suaves.  

Cada landing tiene su estructura específica para facilitar su mantenimiento y escalabilidad.  

### 🏗 Estructura de una Landing Page  

Tomemos como ejemplo la **Landing N°17 - CastorBook** 📚.  
Al abrir su carpeta, encontrarás:  

📌 **`HomeCastorBook.jsx`** → Componente principal que estructura la landing y llama a:  
  - **`Header.jsx`** → Cabecera de la página.  
  - **`Main.jsx`** → Contenido principal.  
  - **`Footer.jsx`** → Pie de página.
    
![imgN5](https://github.com/FernadoCodeDev/LandingMine/blob/main/ImageReadme/imgReadmeN5.png)

📌 **`components/`** → Carpeta donde se organizan los elementos de la landing.  
  - Dentro de `Main.jsx`, cada landing se divide en **tres secciones de contenido** (algunas en cuatro).  
  - Estas secciones son **independientes**, lo que permite modificarlas fácilmente: puedes **comentar o eliminar** una sin afectar a las demás.  

📌 **`SVGcomponents/`** → (Opcional) Contiene iconos en formato SVG específicos de la landing.  

![imgN6](https://github.com/FernadoCodeDev/LandingMine/blob/main/ImageReadme/imgReadmeN6.png)

Esta estructura ayuda a mantener el código ordenado y modular, permitiendo personalizar o agregar nuevas landing pages de forma sencilla. 🚀  


## 📄 Organización de la Carpeta `pages`  

Dentro de **src/**, hay una carpeta llamada **pages/** 📂 que se encarga de organizar todas las landing pages y conectarlas con el sistema de rutas en **App.js**.  

![imgN9](https://github.com/FernadoCodeDev/LandingMine/blob/main/ImageReadme/imgReadmeN9.webp)

### 📌 ¿Cómo funciona la carpeta `pages`?  

- **Cada landing page tiene su propio archivo dentro de `pages/`**, con el mismo nombre de la landing.  
- **Su único propósito es importar y renderizar el contenido desde `LandingPages/`**, lo que mantiene el código limpio y modular.  

📌 **Ejemplo:**  
Si abrimos el archivo `CampingNight.jsx` dentro de `pages/`, veremos que simplemente importa el contenido de la landing desde `LandingPages/CampingNight/HomeCampingNight.jsx`:  

![imgN10](https://github.com/FernadoCodeDev/LandingMine/blob/main/ImageReadme/imgReadmeN10.png)

**Esto significa que todas las páginas dentro de pages/ funcionan como intermediarias:
🔹 No contienen lógica ni estructura de la landing, solo la llaman desde LandingPages/.**


### 📌 Conexión con App.js
El archivo `App.js` es el que maneja la navegación entre las landing pages.

- **Cada landing está registrada con una ruta usando su nombre en la URL.**
- **Las rutas están organizadas con comentarios para facilitar su lectura.**

> **💡  Importante:** Si deseas agregar una nueva landing: 1️⃣ Crea su archivo en LandingPages/ y sigue la estructura, 2️⃣ Agrega un archivo dentro de pages/ que la importe, 3️⃣ Registra su ruta en App.js.

**Esta organización te ayudara a mantener el código modular y fácil de gestionar. ✅**


![imgN7](https://github.com/FernadoCodeDev/LandingMine/blob/main/ImageReadme/imgReadmeN7.webp)


![imgN8](https://github.com/FernadoCodeDev/LandingMine/blob/main/ImageReadme/imgReadmeN8.webp)




## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://katherineoelsner.com/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
