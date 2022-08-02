class Persona {
    
    static contadorPersona = 0;

    constructor (nombre, apellido, edad){
        this._idPersona= ++Persona.contadorPersona;
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



let perona1 = new Persona('Florencia', 'Moretto','31')
let persona2 = new Persona ('Jose','Alberto','66');

let empleado1 = new Empleado( 'Juan', 'Ponce', ' ','1', '25000' );
let empleado2 = new Empleado( 'Carlos', 'Gimenez', '24 ','2', '35000' );

console.log(empleado1);
