//Productos mas vendidos
db.estadisticas.aggregate([
  { $group: { _id: "$nombre_producto", total_vendido: { $sum: "$cantidad_vendida" } } },
  { $sort: { total_vendido: -1 } }
]);

//Total de ingresos por dia
db.estadisticas.aggregate([
  { $group: { _id: "$fecha", ingresos_dia: { $sum: "$total_venta" } } },
  { $sort: { _id: 1 } }
]);

//Ventas realizadas con efectivo
db.estadisticas.find({ metodo_pago: "Efectivo" });
