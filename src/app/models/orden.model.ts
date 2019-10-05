export class OrdenModelo{
    id:number;
    cliente:number;
    producto:Array<{id:number,cantidad:number, precio:number}>;
}