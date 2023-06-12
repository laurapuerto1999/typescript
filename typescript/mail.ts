export class Mail {
   private _tipo: string;
   private _direccion: string;
    static com: any;

   constructor(tipo: string, direccion: string){
    this._tipo = tipo;
    this._direccion = direccion;
  }

  public getdireccion(){
    return this._direccion;
  }

  
  public gettipo(){
    return this._tipo;
  }

  public setdireccion(direccion: string): void {
    this._direccion = this._direccion;
  }

  public settipo(tipo:string): void {
    this._tipo = tipo;
  }

  toString(): string{
    return 'Mail^[Tipo:${this._tipo},Direccion:${this._direccion}]';
  }
}

