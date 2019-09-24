import { Cachoro } from "./cachoro";
import { Mamifero } from "./mamifero";
import { Gato } from "./gato";

let listaMamiferos : Array<Mamifero> = [];

let cachoro = new Cachoro();
cachoro.setNome("Pan");
cachoro.setTamanho("Grande");
listaMamiferos.push(cachoro);

cachoro = new Cachoro();
cachoro.setNome("Pepi");
cachoro.setTamanho("Grande");
listaMamiferos.push(cachoro);

cachoro = new Cachoro();
cachoro.setNome("Boris");
cachoro.setTamanho("Grande");
listaMamiferos.push(cachoro);

let gato = new Gato();
gato.setTamanho("Pequeno");
listaMamiferos.push(gato);

listaMamiferos.forEach((element : Mamifero) => {      
    element.fazerBarulho();
});

