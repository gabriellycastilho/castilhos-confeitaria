const express = require("express");
const cors = require("cors");
const produtos = require('./produtos')

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

// Rota simples pra testar
app.get("/", (req, res) => {
  res.send("API do Castilhos Confeitaria funcionando!");
});

// Rota de produtos mockada
app.get('/produtos', (req, res) => {
  res.json(produtos)
})


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
