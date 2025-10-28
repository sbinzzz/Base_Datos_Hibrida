create database cafeteriaDB
GO

use cafeteriaDB
GO

--Creacion de indices
CREATE INDEX idx_clientes_nombre ON clientes(nombre);
CREATE INDEX idx_productos_nombre ON productos(nombre);
CREATE INDEX idx_ventas_fecha ON ventas(fecha);
GO

--Creacion de roles 
CREATE ROLE rol_vendedor;
CREATE ROLE rol_administrador;
GO

GRANT SELECT, INSERT ON ventas TO rol_vendedor;
GRANT SELECT, INSERT, UPDATE, DELETE ON productos TO rol_administrador;
GO

CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY IDENTITY(1,1),
    nombre NVARCHAR(50) NOT NULL,
    apellido NVARCHAR(50) NOT NULL,
    direccion NVARCHAR(100),
    telefono NVARCHAR(15)
);
GO

CREATE TABLE proveedores (
    nit INT PRIMARY KEY,
    nombre NVARCHAR(100) NOT NULL,
    direccion NVARCHAR(100),
    telefono NVARCHAR(15),
    correo NVARCHAR(100)
);
GO

CREATE TABLE productos (
    codigo_producto INT PRIMARY KEY IDENTITY(1,1),
    nit INT,
    nombre NVARCHAR(100) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    FOREIGN KEY (nit) REFERENCES proveedores(nit)
);
GO

CREATE TABLE ventas (
    id_venta INT PRIMARY KEY IDENTITY(1,1),
    id_cliente INT,
    codigo_producto INT,
    cantidad INT,
    fecha DATETIME DEFAULT GETDATE(),
    total DECIMAL(10,2),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    FOREIGN KEY (codigo_producto) REFERENCES productos(codigo_producto)
);