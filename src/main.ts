import { calcularSubtotal, calcularIva, calcularTotal } from './calcular.js';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

async function iniciarCompra() {
    console.log("--- Calculadora de IVA ---");

    const respuesta = await rl.question("Ingresa los precios de los productos separados por coma (ej: 100,50,25): ");

    const precios = respuesta.split(',').map(p => parseFloat(p.trim()));

    const tasaRespuesta = await rl.question("Ingresa el IVA (ej: 0.12 para 12%): ");
    const tasaIva = parseFloat(tasaRespuesta);

    const subtotal = calcularSubtotal(precios);
    const iva = calcularIva(subtotal, tasaIva);
    const total = calcularTotal(subtotal, iva);

    console.log("\n--- Reporte de Venta ---");
    console.log(`Subtotal: ${subtotal.toFixed(2)}`);
    console.log(`IVA: ${iva.toFixed(2)}`);
    console.log(`Total: ${total.toFixed(2)}`);

    rl.close();
}

iniciarCompra();