"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.telefono = void 0;
var telefono = /** @class */ (function () {
    function telefono(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    telefono.prototype.getnumero = function () {
        return this._numero;
    };
    telefono.prototype.gettipo = function () {
        return this._tipo;
    };
    telefono.prototype.setnumero = function (numero) {
        this._numero = numero;
    };
    telefono.prototype.settipo = function (tipo) {
        this._tipo = tipo;
    };
    telefono.prototype.toString = function () {
        return 'Telefono[Tipo:&{this._tipo},Numero:${this._numero}]';
    };
    return telefono;
}());
exports.telefono = telefono;
