-- SP: Registrar una venta y actualizar stock
CREATE PROCEDURE sp_registrar_venta
    @Id_Cliente INT,
    @IdEmpleado INT,
    @IdProducto INT,
    @Cantidad INT
AS
BEGIN
    BEGIN TRY
        BEGIN TRANSACTION;

        DECLARE @Precio DECIMAL(10,2);
        SELECT @Precio = Precio FROM Producto WHERE IdProducto = @IdProducto;

        DECLARE @Total DECIMAL(10,2) = @Precio * @Cantidad;

        -- Insertar la venta
        INSERT INTO Venta (TotalVentas, FechaHora, Id_Cliente, IdEmpleado)
        VALUES (@Total, GETDATE(), @Id_Cliente, @IdEmpleado);

        DECLARE @IdVenta INT = SCOPE_IDENTITY();

        -- Insertar el detalle
        INSERT INTO DetalleVenta (IdVenta, IdProducto, Cantidad)
        VALUES (@IdVenta, @IdProducto, @Cantidad);

        -- Actualizar stock
        UPDATE Producto
        SET Stock = Stock - @Cantidad
        WHERE IdProducto = @IdProducto;

        COMMIT TRANSACTION;
        PRINT 'Venta registrada correctamente';
    END TRY
    BEGIN CATCH
        ROLLBACK TRANSACTION;
        PRINT 'Error al registrar la venta';
        THROW;
    END CATCH
END;
GO

-- SP: Actualizar precio de producto
CREATE PROCEDURE sp_actualizar_precio
    @IdProducto INT,
    @NuevoPrecio DECIMAL(10,2)
AS
BEGIN
    UPDATE Producto
    SET Precio = @NuevoPrecio
    WHERE IdProducto = @IdProducto;

    PRINT 'Precio actualizado correctamente';
END;
GO

-- SP: Reporte general de ventas
CREATE PROCEDURE sp_reporte_ventas
AS
BEGIN
    SELECT 
        v.IdVenta,
        CONCAT(c.Nombre, ' ', c.Apellido) AS Cliente,
        CONCAT(e.Nombre, ' ', e.Apellido) AS Empleado,
        p.Nombre AS Producto,
        dv.Cantidad,
        p.Precio,
        v.TotalVentas,
        v.FechaHora
    FROM Venta v
    INNER JOIN Cliente c ON v.Id_Cliente = c.Id_Cliente
    INNER JOIN Empleado e ON v.IdEmpleado = e.IdEmpleado
    INNER JOIN DetalleVenta dv ON v.IdVenta = dv.IdVenta
    INNER JOIN Producto p ON dv.IdProducto = p.IdProducto
    ORDER BY v.FechaHora DESC;
END;
GO

-- TABLA DE BITÁCORA
CREATE TABLE Log_Eventos (
    Id_Log INT PRIMARY KEY IDENTITY(1,1),
    Descripcion NVARCHAR(200),
    Fecha DATETIME DEFAULT GETDATE()
);
GO

-- TRIGGER: Registrar inserciones en ventas
CREATE TRIGGER trg_venta_insert
ON Venta
AFTER INSERT
AS
BEGIN
    DECLARE @IdVenta INT;
    DECLARE @IdCliente INT;
    DECLARE @IdEmpleado INT;

    SELECT 
        @IdVenta = IdVenta,
        @IdCliente = Id_Cliente,
        @IdEmpleado = IdEmpleado
    FROM inserted;

    INSERT INTO Log_Eventos (Descripcion)
    VALUES (
        CONCAT('Nueva venta registrada. ID: ', @IdVenta, 
               ', Cliente: ', @IdCliente, 
               ', Empleado: ', @IdEmpleado)
    );
END;
GO

