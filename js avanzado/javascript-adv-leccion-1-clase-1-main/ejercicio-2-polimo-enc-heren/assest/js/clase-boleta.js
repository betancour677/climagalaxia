class Boleta{
    #items
    
    constructor(){
        this.#items=[];
        this.ancho=50;
    }

    agregarProducto(producto){
        this.#items.push(producto);
    }

    #linea(char = '─') {
        return char.repeat(this.ancho);
    }

    #centrar(texto) {
        const espacio = this.ancho - 2; // -2 por los bordes
        const paddingIzq = Math.floor((espacio - texto.length) / 2);
        return "│" + " ".repeat(paddingIzq) + texto + " ".repeat(espacio - paddingIzq - texto.length) + "│";
    }

    #fila(izq, der) {
        const espacio = this.ancho - 4; // -4 por bordes y espacios internos
        const textoIzq = izq.toString().padEnd(espacio - der.length, "."); // Relleno con puntos
        return `│ ${textoIzq}${der} │`;
    }

    imprimir(){
        let totalPagar = 0;
        //CABECERA
        console.log(`┌${this.#linea('─')}┐`);
        console.log(this.#centrar("La Ponderosa SPA "));
        console.log(this.#centrar("RUT 12.345.678-9 "));
        console.log(`├${this.#linea('─')}┤`);
        console.log(this.#fila("PRODUCTO", "TOTAL"));
        console.log(`├${this.#linea('─')}┤`);

        for (const prod of this.#items) {
            const precioFinal = prod.calcularTotal();
            totalPagar += precioFinal;
            console.log(this.#fila(prod.nombre+" ",precioFinal.toString()));
        }

        //PIE DE PÁGINA
        console.log(`├${this.#linea('─')}┤`);
        console.log(this.#fila("TOTAL A PAGAR ",totalPagar.toString()));
        console.log(`└${this.#linea('─')}┘`);
        console.log("       (Copia Cliente)");


    }
}