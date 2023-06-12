import {persona} from './persona';
import {direccion} from './direccion';
import {telefono} from './telefono';
import {Mail} from './mail';

function buildAgenda(): Array<persona>{
    let agenda:Array<persona> = [];

    const direccionPersona1: direccion = new direccion('calle', 21,2,'B',25000,'mostoles', 'Madrid');
    const persona1: persona = new persona('Maria','Reyes',18,200154475, new Date(21-10-2005),'Blanco','Mujer','Mujer', [direccionPersona1],[new Mail('mariareyes@Mail.com', 'mailpersona1')],[new telefono('persona1',655469921),],"Sin notas");

    const direccionPersona2: direccion = new direccion('calle', 33,4,'B',25900,'Aranjuez', 'Madrid');
    const persona2: persona = new persona('Roberto','Fernandez',30,200154471, new Date(12-12-1993),'Rojo','Hombre','Hombre', [direccionPersona2],[new Mail('RobertoFernandez@Mail.com', 'mailpersona2'),],[new telefono('persona2',671992321),],"Sin notas");

    const direccionPersona3: direccion = new direccion('calle', 2,1,'B',24000,'Torrejon De Ardoz', 'Madrid');
    const persona3: persona = new persona('Lucia','Gomez',23,355880144, new Date(22-11-1999),'Verde','Mujer','Mujer', [direccionPersona3],[new Mail('LuciaG@Mail.com', 'mailpersona3'),],[new telefono('persona3',655469921),],"Sin notas");

    agenda.push(persona1);
    agenda.push(persona2);
    agenda.push(persona3);
    return agenda;
}

function showAgenda(agenda:Array<persona>):void
{
    for(const persona of agenda){
        console.log(persona);
    }
}

function addNewPersonaData(
    dniNumber:string,
    newDireccion:direccion,
    newMail:Mail,
    newtelefono: telefono):void
    {
        for(const persona of agenda){
            if (persona.getdni().toString()===dniNumber){
                persona.adddireccion(newDireccion);
                persona.addMail(newMail);
                persona.addtelefono(newtelefono);
            }
            console.log("Contacto Añadido");
            console.log(persona);
        }
}

function changePersonaData(
        dniNumber:string,
        newdireccion:Array<direccion>,
        newMail:Array<Mail>,
        newtelefono:Array<telefono>):void
    {
        for(const persona of agenda){
            if (persona.getdni().toString() === dniNumber){
                console.log("Cambios a persona con dni: "+ persona.getdni().toString());
                persona.setdirecciones(newdireccion);
                persona.setmails(newMail);
                persona.settelefonos(newtelefono);
            }
        }
}

let agenda = buildAgenda();

const dniPersona2: string='055843312';
const newdireccionPersona2: direccion=new direccion('Avenida de la solanilla', 20,3,'B',25001,'Leganes','Madrid');
const newMailPersona2: Mail = new Mail('Persona2','Robertoff@gmail.com');
const newTelefonoPersona2: telefono= new telefono('persona2',688722101);

const dniPersona3: string='355880144';
const newdireccionPersona3: Array<direccion>=new Array<direccion>(new direccion('Avenida de la tolerancia', 5,1,'A',28505,'Fuenlabrada','Madrid'));
const newMailPersona3: Array<Mail> = new Array<Mail>(new Mail('Persona3','luuuciagg.com'));
const newTelefonoPersona3: Array<telefono> = new Array<telefono>(new telefono('persona3',666695541));


addNewPersonaData(dniPersona2,newdireccionPersona2,newMailPersona2,newTelefonoPersona2);

changePersonaData(dniPersona3,newdireccionPersona3,newMailPersona3,newTelefonoPersona3);

showAgenda(agenda);