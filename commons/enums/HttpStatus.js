"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpCod;
(function (HttpCod) {
    HttpCod[HttpCod["Continue"] = 100] = "Continue";
    HttpCod[HttpCod["Processing"] = 102] = "Processing";
    HttpCod[HttpCod["Ok"] = 200] = "Ok";
    HttpCod[HttpCod["Created"] = 201] = "Created";
    HttpCod[HttpCod["Accepted"] = 202] = "Accepted";
    HttpCod[HttpCod["Found"] = 302] = "Found";
    HttpCod[HttpCod["Bad_Request"] = 400] = "Bad_Request";
    HttpCod[HttpCod["Unauthorized"] = 401] = "Unauthorized";
    HttpCod[HttpCod["Forbidden"] = 403] = "Forbidden";
    HttpCod[HttpCod["Not_Found"] = 404] = "Not_Found";
    HttpCod[HttpCod["Expectation_Failed"] = 417] = "Expectation_Failed";
    HttpCod[HttpCod["Internal_Server_Error"] = 500] = "Internal_Server_Error";
    HttpCod[HttpCod["Not_Implemented"] = 501] = "Not_Implemented";
    HttpCod[HttpCod["Bad_Gateway"] = 502] = "Bad_Gateway";
    HttpCod[HttpCod["Service_Unavailable"] = 503] = "Service_Unavailable";
})(HttpCod || (HttpCod = {}));
exports.HttpCod = HttpCod;
//http://weblink.com.br/blog/o-que-e-http-codigos-erros-http
function HttpMessage(value, msg = null, result = null) {
    var result;
    switch (value) {
        case HttpCod.Continue: {
            result = "Continua";
            break;
        }
        case HttpCod.Processing: {
            result = "Processando";
            break;
        }
        case HttpCod.Ok: {
            result = {
                code: 200,
                message: (msg !== null && msg !== void 0 ? msg : 'Ok'),
                result: result
            };
            break;
        }
        case HttpCod.Created: {
            result = {
                code: 201,
                message: (msg !== null && msg !== void 0 ? msg : 'Criado/Gerado'),
                result: result
            };
            break;
        }
        case HttpCod.Accepted: {
            result = "Aceito";
            break;
        }
        case HttpCod.Found: {
            result = {
                code: 302,
                message: (msg !== null && msg !== void 0 ? msg : 'Encontrado'),
                result: result
            };
            break;
        }
        case HttpCod.Bad_Request: {
            result = {
                code: 400,
                message: (msg !== null && msg !== void 0 ? msg : 'Solicitação Inválida'),
                result: result
            };
            break;
        }
        case HttpCod.Unauthorized: {
            break;
        }
        case HttpCod.Forbidden: {
            break;
        }
        case HttpCod.Not_Found: {
            result = {
                code: 404,
                message: (msg !== null && msg !== void 0 ? msg : 'Not Found'),
                result: result
            };
            break;
        }
        case HttpCod.Expectation_Failed: {
            break;
        }
        case HttpCod.Internal_Server_Error: {
            result = {
                code: 500,
                message: (msg !== null && msg !== void 0 ? msg : 'Internal Server Error'),
                result: result
            };
            break;
        }
        case HttpCod.Not_Implemented: {
            break;
        }
        case HttpCod.Bad_Gateway: {
            break;
        }
        case HttpCod.Service_Unavailable: {
            break;
        }
        default: {
            result = "Codigo não encontrado!";
        }
    }
    return result;
}
exports.HttpMessage = HttpMessage;
//# sourceMappingURL=HttpStatus.js.map