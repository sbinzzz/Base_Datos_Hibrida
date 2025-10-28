--SP para insertar una venta y actualizar stock
CREATE PROCEDURE sp_registrar_venta
    @id_cliente INT,
    @codigo_producto INT,
    @cantidad INT
AS
BEGIN
    BEGIN TRY
        BEGIN TRANSACTION;

        DECLARE @precio DECIMAL(10,2);
        SELECT @precio = precio FROM productos WHERE codigo_producto = @codigo_producto;

        DECLARE @total DECIMAL(10,2) = @precio * @cantidad;

        INSERT INTO ventas (id_cliente, codigo_producto, cantidad, total)
        VALUES (@id_cliente, @codigo_producto, @cantidad, @total);

        UPDATE productos
        SET stock = stock - @cantidad
        WHERE codigo_producto = @codigo_producto;

        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        PRINT 'Error al registrar la venta';
    END CATCH
END;
GO

--SP para actualizar el precio de producto
CREATE PROCEDURE sp_actualizar_precio
    @codigo_producto INT,
    @nuevo_precio DECIMAL(10,2)
AS
BEGIN
    UPDATE productos
    SET precio = @nuevo_precio
    WHERE codigo_producto = @codigo_producto;
END;
GO

--SP para generar reporte de ventas
CREATE PROCEDURE sp_reporte_ventas
AS
BEGIN
    SELECT v.id_venta, c.nombre + ' ' + c.apellido AS cliente,
           p.nombre AS producto, v.cantidad, v.total, v.fecha
    FROM ventas v
    JOIN clientes c ON v.id_cliente = c.id_cliente
    JOIN productos p ON v.codigo_producto = p.codigo_producto;
END;

--trigger para registrar en bitacora
CREATE TABLE log_eventos (
    id_log INT PRIMARY KEY IDENTITY(1,1),
    descripcion NVARCHAR(200),
    fecha DATETIME DEFAULT GETDATE()
);
GO

CREATE TRIGGER trg_venta_insert
ON ventas
AFTER INSERT
AS
BEGIN
    DECLARE @id_venta INT;
    SELECT @id_venta = id_venta FROM inserted;

    INSERT INTO log_eventos (descripcion)
    VALUES (CONCAT('Se registró la venta ID ', @id_venta));
END;
