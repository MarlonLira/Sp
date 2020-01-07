"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 4001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//Exemplo de Rota
// app.get('/Client', (req, res, next) => {
// 	res.json('Request of Get');
// })
// app.post('/Client', (req, res, next) => {
// 	res.json('Request of Post');
// 	console.log()
// })
// app.route('/client/search')
// 	.get((req, res, next) => {
// 		console.log(req.body);
// 		console.log(req.params.firstName);
// 		//new ClientController(req.params).Search(res).then(x => console.log());
// 	})
// 	.post((req, res) => {
// 		console.log(req.body)
// 		new ClientController(req.body).Save(res).then(x => console.log());
// 	})
// 	.put((req, res, next) => {
// 		res.json('Request of put: ' + req.params.id + req.params.firstName + ' ' + req.params.lastName);
// 		console.log(req.params);
// 	})
// 	.delete((req, res, next) => {
// 		res.json('Request of delete: ' + req.params.id);
// 		console.log(req.params);
// 	})
// app.listen(port, () => {
// 	console.log(`App is listening on port ${port}`)
// })
//obs: corrigir -> Views -> Routes -> Controllers -> Views 
//# sourceMappingURL=loader.js.map