export * from './News'
export interface News {
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
  articles: News[]
  status: string
  totalResults: number
}
