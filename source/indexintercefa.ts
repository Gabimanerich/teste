// import { HardDisk } from "./harddisk";
// import { SSDDisk } from "./ssddisk";
// import { So } from "./so";

import { Carro } from "./Atividade/carro";
import { Manual } from "./Atividade/manual";
import { Direcao } from "./Atividade/direcao";
import { ZeroKm } from "./Atividade/0km";

// let drive = new HardDisk();
// let driveSddDisk = new SSDDisk();

// let so = new So(drive);
// let so01 = new So(driveSddDisk);

// so.writeDisc();
// so.readDisc();
// so.deleteDisc();

// so01.writeDisc();
// so01.readDisc();
// so01.deleteDisc();

///

let direcao = new Manual();
let rodado = new ZeroKm();
let carro = new Carro (direcao, rodado);


carro.imprimirCoisas();

