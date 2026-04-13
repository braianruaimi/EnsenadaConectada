# Web: https://tu-dominio-web.com

# Ensenada Conectada

Directorio digital local para conectar comercios, servicios y profesionales de Ensenada desde una experiencia web moderna, rápida y visualmente cuidada.

## Descripción

Ensenada Conectada fue desarrollada con una estética high-end startup, enfoque mobile-first y una arquitectura de contenido centralizada en src/config.js. Toda la información dinámica de la plataforma se administra desde ese archivo para evitar contenido hardcodeado en los componentes.

La aplicación incluye:

- Buscador en tiempo real por nombre o categoría.
- Filtros rápidos por rubro.
- Tarjetas elegantes con efecto hover.
- Botón flotante de asistente con preguntas y respuestas locales.
- Botón flotante de WhatsApp.
- Sección para publicar negocios.
- Sección de cobertura local.
- Panel editor local para previsualizar cambios sin tocar componentes.
- Mapa interactivo con ubicaciones reales de negocios en Ensenada.

## Stack

- React
- Vite
- Tailwind CSS
- Lucide React
- Leaflet
- React Leaflet

## Estructura

La app sigue una regla central: todo contenido editable vive en src/config.js.

- src/config.js
  Fuente principal de textos, categorías, negocios, preguntas del asistente, mapa y contenido general.
- src/App.jsx
  Composición principal de la landing.
- src/components/FloatingAssistant.jsx
  Botón flotante y modal del asistente.
- src/components/FloatingWhatsApp.jsx
  Botón flotante de WhatsApp.
- src/components/ContentStudioPanel.jsx
  Panel local para editar contenido visible en runtime.
- src/components/BusinessMap.jsx
  Mapa interactivo con marcadores de negocios.

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build de producción

```bash
npm run build
```

## Personalización de contenido

Si querés cambiar textos, categorías, negocios, preguntas del asistente o configuración del mapa, el archivo a editar es:

- src/config.js

Ese archivo concentra:

- Header y hero.
- Categorías y buscador.
- Negocios y datos de contacto.
- Asistente flotante.
- WhatsApp flotante.
- Secciones de publicación y cobertura.
- Configuración del mapa.

## Publicación

El proyecto ya quedó versionado y publicado en GitHub sobre la rama main.

Repositorio:

- https://github.com/braianruaimi/EnsenadaConectada

## Nota importante

La primera línea del README quedó preparada con un enlace placeholder:

- https://tu-dominio-web.com

Cuando tengas la URL real del sitio desplegado, conviene reemplazar esa línea para que el acceso a la web quede visible arriba de todo.