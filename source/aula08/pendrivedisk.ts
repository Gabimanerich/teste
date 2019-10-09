import { Drive } from "./drive";

export class PendriveDisk implements Drive{
    constructor(){
        
    }

    public write() : void {
        console.log("Classe Pendrive método write");
    }

    public read() : void {
        console.log("Classe Pendrive método read");
    }

    public delete() : void{
        console.log("Classe Pendrive método delete");
    }
}