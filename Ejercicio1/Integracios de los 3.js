class Persona {
    
    static contadorPersona = 0;

    constructor (nombre, apellido, edad){
        this._idPersona=  ++Persona.contadorPersona;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        Persona.contadorPersona++;
    }
    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
      }
    set nombre(nombre){
        this._nombre= nombre;

    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido= apellido;

    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad= edad;
    }

    toString(){
        return `${this._idPersona} 
                ${this._nombre} 
                ${this._apellido}
                ${this._edad}`;
             }
}

class Empleado extends Persona{

    static contadorEmpleado= 0;

    constructor (nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad, sueldo);
        this._idEmpleado = ++ Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    
    toString(){
        return `${super.toString()} 
                ${this._idEmpleado} 
                ${this._sueldo}`;
    }
}

class Cliente extends Persona{

    static contadorCliente = 0;

    constructor(nombre, apellido, edad,fechaRegistro){
        super(nombre, apellido, edad, fechaRegistro);
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }
    
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro){
        this._fechaRegistro= fechaRegistro;
    }

    toString (){
        return `${super.toString()} 
                ${this._idCliente} 
                ${this._fechaRegistro}`;
    }
}

let perona1 = new Persona('Florencia', 'Moretto','31');
console.log(perona1.toString())
let persona2 = new Persona ('Jose','Alberto','66');
console.log(persona2.toString());
let persona3 = new Persona('Guillermo','Ozan','30');
console.log(persona3.toString());

let empleado1 = new Empleado( 'jose', 'Alberto','33', '50000'  );
console.log(empleado1.toString());
let empleado2 = new Empleado( 'Carlos', 'Gimenez', '24 ', '35000' );
console.log(empleado2.toString());

let cliente1= new Cliente('PAblo', 'Ozan','55', new Date());
console.log(cliente1.toString());
let cliente2= new Cliente('Pilar','Belbey','55',new Date(17/09/2020));
console.log(cliente2.toString());
