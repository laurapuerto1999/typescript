import { telefono } from './telefono';
import { Mail } from './mail';
import {direccion} from './direccion';

export class persona{
    showPersonaInfo(): any {
      return this.toString();
    }
    addMail(newMail: Mail) {
      this.agregarNuevoMail(newMail);
    }
    addtelefono(newtelefono: telefono) {
      this.agregarNuevoTelefono(newtelefono);
    }
    adddireccion(newdireccion: any) {
      this.agregarNuuevaDireccion(newdireccion);
    }
    private _nombre:string;
    private _apellidos:string;
    private _edad: number;
    private _dni: number;
    private _cumpleanos:Date;
    private _colorFavorito:string;
    private _sexo:string;
    private _direcciones:Array<direccion>;
    private _telefonos:Array<telefono>;
    private _mails:Array<Mail>;
    private _notas:string;
   

    constructor(nombre: string, apellidos: string, edad:number, dni: number, cumpleanos: Date, colorFavorito: string, genero: string, sexo:string, direcciones:Array<direccion>,mails: Array<Mail>, telefonos:Array<telefono>, notas:string  ){
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

     public getnombre(){
        return this._nombre;
    
     }

     public getapellidos(){
        return this._apellidos;
     }

     public getedad(){
        return this._edad;
     }

     public getdni(){
        return this._dni;
     }

     public getcumpleanos(){
        return  this._cumpleanos
     }

     public getcolorFavorito(){
        return this._colorFavorito;
     }

     public getsexo(){
        return this._sexo;
     }

     public getdirecciones(){
        return this._direcciones;
     }

     public gettelefonos(){
        return this._telefonos;
     }

     public getmails(){
        return this._mails;
     }

     public getnotas(){
        return this._notas;
     }  

     public setnombre(nombre:string){
        this._nombre = nombre;
     }

     public setapellidos (apellidos: string){
        this._apellidos = apellidos;
     }

     public setedad (edad:number){
        this._edad = edad;
     }

     public setdni (dni:number){
        this._dni = dni;
     }

     public setcumpleanos (cumpleanos:Date){
        this._cumpleanos  = cumpleanos;
     }

     public setcolorFavorito(colorFavorito:string){
        this._colorFavorito = colorFavorito;
     }

     public setsexo(sexo:string){
        this._sexo = sexo;
     }

    public setdirecciones(direcciones:Array<direccion>){
        this._direcciones = direcciones;
     }

     public settelefonos(telefonos:Array<telefono>){
        this._telefonos = telefonos;
     }

     public setmails (mails:Array<Mail>){
        this._mails = mails
     }

     public setnotas(notas:string){
        this._notas = notas;
     }
  

     agregarNuuevaDireccion(direccion:direccion){
      this._direcciones.push(direccion)
     }
   
     agregarNuevoTelefono(telefono:telefono){
      this._telefonos.push(telefono)
     }

     agregarNuevoMail(mail:Mail){
      this._mails.push(mail)
     }

     removerDireccionByIndex(index:number):void{
      if(index>=0 && index< this._direcciones.length){
         this._direcciones.splice(index,1);
      }
     }

     removerMailByIndex(index:number):void{
      if(index>=0 && index< this._mails.length){
         this._mails.splice(index,1);
      }
     }

     removerTelefonoByIndex(index:number):void{
      if(index>=0 && index< this._telefonos.length){
         this._telefonos.splice(index,1);
      }
     }

     removerNotaByIndex(index:number):void{
      if(index>=0 && index< this._notas.length){
         this._notas.slice(index,1);
      }
     }

     removerDireccion(direccion:direccion):void{
      const index= this._direcciones.indexOf(direccion);
      if (index!== -1){
         this._direcciones.splice(index,1);
      }
     }

     removerMail(mail:Mail):void{
      const index= this._mails.indexOf(mail);
      if (index!== -1){
         this._mails.splice(index,1);
      }
     }
     
     removerTelefono(telefono:telefono):void{
      const index= this._telefonos.indexOf(telefono);
      if (index!== -1){
         this._telefonos.splice(index,1);
      }
     }

     removerNota(Nota:string):void{
      const index= this._notas.indexOf(Nota);
      if (index!== -1){
         this._notas.slice(index,1);
      }
     }

     public toString():string{
      return'nombre:${this._nombre}, Apellido:${this._apellidos}, Edad: ${this._edad}, DNI: ${this._dni}, Cumpleaños: ${this._cumpleanos},color favorito: ${this._colorFavorito},Sexo:${this._genero}, Direcciones:${this._direccion}, Mails:${this._mail}, Telefonos:${this._teelefono}, Notas:${this._notas}';}


     }
    



