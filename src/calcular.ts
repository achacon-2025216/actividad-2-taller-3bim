/**
 * Calcula el subtotal a partir de una lista de precios.
 * @param precios - Arreglo de montos por producto.
 * @returns El subtotal acumulado.
 */

export const calcularSubtotal = (precios: number[]): number => {
    return precios.reduce((acc, curr) => acc + curr, 0);
};

/**
 * Calcula el IVA según el subtotal y una tasa impositiva.
 * @param subtotal - El monto base.
 * @param tasaIva - El porcentaje de IVA (ej. 0.16 para 16%).
 * @returns El valor calculado del IVA.
 */
export const calcularIva = (subtotal: number, tasaIva: number): number => {
    return subtotal * tasaIva;
};

/**
 * Calcula el total final de la compra.
 * @param subtotal - El monto base.
 * @param iva - El impuesto calculado.
 * @returns La suma de ambos.
 */
export const calcularTotal = (subtotal: number, iva: number): number => {
    return subtotal + iva;
};