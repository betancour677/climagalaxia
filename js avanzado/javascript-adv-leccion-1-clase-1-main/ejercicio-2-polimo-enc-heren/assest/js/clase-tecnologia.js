class Tecnologia extends Producto{

    static IMPUESTO_TECNOLOGIA=0.05;
    constructor(nombre,precio,capacidad){
        super(nombre,precio)
        this.capacidad=capacidad;
    }

    calcularTotal(){
        const ivaProd= super.precio * Producto.IVA;
        const ImpProd= super.precio * Tecnologia.IMPUESTO_TECNOLOGIA;
        return super.precio+ivaProd+ImpProd;
    }
} 