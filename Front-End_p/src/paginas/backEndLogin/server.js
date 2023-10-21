const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecommerce"
});

app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (name, email, password) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];

  db.query(sql, [values], (err, data) => {
    if (err) {
      return res.json("Error");
    } 
    return res.json(data);
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("Error");
    } 
    if (data.length > 0) {
      return res.json("Success");
    } else {
      return res.json("Fail");
    }
  }); 
});

// Ruta para agregar un producto a la base de datos
app.post("/products", (req, res) => {
  const { name, price, image } = req.body;
  const sql = "INSERT INTO products (name, price, image) VALUES (?, ?, ?)";
  const values = [name, price, image];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error al crear el producto:", err);
      return res.status(500).json({ success: false, error: "Error al crear el producto" });
    }
    return res.status(201).json({ success: true, product: { id: result.insertId, name, price, image } });
  });
});

// Ruta para obtener la lista de productos desde la base de datos
app.get("/products", (req, res) => {
  const sql = "SELECT * FROM products";

  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error al obtener los productos:", err);
      return res.status(500).json({ success: false, error: "Error al obtener los productos" });
    }
    return res.status(200).json({ success: true, products: result });
  });
});

// Ruta para actualizar un producto existente en la base de datos
app.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  const { name, price, image } = req.body;
  const sql = "UPDATE products SET name = ?, price = ?, image = ? WHERE id = ?";
  const values = [name, price, image, productId];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error al actualizar el producto:", err);
      return res.status(500).json({ success: false, error: "Error al actualizar el producto" });
    }
    return res.status(200).json({ success: true, product: { id: productId, name, price, image } });
  });
});

// Ruta para eliminar un producto de la base de datos
app.delete("/products/:id", (req, res) => {
  const productId = req.params.id;
  const sql = "DELETE FROM products WHERE id = ?";

  db.query(sql, productId, (err, result) => {
    if (err) {
      console.error("Error al eliminar el producto:", err);
      return res.status(500).json({ success: false, error: "Error al eliminar el producto" });
    }
    return res.status(200).json({ success: true, message: "Producto eliminado exitosamente" });
  });
});

app.listen(3006, () => {
  console.log("Listening 3006");
});
