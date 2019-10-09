import { Direcao } from "./direcao";

export class Hidualica implements Direcao{
    constructor(){

    }
    public tipo() : void {
        console.log("Direção do carro é hidraulica");
    }
}