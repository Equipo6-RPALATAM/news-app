/**
 * Es una función para transfromar una cadena en un objeto en formato de fechas
 * @param date Es un campo string para fechas
 * @returns Retorna un string
 */
export const dateTransform = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
  })
