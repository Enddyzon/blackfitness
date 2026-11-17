# BlackFitness – Dashboard e inventario

Rediseño de la interfaz del sistema de gimnasio en negro, gris y blanco. Incluye el dashboard y el módulo de inventario (Productos, Stocks y Ventas). Los demás módulos se mantienen sin cambios por ahora.

## Estructura

```
blackfitness/
├── index.html          Estructura de la página y carga de scripts
├── css/
│   └── styles.css      Estilos, tema claro y oscuro, diseño responsivo
└── js/
    ├── utils.js        Utilidades ($, money, iniciales)
    ├── data.js         Menú y datos de ejemplo del dashboard
    ├── store.js        Estado del inventario, movimientos y modales
    ├── dashboard.js    Vista del dashboard y alertas de inventario
    ├── inventario.js   Productos, Stocks y Ventas
    └── app.js          Navegación, tema y arranque
```

Los scripts se cargan en ese orden desde `index.html`; el orden importa porque no usan módulos.

## Cómo ejecutarlo

Abre `index.html` en el navegador, o sirve la carpeta con un servidor local:

```bash
npx serve .
```

## Reglas de inventario

- Cada venta descuenta existencias y registra un movimiento.
- No se permite vender ni sacar más de lo que hay: la existencia nunca queda en negativo.
- Un ajuste de conteo corrige la existencia al número real contado.
- Anular una venta regresa las existencias.
- La tarjeta "Productos por agotarse" del dashboard se calcula con la existencia mínima de cada producto.

## Datos

Por ahora todo se guarda en `localStorage` del navegador (clave `bf_state_v1`), por lo que cada navegador tiene sus propios datos. Para conectarlo a un backend, reemplaza las funciones `load()` y `save()` de `js/store.js` por llamadas a tu API.

## Subirlo a GitHub

```bash
git init
git add .
git commit -m "Rediseño de dashboard e inventario"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

Para publicarlo gratis: en GitHub, Settings, Pages, rama `main`, carpeta raíz.
