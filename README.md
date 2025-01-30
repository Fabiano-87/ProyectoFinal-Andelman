# Proyecto de E-commerce con React y Firebase

Este es un proyecto de simulador de carrito de compras desarrollado con React, Vite y Firebase. Su propósito es demostrar las funcionalidades clave de una tienda en línea, como la visualización de productos, un carrito de compras interactivo y la integración con Firestore para guardar pedidos de clientes.

## Funcionalidades

- **Catálogo de Productos**: Los productos se obtienen desde una colección en Firestore (`products`) y se organizan por categorías.
- **Página de Detalle del Producto**: Cada producto tiene su propia página con una descripción, precio, e imágenes en un carrusel.
- **Carrito de Compras**:
  - Agregar, quitar y modificar la cantidad de productos.
  - Ver el contenido del carrito en un modal interactivo.
  - Botones para incrementar (`+`) y decrementar (`-`) las cantidades.
  - Vaciar el carrito con un solo clic.
- **Modal de Checkout**:
  - Recoge información del cliente como nombre, correo electrónico y dirección.
  - Guarda la información del pedido en Firestore en una colección llamada `orders`.
  - Muestra un mensaje de confirmación al completar el pedido.
- **Persistencia de Datos**: Los productos en el carrito persisten incluso al actualizar la página.
- **Mensajes de Notificación**: Uso de `react-toastify` para mostrar mensajes visuales como "Producto añadido al carrito" y "Gracias por tu compra".

## Tecnologías Utilizadas

- **Frontend**:
  - React (con Vite como bundler)
  - CSS puro para estilos personalizados
  - Componentes modulares
- **Backend**:
  - Firebase Firestore para la base de datos en tiempo real
  - Firebase Hosting para desplegar el proyecto (opcional)
- **Librerías y Herramientas**:
  - `react-toastify` para notificaciones
  - `react-router-dom` para la navegación entre páginas
  - Firebase SDK para manejar Firestore
  - Font Awesome para iconos
- **Gestión del Estado**:
  - Context API para manejar el estado global del carrito de compras

## Instalación y Configuración

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-repo/aqui.git
   cd ecommerce
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura Firebase:

   - Ve a [Firebase Console](https://console.firebase.google.com) y crea un nuevo proyecto.
   - Crea una base de datos Firestore y añade dos colecciones:
     - `products`: Contendrá los detalles de cada producto (nombre, precio, imágenes, descripción, stock, etc.).
     - `orders`: Se almacenarán los pedidos realizados por los clientes.
   - Copia tu configuración de Firebase en `firebaseConfig.js`.

4. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

## Estructura del Proyecto

```
ecommerce/
├── src/
│   ├── components/
│   │   ├── Carousel.jsx
│   │   ├── CheckoutModal.jsx
│   │   ├── ProductCard.jsx
│   │   └── CartWidget.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── firebaseConfig.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
│   └── assets/
│       ├── img/
│       └── logo.png
├── package.json
└── README.md
```

## Próximas Mejoras

- Implementar autenticación para los usuarios.
- Integrar un sistema de pago en línea (por ejemplo, Stripe).
- Añadir un historial de pedidos para los clientes registrados.

---

**Autor:** Fabian Andelman
