
export class Animal  {
    private nome : string = '';
    private especie: string = "";
    private quantidade: number = 0;

    public setEspecie(especie : string){
        this.especie = especie;
    }

    public getEspecie() : string{
        return this.especie;
    }

    public setquantidade(quantidade : number){
         this.quantidade = quantidade;
    }

    public getquantidade() : number{
        return this.quantidade;
    }
    

}