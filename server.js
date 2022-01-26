// Faça seu código aqui abaixo
const express = require('express');
const path = require('path');
const cors = require('cors');
const http = require('http');

const app = express();

app.use(express.json());
app.use(cors());

const httpServer = http.createServer(app);
  
  app.use(express.static(path.join(__dirname, './public/')));
  
  app.get('/', (_req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './public/index.html'));
  });
  
httpServer.listen(3000 || process.env.PORT, () => console.log(`Conectado na porta ${3000
    || process.env.PORT}`));
