/** 
 * USO DE const y let
 * * Importatn information is highlighted
 * ! Deprecated method, do not use
 * ? Should this method be exposed in the public API?
 * TODO: Refator this method so that it confirms to then API
 * @param myParam The parameter for this method
 * */ 

/**
 * ! IMPORTANT NOTES
 * * If need to change the value we will use "let"
 * * In the case, dont change the value we will use "const"
 */

const name: string = 'Strider';
let hpPoints: number | 'FULL' = 95;
const isAlive: boolean = true;

hpPoints = 'FULL';

console.log(name,hpPoints,isAlive);

export {};