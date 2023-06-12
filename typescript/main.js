"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var persona_1 = require("./persona");
var direccion_1 = require("./direccion");
var telefono_1 = require("./telefono");
var mail_1 = require("./mail");
function buildAgenda() {
    var agenda = [];
    var direccionPersona1 = new direccion_1.direccion('calle', 21, 2, 'B', 25000, 'mostoles', 'Madrid');
    var persona1 = new persona_1.persona('Maria', 'Reyes', 18, 200154475, new Date(21 - 10 - 2005), 'Blanco', 'Mujer', 'Mujer', [direccionPersona1], [new mail_1.Mail('mariareyes@Mail.com', 'mailpersona1')], [new telefono_1.telefono('persona1', 655469921),], "Sin notas");
    var direccionPersona2 = new direccion_1.direccion('calle', 33, 4, 'B', 25900, 'Aranjuez', 'Madrid');
    var persona2 = new persona_1.persona('Roberto', 'Fernandez', 30, 200154471, new Date(12 - 12 - 1993), 'Rojo', 'Hombre', 'Hombre', [direccionPersona2], [new mail_1.Mail('RobertoFernandez@Mail.com', 'mailpersona2'),], [new telefono_1.telefono('persona2', 671992321),], "Sin notas");
    var direccionPersona3 = new direccion_1.direccion('calle', 2, 1, 'B', 24000, 'Torrejon De Ardoz', 'Madrid');
    var persona3 = new persona_1.persona('Lucia', 'Gomez', 23, 355880144, new Date(22 - 11 - 1999), 'Verde', 'Mujer', 'Mujer', [direccionPersona3], [new mail_1.Mail('LuciaG@Mail.com', 'mailpersona3'),], [new telefono_1.telefono('persona3', 655469921),], "Sin notas");
    agenda.push(persona1);
    agenda.push(persona2);
    agenda.push(persona3);
    return agenda;
}
function showAgenda(agenda) {
    for (var _i = 0, agenda_1 = agenda; _i < agenda_1.length; _i++) {
        var persona_2 = agenda_1[_i];
        console.log(persona_2);
    }
}
function addNewPersonaData(dniNumber, newDireccion, newMail, newtelefono) {
    for (var _i = 0, agenda_2 = agenda; _i < agenda_2.length; _i++) {
        var persona_3 = agenda_2[_i];
        if (persona_3.getdni().toString() === dniNumber) {
            persona_3.adddireccion(newDireccion);
            persona_3.addMail(newMail);
            persona_3.addtelefono(newtelefono);
        }
        console.log("Contacto Añadido");
        console.log(persona_3);
    }
}
function changePersonaData(dniNumber, newdireccion, newMail, newtelefono) {
    for (var _i = 0, agenda_3 = agenda; _i < agenda_3.length; _i++) {
        var persona_4 = agenda_3[_i];
        if (persona_4.getdni().toString() === dniNumber) {
            console.log("Cambios a persona con dni: " + persona_4.getdni().toString());
            persona_4.setdirecciones(newdireccion);
            persona_4.setmails(newMail);
            persona_4.settelefonos(newtelefono);
        }
    }
}
var agenda = buildAgenda();
var dniPersona2 = '055843312';
var newdireccionPersona2 = new direccion_1.direccion('Avenida de la solanilla', 20, 3, 'B', 25001, 'Leganes', 'Madrid');
var newMailPersona2 = new mail_1.Mail('Persona2', 'Robertoff@gmail.com');
var newTelefonoPersona2 = new telefono_1.telefono('persona2', 688722101);
var dniPersona3 = '355880144';
var newdireccionPersona3 = new Array(new direccion_1.direccion('Avenida de la tolerancia', 5, 1, 'A', 28505, 'Fuenlabrada', 'Madrid'));
var newMailPersona3 = new Array(new mail_1.Mail('Persona3', 'luuuciagg.com'));
var newTelefonoPersona3 = new Array(new telefono_1.telefono('persona3', 666695541));
addNewPersonaData(dniPersona2, newdireccionPersona2, newMailPersona2, newTelefonoPersona2);
changePersonaData(dniPersona3, newdireccionPersona3, newMailPersona3, newTelefonoPersona3);
showAgenda(agenda);
