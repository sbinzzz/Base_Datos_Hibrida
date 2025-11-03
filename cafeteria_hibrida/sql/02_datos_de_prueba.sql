----------- INSERTAR DATOS DE PRUEBA ----------------

-- PROVEEDORES
INSERT INTO Proveedor (Nombre, Correo, Telefono)
VALUES 
('Distribuidora Aroma', 'contacto@aroma.com', '7890-1234'),
('Dulce Hogar S.A.', 'ventas@dulcehogar.com', '7123-4567'),
('Frío Express', 'info@frioexpress.com', '7012-7890');
GO

-- CATEGORÍAS
INSERT INTO Categoria (Nombre_Categoria)
VALUES 
('Cafes'),
('Postres'),
('Bebidas frias');
GO

-- PRODUCTOS
INSERT INTO Producto (Nombre, Descripcion, Stock, Precio, IdCategoria, IdProveedor)
VALUES
-- Cafés
('Café Americano', 'Café negro caliente', 50, 1.50, 1, 1),
('Capuchino', 'Café con leche espumosa y canela', 40, 2.25, 1, 1),
('Latte Vainilla', 'Café con leche y esencia de vainilla', 35, 2.50, 1, 1),

-- Postres
('Cheesecake', 'Pastel de queso con base de galleta', 20, 3.00, 2, 2),
('Brownie', 'Pastel de chocolate con nueces', 25, 2.75, 2, 2),
('Tiramisú', 'Postre italiano con café y cacao', 15, 3.50, 2, 2),

-- Bebidas frías
('Frappé de Caramelo', 'Bebida fría con caramelo y crema batida', 30, 2.80, 3, 3),
('Smoothie de Fresa', 'Bebida de fresa natural con hielo', 25, 2.60, 3, 3),
('Limonada Frozen', 'Refrescante bebida de limón con hielo', 40, 1.80, 3, 3);
GO

-- CLIENTES
INSERT INTO Cliente (Nombre, Apellido)
VALUES 
('Carlos', 'López'),
('María', 'González'),
('Andrés', 'Martínez'),
('Lucía', 'Reyes'),
('Javier', 'Torres');
GO

-- EMPLEADOS
INSERT INTO Empleado (Nombre, Apellido)
VALUES 
('Ana', 'Ramírez'),
('José', 'Morales'),
('Laura', 'Castillo');
GO

-- VENTAS
INSERT INTO Venta (TotalVenta, FechaHora, Id_Cliente, IdEmpleado)
VALUES
(6.55, '2025-10-21 09:15', 1, 1),
(4.35, '2025-10-21 10:45', 2, 2),
(7.30, '2025-10-21 11:10', 3, 3),
(5.25, '2025-10-21 13:00', 4, 1),
(3.50, '2025-10-21 15:20', 5, 2);
GO

-- DETALLE DE VENTAS
INSERT INTO DetalleVenta (IdVenta, IdProducto, Cantidad)
VALUES
(1, 2, 1),
(1, 5, 1),
(2, 3, 1),
(2, 9, 1),
(3, 7, 1),
(3, 4, 1),
(4, 1, 2),
(5, 6, 1);
GO

INSERT INTO Roles (NombreRol, Descripcion)
VALUES
('Administrador', 'Acceso completo a el sistema'),
('Cajero', 'Gesttiona ventas y clientes'),
('Inventario', 'Gestiona Productos y proveedores');

INSERT INTO Usuarios (NombreUsuario, Contrasena, IdEmpleado, IdRol)
VALUES
('admin', 'admin123!', 1, 1),
('cajero1', 'cajero123', 2, 2),
('inventario1', 'inventario123', 3, 3);
