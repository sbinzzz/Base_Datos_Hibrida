use Cafeteria_hibrida;


// 1. Colección de estadísticas

db.createCollection("estadisticas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id_venta", "codigo_producto", "nombre_producto", "cantidad_vendida", "total_venta", "fecha", "vendedor"],
      properties: {
        id_venta: {
          bsonType: "int",
          description: "Identificador único de la venta"
        },
        codigo_producto: {
          bsonType: "int",
          description: "Código del producto vendido"
        },
        nombre_producto: {
          bsonType: "string",
          description: "Nombre del producto vendido"
        },
        cantidad_vendida: {
          bsonType: "int",
          description: "Cantidad de unidades vendidas"
        },
        total_venta: {
          bsonType: "double",
          description: "Total de la venta en dólares"
        },
        fecha: {
          bsonType: "date",
          description: "Fecha en la que se realizó la venta"
        },
        metodo_pago: {
          bsonType: "string",
          description: "Método de pago utilizado"
        },
        ubicacion: {
          bsonType: "string",
          description: "Ubicación o sucursal donde se realizó la venta"
        },
        vendedor: {
          bsonType: "string",
          description: "Nombre del empleado que realizó la venta"
        }
      }
    }
  }
});


// 2. Índices para optimizar consultas

db.estadisticas.createIndex({ fecha: 1 });
db.estadisticas.createIndex({ nombre_producto: 1 });
db.estadisticas.createIndex({ vendedor: 1 });
db.estadisticas.createIndex({ metodo_pago: 1 });


// 3. Datos de ejemplo (5 registros)

db.estadisticas.insertMany([
  {
    id_venta: 1,
    codigo_producto: 101,
    nombre_producto: "Café Americano",
    cantidad_vendida: 2,
    total_venta: 6.00,
    fecha: new Date("2025-10-01"),
    metodo_pago: "Efectivo",
    ubicacion: "Guacotecti",
    vendedor: "Sebastián González"
  },
  {
    id_venta: 2,
    codigo_producto: 102,
    nombre_producto: "Café Latte",
    cantidad_vendida: 1,
    total_venta: 3.50,
    fecha: new Date("2025-10-01"),
    metodo_pago: "Tarjeta",
    ubicacion: "Guacotecti",
    vendedor: "Camila Torres"
  },
  {
    id_venta: 3,
    codigo_producto: 103,
    nombre_producto: "Croissant",
    cantidad_vendida: 3,
    total_venta: 7.50,
    fecha: new Date("2025-10-02"),
    metodo_pago: "Efectivo",
    ubicacion: "San Miguel",
    vendedor: "Andrés Pérez"
  },
  {
    id_venta: 4,
    codigo_producto: 104,
    nombre_producto: "Café Cappuccino",
    cantidad_vendida: 2,
    total_venta: 5.00,
    fecha: new Date("2025-10-02"),
    metodo_pago: "Tarjeta",
    ubicacion: "Guacotecti",
    vendedor: "Sebastián González"
  },
  {
    id_venta: 5,
    codigo_producto: 105,
    nombre_producto: "Pan Dulce",
    cantidad_vendida: 4,
    total_venta: 4.00,
    fecha: new Date("2025-10-03"),
    metodo_pago: "Efectivo",
    ubicacion: "San Miguel",
    vendedor: "Camila Torres"
  }
]);

// 4. Consultas analíticas

// Productos más vendidos
db.estadisticas.aggregate([
  { $group: { _id: "$nombre_producto", total_vendido: { $sum: "$cantidad_vendida" } } },
  { $sort: { total_vendido: -1 } }
]);

// Total de ingresos por día
db.estadisticas.aggregate([
  { $group: { _id: "$fecha", ingresos_dia: { $sum: "$total_venta" } } },
  { $sort: { _id: 1 } }
]);

// Ventas por método de pago
db.estadisticas.aggregate([
  { $group: { _id: "$metodo_pago", total: { $sum: "$total_venta" } } },
  { $sort: { total: -1 } }
]);

// Total vendido por vendedor
db.estadisticas.aggregate([
  { $group: { _id: "$vendedor", total_vendido: { $sum: "$total_venta" } } },
  { $sort: { total_vendido: -1 } }
]);

// 5. Roles y usuarios (para seguridad y control)

// Crear rol para analista (solo lectura)
db.createRole({
  role: "analistaCafeteria",
  privileges: [
    { resource: { db: "Cafeteria_hibrida", collection: "estadisticas" }, actions: ["find", "aggregate"] }
  ],
  roles: []
});

// Crear rol para administrador (control total)
db.createRole({
  role: "adminCafeteria",
  privileges: [
    { resource: { db: "Cafeteria_hibrida", collection: "" }, actions: ["find", "insert", "update", "remove", "createCollection", "createIndex"] }
  ],
  roles: []
});

// Crear usuarios y asignar roles
db.createUser({
  user: "analista",
  pwd: "analista123",
  roles: [{ role: "analistaCafeteria", db: "Cafeteria_hibrida" }]
});

db.createUser({
  user: "admin",
  pwd: "admin123",
  roles: [{ role: "adminCafeteria", db: "Cafeteria_hibrida" }]
});

