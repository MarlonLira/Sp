"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const DbContext_1 = require("../context/DbContext");
const Client_1 = require("../models/Client");
const sequelize_1 = require("sequelize");
const HttpStatus_1 = require("../commons/enums/HttpStatus");
const Helpers_1 = require("../commons/Helpers");
var _instance = new DbContext_1.DbInstance().getInstance();
var _Attributes = new Helpers_1.Attributes();
class ClientController extends Client_1.Client {
    Save(response) {
        return new Promise((resolve, reject) => {
            Client_1.Client.findOne({
                where: {
                    firstName: this.firstName,
                    lastName: this.lastName
                }
            }).then(result => {
                if (result != undefined && result != null) {
                    resolve(response.status(HttpStatus_1.HttpCod.Bad_Request).send(HttpStatus_1.HttpMessage(HttpStatus_1.HttpCod.Bad_Request, 'Usuário já cadastrado')));
                }
                else {
                    Client_1.Client.create({
                        firstName: _Attributes.ReturnIfValid(this.firstName),
                        lastName: _Attributes.ReturnIfValid(this.lastName),
                        status: 1,
                        registryCode: _Attributes.ReturnIfValid(this.registryCode),
                        phone: this.phone
                    }).then(result => {
                        response.status(HttpStatus_1.HttpCod.Ok).send(HttpStatus_1.HttpMessage(HttpStatus_1.HttpCod.Ok, 'Cliente cadastrado com sucesso!', result));
                        resolve(result);
                    }).catch(error => {
                        console.error(error);
                        resolve(response.status(HttpStatus_1.HttpCod.Internal_Server_Error).send(HttpStatus_1.HttpMessage(HttpStatus_1.HttpCod.Internal_Server_Error)));
                    });
                }
            });
        });
    }
    Search(response) {
        return new Promise((resolve, reject) => {
            let query = {};
            if (!_Attributes.IsValid(this.id)) {
                query.status = 1;
                if (_Attributes.IsValid(this.status)) {
                    query.status = this.status;
                }
                if (_Attributes.IsValid(this.lastName)) {
                    query.lastName = {
                        [sequelize_1.Op.like]: `${this.lastName}%`
                    };
                }
                if (_Attributes.IsValid(this.firstName)) {
                    query.firstName = {
                        [sequelize_1.Op.like]: `${this.firstName}%`
                    };
                }
                if (_Attributes.IsValid(this.registryCode)) {
                    query.registryCode = {
                        [sequelize_1.Op.like]: `${this.registryCode}%`
                    };
                }
            }
            else {
                query.id = this.id;
            }
            _instance.sync()
                .then(() => Client_1.Client.scope("public").findOne({
                where: query
            }))
                .then(result => {
                if (result != null)
                    response.status(HttpStatus_1.HttpCod.Ok).send(HttpStatus_1.HttpMessage(HttpStatus_1.HttpCod.Ok, 'Usuario encontrato!', result));
                else
                    resolve(response.status(HttpStatus_1.HttpCod.Not_Found).send(HttpStatus_1.HttpMessage(HttpStatus_1.HttpCod.Not_Found)));
                resolve(result);
            }).catch(error => {
                console.error(error);
                resolve(response.status(HttpStatus_1.HttpCod.Internal_Server_Error).send(HttpStatus_1.HttpMessage(HttpStatus_1.HttpCod.Internal_Server_Error)));
            });
        });
    }
    SearchAll(response) {
        var _a;
        let query = {};
        query.status = (_a = _Attributes.ReturnIfValid(this.status), (_a !== null && _a !== void 0 ? _a : 1));
        return new Promise((resolve, reject) => {
            Client_1.Client.scope("public").findAll(query)
                .then(result => {
                response.status(HttpStatus_1.HttpCod.Ok).send(HttpStatus_1.HttpMessage(HttpStatus_1.HttpCod.Ok, null, result));
                resolve(result);
            })
                .catch(error => {
                console.error(error);
                resolve(response.status(HttpStatus_1.HttpCod.Internal_Server_Error).send(HttpStatus_1.HttpMessage(HttpStatus_1.HttpCod.Internal_Server_Error)));
            });
        });
    }
    Update(response) {
        return new Promise((resolve, reject) => {
            let attributes = {};
            Client_1.Client.findOne({
                where: {
                    id: this.id
                }
            }).then(result => {
                var _a, _b, _c, _d;
                attributes.firstName = (_a = _Attributes.ReturnIfValid(this.firstName), (_a !== null && _a !== void 0 ? _a : result.firstName));
                attributes.lastName = (_b = _Attributes.ReturnIfValid(this.lastName), (_b !== null && _b !== void 0 ? _b : result.lastName));
                attributes.registryCode = (_c = _Attributes.ReturnIfValid(this.registryCode), (_c !== null && _c !== void 0 ? _c : result.registryCode));
                attributes.phone = (_d = _Attributes.ReturnIfValid(this.phone), (_d !== null && _d !== void 0 ? _d : result.phone));
                Client_1.Client.update(attributes, {
                    where: {
                        id: this.id
                    }
                })
                    .then(result => {
                    response.status(HttpStatus_1.HttpCod.Ok).send(HttpStatus_1.HttpMessage(HttpStatus_1.HttpCod.Ok, 'Usuario Atualizado', result));
                    resolve(result);
                })
                    .catch(error => {
                    resolve(response.status(HttpStatus_1.HttpCod.Internal_Server_Error).send(HttpStatus_1.HttpMessage(HttpStatus_1.HttpCod.Internal_Server_Error, null, error)));
                });
            })
                .catch(error => {
                resolve(response.status(HttpStatus_1.HttpCod.Not_Found).send(HttpStatus_1.HttpMessage(HttpStatus_1.HttpCod.Not_Found, 'Usuario não encontrado', error)));
            });
        });
    }
    Delete(response) {
        return new Promise((resolve, reject) => {
            Client_1.Client.destroy({
                where: {
                    id: this.id
                }
            }).then(result => {
                if (result == 1) {
                    response.status(HttpStatus_1.HttpCod.Ok).send(HttpStatus_1.HttpMessage(HttpStatus_1.HttpCod.Ok, 'Usuario Apagado', result));
                }
                else {
                    resolve(response.status(HttpStatus_1.HttpCod.Not_Found).send(HttpStatus_1.HttpMessage(HttpStatus_1.HttpCod.Not_Found, 'Usuario não encontrado', result)));
                }
                resolve(result);
            })
                .catch(error => {
                resolve(response.status(HttpStatus_1.HttpCod.Internal_Server_Error).send(HttpStatus_1.HttpMessage(HttpStatus_1.HttpCod.Not_Found, null, error)));
            });
        });
    }
}
exports.default = ClientController;
//# sourceMappingURL=ClientController.js.map