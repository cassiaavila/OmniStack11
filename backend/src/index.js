const express = require ('express');
const routes = require('./routes');
const app= express();
const cors = require ('cors');

app.use(cors());// ver depois//
app.use(express.json());
app.use(routes); /* tem que ser aqui, debaixo do Json*/
/** tipos de parametros:
 * Query Params: Parâmetros nomeados enviados na após"?"(Filtros, Paginação)
 * Route Params: Parâmetros utilizados para enviar recursos
 * Request Body: Corpo da Requisição, Utilizado para criar ou alterar recursos:
 *
 */



app.listen(3333);


