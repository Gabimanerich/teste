import { Rodado } from "./rodado";

export class ZeroKm implements Rodado{
    constructor(){

    }
    public km() : void{
        console.log("Carro Zero Km");
    }
    
}