"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const ClientController_1 = require("../controllers/ClientController");
module.exports = function (server) {
    Register(server, '/client', ClientController_1.default);
};
function Register(server, path, controller) {
    const router = express.Router();
    server.use(path, router);
    router.post('/create', (req, res) => {
        console.log(req.body);
        new controller(req.body).Save(res).then(x => console.log());
    });
    router.get('/search', (req, res) => {
        new controller(req.body).Search(res).then(x => console.log());
    });
    router.put('/update', (req, res) => {
        new controller(req.body).Update(res).then(x => console.log());
    });
    router.delete('/delete', (req, res) => {
        new controller(req.body).Delete(res).then(x => console.log());
    });
}
//# sourceMappingURL=Routes.js.map