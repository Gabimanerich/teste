import { Direcao } from "./direcao";

export class Manual implements Direcao{
    constructor(){

    }
    public tipo() : void {
        console.log("Direção do carro é manual");
    }
}