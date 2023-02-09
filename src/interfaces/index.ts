export * from './News'
export interface New {
  author: string
  content: string
  description: string
  publishedAt: string
  title: string
  url: string
  urlToImage: string
  source: any
}

export interface NewsResult {
  articles: New[]
  status: string
  totalResults: number
}
