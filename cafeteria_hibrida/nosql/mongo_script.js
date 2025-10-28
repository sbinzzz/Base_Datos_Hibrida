use cafeteria_hibrida;

// Esto se ejecuta en MongoDB Compass, específicamente su shell integrado (mongosh). 
// las consultas se hacen en la interfaz gráfica de Compass.
// colección estadísticas con validación
db.createCollection("ventas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "id_venta",
        "codigo_producto",
        "nombre_producto",
        "cantidad_vendida",
        "total_venta",
        "fecha",
        "metodo_pago",
        "ubicacion",
        "vendedor"
      ],
      properties: {
        id_venta: { bsonType: "int" },
        codigo_producto: { bsonType: "int" },
        nombre_producto: { bsonType: "string" },
        cantidad_vendida: { bsonType: "int", minimum: 1 },
        total_venta: { bsonType: ["double", "int"], minimum: 0, description: "Total de la venta debe ser positivo" },
        fecha: { bsonType: "date" },
        metodo_pago: { bsonType: "string", enum: ["Efectivo", "Tarjeta"] },
        ubicacion: { bsonType: "string" },
        vendedor: { bsonType: "string" }
      }
    }
  }
});


// insertar datos
db.estadisticas.insertMany([
  {
    id_venta: NumberInt(1),
    codigo_producto: NumberInt(201),
    nombre_producto: "Café Americano",
    cantidad_vendida: NumberInt(3),
    total_venta: 15.00,
    fecha: new Date("2025-01-10"),
    metodo_pago: "Efectivo",
    ubicacion: "Guacotecti",
    vendedor: "Kevin Hernández"
  },
  {
    id_venta: NumberInt(2),
    codigo_producto: NumberInt(202),
    nombre_producto: "Café Latte",
    cantidad_vendida: NumberInt(2),
    total_venta: 10.00,
    fecha: new Date("2025-01-11"),
    metodo_pago: "Tarjeta",
    ubicacion: "Guacotecti",
    vendedor: "Alan Aguirre"
  },
  {
    id_venta: NumberInt(3),
    codigo_producto: NumberInt(203),
    nombre_producto: "Té Verde",
    cantidad_vendida: NumberInt(5),
    total_venta: 12.50,
    fecha: new Date("2025-01-12"),
    metodo_pago: "Efectivo",
    ubicacion: "Guacotecti",
    vendedor: "Sebastián González"
  },
  {
    id_venta: NumberInt(4),
    codigo_producto: NumberInt(204),
    nombre_producto: "Croissant",
    cantidad_vendida: NumberInt(4),
    total_venta: 8.00,
    fecha: new Date("2025-01-13"),
    metodo_pago: "Tarjeta",
    ubicacion: "Guacotecti",
    vendedor: "Carlos Hernández"
  },
  {
    id_venta: NumberInt(5),
    codigo_producto: NumberInt(205),
    nombre_producto: "Tarta de Chocolate",
    cantidad_vendida: NumberInt(2),
    total_venta: 15.00,
    fecha: new Date("2025-01-14"),
    metodo_pago: "Efectivo",
    ubicacion: "Guacotecti",
    vendedor: "Andrea Linares"
  },
  {
    id_venta: NumberInt(6),
    codigo_producto: NumberInt(206),
    nombre_producto: "Café Mocha",
    cantidad_vendida: NumberInt(1),
    total_venta: 5.00,
    fecha: new Date("2025-02-05"),
    metodo_pago: "Tarjeta",
    ubicacion: "Guacotecti",
    vendedor: "Kevin Hernández"
  },
  {
    id_venta: NumberInt(7),
    codigo_producto: NumberInt(207),
    nombre_producto: "Smoothie de Frutas",
    cantidad_vendida: NumberInt(3),
    total_venta: 18.00,
    fecha: new Date("2025-02-10"),
    metodo_pago: "Efectivo",
    ubicacion: "Guacotecti",
    vendedor: "Alan Aguirre"
  },
  {
    id_venta: NumberInt(8),
    codigo_producto: NumberInt(208),
    nombre_producto: "Bocadillo de Jamón",
    cantidad_vendida: NumberInt(2),
    total_venta: 10.00,
    fecha: new Date("2025-02-15"),
    metodo_pago: "Tarjeta",
    ubicacion: "Guacotecti",
    vendedor: "Sebastián González"
  },
  {
    id_venta: NumberInt(9),
    codigo_producto: NumberInt(209),
    nombre_producto: "Café con Leche",
    cantidad_vendida: NumberInt(4),
    total_venta: 20.00,
    fecha: new Date("2025-03-01"),
    metodo_pago: "Efectivo",
    ubicacion: "Guacotecti",
    vendedor: "Carlos Hernández"
  },
  {
    id_venta: NumberInt(10),
    codigo_producto: NumberInt(210),
    nombre_producto: "Galletas Assortidas",
    cantidad_vendida: NumberInt(6),
    total_venta: 12.00,
    fecha: new Date("2025-03-05"),
    metodo_pago: "Tarjeta",
    ubicacion: "Guacotecti",
    vendedor: "Andrea Linares"
  }
]);

