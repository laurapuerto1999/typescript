"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this._tipo = tipo;
        this._direccion = direccion;
    }
    Mail.prototype.getdireccion = function () {
        return this._direccion;
    };
    Mail.prototype.gettipo = function () {
        return this._tipo;
    };
    Mail.prototype.setdireccion = function (direccion) {
        this._direccion = this._direccion;
    };
    Mail.prototype.settipo = function (tipo) {
        this._tipo = tipo;
    };
    Mail.prototype.toString = function () {
        return 'Mail^[Tipo:${this._tipo},Direccion:${this._direccion}]';
    };
    return Mail;
}());
exports.Mail = Mail;
