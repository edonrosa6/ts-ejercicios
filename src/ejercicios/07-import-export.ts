/*
    ===== Código de TypeScript =====
*/

import { Producto, calculaISV } from "./06-desestructuracion-funcion";

const carritoCompras: Producto[] = [
    {
        desc: 'Teléfono 1',
        precio: 100
    },
    {
        desc: 'Teléfono 2',
        precio: 150
    }
];

const [total, isv] = calculaISV( carritoCompras );

console.log('El total es: ', total);
console.log('EL ISV es: ', isv);