db.estadisticas.insertMany([
  {
    id_venta: NumberInt(11),
    codigo_producto: NumberInt(211),
    nombre_producto: "Muffin de Arándanos",
    cantidad_vendida: NumberInt(5),
    total_venta: 17.50,
    fecha: new Date("2025-03-08"),
    metodo_pago: "Efectivo",
    ubicacion: "Guacotecti",
    vendedor: "Kevin Hernández"
  },
  {
    id_venta: NumberInt(12),
    codigo_producto: NumberInt(212),
    nombre_producto: "Capuchino",
    cantidad_vendida: NumberInt(3),
    total_venta: 13.50,
    fecha: new Date("2025-03-10"),
    metodo_pago: "Tarjeta",
    ubicacion: "Guacotecti",
    vendedor: "Alan Aguirre"
  },
  {
    id_venta: NumberInt(13),
    codigo_producto: NumberInt(213),
    nombre_producto: "Panini de Pollo",
    cantidad_vendida: NumberInt(4),
    total_venta: 22.00,
    fecha: new Date("2025-03-12"),
    metodo_pago: "Efectivo",
    ubicacion: "Guacotecti",
    vendedor: "Sebastián González"
  },
  {
    id_venta: NumberInt(14),
    codigo_producto: NumberInt(214),
    nombre_producto: "Brownie de Chocolate",
    cantidad_vendida: NumberInt(2),
    total_venta: 9.00,
    fecha: new Date("2025-03-15"),
    metodo_pago: "Tarjeta",
    ubicacion: "Guacotecti",
    vendedor: "Carlos Hernández"
  },
  {
    id_venta: NumberInt(15),
    codigo_producto: NumberInt(215),
    nombre_producto: "Café Espresso",
    cantidad_vendida: NumberInt(6),
    total_venta: 18.00,
    fecha: new Date("2025-03-18"),
    metodo_pago: "Efectivo",
    ubicacion: "Guacotecti",
    vendedor: "Andrea Linares"
  },
  {
    id_venta: NumberInt(16),
    codigo_producto: NumberInt(216),
    nombre_producto: "Sandwich Vegetariano",
    cantidad_vendida: NumberInt(3),
    total_venta: 15.00,
    fecha: new Date("2025-03-20"),
    metodo_pago: "Tarjeta",
    ubicacion: "Guacotecti",
    vendedor: "Kevin Hernández"
  },
  {
    id_venta: NumberInt(17),
    codigo_producto: NumberInt(217),
    nombre_producto: "Café Helado",
    cantidad_vendida: NumberInt(4),
    total_venta: 16.00,
    fecha: new Date("2025-03-22"),
    metodo_pago: "Efectivo",
    ubicacion: "Guacotecti",
    vendedor: "Alan Aguirre"
  },
  {
    id_venta: NumberInt(18),
    codigo_producto: NumberInt(218),
    nombre_producto: "Té Chai",
    cantidad_vendida: NumberInt(3),
    total_venta: 9.00,
    fecha: new Date("2025-03-25"),
    metodo_pago: "Tarjeta",
    ubicacion: "Guacotecti",
    vendedor: "Sebastián González"
  },
  {
    id_venta: NumberInt(19),
    codigo_producto: NumberInt(219),
    nombre_producto: "Empanada de Queso",
    cantidad_vendida: NumberInt(5),
    total_venta: 12.50,
    fecha: new Date("2025-03-28"),
    metodo_pago: "Efectivo",
    ubicacion: "Guacotecti",
    vendedor: "Carlos Hernández"
  },
  {
    id_venta: NumberInt(20),
    codigo_producto: NumberInt(220),
    nombre_producto: "Pastel de Zanahoria",
    cantidad_vendida: NumberInt(2),
    total_venta: 10.00,
    fecha: new Date("2025-03-30"),
    metodo_pago: "Tarjeta",
    ubicacion: "Guacotecti",
    vendedor: "Andrea Linares"
  }
]);


// índices
db.estadisticas.createIndex({ fecha: 1 });
db.estadisticas.createIndex({ codigo_producto: 1 });
db.estadisticas.createIndex({ vendedor: 1 });
db.estadisticas.createIndex({ fecha: 1, metodo_pago: 1 });

// verificacion de creacion de índices
db.estadisticas.getIndexes();
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
// documento inválido para probar la validación de la colección vendedores
db.vendedores.insertOne({
  id_vendedor: 1,
  // nombre está ausente
  ubicacion: "Guacotecti",
  ventas_totales: -5 // ventas_totales es negativo, lo cual no está permitido
});

// docuemento inválido para probar la validación de la colección estadísticas
db.ventas.insertOne({
  // id_venta está ausente
  codigo_producto: 101,
  nombre_producto: "Café Americano",
  cantidad_vendida: 0, // cantidad_vendida debe ser mayor a 0
  total_venta: -15.00, // total_venta es negativo, lo cual no está permitido
  fecha: "2025-01-10", // fecha no es un objeto de tipo date
  metodo_pago: "Monedero", // método de pago no es válido
  ubicacion: "Guacotecti",
  vendedor: "Kevin Hernández"
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

