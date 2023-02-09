// const months: string[] = ['Januay', 'February', 'March', 'April', 'May']

export const dateTransform = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', {
    dateStyle: 'long',
    timeZone: 'UTC',
  })

// const year = transformedDate.getFullYear()
// const month = transformedDate.getMonth()
// const day = transformedDate.getDay()

// return `${months[month]} ${day}, ${year}`
