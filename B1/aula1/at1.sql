CREATE TABLE clientes(
 id INT PRIMARY KEY,
 nome VARCHAR(100)
)

CREATE TABLE pedidos(
 id INT PRIMARY KEY,
 valor NUMERIC(10,2),
 cliente_id INT,
 FOREIGN KEY(cliente_id) REFERENCES clientes(id)
)

INSERT INTO clientes VALUES
	(1, 'ana'),
	(2, 'cleber'),
	(3, 'jásinto')

SELECT * FROM clientes

INSERT INTO pedidos VALUES
	(20, 100, 1),
	(21, 500, 3),
	(22, 1000, 2)

SELECT * FROM pedidos
UPDATE clientes 
	SET nome = 'Ana Machado Colto'
	WHERE id = 1

SELECT * FROM clientes

SELECT * FROM clientes ORDER BY id

UPDATE pedidos 
	SET valor = 2000
	WHERE id = 1 

UPDATE clientes
	SET cliente_id = 323
	WHERE id = 20

DELETE FROM clientes WHERE id = 3
DELETE FROM pedidos WHERE id = 21
