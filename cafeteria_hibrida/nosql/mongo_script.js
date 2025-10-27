use cafeteria_hibrida;

// colección estadísticas con validación
db.createCollection("estadisticas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id_venta", "codigo_producto", "nombre_producto", "cantidad_vendida", "total_venta", "fecha", "metodo_pago", "ubicacion", "vendedor"],
      properties: {
        id_venta: {
          bsonType: "int",
          description: "ID unico de la venta - requerido"
        },
        codigo_producto: {
          bsonType: "int",
          description: "Codigo del producto - requerido"
        },
        nombre_producto: {
          bsonType: "string",
          description: "Nombre del producto - requerido"
        },
        cantidad_vendida: {
          bsonType: "int",
          minimum: 1,
          description: "Cantidad vendida debe ser mayor a 0"
        },
        total_venta: {
          bsonType: "double",
          minimum: 0,
          description: "Total de la venta debe ser positivo"
        },
        fecha: {
          bsonType: "date",
          description: "Fecha de la venta - requerido"
        },
        metodo_pago: {
          bsonType: "string",
          enum: ["Efectivo", "Tarjeta"],
          description: "Solo acepta Efectivo o Tarjeta"
        },
        ubicacion: {
          bsonType: "string",
          description: "Ubicacion de la venta"
        },
        vendedor: {
          bsonType: "string",
          description: "Nombre del vendedor"
        }
      }
    }
  }
});
// insertar datos
db.estadisticas.insertMany([
  { id_venta: 1, codigo_producto: 1, nombre_producto: "Café Americano", cantidad_vendida: 2, total_venta: 5.00, fecha: new Date("2025-10-21"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Sebastián González" },
  { id_venta: 2, codigo_producto: 2, nombre_producto: "Café Latte", cantidad_vendida: 1, total_venta: 3.25, fecha: new Date("2025-10-21"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 3, codigo_producto: 3, nombre_producto: "Capuchino", cantidad_vendida: 3, total_venta: 9.00, fecha: new Date("2025-10-22"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Alan Aguirre" },
  { id_venta: 4, codigo_producto: 4, nombre_producto: "Espresso", cantidad_vendida: 1, total_venta: 2.00, fecha: new Date("2025-10-22"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Carlos Hernández" },
  { id_venta: 5, codigo_producto: 5, nombre_producto: "Chocolate Caliente", cantidad_vendida: 2, total_venta: 5.50, fecha: new Date("2025-10-23"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Kevin Hernández" },
  { id_venta: 6, codigo_producto: 6, nombre_producto: "Leche Entera", cantidad_vendida: 3, total_venta: 4.50, fecha: new Date("2025-10-23"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Alan Aguirre" },
  { id_venta: 7, codigo_producto: 7, nombre_producto: "Leche Deslactosada", cantidad_vendida: 1, total_venta: 1.60, fecha: new Date("2025-10-23"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 8, codigo_producto: 8, nombre_producto: "Croissant", cantidad_vendida: 2, total_venta: 2.50, fecha: new Date("2025-10-24"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Sebastián González" },
  { id_venta: 9, codigo_producto: 9, nombre_producto: "Pan Dulce", cantidad_vendida: 4, total_venta: 3.00, fecha: new Date("2025-10-24"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 10, codigo_producto: 10, nombre_producto: "Empanada de Piña", cantidad_vendida: 1, total_venta: 0.85, fecha: new Date("2025-10-25"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Carlos Hernández" },
  { id_venta: 11, codigo_producto: 11, nombre_producto: "Azúcar Blanca 1kg", cantidad_vendida: 2, total_venta: 2.40, fecha: new Date("2025-10-25"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Sebastián González" },
  { id_venta: 12, codigo_producto: 12, nombre_producto: "Azúcar Morena 1kg", cantidad_vendida: 3, total_venta: 3.75, fecha: new Date("2025-10-25"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 13, codigo_producto: 13, nombre_producto: "Mocaccino", cantidad_vendida: 1, total_venta: 3.50, fecha: new Date("2025-10-26"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Alan Aguirre" },
  { id_venta: 14, codigo_producto: 14, nombre_producto: "Chocolate Blanco", cantidad_vendida: 2, total_venta: 6.00, fecha: new Date("2025-10-26"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Sebastián González" },
  { id_venta: 15, codigo_producto: 15, nombre_producto: "Chocolate con Leche", cantidad_vendida: 1, total_venta: 2.80, fecha: new Date("2025-10-26"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Kevin Hernández" },
  { id_venta: 16, codigo_producto: 16, nombre_producto: "Crema Batida", cantidad_vendida: 3, total_venta: 4.50, fecha: new Date("2025-10-27"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 17, codigo_producto: 17, nombre_producto: "Café Frappé", cantidad_vendida: 2, total_venta: 7.50, fecha: new Date("2025-10-27"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Alan Aguirre" },
  { id_venta: 18, codigo_producto: 18, nombre_producto: "Yogur Natural", cantidad_vendida: 1, total_venta: 1.20, fecha: new Date("2025-10-27"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 19, codigo_producto: 19, nombre_producto: "Pan de Queso", cantidad_vendida: 2, total_venta: 1.80, fecha: new Date("2025-10-28"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Sebastián González" },
  { id_venta: 20, codigo_producto: 20, nombre_producto: "Café Helado", cantidad_vendida: 3, total_venta: 9.30, fecha: new Date("2025-10-28"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Alan Aguirre" },
  { id_venta: 21, codigo_producto: 21, nombre_producto: "Latte de Caramelo", cantidad_vendida: 1, total_venta: 3.60, fecha: new Date("2025-10-29"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 22, codigo_producto: 22, nombre_producto: "Chocolate Oscuro", cantidad_vendida: 1, total_venta: 3.25, fecha: new Date("2025-10-29"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Kevin Hernández" },
  { id_venta: 23, codigo_producto: 23, nombre_producto: "Queso Fresco", cantidad_vendida: 2, total_venta: 5.00, fecha: new Date("2025-10-29"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Sebastián González" },
  { id_venta: 24, codigo_producto: 24, nombre_producto: "Azúcar Glas", cantidad_vendida: 1, total_venta: 1.40, fecha: new Date("2025-10-29"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 25, codigo_producto: 25, nombre_producto: "Pan de Ajo", cantidad_vendida: 3, total_venta: 3.00, fecha: new Date("2025-10-30"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Alan Aguirre" },
  { id_venta: 26, codigo_producto: 1, nombre_producto: "Café Americano", cantidad_vendida: 1, total_venta: 2.50, fecha: new Date("2025-10-30"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Carlos Hernández" },
  { id_venta: 27, codigo_producto: 2, nombre_producto: "Café Latte", cantidad_vendida: 2, total_venta: 6.50, fecha: new Date("2025-10-31"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 28, codigo_producto: 3, nombre_producto: "Capuchino", cantidad_vendida: 1, total_venta: 3.00, fecha: new Date("2025-10-31"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Sebastián González" },
  { id_venta: 29, codigo_producto: 4, nombre_producto: "Espresso", cantidad_vendida: 3, total_venta: 6.00, fecha: new Date("2025-11-01"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Alan Aguirre" },
  { id_venta: 30, codigo_producto: 5, nombre_producto: "Chocolate Caliente", cantidad_vendida: 2, total_venta: 5.50, fecha: new Date("2025-11-01"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Kevin Hernández" },
  { id_venta: 31, codigo_producto: 6, nombre_producto: "Leche Entera", cantidad_vendida: 4, total_venta: 6.00, fecha: new Date("2025-11-01"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 32, codigo_producto: 7, nombre_producto: "Leche Deslactosada", cantidad_vendida: 2, total_venta: 3.20, fecha: new Date("2025-11-02"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Sebastián González" },
  { id_venta: 33, codigo_producto: 8, nombre_producto: "Croissant", cantidad_vendida: 3, total_venta: 3.75, fecha: new Date("2025-11-02"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Alan Aguirre" },
  { id_venta: 34, codigo_producto: 9, nombre_producto: "Pan Dulce", cantidad_vendida: 2, total_venta: 1.50, fecha: new Date("2025-11-02"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 35, codigo_producto: 10, nombre_producto: "Empanada de Piña", cantidad_vendida: 4, total_venta: 3.40, fecha: new Date("2025-11-03"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Carlos Hernández" },
  { id_venta: 36, codigo_producto: 11, nombre_producto: "Azúcar Blanca 1kg", cantidad_vendida: 2, total_venta: 2.40, fecha: new Date("2025-11-03"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Kevin Hernández" },
  { id_venta: 37, codigo_producto: 12, nombre_producto: "Azúcar Morena 1kg", cantidad_vendida: 1, total_venta: 1.25, fecha: new Date("2025-11-03"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Sebastián González" },
  { id_venta: 38, codigo_producto: 13, nombre_producto: "Mocaccino", cantidad_vendida: 2, total_venta: 7.00, fecha: new Date("2025-11-04"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 39, codigo_producto: 14, nombre_producto: "Chocolate Blanco", cantidad_vendida: 3, total_venta: 9.00, fecha: new Date("2025-11-04"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Alan Aguirre" },
  { id_venta: 40, codigo_producto: 15, nombre_producto: "Chocolate con Leche", cantidad_vendida: 1, total_venta: 2.80, fecha: new Date("2025-11-04"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Kevin Hernández" },
  { id_venta: 41, codigo_producto: 16, nombre_producto: "Crema Batida", cantidad_vendida: 2, total_venta: 3.00, fecha: new Date("2025-11-05"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 42, codigo_producto: 17, nombre_producto: "Café Frappé", cantidad_vendida: 2, total_venta: 7.50, fecha: new Date("2025-11-05"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Sebastián González" },
  { id_venta: 43, codigo_producto: 18, nombre_producto: "Yogur Natural", cantidad_vendida: 3, total_venta: 3.60, fecha: new Date("2025-11-06"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Alan Aguirre" },
  { id_venta: 44, codigo_producto: 19, nombre_producto: "Pan de Queso", cantidad_vendida: 2, total_venta: 1.80, fecha: new Date("2025-11-06"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 45, codigo_producto: 20, nombre_producto: "Café Helado", cantidad_vendida: 1, total_venta: 3.10, fecha: new Date("2025-11-06"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Sebastián González" },
  { id_venta: 46, codigo_producto: 21, nombre_producto: "Latte de Caramelo", cantidad_vendida: 1, total_venta: 3.60, fecha: new Date("2025-11-07"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Alan Aguirre" },
  { id_venta: 47, codigo_producto: 22, nombre_producto: "Chocolate Oscuro", cantidad_vendida: 1, total_venta: 3.25, fecha: new Date("2025-11-07"), metodo_pago: "Tarjeta", ubicacion: "Guacotecti", vendedor: "Kevin Hernández" },
  { id_venta: 48, codigo_producto: 23, nombre_producto: "Queso Fresco", cantidad_vendida: 2, total_venta: 5.00, fecha: new Date("2025-11-07"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Andrea Linares" },
  { id_venta: 49, codigo_producto: 24, nombre_producto: "Azúcar Glas", cantidad_vendida: 1, total_venta: 1.40, fecha: new Date("2025-11-08"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Carlos Hernández" },
  { id_venta: 50, codigo_producto: 25, nombre_producto: "Pan de Ajo", cantidad_vendida: 3, total_venta: 3.00, fecha: new Date("2025-11-08"), metodo_pago: "Efectivo", ubicacion: "Guacotecti", vendedor: "Sebastián González" }
]);
// índices
db.estadisticas.createIndex({ fecha: 1 });
db.estadisticas.createIndex({ codigo_producto: 1 });
db.estadisticas.createIndex({ vendedor: 1 });
db.estadisticas.createIndex({ fecha: 1, metodo_pago: 1 });
// colección vendedores
db.createCollection("vendedores", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["id_vendedor", "nombre", "ubicacion"],
      properties: {
        id_vendedor: { bsonType: "int" },
        nombre: { bsonType: "string" },
        ubicacion: { bsonType: "string" },
        ventas_totales: { bsonType: "int", minimum: 0 }
      }
    }
  }
});

db.vendedores.insertMany([
  { id_vendedor: 1, nombre: "Sebastián González", ubicacion: "Guacotecti", ventas_totales: 11 },
  { id_vendedor: 2, nombre: "Andrea Linares", ubicacion: "Guacotecti", ventas_totales: 11 },
  { id_vendedor: 3, nombre: "Alan Aguirre", ubicacion: "Guacotecti", ventas_totales: 9 },
  { id_vendedor: 4, nombre: "Carlos Hernández", ubicacion: "Guacotecti", ventas_totales: 4 },
  { id_vendedor: 5, nombre: "Kevin Hernández", ubicacion: "Guacotecti", ventas_totales: 5 }
]);
// esto fallará por la validacion
db.estadisticas.insertOne({
  id_venta: 999,
  codigo_producto: 1,
  nombre_producto: "Cafe Test",
  cantidad_vendida: 0,
  total_venta: 0,
  fecha: new Date(),
  metodo_pago: "Efectivo",
  ubicacion: "Test",
  vendedor: "Test"
});

// consultas
db.estadisticas.aggregate([
  { $group: { _id: "$nombre_producto", total_vendido: { $sum: "$cantidad_vendida" } } },
  { $sort: { total_vendido: -1 } },
  { $limit: 5 }
]);

db.estadisticas.aggregate([
  { $group: { _id: "$fecha", ingresos_dia: { $sum: "$total_venta" } } },
  { $sort: { _id: 1 } }
]);

db.estadisticas.aggregate([
  { $group: { _id: "$metodo_pago", total_ventas: { $sum: 1 }, total_ingresos: { $sum: "$total_venta" } } }
]);

db.estadisticas.aggregate([
  {
    $lookup: {
      from: "vendedores",
      localField: "vendedor",
      foreignField: "nombre",
      as: "info_vendedor"
    }
  },
  { $limit: 3 }
]);

db.estadisticas.getIndexes();