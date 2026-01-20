class Persona{  
    #vida;  
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    get nacimiento(){
        const actual = new Date().getFullYear();

        return actual-this.edad;
    }

    saludar(){
        return `Hola, soy ${this.nombre}`
    }

    static saludador(){
        return `Hola CLASE PERSONA `;
    }
}

Persona.prototype.despedirse= function(){
    return "Adios!!!"
}

const juan= new Persona('Juan',25);
const maria= new Persona('María',21);

juan.apellido= "Perez";

console.log(juan);
console.log(juan.nombre);
console.log(juan.saludar());
console.log(juan.despedirse());

console.log(juan.nacimiento);


console.log(maria);
console.log(maria.saludar());
console.log(maria.despedirse());

console.log(Persona.saludador());


class Conexion {
    static instancia = new Conexion();
    constructor() {
        this.numero=Math.random();
        return Conexion.instancia;
    }

}

obj1= Conexion.instancia;
obj2= Conexion.instancia;
obj3= Conexion.instancia;
//obj1= new Conexion();
//obj2= new Conexion();

console.log(obj1);
console.log(obj2);
console.log(obj3);
