## Buscador de Películas Wow

Este proyecto fue desarrollado como parte de un examen para mi Bootcamp de programación web en Adalab y consiste en una aplicación web que permite buscar y filtrar películas donde Owen Wilson utiliza la palabra "wow". Está construido utilizando React y se divide en componentes para una mejor organización del código.

## Funcionalidades

- **Búsqueda y Filtro**: Los usuarios pueden buscar películas por nombre y filtrarlas por año de lanzamiento. La búsqueda y los filtros se actualizan en tiempo real a medida que el usuario ingresa o selecciona información.

- **Detalle de Película**: Al hacer clic en una película, se muestra el detalle completo de la misma.

- **Orden Alfabetico**: Todos los resultados de la búsqueda se presentan ordenados alfabéticamente por nombre de película.

- **Filtrado de Años**: En el filtro de años, solo se muestran las opciones que coinciden con las películas disponibles. Estas opciones están ordenadas de menor a mayor.

## Componentes Principales

### `App.jsx`

Este componente es el punto de entrada de la aplicación y maneja la gestión del estado de las películas, los filtros y la navegación. También coordina la recuperación de datos de la API y el almacenamiento local.

### `MovieSceneList.jsx`

Este componente renderiza la lista de películas resultantes de la búsqueda y filtrado. Recibe propiedades como `movies` (las películas a mostrar) y `movieFilter` (el filtro de búsqueda).

### `Filters.jsx`

Este componente proporciona controles de entrada para la búsqueda y el filtro de años. También muestra las opciones de filtrado de años, basadas en los datos disponibles.

### `MovieSceneDetail.jsx`

Este componente muestra el detalle completo de una película cuando se selecciona desde la lista.

## Estilos

La apariencia de la aplicación se gestiona utilizando SASS (Syntactically Awesome Stylesheets) para una mejor organización y mantenibilidad del código CSS.

## Cómo Funciona

1. Cuando el componente `App` se monta, verifica si ya hay películas en el almacenamiento local. Si no, obtiene los datos de la API y los almacena localmente.

2. Se implementa la funcionalidad de búsqueda y filtrado de años. Los resultados se actualizan en tiempo real a medida que el usuario interactúa con los controles de entrada.

3. La lista de películas se muestra y se ordena alfabéticamente.

4. Al hacer clic en una película, el componente `MovieSceneDetail` se monta y muestra el detalle de la misma.

## Cómo Ejecutar el Proyecto

1. Asegúrate de tener Node.js y npm instalados en tu máquina.

2. Clona el repositorio en tu máquina local.

3. En la terminal, navega al directorio del proyecto y ejecuta el comando `npm install` para instalar las dependencias.

4. Luego, ejecuta el comando `npm start` para iniciar la aplicación en un servidor local.

## Nota

Este proyecto es una aplicación de demostración creada con fines educativos. Pueden haber áreas de mejora y optimización.