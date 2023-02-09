const months: string[] = ['Januay', 'February', 'March', 'April', 'May']

export const dateTransform = (date: string): string => {
  const transformedDate = new Date(date)

  const year = transformedDate.getFullYear()
  const month = transformedDate.getMonth()
  const day = transformedDate.getDay()

  return `${months[month]} ${day}, ${year}`
}
