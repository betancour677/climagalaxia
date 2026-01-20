const boleta= new Boleta();

const pendrive= new Tecnologia("Pendrive",15000,"16GB");
const pan= new Alimento("Bolsa Pan 1K",1500,"01-09-2026");
const mouse= new Tecnologia("Mouse Inalámbrico",25000,"2.4GHz");
const teclado= new Tecnologia("Teclado Mecánico",45000,"RGB");
const monitor= new Tecnologia("Monitor 24 pulgadas",120000,"1080p");

boleta.agregarProducto(pendrive);
boleta.agregarProducto(pan);
boleta.agregarProducto(mouse);
boleta.agregarProducto(teclado);
boleta.agregarProducto(monitor);

boleta.imprimir();






