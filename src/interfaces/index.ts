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
  articles: Array<News>
  status: string
  totalResults: number
}
