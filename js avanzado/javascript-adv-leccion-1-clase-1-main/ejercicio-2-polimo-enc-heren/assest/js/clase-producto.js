class Producto{
    #precioBase;
    static IVA=0.19;

    constructor (nombre, precio){
        this.nombre=nombre;
        this.#precioBase = precio; 
    }

    get precio(){
        return this.#precioBase;
    }

    calcularTotal(){
        return this.#precioBase *(1 + Producto.IVA)
    }
}