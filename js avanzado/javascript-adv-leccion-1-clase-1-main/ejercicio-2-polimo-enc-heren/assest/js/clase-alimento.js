class Alimento extends Producto{
    constructor(nombre,precio,caducidad){
        super(nombre,precio)
        this.caducidad=caducidad;
    }
}