"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Helpers {
}
exports.Helpers = Helpers;
class Attributes {
    IsValid(value) {
        let result = false;
        if (value != undefined && value != '' && value != null) {
            result = true;
        }
        return result;
    }
    ReturnIfValid(value) {
        let result = null;
        if (value != undefined && value != '' && value != null) {
            result = value;
        }
        return result;
    }
}
exports.Attributes = Attributes;
//# sourceMappingURL=Helpers.js.map