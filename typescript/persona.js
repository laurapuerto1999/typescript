"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
var persona = /** @class */ (function () {
    function persona(nombre, apellidos, edad, dni, cumpleanos, colorFavorito, genero, sexo, direcciones, mails, telefonos, notas) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._dni = dni;
        this._cumpleanos = cumpleanos;
        this._colorFavorito = colorFavorito;
        this._sexo = sexo;
        this._direcciones = direcciones;
        this._telefonos = telefonos;
        this._mails = mails;
        this._notas = notas;
    }
    persona.prototype.showPersonaInfo = function () {
        return this.toString();
    };
    persona.prototype.addMail = function (newMail) {
        this.agregarNuevoMail(newMail);
    };
    persona.prototype.addtelefono = function (newtelefono) {
        this.agregarNuevoTelefono(newtelefono);
    };
    persona.prototype.adddireccion = function (newdireccion) {
        this.agregarNuuevaDireccion(newdireccion);
    };
    persona.prototype.getnombre = function () {
        return this._nombre;
    };
    persona.prototype.getapellidos = function () {
        return this._apellidos;
    };
    persona.prototype.getedad = function () {
        return this._edad;
    };
    persona.prototype.getdni = function () {
        return this._dni;
    };
    persona.prototype.getcumpleanos = function () {
        return this._cumpleanos;
    };
    persona.prototype.getcolorFavorito = function () {
        return this._colorFavorito;
    };
    persona.prototype.getsexo = function () {
        return this._sexo;
    };
    persona.prototype.getdirecciones = function () {
        return this._direcciones;
    };
    persona.prototype.gettelefonos = function () {
        return this._telefonos;
    };
    persona.prototype.getmails = function () {
        return this._mails;
    };
    persona.prototype.getnotas = function () {
        return this._notas;
    };
    persona.prototype.setnombre = function (nombre) {
        this._nombre = nombre;
    };
    persona.prototype.setapellidos = function (apellidos) {
        this._apellidos = apellidos;
    };
    persona.prototype.setedad = function (edad) {
        this._edad = edad;
    };
    persona.prototype.setdni = function (dni) {
        this._dni = dni;
    };
    persona.prototype.setcumpleanos = function (cumpleanos) {
        this._cumpleanos = cumpleanos;
    };
    persona.prototype.setcolorFavorito = function (colorFavorito) {
        this._colorFavorito = colorFavorito;
    };
    persona.prototype.setsexo = function (sexo) {
        this._sexo = sexo;
    };
    persona.prototype.setdirecciones = function (direcciones) {
        this._direcciones = direcciones;
    };
    persona.prototype.settelefonos = function (telefonos) {
        this._telefonos = telefonos;
    };
    persona.prototype.setmails = function (mails) {
        this._mails = mails;
    };
    persona.prototype.setnotas = function (notas) {
        this._notas = notas;
    };
    persona.prototype.agregarNuuevaDireccion = function (direccion) {
        this._direcciones.push(direccion);
    };
    persona.prototype.agregarNuevoTelefono = function (telefono) {
        this._telefonos.push(telefono);
    };
    persona.prototype.agregarNuevoMail = function (mail) {
        this._mails.push(mail);
    };
    persona.prototype.removerDireccionByIndex = function (index) {
        if (index >= 0 && index < this._direcciones.length) {
            this._direcciones.splice(index, 1);
        }
    };
    persona.prototype.removerMailByIndex = function (index) {
        if (index >= 0 && index < this._mails.length) {
            this._mails.splice(index, 1);
        }
    };
    persona.prototype.removerTelefonoByIndex = function (index) {
        if (index >= 0 && index < this._telefonos.length) {
            this._telefonos.splice(index, 1);
        }
    };
    persona.prototype.removerNotaByIndex = function (index) {
        if (index >= 0 && index < this._notas.length) {
            this._notas.slice(index, 1);
        }
    };
    persona.prototype.removerDireccion = function (direccion) {
        var index = this._direcciones.indexOf(direccion);
        if (index !== -1) {
            this._direcciones.splice(index, 1);
        }
    };
    persona.prototype.removerMail = function (mail) {
        var index = this._mails.indexOf(mail);
        if (index !== -1) {
            this._mails.splice(index, 1);
        }
    };
    persona.prototype.removerTelefono = function (telefono) {
        var index = this._telefonos.indexOf(telefono);
        if (index !== -1) {
            this._telefonos.splice(index, 1);
        }
    };
    persona.prototype.removerNota = function (Nota) {
        var index = this._notas.indexOf(Nota);
        if (index !== -1) {
            this._notas.slice(index, 1);
        }
    };
    persona.prototype.toString = function () {
        return 'nombre:${this._nombre}, Apellido:${this._apellidos}, Edad: ${this._edad}, DNI: ${this._dni}, Cumpleaños: ${this._cumpleanos},color favorito: ${this._colorFavorito},Sexo:${this._genero}, Direcciones:${this._direccion}, Mails:${this._mail}, Telefonos:${this._teelefono}, Notas:${this._notas}';
    };
    return persona;
}());
exports.persona = persona;
