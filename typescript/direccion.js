"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.direccion = void 0;
var direccion = /** @class */ (function () {
    function direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this._calle = calle;
        this._numero = numero;
        this._piso = piso;
        this._letra = letra;
        this._codigoPostal = codigoPostal;
        this._poblacion = poblacion;
        this._provincia = provincia;
    }
    Object.defineProperty(direccion.prototype, "calle", {
        get: function () {
            return this._calle;
        },
        set: function (calle) {
            this.calle = calle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (numero) {
            this._numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "piso", {
        get: function () {
            return this._piso;
        },
        set: function (piso) {
            this._piso = piso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "letra", {
        get: function () {
            return this._letra;
        },
        set: function (letra) {
            this._letra = letra;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "codigoPostal", {
        get: function () {
            return this._codigoPostal;
        },
        set: function (codigoPostal) {
            this._codigoPostal = codigoPostal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "poblacion", {
        get: function () {
            return this._poblacion;
        },
        set: function (poblacion) {
            this._poblacion = poblacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(direccion.prototype, "provincia", {
        get: function () {
            return this._provincia;
        },
        set: function (provincia) {
            this._provincia;
        },
        enumerable: false,
        configurable: true
    });
    direccion.prototype.showdireccion = function () {
        var direccion = " ".concat(this._calle, ", ").concat(this._numero, " ").concat(this._piso, "\u00BA").concat(this._letra, "\n   ").concat(this._codigoPostal, " ").concat(this._poblacion, " (").concat(this._provincia, ")");
        return direccion;
    };
    return direccion;
}());
exports.direccion = direccion;
