import { Animal } from "../animal";

export class Repteis extends Animal {
   public nome :string = '';
   
    public fazerBarulho() : void{
        console.log('argh');
    }

    public getNome() : string{
        return this.nome;
    }

    public setNome(nome : string){
        this.nome = nome;
    }
}