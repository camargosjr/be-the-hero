const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');

/**
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar informação do back-end
  * POST: Criar informação no back-end
  * PUT: Alterar informação no back-end
  * DELETE: Deletar informação no back-end
  */
 /**
  * Tipos de parâmetros
  * 
  * Query: Parâmetros enviados na rota após "?" (Filtros, Paginação)
  * Route params: Parâmetros utilizados para indentificar recursos
  *    Ex: const params = request.params
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/** Informar ao express que quero trabalhar com json no corpo da requisição */
app.use(express.json());

app.use(cors());
// Passar as rotas pro arquivo routes.js
app.use(routes);

app.listen(3333, function(){
    console.log("Server linsten port 3333");
});