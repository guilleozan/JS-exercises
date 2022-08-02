class Producto {
    static contadorProducto = 0;

    constructor (nombre,precio){
        this._idProducto =++ Producto.contadorProducto;
        this._nombre =  nombre;
        this._precio = precio;
    }
    
    get idProducto(){
        return this._idProducto;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre= nombre;
    }
    get precio(){
        return this._precio;
    }
    
    set precio(precio){
       return this._precio = precio;
    }
    toString(){
        return ` idProducto: ${this._idProducto}, Nombre: ${this._nombre} ,Precio: $${this._precio}`;
    }
}

class orden{

    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 10;
    }
    constructor(){
        this._idOrden = ++orden.contadorOrdenes;
        this._productos = [ ];
        // this._contadorProductosAgregados= 0;

    }

    get idOrden(){
        return this._idOrden;
    }
    
    agregarProducto (producto){
        if (this._productos.length <orden.MAX_PRODUCTOS){
             this._productos.push(producto);
            //  this._productos[this._contadorProductosAgregados++]= producto;

        } else{
            console.log(' No se pueden agregar mas productos');
        } 
    }
    calcularTotal(){
        let totalVenta = 0;
        for( let producto of this._productos){
            totalVenta  += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = ' ';
            for ( let producto of this._productos){
            productosOrden += '\n{' + producto.toString() + '}';
            }
        // console.log( `Orden:${this._idOrden} Total: $ ${this.calcularTotal()} Productos: ${productosOrden}`);
    }             

}






let producto1 = new Producto('Papel',10);
 console.log(producto1.toString());

let producto2 = new Producto('Lapicera',5);
 console.log(producto2.toString());

let orden1= new orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

let orden2 = new orden();
let producto3 = new Producto('Cinturon', 9);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);



orden2.mostrarOrden();
orden1.mostrarOrden();

let pantalon = new Producto ('jean',500);
let remera= new Producto('Chomba',700);
let reloj= new Producto('Analogico',3000);


let orden3 = new orden;
orden3.agregarProducto(pantalon);
orden3.agregarProducto(remera);
orden3.agregarProducto(reloj);
orden3.agregarProducto(remera);

orden3.mostrarOrden();