import { Motor } from "./motor";
import { Direcao } from "./direcao";
import { Rodado } from "./rodado";

export class Carro{
    private direcoes : Direcao;
    private kmrodado : Rodado;
  // private motores : Motor;

    constructor(direcoes : Direcao, kmrodado : Rodado){
        this.direcoes = direcoes;
        this.kmrodado = kmrodado;
    }

    public imprimirCoisas() : void {
        this.direcoes.tipo();
        this.kmrodado.km();
    }


}