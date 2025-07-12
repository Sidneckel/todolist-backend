const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// Configuração do CORS para permitir acesso só do frontend (IP + porta)
app.use(cors({
  origin: 'http://191.52.55.181:30002', // frontend via NodePort
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: false
}));

app.use(express.json());
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
