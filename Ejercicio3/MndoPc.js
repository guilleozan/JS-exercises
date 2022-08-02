class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada= tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}
class Raton extends DispositivoEntrada{

    static contadorRatones =0;

    constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
         this._idRaton = ++Raton.contadorRatones;
        //  this._contadorRatones= contadorRatones;
        
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton:[${this._idRaton}, TipoEntrada:${this._tipoEntrada}, Marca:${this._marca}]`
    } 
}


class Teclado extends DispositivoEntrada{
     static contadorTeclado = 0;

     constructor(tipoEntrada,marca){
        super(tipoEntrada,marca);
        this._idTeclado= ++ Teclado.contadorTeclado;
     }

     get idTeclado(){
        return this._idTeclado;
     }
     toString(){
        return`Teclado[ IdTeclado: ${this._idTeclado}, TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}]`
     }
}


class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    set idMonitor(idMonitor){
        this._idMonitor = idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    toString(){
        return `Monitor:[ IdMonitor: ${this._idMonitor}, Marca : ${this._marca}, Tamaño: ${this._tamaño}]`
    }
}



class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre,monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre= nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    get idComputadora(){
        return this._idComputadora;
    }
    set idComputadora(idComputadora){
        this._idComputadora = idComputadora;
    }
   

    toString(){
        return`\n Computadora: ${this.idComputadora},\n Nombre: ${this._nombre},\n Monitor: ${this._monitor},\n Raton: ${this._raton}, \n Teclado: ${this._teclado} `
    }

}

class Orden {
    static contadorOrdenes = 0 ;
   
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }
    get idORden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden  = '';
        for (let computadora of this._computadoras){
            computadorasOrden += `${computadora}`
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }
}





let raton1 = new Raton('usb', 'HP');
console.log(raton1.toString());
let raton2 = new Raton('Inalambrico','Apple');
console.log(raton2.toString());


let teclado1 = new Teclado('Bluetooth', 'Genius');
console.log(teclado1.toString());
let teclado2 = new Teclado('usb','Logitech');
console.log(teclado1.toString());


let monitor1 = new Monitor('HP','24"')
console.log(monitor1.toString());
let monitor2 = new Monitor( 'DELL','17"');
console.log(monitor2.toString());



let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
let computadora2 = new Computadora (' ASUS', monitor2, raton2, teclado1);
console.log(computadora1.toString());
console.log ( `${computadora2}`);

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);

orden1.mostrarOrden();
