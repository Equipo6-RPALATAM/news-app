/**
 * Esta funcion es para transformar la url para que en ves de caracteres de espacios
 * lo reemplacemos con guiones y cuando haya un guion cerca no reemplace los espacios
 * a su alrededor, al final se transforma la cadena a minusculas
 *
 * @param url Es un campo string que es la url
 * @returns Retorna la misma cadena de texto convertido
 */
export const urlTranform = (url: string): string => {
  // const regex = /(?<!-)\s(?!-)/g
  // const regex = /[^\w\s-](?<!-)\s(?!-)/g
  const regex = /[^\w\s]+/g
  return url
    .replace(/[^\w\s]+/g, '-')
    .replace(/(?!-)\s+(?!-)/g, '-')
    .toLowerCase()
}
