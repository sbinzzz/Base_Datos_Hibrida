CREATE DATABASE CafeteriaDB;
GO

USE CafeteriaDB;
GO

CREATE LOGIN administrador
WITH PASSWORD = 'admin123!',
DEFAULT_DATABASE = CafeteriaDB,
CHECK_POLICY = ON,
CHECK_EXPIRATION = ON;
GO

CREATE USER administrador_CafeteriaDB FOR LOGIN administrador;
GO

ALTER ROLE db_owner ADD MEMBER administrador_CafeteriaDB;
GO

-- creacion de tablas

CREATE TABLE Proveedor (
    IdProveedor INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(100) NOT NULL,
    Correo VARCHAR(100) UNIQUE,
    Telefono VARCHAR(15)
);
GO

CREATE TABLE Categoria (
    IdCategoria INT PRIMARY KEY IDENTITY(1,1),
    Nombre_Categoria VARCHAR(50) NOT NULL UNIQUE
);
GO

CREATE TABLE Producto (
    IdProducto INT PRIMARY KEY IDENTITY(1,1), 
    Nombre VARCHAR(100) NOT NULL,
    Descripcion VARCHAR(255),
    Stock INT NOT NULL,
    Precio DECIMAL(10, 2) NOT NULL,
    IdCategoria INT NOT NULL,
    IdProveedor INT NOT NULL,
    CONSTRAINT FK_Producto_Categoria FOREIGN KEY (IdCategoria) REFERENCES Categoria(IdCategoria),
    CONSTRAINT FK_Producto_Proveedor FOREIGN KEY (IdProveedor) REFERENCES Proveedor(IdProveedor)
);
GO

CREATE TABLE Cliente (
    Id_Cliente INT PRIMARY KEY IDENTITY(1,1),
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL
);
GO

CREATE TABLE Empleado (
    IdEmpleado INT PRIMARY KEY IDENTITY(1,1), 
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL
);
GO

CREATE TABLE Venta (
    IdVenta INT PRIMARY KEY IDENTITY(1,1), 
    TotalVentas DECIMAL(10, 2) NOT NULL,
    FechaHora DATETIME NOT NULL DEFAULT GETDATE(),
    Id_Cliente INT NOT NULL, 
    IdEmpleado INT NOT NULL,
    CONSTRAINT FK_Venta_Cliente FOREIGN KEY (Id_Cliente) REFERENCES Cliente(Id_Cliente),
    CONSTRAINT FK_Venta_Empleado FOREIGN KEY (IdEmpleado) REFERENCES Empleado(IdEmpleado)
);
GO

CREATE TABLE DetalleVenta (
    IdVenta INT NOT NULL, 
    IdProducto INT NOT NULL, 
	Cantidad INT NOT NULL,
    PRIMARY KEY (IdVenta, IdProducto),
    CONSTRAINT FK_DetalleVenta_Venta FOREIGN KEY (IdVenta) REFERENCES Venta(IdVenta),
    CONSTRAINT FK_DetalleVenta_Producto FOREIGN KEY (IdProducto) REFERENCES Producto(IdProducto)
);
GO

CREATE TABLE Roles(
    IdRol INT PRIMARY KEY IDENTITY(1,1),
    NombreRol VARCHAR(50) NOT NULL UNIQUE,
    Descripcion VARCHAR(255)
);
GO

CREATE TABLE Usuarios (
    IdUsuario INT PRIMARY KEY IDENTITY(1,1),
    NombreUsuario VARCHAR(50) NOT NULL UNIQUE,
    Contrasena VARCHAR(30) NOT NULL,
    IdEmpleado INT NOT NULL,
    IdRol INT NOT NULL,
    CONSTRAINT FK_Usuarios_Empleado FOREIGN KEY (IdEmpleado) REFERENCES Empleado(IdEmpleado),
    CONSTRAINT FK_Usuarios_Roles FOREIGN KEY (IdRol) REFERENCES Roles(IdRol)
);
GO

-- Indices
CREATE INDEX idx_producto_nombre ON Producto(Nombre);
CREATE INDEX idx_categoria_nombre ON Categoria(Nombre_Categoria);
CREATE INDEX idx_proveedor_nombre ON Proveedor(Nombre);
CREATE INDEX idx_cliente_nombre ON Cliente(Nombre);
CREATE INDEX idx_empleado_nombre ON Empleado(Nombre);
CREATE INDEX idx_venta_fecha ON Venta(FechaHora);
GO

-- Roles

-- Rol para empleados (registro de ventas, actualización de stock)
CREATE ROLE rol_empleado;
GRANT SELECT, INSERT, UPDATE ON Cliente TO rol_empleado;
GRANT SELECT, INSERT, UPDATE ON Venta TO rol_empleado;
GRANT SELECT, INSERT, UPDATE ON DetalleVenta TO rol_empleado;
GRANT SELECT, UPDATE ON Producto TO rol_empleado;

-- Rol para consulta (solo lectura)
CREATE ROLE rol_consulta;
GRANT SELECT ON Cliente TO rol_consulta;
GRANT SELECT ON Producto TO rol_consulta;
GRANT SELECT ON Venta TO rol_consulta;
GRANT SELECT ON DetalleVenta TO rol_consulta;

-- Crear usuarios SQL
CREATE LOGIN empleado_login WITH PASSWORD = 'empleado123!';
CREATE USER empleado_user FOR LOGIN empleado_login;
ALTER ROLE rol_empleado ADD MEMBER empleado_user;

CREATE LOGIN consulta_login WITH PASSWORD = 'consulta123!';
CREATE USER consulta_user FOR LOGIN consulta_login;
ALTER ROLE rol_consulta ADD MEMBER consulta_user;
GO

