import { Drive } from "./drive";

export class SSDDisk implements Drive{
    constructor(){
        
    }

    public write() : void {
        console.log("Classe SSDDisk método write");
    }

    public read() : void {
        console.log("Classe SSDDisk método read");
    }

    public delete() : void{
        console.log("Classe SSDDisk método delete");
    }
}