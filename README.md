Sistema de Gestión de Ventas – Base de Datos Híbrida (SQL Server + MongoDB)
Materia: Arquitectura de Datos Integral

Integrantes del grupo:

Alexis Wilfredo Pérez Vázquez

Carlos Sebastián González Durán

Andrea Michelle Linares Arévalo

Alan Emir Aguirre Orellana

Carlos Alberto Hernández Guardado

Kevin Adonay Hernández Mejía

## Descripción general

Este proyecto implementa una base de datos híbrida que combina SQL Server y MongoDB para la gestión de ventas de una cafetería.
El objetivo es aprovechar las ventajas de cada tecnología:

SQL Server: Control transaccional, integridad referencial y manejo de ventas, clientes, productos y proveedores.

MongoDB: Almacenamiento flexible de datos analíticos y estadísticas de ventas.

## Tecnologías utilizadas

| Tipo | Tecnología | Versión / Herramienta |
|------|-------------|------------------------|
| Base de datos relacional | SQL Server | 2019 |
| Base de datos NoSQL | MongoDB | 8.0 (Shell o Compass) |
| Lenguajes | SQL, JavaScript | (para mongosh) |
| Entorno | Visual Studio Code, SSMS, mongosh | — |
Instrucciones de ejecución

1. SQL Server

-Abre SQL Server Management Studio (SSMS).

-Ejecuta los scripts en este orden:

    01_crear_tablas.sql
    02_datos_prueba.sql
    03_sp_y_triggers.sql

2. MongoDB

-Abre mongosh o MongoDB Compass.

-Carga los datos de prueba con:

    load("mongodb/datos_prueba_mongodb.js")

-Ejecuta las consultas de análisis:

    load("mongodb/consultas_mongodb.js")

## Integración híbrida

| Sistema | Campo clave | Descripción |
|----------|--------------|-------------|
| SQL Server | id_venta | Identificador principal de venta |
| MongoDB | id_venta | Referencia cruzada de la venta para análisis |


Ambas bases se sincronizan conceptualmente por el campo id_venta.
Las transacciones se manejan en SQL Server y las estadísticas o reportes se procesan en MongoDB.

Consultas incluidas

-SQL Server

    Productos más vendidos
    Total de ventas por cliente
    Ventas por fecha
    Actividad de triggers y bitácora (log_eventos)
    Ejemplo de transacción con COMMIT / ROLLBACK

-MongoDB

    Productos más vendidos (aggregate + $group)
    Total de ingresos por día
    Ventas con método de pago “Efectivo”

## Conclusión

El sistema de gestión de ventas híbrido demuestra la integración efectiva entre bases de datos relacionales y no relacionales.
Con esta arquitectura se logra:

Eficiencia en transacciones (SQL Server).

Escalabilidad y flexibilidad analítica (MongoDB).

Separación clara entre datos operativos y analíticos.