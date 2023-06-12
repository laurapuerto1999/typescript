export class telefono{
   private _tipo:string;
   private _numero: number;
   
   constructor (tipo: string, numero:number){
    this._tipo = tipo;
    this._numero = numero;
   }

   public getnumero(){
    return this._numero;
   }

   public gettipo(){
    return this._tipo;
   }

   public setnumero(numero: number){
    this._numero = numero;
   }

   public settipo(tipo: string){
    this._tipo = tipo;
   }

   public toString():string{
      return 'Telefono[Tipo:&{this._tipo},Numero:${this._numero}]';

   }
}